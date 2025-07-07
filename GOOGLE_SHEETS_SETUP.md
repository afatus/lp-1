# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration for your contact form.

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Create Project" or select an existing project
3. Give your project a name (e.g., "Contact Form Sheets")
4. Note down your Project ID

## Step 2: Enable Google Sheets API

1. In your Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Google Sheets API"
3. Click on it and press "Enable"

## Step 3: Create a Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Give it a name (e.g., "sheets-integration")
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"

## Step 4: Generate Service Account Key

1. In the "Credentials" page, find your service account
2. Click on the service account email
3. Go to the "Keys" tab
4. Click "Add Key" > "Create New Key"
5. Choose "JSON" format
6. Download the JSON file

## Step 5: Extract Information from JSON

Open the downloaded JSON file and extract these values:
- `project_id`
- `private_key_id`
- `private_key`
- `client_email`
- `client_id`

## Step 6: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it (e.g., "Contact Form Submissions")
4. Add headers in the first row:
   - A1: "Timestamp"
   - B1: "Full Name"
   - C1: "Email"
   - D1: "Phone"
   - E1: "Company Name"
   - F1: "Employee Count"
5. Copy the Spreadsheet ID from the URL (the long string between `/d/` and `/edit`)

## Step 7: Share the Sheet with Service Account

1. In your Google Sheet, click "Share"
2. Add the service account email (from the JSON file, `client_email` field)
3. Give it "Editor" permissions
4. Click "Send"

## Step 8: Set Environment Variables

Create a `.env` file in your project root with these values:

```env
GOOGLE_SPREADSHEET_ID=1UQEBzwJqYpaz5zfrGy2NhBXUe2lXzmcP0QUybrkuoYk
GOOGLE_SHEET_NAME=LP-1
GOOGLE_PROJECT_ID=your_project_id_from_json
GOOGLE_PRIVATE_KEY_ID=your_private_key_id_from_json
GOOGLE_PRIVATE_KEY="your_private_key_from_json_with_newlines"
GOOGLE_CLIENT_EMAIL=your_service_account_email_from_json
GOOGLE_CLIENT_ID=your_client_id_from_json
```

**Important Notes:**
- The `GOOGLE_PRIVATE_KEY` should include the full key with `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`
- Make sure to preserve the newlines in the private key
- Never commit your `.env` file to version control

## Step 9: Test the Integration

1. Deploy your application
2. Fill out the contact form
3. Check your Google Sheet - new submissions should appear automatically

## Fallback Behavior

If Google Sheets integration is not configured or fails:
- Form submissions will be logged to the console
- You can access these logs in your deployment platform's log viewer
- The form will still show success messages to users

## Troubleshooting

### Common Issues:

1. **"Insufficient Permission" Error**
   - Make sure you shared the sheet with the service account email
   - Verify the service account has "Editor" permissions

2. **"Invalid Credentials" Error**
   - Check that all environment variables are set correctly
   - Verify the private key format (should include BEGIN/END markers)

3. **"Spreadsheet Not Found" Error**
   - Verify the Spreadsheet ID is correct
   - Make sure the sheet is shared with the service account

4. **"Sheet Not Found" Error**
   - Check the `GOOGLE_SHEET_NAME` environment variable
   - Make sure the sheet tab name matches exactly

### Getting Help:

If you encounter issues:
1. Check the deployment logs for detailed error messages
2. Verify all environment variables are set correctly
3. Test the Google Sheets API access using Google's API Explorer