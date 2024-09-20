import React, { useEffect, useState } from 'react';
import './Navbar.css'; 
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Navbar = () => {
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



  // Data for the custom cards
const customCardData = [
    {
      title: 'Fast Growing Company',
      text: 'We’re at the inflection point\n to achieve accelerated growth.',
    },
    {
      title: 'Great Colleague',
      text: 'A closely-knit team that values\n support and collaboration.',
    },
    {
      title: 'Don’t Stop Learning',
      text: 'An environment that encourages\ncontinuous learning.',
    },
    {
      title: 'Free Snacks of Your Choice',
      text: 'We know you\'re a foodie at heart,\nwhich is why we offer free snacks.',
    },
    {
      title: 'Work-Life Balance',
      text: 'We truly value work but always \nprioritize life above all else',
    },
    {
      title: 'Cross Domain Exposure',
      text: 'A highly passionate team of\ntechnology and business experts.',
    },
  ];

  

  const Card = ({ imgSrc, name, title, description }) => (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={imgSrc} alt={`Card Image for ${name}`} />
        </div>
        <div className="card-back">
          <p className="pt-4" style={{ fontSize: '13px' }}>
            {description}
          </p>
        </div>
      </div>
      <div className="card-text" style={{ fontWeight: 'bold' }}>
        {name}
      </div>
      <div className="card-bottom-text">{title}</div>
    </div>
  );

  return (
<>
      <nav id="navbar" className={`navbar navbar-expand-lg navbar-light fixed-top ${scrolled ? 'scrolled' : ''}`}>
        <a className="navbar-brand">
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

      {/* Hero section */}
      <div className="container-fluid" style={{ marginBottom: '20px', marginTop: '250px' }}>
        <div className="row no-gap">
          <div className="col d-flex justify-content-center align-items-center pl-5">
            <p className="text11">
              Do you have the zeal to contribute to the real world?
            </p>
          </div>
        </div>

        <div className="row no-gap">
          <div className="col text2 d-flex justify-content-center align-items-center pl-5">
            <p>
              We are transforming businesses and consumer experience every day
              with technology.
            </p>
          </div>
        </div>
      </div>

      {/* Image section -1  */}
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-12">
            <img src="image_1_career.png" alt="Responsive Image" className="img-fluid" />
          </div>
        </div>
      </div>


     <div>
     </div>



     <div>
      {/* Main Custom Card */}
      <div
  className="custom-card text-center"
  style={{
    border: 'none',
    height: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  }}
>
  <div
    className="custom-card-body"
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50%',
    }}
  >
    <h5
      className="custom-card-title"
      style={{
        fontFamily: "'Red Hat Display', sans-serif",
        fontWeight: 'bold',
        fontSize: '50px', // Adjusted font size
        textAlign: 'center',
        margin: '0',
        padding: '0',
        transition: 'font-size 0.3s ease',
      }}
    >
      WHY JOIN
      <br />
      US?
    </h5>
    <p
      className="custom-card-text text-dark"
      style={{
        display: 'inline-block',
        transform: 'rotate(-10deg)',
        padding: '5px',
        backgroundColor: 'rgb(171, 247, 247)',
        borderRadius: '50px',
        fontFamily: "'Lato', sans-serif",
        fontSize: '15px', // Adjusted font size
        transition: 'font-size 0.3s ease',
        margin: '0',
      }}
    >
      P.s. we have many
    </p>
  </div>
</div>
<div className="row no-gutters row-cols-1 row-cols-md-2 row-cols-lg-3 g-0 px-5 px-md-5" style={{ marginTop: '0px' }}>
  {customCardData.map((card, index) => (
    <div className="col" key={index}>
      <div
        className="custom-card"
        style={{
          border: 'none',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div
          className="custom-card-body"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <h5
            className="custom-card-title"
            style={{
              fontFamily: "'Red Hat Display', sans-serif",
              fontWeight: 'bold',
              fontSize: '24px',
              textAlign: 'center',
              margin: '0',
              padding: '0',
              transition: 'font-size 0.3s ease',
            }}
          >
            {card.title}
          </h5>
          <p
            className="custom-card-text"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '16px',
              textAlign: 'center',
              whiteSpace: 'pre-line',
              transition: 'font-size 0.3s ease',
              marginTop: '30px',
              padding: '0',
            }}
          >
            {card.text}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

</div>


    {/* Image section-2 */}
    <div style={{ padding: 0 }}>
      <div style={{ margin: 0 }}>
        <img
          src="image_2_career.png"
          alt="Responsive Image"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>
    </div>
   
{/* Join us section */}
    <div style={{ margin: '3rem 0', paddingBottom: '3rem' }}>
      {/* First Row */}
      <div
        style={{
          marginLeft: 0,
          marginTop: '20px',
          textAlign: 'center',
        }}
      >
        <h1>WANT TO JOIN US?</h1>
      </div>

      {/* Second Row */}
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <p>
          Drop your resume capturing what kind of role you are applying for.
        </p>
      </div>

      {/* Third Row */}
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <button
          style={{
            borderRadius: '50px',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#000000', 
            color: '#fff',
            border: 'none',
            fontSize: '1.125rem',
            cursor: 'pointer',
          }}
          onClick={() => window.location.href = 'mailto:career@ekak.in'}
        >
          career@ekak.in
        </button>
      </div>
    </div>

    

    <Footer/>
    </>
  
  );
};

export default Navbar;
