'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

export default function Marquee({
  children,
  speed = 40,
  direction = 'left',
  className = '',
}: MarqueeProps) {
  const variants = {
    animate: {
      x: direction === 'left' ? [0, -100] : [0, 100],
    },
  };

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        variants={variants}
        animate="animate"
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
        }}
        className="flex gap-8"
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
