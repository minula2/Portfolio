import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Code2, Server, Database, Wrench, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';
import MarqueeTicker from './MarqueeTicker';

/* ── All skill names flattened into a single ticker array ─────────────── */
const allSkills = portfolioData.skills.categories.flatMap((cat) =>
  cat.items.map((item) => ({ label: item.name }))
);

const getCategoryIcon = (id) => {
  switch (id) {
    case 'frontend': return <Code2 size={20} color="var(--text-primary)" />;
    case 'backend':  return <Server size={20} color="var(--text-primary)" />;
    case 'database': return <Database size={20} color="var(--text-primary)" />;
    case 'devops':   return <Wrench size={20} color="var(--text-primary)" />;
    default:         return <Cpu size={20} color="var(--text-primary)" />;
  }
};

/* ── Single skill pill with hover ───────────────────────────────────────── */
function SkillPill({ skill, index }) {
  return (
    <motion.div
      key={skill.name}
      className="skill-pill"
      initial={{ opacity: 0, y: 16, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.9 }}
      transition={{ duration: 0.38, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3, scale: 1.03 }}
    >
      <div>
        <div className="skill-pill-name">{skill.name}</div>
        <div className="skill-pill-tag">{skill.tag}</div>
      </div>
      <span
        className="skill-pill-level"
        data-level={skill.level === 'Advanced' || skill.level === 'Expert' ? 'high' : 'mid'}
      >
        {skill.level}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all',      label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend',         icon: <Code2 size={16} /> },
    { id: 'backend',  label: 'Backend & APIs',   icon: <Server size={16} /> },
    { id: 'database', label: 'Databases',        icon: <Database size={16} /> },
    { id: 'devops',   label: 'Testing & DevOps', icon: <Wrench size={16} /> },
  ];

  const getFilteredCategories = () => {
    if (selectedCategory === 'all') return portfolioData.skills.categories;
    return portfolioData.skills.categories.filter((cat) => cat.id === selectedCategory);
  };

  return (
    <AnimatedSection id="skills" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-badge">
            <Cpu size={14} />
            <span>Skills & Tooling</span>
          </span>
          <h2 className="section-title">
            Technologies &{' '}
            <span style={{ color: 'var(--text-secondary)' }}>Developer Tools</span>
          </h2>
          <p className="section-subtitle">
            Languages, frameworks, databases, and testing environments I have hands-on experience
            building with across university modules and personal projects.
          </p>
        </motion.div>
      </div>

      {/* ── Relume-style infinite marquee strip ─────────────────────────── */}
      <div className="skills-marquee-section">
        <MarqueeTicker
          items={allSkills}
          speed={28}
          label="Tech stack"
        />
        <MarqueeTicker
          items={[...allSkills].reverse()}
          speed={22}
          reverse={true}
        />
      </div>

      <div className="container">
        {/* Category Filters */}
        <motion.div
          className="skills-filter-bar"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              className={`skills-filter-btn${selectedCategory === cat.id ? ' is-active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
              whileHover={{ y: -2, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.18 }}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Categories */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <AnimatePresence mode="wait">
            {getFilteredCategories().map((cat) => (
              <motion.div
                key={cat.id + selectedCategory}
                className="portox-card skills-cat-card"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Category Header */}
                <div className="skills-cat-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <motion.span
                      className="skills-cat-icon"
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      transition={{ duration: 0.25 }}
                    >
                      {getCategoryIcon(cat.id)}
                    </motion.span>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{cat.name}</h3>
                      <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                        {cat.description}
                      </p>
                    </div>
                  </div>
                  <span className="skills-count-badge">{cat.items.length} Competencies</span>
                </div>

                {/* Skill pills grid */}
                <div className="skills-pills-grid">
                  <AnimatePresence>
                    {cat.items.map((skill, index) => (
                      <SkillPill key={skill.name} skill={skill} index={index} />
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </AnimatedSection>
  );
}
