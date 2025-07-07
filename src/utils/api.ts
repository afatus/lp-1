interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  employeeCount: string;
}

export const submitContactForm = async (formData: ContactFormData) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
};