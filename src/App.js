// App.js
import React from 'react';
import Navbar from './Navbar'; 
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import About from "./pages/about";
import Teams from "./pages/teams"; 
import Career from "./pages/career"; 

function Layout({ children }) {
  const location = useLocation();
  
  // Determine if the current path is "/about"
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
        <Route path="/teams" element={ // Add the Teams route
          
            <Teams />
         
        } />
        <Route path="/career" element={ // Add the Teams route
          
          <Career />
       
      } />
        <Route path="/home" element={<Navbar />} />
      </Routes>
    </Router>
  );
}

export default App;
