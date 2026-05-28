// pages/api/register.js
// This is an example API endpoint for handling registrations
// You can connect this to your backend (Laravel) API

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const formData = req.body;

      // Validate required fields
      if (
        !formData.studentFirstName ||
        !formData.studentLastName ||
        !formData.parentEmail ||
        !formData.parentPhone
      ) {
        return res.status(400).json({
          message: 'Missing required fields',
        });
      }

      // TODO: Send to Laravel backend or database
      // Example:
      // const response = await fetch('https://your-api.com/api/registrations', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // For now, just log and return success
      console.log('Registration received:', formData);

      res.status(200).json({
        success: true,
        message: 'Registration received successfully',
        data: formData,
      });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({
        success: false,
        message: 'An error occurred while processing your registration',
      });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
