import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-6 py-12"
    >
      <h1 className="text-4xl font-bold text-text mb-6">About Us</h1>
      <p className="text-muted">Content coming soon...</p>
    </motion.div>
  );
};

export default About;