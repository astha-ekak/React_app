// App.js
import React from 'react';
import Navbar from './Navbar'; 
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import About from "./pages/about";
import Teams from "./pages/teams"; 
import Career from "./pages/career"; 
import Contact from "./pages/contact"; 

function Layout({ children }) {
  const location = useLocation();
  
 
  const isAboutPage = location.pathname === "/about";

  return (
    <div className="App">
      {!isAboutPage && <Navbar />}
      <main>{children}</main>
      {!isAboutPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={
          <Layout>
            <About />
          </Layout>
        } />
        <Route path="/contact" element={  <Contact />} />
        <Route path="/teams" element={  <Teams />} />
        <Route path="/career" element={  <Career />  } />
        <Route path="/home" element={<Navbar />} />
        <Route path="/" element={<Navbar />} />
      </Routes>
    </Router>
  );
}

export default App;
