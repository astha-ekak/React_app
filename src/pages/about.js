import React, { useEffect, useState } from 'react';
import './Navbar.css'; 
import { Link } from 'react-router-dom';
import Footer from './Footer';
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


  const imageData1 = [
    {
      src: 'New Updated History Image 1 (AboutUs).png',
      alt: 'Image 1',
      tooltip: 'May 2019 Mleko Dairy, Unnao Started Atta Chaki Kit',
    },
    {
      src: 'New Updated History Image 2 (AboutUs).png',
      alt: 'Image 2',
      tooltip:
        'September 2018 Sagar Energy Solutions partners for production/prototyping of SABI lamps',
    },
    {
      src: 'New Updated History Image 3 (AboutUs).png',
      alt: 'Image 3',
      tooltip: 'March 2022 The first pilot of Argus with Ounce',
    },
    {
      src: 'New Updated History Image 4 (AboutUs).png',
      alt: 'Image 4',
      tooltip: 'November 2022 Ganecos onboarded as Argus pilot partner',
    },
    {
      src: 'New Updated History Image 5 (AboutUs).png',
      alt: 'Image 5',
      tooltip: 'April 2021 Dave Prototyping began',
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
     <nav
  id="navbar"
  className={`navbar navbar-expand-lg navbar-light fixed-top ${scrolled ? 'scrolled' : ''}`}
  style={{
    backgroundColor: scrolled ? '#158d91' : 'white',
    transition: 'background-color 0.3s ease' // Optional for smooth transition
  }}
>
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
      <div className="hero-container"  style={{
        backgroundImage: `url(${'about-hero-image-19.jpg'})`,}}>
      <div className="hero-overlay-text">
       <span className="highlighted-text"> WE ARE MORE THAN JUST A FIRM</span>
      </div>
    </div>

        {/* Founder section */}
   

        <div className="container-fluid pt-5">
  <div className="row equal-height-columns pt-5 mt-5">
    {/* First Column */}
    <div className="col-md-8 col-sm-12 column-content ml-4" style={{ border: 'none', textAlign: 'left' }}>
      {/* Two rows of text */}
      <div className="column-text">
        <h2 className="responsive-heading">We innovate for better lives.</h2>
      </div>
      <div className="column-text pt-4">
        <p className="sub-heading responsive-subheading">Founded by Mr. Shashank Misra, Ekak was born out of the<br /> thirst for a challenge and a vision for environmentally<br />   and socially sustainable business.</p>
      </div>
    </div>

    {/* Second Column */}
    <div className="col-md-4 col-sm-12 column-content right-aligned" style={{ border: 'none', textAlign: 'left' }}>
      {/* Four rows (one for image, three for text) */}
      <div className="image-container pr-5 mr-3">
        <img src="Ekak Definition.png" alt="Ekak Definition" style={{ width: '25rem',marginLeft:'20px' }} />
      </div>
      <div className="column-text1 pr-5 mr-5">
        <p style={{ fontSize: '2rem', fontWeight: 500, margin: 0 }}>May</p>
      </div>
      <div className="column-text1 pr-5 mr-5">
        <p style={{ fontSize: '5rem', fontWeight: 600, margin: 0 }}>2018</p>
      </div>
      <div className="column-text1 pr-5 mr-5">
        <p style={{ fontSize: '1rem', margin: 0, fontStyle: 'italic' }}>Ekak was born.</p>
      </div>
    </div>
  </div>

  <style jsx>{`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

    * {
      font-family: 'Poppins', sans-serif;
    }
    
    @media (max-width: 576px) {
      .column-content {
        text-align: center; // Center text on smaller screens
      }
         .column-text1 {
        text-align: center; // Center text in column-text for smaller screens
      }
      
      .responsive-heading {
        font-size: 1.5rem; // Increase font size for h2
        font-weight:700px;
      }
      .responsive-subheading {
        font-size: 1rem; // Increase font size for sub-heading
        font-weight:100px;
      }
      .image-container {
        margin: 0 auto; // Center image container
      }
    }
  `}</style>
</div>





{/* Mission and vision section */}
<div className="row" style={{ backgroundImage: "url('\Ekak website- Homepage Images hero.png')", backgroundSize: 'cover' }}>
      <div className="col-md-4 text-column pl-md-5 text-center text-md-left d-flex justify-content-center align-items-center" style={{ fontFamily: '"Poppins", sans-serif', color: '#f0f0f0' }}>
      <p>Mission<br /><br />Improve the life of each customer throughsustainable interventions</p>
      </div>

      <div className="col-md-4 d-flex justify-content-center align-items-center">
        <div className="cylindrical-card" style={{ borderRadius: '120px', overflow: 'hidden', position: 'relative', background: 'transparent' }}>
          <img src="Ekak Website About Us (hover page) (1).png" className="hover-image" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} alt="Hover Effect" />
        </div>
      </div>

      <div className="col-md-4 text-column pr-md-5 text-center text-md-right d-flex justify-content-center align-items-center" style={{ fontFamily: '"Poppins", sans-serif', color: '#f0f0f0' }}>
         <p>Vision<br /><br />Make innovative technology affordable for all sections of the society</p> 
      </div>
          </div>



{/* Tool tip effect  */}
<div
      className="history-container unique-image-container"
      style={{ position: 'relative', width: '100%', overflow: 'hidden', marginTop: '50px' }}
    >
      {/* Centered Text Block */}
      <div className="row text-center">
        <div className="col-12">
          <h1 className="unique-responsive-heading">
            For years, we've been dedicated to<br /> innovating and assisting
          </h1>
          <p className="unique-responsive-paragraph">our esteemed clients.</p>
        </div>
      </div>

      {/* Second Row of Images */}
      <div className="row">
        <div className="col-12 d-flex flex-wrap justify-content-center pt-5 mt-2">
          {imageData1.map((image, index) => (
            <div className="unique-image-wrapper" key={index}>
              <div className="unique-wrapper">
                <img src={image.src} className="unique-random-image img-fluid" alt={image.alt} />
                <div className="unique-tooltip text-center">{image.tooltip}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* Value section  */}
    <div className="container-fluid values-section p-3 my-5">
      <div className="row mb-4">
        <div className="col">
          <h1 className="values-title ml-5">
            <b>
              <i>Values</i>
            </b>{' '}
            we follow
          </h1>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-3"></div>
        <div className="col-md-3 bordered-column">
          <div className="image-text-container">
            <img
              src="About Us Page Value 1 (1).png"
              className="img-fluid value-image mt-3"
              alt="Integrity"
            />
            <div>
              <h1 className="value-heading text-left ml-5 pr-5">Integrity</h1>
              <p className="value-paragraph text-left ml-5">
                Always choose your thoughts
                <br /> & actions based on value.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 bordered-column  pl-4 ">
          <div className="image-text-container">
            <img
              src="aboutus value 2.png"
              className="img-fluid value-image p-4"
              alt="Explore"
            />
            <div>
              <h1 className="value-heading text-left ml-5 pr-5">
                Explore
              </h1>
              <p className="value-paragraph text-left ml-5 pr-5">
                Always be curious to know
                <br /> more. Never stop exploring.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>

      <hr />

      <div className="row mb-4" style={{ marginTop: '40px' }}>
        <div className="col-md-3"></div>
        <div className="col-md-3 bordered-column pl-4">
          <div className="image-text-container">
            <img
              src="Ekak website- Value 3 (1).png"
              
              className="img-fluid value-image pt-5 mt-3"
              alt="Teamwork"
            />
            <div>
              <h1 className="value-heading text-left ml-5 pr-5 mt-5 pt-3">
                Teamwork
              </h1>
              <p className="value-paragraph text-left ml-5 pr-5 mt-1">
                Cultivate meaningful work and relationship together
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 bordered-column pl-4">
          <div className="image-text-container">
            <img
              src="value4.png"
              className="img-fluid value-image p-5"
              alt="Create Impact"
            />
            <div>
              <h1 className="value-heading text-left ml-5 pr-5 ">
                Create Impact
              </h1>
              <p className="value-paragraph text-left ml-5 pr-5">
                Small gesture can have big Impact. Create where it matters
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>


    {/* Innovate with us */}
    <div className="innovate-container p-3 my-5">
      <div className="innovate-row no-gutters">
        <div className="innovate-image-column col-12 col-md-8 mb-4 mb-md-0 pt-4">
          <img
            src="/Ekak website- Innovate with us.png"
            className="innovate-image img-fluid"
            alt="Innovate with us"
          />
        </div>

        <div className="innovate-text-column col-12 col-md-4 d-flex flex-column justify-content-center align-items-center align-items-md-end text-md-right">
          <div className="innovate-heading-container mt-4 mt-md-0">
            <p className="innovate-heading-text">Innovate with us</p>
          </div>
          <div className="innovate-subheading-container">
            <p className="innovate-subheading-text">
              Automate and simplify your business operations with
              <br /> easy and secure solutions
            </p>
          </div>
          <div className="innovate-button-container">
            <form className="form-inline">
              <button className="innovate-btn btn btn-dark" type="submit">
                CONTACT US
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>




< Footer />


    </>
  );
};

export default Navbar;
