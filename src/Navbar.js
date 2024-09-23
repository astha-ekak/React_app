import React, { useEffect, useState } from 'react';
import './Navbar.css'; 
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';




import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

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


  const carouselCaptionStyle = {
    textAlign: 'center',
    bottom: '50%',
    transform: 'translateY(50%)'
  };
  
  const titleStyle = {
   // Larger font size for the title
    fontWeight: 'bold' // Make the title bolder
  };
  
  
  
  return (
    <>
      <nav id="navbar" className={`navbar navbar-expand-lg navbar-light fixed-top ${scrolled ? 'scrolled' : ''}`}>
        <a className="navbar-brand" >
          <img
            id="navbar-logo"
            src={scrolled ? 'ekak-logo-1.png' : 'ekak-logo-2.png'}
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
              <a className="nav-link" href="/home" style={{color:'white'}}>Home</a>
            </li>
            <li className="nav-item">
          <Link to="/about" className="nav-link" style={{color:'white'}}>About</Link>
        </li>
            <li className="nav-item dropdown">
              <a style={{color:'white'}} className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Resources
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a target="_blank" style={{color:'white'}} className="dropdown-item" href="https://medium.com/@EkakInn" rel="noopener noreferrer" onClick={() => window.open("https://medium.com/@EkakInn", '_blank')}>Blogs</a>
              </div>
            </li>
            <li className="nav-item">
          <Link to="/teams" style={{color:'white'}} className="nav-link">Team</Link>
        </li>
            <li className="nav-item">
              <a className="nav-link" style={{color:'white'}} href="/career">Career</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{color:'white'}} href="/contact">Contact</a>
            </li>
          </ul>
          
        </div>
      </nav>

      {/* <div className="row justify-content-start content-row1 mt-5 pt-5">
        <div className="col-md-10 col-12">
          <div className="row no-gutters mt-5">
            <div className="col-md-6 col-12 d-flex justify-content-center align-items-center my-2 font-weight-bold" style={{ fontSize: 'calc(2.5rem + 2vw)' }}>
              <p className="head-text" style={{ whiteSpace: 'nowrap' }}>
                <span style={{ color: '#B3631A' }}>\</span> We Proudly
              </p>
            </div>

            <div className="col-md-4 col-12 d-flex my-1">
              <img src="Ekak Website 1.gif" alt="GIF" className="img-fluid" />
            </div>

            <div className="col-md-2 col-12 d-flex justify-content-center align-items-center my-2 font-weight-bold" style={{ fontSize: 'calc(2.5rem + 2vw)' }}>
              <p className="head-text" style={{ whiteSpace: 'nowrap', margin: 0 }}>
                work
              </p>
            </div>
          </div>
        </div>
      </div> */}
                    

                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 carousel-image" src="hero11.jpg" alt="First slide" />
      <div className="carousel-caption d-block" style={carouselCaptionStyle}>
        <p className='hero-heading responsive-text10' style={titleStyle}>WE PROUDLY EMPOWER COMMUNITIES</p>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 carousel-image" src="hero22.jpg" alt="Second slide" />
      <div className="carousel-caption d-block" style={carouselCaptionStyle}>
        <p className='hero-heading responsive-text10' style={titleStyle}>WE PROUDLY INNOVATE INDUSTRIES</p>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 carousel-image" src="hero3 (2).jpg" alt="Third slide" />
      <div className="carousel-caption d-block" style={carouselCaptionStyle}>
        <p className='hero-heading responsive-text10' style={titleStyle}>WE PROUDLY FOSTER PARTNERSHIPS</p>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>


{/* Second card section */}

      <section className="row responsive-section">
        <div className="col text-left">
          <p className="responsive-text ">
            Ekak Innovations is a product development <br />
            firm dedicated to creating <span style={{ color: '#FF914D' }}>innovative</span> solutions<br />
            for today's most pressing challenges.
          </p>
        </div>
      </section>


{/* Content Row */}
<div className="row align-items-center no-gutters custom-content-row" style={{ marginTop: '0', paddingTop: '0' }}>
  <div className="col-md-6 col-sm-12 d-flex justify-content-center" style={{ padding: '0', margin: '0' }}>
    <div className="custom-card" style={{ border: 'none', margin: '0', padding: '0' }}>
      <img
        src="Homepage ekak website.png"
        className="custom-card-img-top img-fluid"
        style={{
          borderRadius: '60px',
          maxWidth: '100%',
          maxHeight: '85vh',
        }}
      />
    </div>
  </div>

  <div className="col-md-6 col-sm-12 p-0 d-flex justify-content-left" style={{ padding: '0', margin: '0' }}>
    <div className="custom-card text-left" style={{ border: 'none', margin: '0', padding: '0' }}>
      <div className="custom-card-body" style={{ padding: '0', margin: '0' }}>
        <div className="custom-icon-container" style={{ padding: '0', margin: '0' }}>
          <div className="custom-icon-card col text-left" style={{ marginBottom: '0', padding: '0' }}>
            <img src="renewable.png" className='pl-3' style={{ maxWidth: '80px' }} alt="" />
            <h6 className="pt-2 pl-3" style={{ fontSize: '24px', fontFamily: '"Poppins", sans-serif' }}>Renewable Energy</h6>
            <p className="small mt-4 pl-3" style={{ fontSize: '14px', fontFamily: '"Poppins", sans-serif' }}>
              At Ekak, we believe in the power of renewable energy to transform <br />
              communities and improve lives. That's why we're proud to offer a range<br />
              of solar lamp and solar charging hubs with remote monitoring systems.
            </p>
          </div>
          <div className="custom-icon-card col text-left" style={{ marginBottom: '0', padding: '0' }}>
            <img src="3D.png" style={{ maxWidth: '80px' }} alt="" />
            <h6 className="pt-2 pl-3" style={{ fontSize: '24px', fontFamily: '"Poppins", sans-serif' }}>3D Printing</h6>
            <p className="small mt-4 pl-3" style={{ fontSize: '15px', fontFamily: '"Poppins", sans-serif' }}>
              We share passion about the possibilities of 3D printing and additive<br />
              manufacturing. Whether you need a one-of-a-kind prototype, a small <br />
              production run, or a large-scale manufacturing solution, we can help you<br />
              achieve quickly, efficiently, & cost-effectively.
            </p>
          </div>
          <div className="custom-icon-card col text-left" style={{ marginBottom: '0', padding: '0' }}>
            <img src="Digital.png" style={{ maxWidth: '80px' }} alt="" />
            <h6 className="pt-2 pl-3" style={{ fontSize: '24px', fontFamily: '"Poppins", sans-serif' }}>Digital Transformation</h6>
            <p className="small mt-4 pl-3" style={{ fontSize: '15px', fontFamily: '"Poppins", sans-serif' }}>
              Digital transformation is crucial for all businesses. Our products enhance<br />
              safety in factories and warehouses, improve road safety, and optimize<br />
              supply chain tracking. Whether you aim to prevent accidents, boost<br />
              productivity, or ensure compliance, we got it all.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      
      {/* Solutions section */ }

      <div className="container-fluid33">
      <div className="row33 heading11-row33 mt-5">
        <h2 className="heading1133 ">SOLUTIONS</h2>
      </div>

      <div className="container33">
        <div className="row33 cards11-row33 pt-3 mt-2">
          
          <div className="card1133" style={{ borderRadius: '50%' }}>
            <div className="card11-inner33">
              <div className="card11-front33">
                <img src="3D printing work.png" alt="3D Printing" />
              </div>
              <div className="card11-back33">
                <p className="p-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  <span style={{ fontWeight: 700 }}>Ekakshar’s</span> product development service focuses on
                  <span style={{ fontWeight: 700 }}> 3D printing</span> and small-scale manufacturing. We use advanced technologies like Computational Flow Dynamics and Finite Element Analysis to ensure precision and efficiency. Let us bring your ideas to life with our
                  <span style={{ fontWeight: 600 }}> innovative and sustainable solutions</span>. Contact us today!
                </p>
                <a href="/contact" className="card11-button33">Contact Us</a>
              </div>
            </div>
          </div>
          
          <div className="card1133">
            <div className="card11-inner33">
              <div className="card11-front33">
                <img src="Work 1 (Homepage).png" alt="Factory Safety Software" />
              </div>
              <div className="card11-back33">
                <p className="p-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  <span style={{ fontWeight: 700 }}>Argus,</span> our advanced factory safety software with real-time monitoring and computer vision technology. It features
                  <span style={{ fontWeight: 700 }}> automated safety checks,</span> predictive maintenance, and
                  <span style={{ fontWeight: 700 }}> detailed incident analysis.</span> Proactively manage safety, reduce downtime, and enhance your manufacturing processes with our all-in-one solution.
                </p>
                <a href="https://argus-website-4d53eb984d34.herokuapp.com/" className="card11-button33">Visit Now</a>
              </div>
            </div>
          </div>
          
          <div className="card1133">
            <div className="card11-inner33">
              <div className="card11-front33">
                <img src="Dave Work Image.png" alt="Road Safety Solution" />
              </div>
              <div className="card11-back33">
                <p className="p-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  <span style={{ fontWeight: 700 }}>Dave,</span> our road safety solution uses machine learning for
                  <span style={{ fontWeight: 700 }}> real-time driver behavior tracking.</span> With GPS monitoring, distraction and drowsiness alerts, lane tracking, and performance scores, we help prevent accidents and improve driver safety. Monitor and incentivize safe driving with our comprehensive system.
                </p>
                <a href="/contact" className="card11-button33">Contact Us</a>
              </div>
            </div>
          </div>

        </div>
      </div>

    
    </div>

  {/* Award Section */ }
          <div className="card-group mt-5 pt-5">
      <div className="card" style={{ border: 'none', margin: 0, padding: 0 }}>
        <img src="Homepage Award  (1) 1.png" className="card-img-top p-4 pt-5" alt="Award 1" />
      </div>
      <div className="card p-0 m-0" style={{ border: 'none' }}>
        <img src="Homepage Award 2 (1) 1.png" className="card-img-top p-4 pt-5" alt="Award 2" />
      </div>
      <div className="card" style={{ border: 'none' }}>
        <img src="Homepage Award 3 (1) 1.png" className="card-img-top  p-2" alt="Award 3" />
      </div>
      <div className="card" style={{ border: 'none' }}>
        <img src="Homepage Award 4.png" className="card-img-top  p-5 pt-5" alt="Award 4" />
      </div>
          </div>


          {/* Approach section */}
          <div className="row  pt-3" style={{ backgroundImage: "url('Ekak website- Homepage Images (Hover Effect).png')", backgroundSize: 'cover' }}>
      <div className="col-md-4 text-column pl-md-5 text-center text-md-left d-flex justify-content-center align-items-center" style={{ fontFamily: '"Poppins", sans-serif', color: '#f0f0f0' }}>
        <p>We break down complex problems into<br /> smaller, manageable subproblems for<br /> effective solutions.</p>
      </div>

      <div className="col-md-4 d-flex justify-content-center align-items-center">
        <div className="cylindrical-card" style={{ borderRadius: '120px', overflow: 'hidden', position: 'relative', background: 'transparent' }}>
          <img src="Ekak Website8.png" className="hover-image" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} alt="Hover Effect" />
        </div>
      </div>

      <div className="col-md-4 text-column pr-md-4 text-center text-md-right d-flex justify-content-center align-items-center" style={{ fontFamily: '"Poppins", sans-serif', color: '#f0f0f0' }}>
        <p>This allows us to address each issue with<br /> precision engineering and a data-driven,<br /> cost-effective approach.</p>
      </div>
          </div>
          

          {/* Position of Company */}
          <div className="container-fluid ml-2 mr-2" style={{ marginTop: '100px' }}>
  <div className="row">
    <div className="col text-left">
      <div
        className="custom-card-box"
        style={{
          marginLeft: '30px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', // Box shadow for the card effect
          padding: '10px', // Padding inside the box
          borderRadius: '8px', // Rounded corners
          backgroundColor: '#fff', // Background color for the box
          textAlign: 'left', // Align text to the left
          marginBottom: '20px', // Space below the box
          maxWidth: '100%', // Ensures the card doesn't exceed screen width
          width: '600px', // Fixed width for larger screens
       
        }}
      >
        <p
          className="mb-0 mt-3 ml-2"
          style={{
            fontSize: '38px', // Font size for larger screens
            marginLeft:'25px',
            fontWeight: 'bold',
            margin: 0,
            '@media (max-width: 576px)': {
              fontSize: '20px', // Font size for smaller screens
            },
          }}
        >
          Where Innovations<br />
          meets Sustainability
        </p>

        <p
          className="text111 mb-0 pt-4 mt-5 ml-2 "
          style={{
           
            fontSize: '18px', // Font size for larger screens
            marginLeft:'25px',
            margin: 0,
            '@media (max-width: 576px)': {
              fontSize: '14px', // Adjust font size for smaller screens
              marginTop: '20px', // Adjust margin for small screens
            },
          }}
        >
          It emphasizes the integration of cutting-edge technology,
          <br />
          pioneering business paradigms, and strategies centred
          <br />
          around customer satisfaction.
        </p>
        <div className='mt-3'></div>
      </div>
    </div>
  </div>

  <div className="row">
    <div className="col text-right-100px">
      <p className="text3 mb-0 pr-5 pt-1">*6 years</p>
    </div>
  </div>

  <div className="row">
    <div className="col">
      <hr />
    </div>
    <div className="col text-right-24px">
      <p className="text2 mb-0">
        Optimizing businesses, Optimizing world.
      </p>
    </div>
  </div>
</div>

          {/* Blogs section */}
          <div className="container my-5">
      <div className="row text-center">
        <div className="col-md-4 mb-5">
          <a
            href="https://medium.com/@EkakInn/what-is-the-future-of-transportation-edb19a32b4a"
            target="_blank"
            rel="noopener noreferrer"
            className="d-block"
          >
            <div className="cylindrical-image-container">
              <img
                   src="Ekak Blog Image 3.0 111.png"
                alt=""
                className="img-fluid cylindrical-image"
              />
            </div>
          </a>
          <p className="blog-text">EKAK BLOG</p>
          <p className="blog-title">What is the Future of Transportation?</p>
        </div>
        <div className="col-md-4 mb-5">
          <a
            href="https://medium.com/@EkakInn/shantiniketan-the-abode-of-peace-217120057d0b"
            target="_blank"
            rel="noopener noreferrer"
            className="d-block"
          >
            <div className="cylindrical-image-container">
              <img
             
                  src="Ekak Blog Image 3.0 22.png"
                alt=""
                className="img-fluid cylindrical-image"
              />
            </div>
          </a>
          <p className="blog-text">EKAK BLOG</p>
          <p className="blog-title">Shantiniketan- The Abode Of Peace</p>
        </div>
        <div className="col-md-4 mb-5">
          <a
            href="https://medium.com/@EkakInn/a-story-to-tell-2544ddc33dde"
            target="_blank"
            rel="noopener noreferrer"
            className="d-block"
          >
            <div className="cylindrical-image-container">
              <img
                src="Ekak Blog Image 3.0.png"
                alt=""
                className="img-fluid cylindrical-image"
              />
            </div>
          </a>
          <p className="blog-text">EKAK BLOG</p>
          <p className="blog-title">A Story to tell- Ekak Innovations</p>
        </div>
      </div>
          </div>
          

          {/* Partners section */}
          <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 testimonial-container text-center">
          <img
            src="Ekak Website12.png"
            alt=""
            className="mx-auto d-block hover-effect"
          />
          <p className="testimonial">
            <i>
              Since our inception, we've been dedicated to delivering innovative and dependable solutions to our
              clients. We are proud to have been the trusted partner of the following forward-thinking corporations.
            </i>
          </p>
          <p className="author mt-4 pt-5">TRUSTED BY TOP BRANDS</p>
          <div className="container-fluid">
            <div className="row content-row2">
              <div className="col-12 ">
                <div className="card-group">
                  <div className="card" style={{ border: 'none' }}>
                    <img
                      src="Ekak Website13.png"
                      alt="Brand 1"
                      className="img-fluid pl-5"
                      style={{ maxWidth: '270px', width: '100%' }}
                    />
                  </div>
                  <div className="card" style={{ border: 'none' }}>
                    <img
                      src="Truboarddddd.png"
                      alt="Brand 2"
                      className="img-fluid pl-5"
                      style={{ maxWidth: '350px', width: '100%' }}
                    />
                  </div>
                  <div className="card" style={{ border: 'none' }}>
                    <img
                      src="Ekak Website15.png"
                      alt="Brand 3"
                      className="img-fluid pl-5"
                      style={{ maxWidth: '230px', width: '100%' }}
                    />
                  </div>
                  <div className="card" style={{ border: 'none' }}>
                    <img
                      src="Ekak Website16.png"
                      alt="Brand 4"
                      className="img-fluid pl-5"
                      style={{ maxWidth: '230px', width: '100%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          </div>
    


<Footer />
    
   
    </>
  );
};
   
       
       
   
  

export default Navbar;
