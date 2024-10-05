import React, { useEffect } from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './components/Header'; 
import Home from './components/Home'; 
import About from './components/About'; 
import Projects from './components/Project'; 
import Contact from './components/Contact'; 
import AOS from 'aos'; 
import 'aos/dist/aos.css';  
import Footer from './components/Footer';  

function App() {   
  useEffect(() => {     
    AOS.init();   
  }, []);    

  return (     
    <Router>       
      <Header />         
      <Routes>           
        <Route path="/" element={<Home />} />           
        <Route path="/about" element={<About />} />           
        <Route path="/projects" element={<Projects />} />           
        <Route path="/contact" element={<Contact />} />         
      </Routes>       
      <Footer />     
    </Router>   
  ); 
}  

export default App;
