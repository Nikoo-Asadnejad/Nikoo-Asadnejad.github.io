import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.section
      style={{ padding: '50px', textAlign: 'center', background: '#e9ecef' }}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Welcome to My Portfolio
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Crafting scalable, high-performance back-end solutions with ASP.NET Core.
      </motion.p>
    </motion.section>
  );
}

export default Hero;
