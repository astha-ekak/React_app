import React, { useEffect, useState } from 'react';
import './Navbar.css'; 
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com'; 
import Footer from './Footer';

const Contact = () => {
  const isSmallScreen = window.innerWidth <= 767.98;

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



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

    // Construct the email template parameters to match the template you defined in EmailJS
    const templateParams = {
      name: formData.name,
      email: formData.email,
      type: formData.type,
      companyName: formData.companyName || 'N/A', 
      purpose: formData.purpose,
      help: formData.help
    };

    // Sending email using EmailJS
    emailjs.send('service_8347pai', 'template_e9l841p', templateParams, 'I2kdCeufXQnIz39__')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitted(true); // Form submitted successfully
        alert('Your form has been submitted!');
      }, (err) => {
        console.log('FAILED...', err);
        alert('There was an issue with submitting the form. Please try again.');
      });
    
 
  };




  const styles = {
    container: {
      marginTop: '150px',
      padding: '20px',
    },
    cylindricalImage: {
      maxWidth: '500px',
      objectFit: 'cover',
      height: 'auto',
      borderRadius: '120px',
    },
    textLarge: {
      fontSize: '82px',
      fontFamily: '"Poppins", sans-serif',
      whiteSpace: 'nowrap',
    },
    textExtraLarge: {
      fontSize: '80px',
      fontFamily: '"Poppins", sans-serif',
      whiteSpace: 'nowrap',
      marginLeft: '50px',
      textAlign: 'center',
    },
    highlight: {
      backgroundColor: '#3fccb0',
      color: 'white',
      borderRadius: '3px',
    },
    smallScreenContainer: {
      padding: '0',
    },
    smallScreenCylindricalImage: {
      maxWidth: '100%',
      margin: '0 auto',
      display: 'block',
    },
    smallScreenTextLarge: {
      fontSize: '40px',
      textAlign: 'center',
      margin: '0 auto',
    },
    smallScreenTextExtraLarge: {
      fontSize: '40px',
      textAlign: 'center',
      marginLeft: '0',
    },
  };
  

  return (
<>
    <nav id="navbar" className={`navbar navbar-expand-lg navbar-light fixed-top ${scrolled ? 'scrolled' : ''}`}>
    <a className="navbar-brand" >
      <img
        id="navbar-logo"
        src={scrolled ? "Ekak logo mark (white logo with blue inner circle).png" : "Ekak logo mark without colour version.png"}
        width="100px"
        className="d-inline-block align-top"
        alt=""
      />
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto pl-5 ml-5">
        <li className="nav-item">
          <a className="nav-link" href="/home">Home</a>
        </li>
        <li className="nav-item">
      <Link to="/about" className="nav-link">About</Link>
    </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Resources
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a target="_blank" className="dropdown-item" href="https://medium.com/@EkakInn" rel="noopener noreferrer" onClick={() => window.open("https://medium.com/@EkakInn", '_blank')}>Blogs</a>
          </div>
        </li>
        <li className="nav-item">
      <Link to="/teams" className="nav-link">Team</Link>
    </li>
        <li className="nav-item">
          <a className="nav-link" href="/career">Career</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
      
    </div>
  </nav>





  <div
      style={{ ...styles.container, ...(isSmallScreen ? styles.smallScreenContainer : {}) }}
    >
      <div>
        {/* First Row */}
        <div style={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src="Ekak website- contact us (1).png"
            alt="Cylindrical Image"
            style={{ ...styles.cylindricalImage, ...(isSmallScreen ? styles.smallScreenCylindricalImage : {}) }}
          />
          <div style={{ ...styles.textLarge, ...(isSmallScreen ? styles.smallScreenTextLarge : {}) }}>
            <p style={{ margin: 0 }}>Innovate</p>
          </div>
        </div>

        {/* Second Row */}
        <div style={{ textAlign: isSmallScreen ? 'center' : 'left' }}>
          <p style={{ ...styles.textExtraLarge, ...(isSmallScreen ? styles.smallScreenTextExtraLarge : {}) }}>
            <span style={styles.highlight}>Smarter with</span> us
          </p>
        </div>
      </div>
    </div>









  <div
  className="container"
  style={{
    marginTop: '100px', // Adjust this value if needed
  }}
>
  <div
    className="row"
    style={{
      display: 'flex',
    }}
  >
    <div
      className="col-md-6"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <div>
    
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

          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>

        {submitted && <p className="text-success mt-3">Your form has been submitted successfully!</p>}
      </div>
    </div>
    <div
      className="col-md-6 d-none d-md-block"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: 'transparent', // Optional: set a background color
      }}
    >
      <img
        src="Contact_US.jpg"
        alt="Description"
        style={{
          maxWidth: '100%',
          height: '500px',
          objectFit: 'cover', // Ensure the image covers the column
        }}
      />
    </div>
  </div>
</div>





<Footer/>

    </>
  );
};

export default Contact;
