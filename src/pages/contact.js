import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';  // Import EmailJS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '',
    companyName: '',
    purpose: '',
    help: ''
  });
  
  const [submitted, setSubmitted] = useState(false); // State to track if form is submitted

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sending email using EmailJS
    emailjs.send('service_8347pai', 'template_e9l841p', formData, 'I2kdCeufXQnIz39__')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitted(true); // Form submitted successfully
        alert('Your form has been submitted!');
      }, (err) => {
        console.log('FAILED...', err);
      });
    
    // Optionally clear the form after submission
    setFormData({
      name: '',
      email: '',
      type: '',
      companyName: '',
      purpose: '',
      help: ''
    });
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Enter your name" 
            required 
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Enter your email" 
            required 
          />
        </Form.Group>

        <Form.Group controlId="formType">
          <Form.Label>Are you an Individual or Company?</Form.Label>
          <Form.Control 
            as="select" 
            name="type" 
            value={formData.type} 
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="individual">Individual</option>
            <option value="company">Company</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formCompanyName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control 
            type="text" 
            name="companyName" 
            value={formData.companyName} 
            onChange={handleChange} 
            placeholder="Enter your company name" 
          />
        </Form.Group>

        <Form.Group controlId="formPurpose">
          <Form.Label>Purpose</Form.Label>
          <Form.Control 
            type="text" 
            name="purpose" 
            value={formData.purpose} 
            onChange={handleChange} 
            placeholder="Enter the purpose" 
            required 
          />
        </Form.Group>

        <Form.Group controlId="formHelp">
          <Form.Label>How Can We Help You?</Form.Label>
          <Form.Control 
            as="textarea" 
            name="help" 
            value={formData.help} 
            onChange={handleChange} 
            rows={3} 
            placeholder="Describe how we can help you" 
            required 
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {submitted && <p className="text-success mt-3">Your form has been submitted successfully!</p>}
    </div>
  );
};

export default Contact;
