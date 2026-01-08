'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  separator?: string;
  className?: string;
  delay?: number;
  triggerOnView?: boolean;
}

export default function CountUp({
  from = 0,
  to,
  duration = 2,
  suffix = '',
  separator = ',',
  className = '',
  delay = 0,
  triggerOnView = true,
}: CountUpProps) {
  const [count, setCount] = useState(from);
  const [hasStarted, setHasStarted] = useState(!triggerOnView);

  useEffect(() => {
    if (!hasStarted) return;

    let animationFrame: number;
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const value = Math.floor(from + (to - from) * progress);

      setCount(value);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    const timeoutId = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrame);
    };
  }, [hasStarted, from, to, duration, delay]);

  const formattedCount = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

  if (triggerOnView) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1.0],
          onComplete: () => setHasStarted(true),
        }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {formattedCount}
        {suffix}
      </motion.div>
    );
  }

  return (
    <span className={className}>
      {formattedCount}
      {suffix}
    </span>
  );
}
