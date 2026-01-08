'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  blur?: boolean;
  scale?: boolean;
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  blur = false,
  scale = false,
  className = '',
}: FadeInProps) {
  const directionVariants = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
  };

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...directionVariants[direction],
        ...(scale && { scale: 0.95 }),
        ...(blur && { filter: 'blur(10px)' }),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        ...(scale && { scale: 1 }),
        ...(blur && { filter: 'blur(0px)' }),
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0], // Custom luxury easing
      }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {children}
    </motion.div>
  );
}
