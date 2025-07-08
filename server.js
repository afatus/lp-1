import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { google } from 'googleapis';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { fullName, email, phone, companyName, employeeCount } = req.body;

    // Basic validation
    if (!fullName || !email || !phone || !companyName || !employeeCount) {
      return res.status(400).json({ 
        message: 'All fields are required',
        success: false 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        message: 'Invalid email format',
        success: false 
      });
    }

    // Google Sheets configuration
    const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;
    const SHEET_NAME = process.env.GOOGLE_SHEET_NAME || 'Form Submissions';
    
    // Service account credentials from environment variables
    const credentials = {
      type: 'service_account',
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
      auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_uri: 'https://oauth2.googleapis.com/token',
      auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.GOOGLE_CLIENT_EMAIL}`
    };

    // Check if Google Sheets is configured
    if (!SPREADSHEET_ID || !credentials.private_key || !credentials.client_email) {
      console.log('Google Sheets not configured, storing locally');
      
      // Fallback: Log the data
      const submissionData = {
        fullName,
        email,
        phone,
        companyName,
        employeeCount,
        timestamp: new Date().toISOString(),
        id: Date.now().toString()
      };
      
      console.log('=== NEW FORM SUBMISSION ===');
      console.log(JSON.stringify(submissionData, null, 2));
      console.log('=== END SUBMISSION ===');
      
      return res.status(200).json({ 
        message: 'Form submitted successfully (logged)',
        success: true,
        data: submissionData
      });
    }

    // Initialize Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Prepare the data row
    const timestamp = new Date().toLocaleString('tr-TR', {
      timeZone: 'Europe/Istanbul',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    const values = [
      [timestamp, fullName, email, phone, companyName, employeeCount]
    ];

    // Try to append data to the sheet
    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!A:F`,
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        resource: {
          values: values,
        },
      });

      console.log('Successfully added data to Google Sheets');
      
    } catch (sheetsError) {
      console.error('Google Sheets API Error:', sheetsError);
      
      // If sheets fails, still log the data
      const submissionData = {
        fullName,
        email,
        phone,
        companyName,
        employeeCount,
        timestamp,
        id: Date.now().toString()
      };
      
      console.log('=== FALLBACK: NEW FORM SUBMISSION ===');
      console.log(JSON.stringify(submissionData, null, 2));
      console.log('=== END SUBMISSION ===');
    }

    return res.status(200).json({ 
      message: 'Form submitted successfully',
      success: true 
    });

  } catch (error) {
    console.error('Error processing form submission:', error);
    
    // Even on error, try to log the submission data
    try {
      const { fullName, email, phone, companyName, employeeCount } = req.body;
      const submissionData = {
        fullName,
        email,
        phone,
        companyName,
        employeeCount,
        timestamp: new Date().toISOString(),
        error: error.message
      };
      
      console.log('=== ERROR FALLBACK: FORM SUBMISSION ===');
      console.log(JSON.stringify(submissionData, null, 2));
      console.log('=== END ERROR SUBMISSION ===');
    } catch (logError) {
      console.error('Could not log submission data:', logError);
    }
    
    return res.status(500).json({ 
      message: 'Internal server error',
      success: false 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Environment variables loaded:');
  console.log('- GOOGLE_SPREADSHEET_ID:', process.env.GOOGLE_SPREADSHEET_ID ? 'Set' : 'Not set');
  console.log('- GOOGLE_CLIENT_EMAIL:', process.env.GOOGLE_CLIENT_EMAIL ? 'Set' : 'Not set');
  console.log('- GOOGLE_PRIVATE_KEY:', process.env.GOOGLE_PRIVATE_KEY ? 'Set' : 'Not set');
});