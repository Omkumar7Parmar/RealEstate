'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface HoverLiftProps {
  children: React.ReactNode;
  liftAmount?: number;
  glowColor?: string;
  className?: string;
}

export default function HoverLift({
  children,
  liftAmount = 5,
  glowColor = 'rgba(168, 85, 247, 0.15)',
  className = '',
}: HoverLiftProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: -liftAmount,
        transition: {
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      }}
      onHoverStart={(event) => {
        const element = event.currentTarget as HTMLElement;
        if (element) {
          element.style.boxShadow = `0 20px 40px ${glowColor}, 0 0 60px ${glowColor}`;
        }
      }}
      onHoverEnd={(event) => {
        const element = event.currentTarget as HTMLElement;
        if (element) {
          element.style.boxShadow = '';
        }
      }}
    >
      {children}
    </motion.div>
  );
}
