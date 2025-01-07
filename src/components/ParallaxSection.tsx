import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.div
      ref={ref}
      className="h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ y, opacity, scale }}
        className="text-center px-4"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
          Empowering Future
          <br />
          With Technology
        </h2>
        <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
          Through innovative workshops, hackathons, and collaborative projects,
          we're shaping the next generation of technology pioneers.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ParallaxSection;