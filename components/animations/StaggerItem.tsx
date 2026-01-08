'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export default function StaggerItem({ children, className = '' }: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1.0], // Custom luxury easing
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
