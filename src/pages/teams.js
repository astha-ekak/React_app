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


      {/* Hero section */}
      <div className="background-container"   style={{
        backgroundImage: `url(${'teamhero.png'})`,}}>
      <div className="overlay-text">
        Get to
        <br className="toggle-br" />
        know our
        <br className="toggle-br" />
        team
      </div>
      
    </div>
  

  {/* Card Section */}
      

  <div className="container" style={{ marginTop: '100px' }}>
      <div className="text1" style={{ lineHeight: '100%' }}>
        We’re a small team committed to staying streamlined as we grow.
        <br className="toggle-br" />
        Each of us is an expert with a range of interests. We steer clear of
        <br className="toggle-br" />
        toxic projects and rigid work practices. We do our best work when
        <br className="toggle-br" />
        we’re happy, well-rested, and motivated—no late nights or crunch
        <br className="toggle-br" />
        time needed!
      </div>
    </div>
  

  {/* Team members section  */}
  <div className="container" style={{ marginTop: '100px' }}>
      <div className="row">
        <Card
          imgSrc="Shashank Misra Team page.png"
          name="Shashank Misra"
          title="CEO & Founder"
          description="FIRE-FIGHTER who loves to tackle new innovation and idea, been innovating since birth. (It seems)"
        />
        <Card
          imgSrc="Mohd. Numan Photo Team age.png"
          name="Mohd. Numan"
          title="Full-Stack Developer"
          description="THE TECH GURU Master of both the front and back-end realms. When not crafting seamless user experiences, Numan is busy perfecting the art of balancing his diet with equal parts code and cookies."
        />
        <Card
          imgSrc="Neelakshi Mishra Team Page.png"
          name="Neelakshi Mishra"
          title="Growth Associate"
          description="THE CREATIVE CATALYST OR GROWTH GURU Turns bland ideas into brilliant concepts with a dash of creativity. They’re the spark that gets the brainstorming sessions buzzing."
        />
      </div>
      <div className="row">
        <Card
          imgSrc="Unnati Bajpai Team Page.png"
          name="Unnati Bajpai"
          title="Business Developer"
          description="VIBE COORDINATOR Brings positivity and energy to every project. They make work enjoyable and are always ready to lend a hand or a laugh."
        />
        <Card
          imgSrc="Anjali Maurya Team Page.png"
          name="Anjali Maurya"
          title="Business Developer"
          description="UNDERCOVER FUNSTER Anjali's the quiet powerhouse who works hard behind the scenes. Shy? Maybe. But their surprising wit and hidden fun always make the workday brighter!"
        />
        <Card
          imgSrc="Team Page Ekak Website 1 (1).png"
          name="Astha Dixit"
          title="Python Developer"
          description="DEV DREAMER Sweet and reliable, Astha blends code with a touch of charm, always delivering results with a smile."
        />
      </div>

      <div className="row">
        <Card
          imgSrc="Richa Shukla.png"
          name="Richa Shukla"
          title="Python Developer"
          description="TECH GEM Can tackle any issue with a smile and a can-do attitude. When there’s a problem, they’re on it, turning headaches into smooth sailing."
        />
        <Card
          imgSrc="Amitesh Photo.png"
          name="Amitesh Gaur"
          title="Python Developer"
          description="CODE FIXER Knows the ins and outs of all things tech and fixes problems with ease. If you’ve got a tech issue, they’re the expert who can solve it in no time."
        />
        <Card
          imgSrc="Chenu Correct Image.png"
          name="Chhenu"
          title="Chief Barking Officer"
          description="YOUR ALL TIME GO-TO PERSON Meet Chhenu, our office stress-buster. When things get tough, Chhennu's wagging tail and cuddles are guaranteed to turn your frown upside down!"
        />
      </div>
    </div>


    {/* Card section   */}
    <div className="container pt-5 mt-5">
      <div className="heading-row">
        <h1 className="main-heading">It’s all about the </h1>
        <h2 className="sub-heading">PEOPLE</h2>
        <h5
          className="pt-4"
          style={{ fontWeight: 300, fontStyle: 'italic' }}
        >
          and at Ekak we create a perfect balance of people and technology
        </h5>
      </div>
    </div>
    
  
 </>
  );
};

  
       
       
   
  

export default Navbar;
