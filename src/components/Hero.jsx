import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Mail, MapPin, GraduationCap, Sparkles, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { springBadgeVariant, fadeUpVariant, containerVariant } from './AnimatedSection';

/* ── Word-by-word reveal helper ─────────────────────────────────────────── */
function SplitWords({ text, className, style, baseDelay = 0 }) {
  const words = text.split(' ');
  return (
    <span className={className} style={{ ...style, display: 'block' }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.3em' }}
          initial={{ opacity: 0, y: '100%', clipPath: 'inset(0 0 100% 0)' }}
          animate={{ opacity: 1, y: '0%', clipPath: 'inset(0 0 0% 0)' }}
          transition={{
            duration: 0.55,
            delay: baseDelay + i * 0.06,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* ── Floating badge wrapper with spring entrance ────────────────────────── */
function FloatingBadge({ children, delay = 0, style }) {
  return (
    <motion.div
      style={style}
      initial={{ opacity: 0, scale: 0.72, y: 14 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay,
      }}
      whileHover={{ scale: 1.06, y: -2 }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0px', '60px']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0px', '-30px']);

  return (
    <section
      id="home"
      ref={sectionRef}
      style={{
        paddingTop: '8.5rem',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      <div className="container">
        <div className="hero-grid">
          {/* ── Left Column ── */}
          <motion.div style={{ y: textY }}>
            {/* Availability pill */}
            <motion.div
              className="hero-pill"
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="pulse-dot" />
              <span>{portfolioData.personal.status}</span>
            </motion.div>

            {/* Main Headline — word-by-word reveal */}
            <h1 className="hero-headline">
              <SplitWords
                text={`Hey, I'm ${portfolioData.personal.name} —`}
                baseDelay={0.1}
              />
              <SplitWords
                text="Full-Stack Developer"
                style={{ color: 'var(--text-secondary)', fontWeight: 600 }}
                baseDelay={0.35}
              />
            </h1>

            {/* Subtitle fade-up */}
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Undergraduate student specializing in Information Technology. Focused on building clean
              RESTful architectures, responsive React interfaces, and robust database systems.
              Eager to contribute and grow through an internship role.
            </motion.p>

            {/* Quick Metrics Strip */}
            <motion.div
              className="portox-card hero-metrics"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              {portfolioData.personal.quickStats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="hero-metric-label">{stat.label}</div>
                  <div className="hero-metric-value">{stat.value}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.a
                href="#contact"
                className="btn btn-primary"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <span>Get In Touch</span>
                <ArrowRight size={16} />
              </motion.a>

              <motion.a
                href="#projects"
                className="btn btn-secondary"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <span>View University Projects</span>
              </motion.a>

              <motion.a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── Right Column: Portrait ── */}
          <motion.div
            className="hero-portrait-wrapper"
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Image frame */}
            <motion.div
              className="hero-image-frame"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={portfolioData.personal.avatar}
                alt={portfolioData.personal.fullName}
                className="hero-portrait-img"
              />

              {/* Badge 1 — Intern Ready */}
              <FloatingBadge
                delay={0.8}
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  background: 'rgba(255, 255, 255, 0.94)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid var(--border-color)',
                  padding: '0.45rem 0.9rem',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  boxShadow: 'var(--shadow-md)',
                  color: 'var(--text-primary)',
                  cursor: 'default',
                }}
              >
                <span className="pulse-dot" />
                <span>Intern Ready</span>
              </FloatingBadge>

              {/* Badge 2 — Degree info */}
              <FloatingBadge
                delay={1.0}
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '24px',
                  background: 'rgba(255, 255, 255, 0.94)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid var(--border-color)',
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  boxShadow: 'var(--shadow-md)',
                  color: 'var(--text-primary)',
                  cursor: 'default',
                }}
              >
                <GraduationCap size={16} color="var(--accent-primary)" />
                <span>Information Technology • Yr 3</span>
              </FloatingBadge>
            </motion.div>

            {/* Decorative back plate */}
            <div className="hero-backplate" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
