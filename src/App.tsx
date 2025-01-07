import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ParallaxSection from './components/ParallaxSection';
import About from './components/About';
import Gallery from './components/Gallery';
import Events from './components/Events';
import TeamSlider from './components/TeamSlider';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Sponsors from './components/Sponsors';
import EventDetails from './pages/EventDetails';
import EventRegistration from './pages/EventRegistration';
import EventTicket from './pages/EventTicket';
import BlogPage from './pages/BlogPage';
import './styles/fonts.css';

function App() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);

  return (
    <Router>
      <Preloader />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        className="min-h-screen bg-apple-gray-50"
      >
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero3D />
              <ParallaxSection />
              <About />
              <Gallery />
              <Events />
              <TeamSlider />
              <Testimonials />
              <Blog />
              <Sponsors />
              <Contact />
            </>
          } />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/event/:id/register" element={<EventRegistration />} />
          <Route path="/event/:id/ticket" element={<EventTicket />} />
          <Route path="/blog/:id" element={<BlogPage />} />
        </Routes>
        <Footer />
      </motion.div>
    </Router>
  );
}

export default App;