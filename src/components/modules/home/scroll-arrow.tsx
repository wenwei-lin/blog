'use client';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import React from 'react';

export const ScrollArrow = () => {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 1.5,
          ease: 'easeInOut',
        }}
      >
        <ArrowDown className="h-8 w-8 text-zinc-400" />
      </motion.div>
    </motion.div>
  );
};
