import React from 'react';
import { motion } from 'framer-motion';

/* ─── Reusable animation variants ───────────────────────────────────────── */

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.07,
      ease: 'easeOut',
    },
  }),
};

export const slideRightVariant = {
  hidden: { opacity: 0, x: -32 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.09,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const scaleUpVariant = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: i * 0.06,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const springBadgeVariant = {
  hidden: { opacity: 0, scale: 0.7, y: 12 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 22,
      delay: i * 0.1,
    },
  }),
};

export const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

/**
 * AnimatedSection — scroll-triggered section wrapper.
 * Children render normally; use <motion.div> with custom variants inside if needed.
 */
const AnimatedSection = ({
  children,
  className = '',
  id = '',
  style = {},
  delay = 0,
  variant = 'fadeUp', // 'fadeUp' | 'fadeIn' | 'slideRight' | 'scaleUp'
}) => {
  const variants = {
    fadeUp: fadeUpVariant,
    fadeIn: fadeInVariant,
    slideRight: slideRightVariant,
    scaleUp: scaleUpVariant,
  };

  const chosen = variants[variant] || fadeUpVariant;

  return (
    <motion.section
      id={id}
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={chosen}
      custom={delay}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
