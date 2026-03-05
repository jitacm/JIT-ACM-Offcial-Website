import { useEffect } from 'react';
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
    <>
      <Preloader />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        className="min-h-screen bg-apple-gray-50"
      >
        <Navbar />
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
        <Footer />
      </motion.div>
    </>
  );
}

export default App;