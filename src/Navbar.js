import React, { useEffect, useState } from 'react';
import './Navbar.css'; 
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

      <div className="row justify-content-start content-row1 mt-5 pt-5">
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
      </div>



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
<div className="row align-items-center no-gutters custom-content-row">
  <div className="col-md-6 col-sm-12 mt-2 d-flex justify-content-center">
    <div className="custom-card" style={{ border: 'none' }}>
      <img
        src="Homepage ekak website.png"
        className="custom-card-img-top img-fluid"
        style={{
          borderTopLeftRadius: '60px',
          borderTopRightRadius: '60px',
          borderBottomLeftRadius: '60px',
          borderBottomRightRadius: '60px',
          maxWidth: '100%',
          maxHeight: '85vh',
        }}
      />
    </div>
  </div>

  <div className="col-md-6 col-sm-12 p-0 d-flex justify-content-left">
    <div className="custom-card text-left" style={{ border: 'none' }}>
      <div className="custom-card-body">
        <div className="custom-icon-container">
          <div className="custom-icon-card col text-left">
            <img src="renewable.png" style={{ maxWidth: '80px' }} alt="" />
            <h6 className="pt-2" style={{ fontSize: '24px', fontFamily: '"Poppins", sans-serif' }}>
              Renewable Energy
            </h6>
            <p className="small mt-4" style={{ fontSize: '14px', fontFamily: '"Poppins", sans-serif' }}>
              At Ekak, we believe in the power of renewable energy to transform <br />
              communities and improve lives. That's why we're proud to offer a range<br />
              of solar lamp and solar charging hubs with remote monitoring systems.
            </p>
          </div>
          <div className="custom-icon-card col text-left">
            <img src="3D.png" style={{ maxWidth: '80px' }} alt="" />
            <h6 className="pt-2" style={{ fontSize: '24px', fontFamily: '"Poppins", sans-serif' }}>
              3D Printing
            </h6>
            <p className="small mt-4" style={{ fontSize: '15px', fontFamily: '"Poppins", sans-serif' }}>
              We share passion about the possibilities of 3D printing and additive<br />
              manufacturing. Whether you need a one-of-a-kind prototype, a small <br />
              production run, or a large-scale manufacturing solution, we can help you<br />
              achieve quickly, efficiently, & cost-effectively.
            </p>
          </div>
          <div className="custom-icon-card col text-left">
            <img src="Digital.png" style={{ maxWidth: '80px' }} alt="" />
            <h6 className="pt-2" style={{ fontSize: '24px', fontFamily: '"Poppins", sans-serif' }}>
              Digital Transformation
            </h6>
            <p className="small mt-4" style={{ fontSize: '15px', fontFamily: '"Poppins", sans-serif' }}>
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

          <CardGroup  className="custom-card-group " >
      <Card className="custom-card " style={{ border: 'none' }}>
        <div className="custom-card-inner">
          <div className="custom-card-front">
            <Card.Img variant="top" src="3D printing work.png" className="custom-card-img" />
          </div>
          <div className="custom-card-back">
            <Card.Body>
            <Card.Text style={{ textAlign: 'left', padding: '0px', margin: 'auto', fontFamily: "'Poppins', sans-serif", maxWidth: '90%', wordWrap: 'break-word' }}>
          
              <p className="p-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <span style={{ fontWeight: 700 }}>Ekakshar’s</span> product development service focuses on{' '}
              <span style={{ fontWeight: 700 }}>3D printing</span> and small-scale manufacturing. We use advanced
              technologies like Computational Flow Dynamics and Finite Element Analysis to ensure precision and
              efficiency. Let us bring your ideas to life with our{' '}
              <span style={{ fontWeight: 600 }}>innovative and sustainable solutions</span>. Contact us today!
            </p>
              </Card.Text>
              <div className="d-flex justify-content-center">
            <Button className="custom-card-button" style={{ backgroundColor: '#f1c40f', color: 'black', border: 'none', borderRadius: '5px', padding: '10px 20px' }}>Learn More</Button>
          </div>
            </Card.Body>
          </div>
        </div>
      </Card>

      <Card className="custom-card" style={{ border: 'none' }}>
  <div className="custom-card-inner">
    <div className="custom-card-front">
      <Card.Img variant="top" src="Work 1 (Homepage).png" className="custom-card-img" />
    </div>
    <div className="custom-card-back">
      <Card.Body>
      <Card.Text style={{ textAlign: 'left', padding: '0px', margin: 'auto', fontFamily: "'Poppins', sans-serif", maxWidth: '90%', wordWrap: 'break-word' }}>
          
          
          <p className="p-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  <span style={{ fontWeight: 700 }}>Argus,</span> our advanced factory safety software with real-time monitoring and computer vision technology. It features{' '}
                  <span style={{ fontWeight: 700 }}>automated safety checks,</span>predictive maintenance, and{' '}
                  <span style={{ fontWeight: 700 }}>detailed incident analysis.</span>Proactively manage safety and reduce downtime,to enhance manufacturing processes.
                </p>
               
        </Card.Text>
        <div className="d-flex justify-content-center mt-3">
            <Button className="custom-card-button" style={{ backgroundColor: '#f1c40f', color: 'black', border: 'none', borderRadius: '5px', padding: '10px 20px' }}>Learn More</Button>
          </div>
      </Card.Body>
    </div>
  </div>
</Card>



  <Card className="custom-card " style={{ border: 'none' }}>
    <div className="custom-card-inner">
      <div className="custom-card-front">
        <Card.Img variant="top" src="Dave Work Image.png" className="custom-card-img" />
      </div>
      <div className="custom-card-back">
        <Card.Body>
        <Card.Text style={{ textAlign: 'left', padding: '0px', margin: 'auto', fontFamily: "'Poppins', sans-serif", maxWidth: '90%', wordWrap: 'break-word' }}>
          
          
            <p className="p-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <span style={{ fontWeight: 700 }}>Dave,</span> our road safety solution uses machine learning for{' '}
            <span style={{ fontWeight: 700 }}>real-time driver behavior tracking.</span> With GPS monitoring,
            distraction and drowsiness alerts, lane tracking, and performance scores, we help prevent accidents and
            improve driver safety. Monitor and incentivize safe driving with our comprehensive system.
          </p>
          
          </Card.Text>
          <div className="d-flex justify-content-center">
            <Button className="custom-card-button" style={{ backgroundColor: '#f1c40f', color: 'black', border: 'none', borderRadius: '5px', padding: '10px 20px' }}>Learn More</Button>
          </div>
        </Card.Body>
      </div>
    </div>
  </Card>
          </CardGroup>

  {/* Award Section */ }
          <div className="card-group mt-5 pt-5">
      <div className="card" style={{ border: 'none', margin: 0, padding: 0 }}>
        <img src="Homepage Award  (1) 1.png" className="card-img-top p-4 pt-0" alt="Award 1" />
      </div>
      <div className="card p-0 m-0" style={{ border: 'none' }}>
        <img src="Homepage Award 2 (1) 1.png" className="card-img-top p-4 pt-0" alt="Award 2" />
      </div>
      <div className="card" style={{ border: 'none' }}>
        <img src="Homepage Award 3 (1) 1.png" className="card-img-top p-4 pt-0" alt="Award 3" />
      </div>
      <div className="card" style={{ border: 'none' }}>
        <img src="Homepage Award 4.png" className="card-img-top  p-5 " alt="Award 4" />
      </div>
          </div>


          {/* Approach section */}
          <div className="row" style={{ backgroundImage: "url('Ekak website- Homepage Images (Hover Effect).png')", backgroundSize: 'cover' }}>
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
        <div className="col text-left text-left-50px">
          <p className="mb-0">
            Where Innovations <br /> meets Sustainability
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col text-left pt-5 text-left-20px">
          <p className="text111 mb-0" style={{
        fontSize: '15 px',
        margin: 0,
        '@media (max-width: 576px)': {
          fontSize: '10px', // Adjust font size for smaller screens
        },
      }}>
            It emphasizes the integration of cutting-edge technology,<br /> pioneering business paradigms, and strategies centred<br/> around customer satisfaction.
       
            </p>
        </div>
      </div>

 
      <div className="row">
        <div className="col  text-right-100px">
          <p className="text3 mb-0 pr-5 pt-1">*6 years</p>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <hr />
        </div>
        <div className="col  text-right-24px">
          <p className="text2 mb-0 pr-5 pt-2">
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
                src="Ekak Website9.png"
                alt="Image 1"
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
                src="/static/Ekak Website10.png"
                alt="Image 2"
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
                src="/static/Ekak Website11.png"
                alt="Image 3"
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
            alt="Collaborators"
            className="mx-auto d-block hover-effect"
          />
          <p className="testimonial">
            <i>
              Since our inception, we've been dedicated to delivering innovative and dependable solutions to our
              clients. We are proud to have been the trusted partner of the following forward-thinking corporations.
            </i>
          </p>
          <p className="author">TRUSTED BY TOP BRANDS</p>
          <div className="container-fluid">
            <div className="row content-row2">
              <div className="col-12 pt-5 mt-5">
                <div className="card-group">
                  <div className="card" style={{ border: 'none' }}>
                    <img
                      src="Ekak Website13.png"
                      alt="Brand 1"
                      className="img-fluid pl-5"
                      style={{ maxWidth: '230px', width: '100%' }}
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
    

    
   
    </>
  );
};
   
       
       
   
  

export default Navbar;
