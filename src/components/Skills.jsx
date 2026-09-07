import React, { useState } from 'react';
import { Cpu, Code2, Server, Database, Wrench, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend', icon: <Code2 size={16} /> },
    { id: 'backend', label: 'Backend & APIs', icon: <Server size={16} /> },
    { id: 'database', label: 'Databases', icon: <Database size={16} /> },
    { id: 'devops', label: 'DevOps & Tools', icon: <Wrench size={16} /> },
  ];

  const getFilteredCategories = () => {
    if (selectedCategory === 'all') {
      return portfolioData.skills.categories;
    }
    return portfolioData.skills.categories.filter((cat) => cat.id === selectedCategory);
  };

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'frontend':
        return <Code2 size={20} color="var(--accent-primary)" />;
      case 'backend':
        return <Server size={20} color="var(--accent-cyan)" />;
      case 'database':
        return <Database size={20} color="var(--accent-purple)" />;
      case 'devops':
        return <Wrench size={20} color="var(--accent-emerald)" />;
      default:
        return <Cpu size={20} color="var(--accent-primary)" />;
    }
  };

  return (
    <section id="skills" className="section-wrapper" style={{ background: 'rgba(11, 17, 33, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Cpu size={15} />
            <span>Skills & Tooling</span>
          </span>
          <h2 className="section-title">
            Modern Full-Stack <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="section-subtitle">
            Technologies and frameworks I have hands-on experience building with across projects and coursework.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.6rem',
            marginBottom: '3rem',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.55rem 1.15rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: '1px solid',
                borderColor: selectedCategory === cat.id ? 'var(--accent-primary)' : 'var(--border-color)',
                background: selectedCategory === cat.id ? 'rgba(99, 102, 241, 0.18)' : 'rgba(255, 255, 255, 0.03)',
                color: selectedCategory === cat.id ? '#ffffff' : 'var(--text-secondary)',
              }}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid by Category */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {getFilteredCategories().map((cat) => (
            <div
              key={cat.id}
              className="glass-card"
              style={{
                padding: '2rem',
              }}
            >
              {/* Category Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--border-color)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {getCategoryIcon(cat.id)}
                  </span>
                  <div>
                    <h3 style={{ fontSize: '1.25rem' }}>{cat.name}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{cat.description}</p>
                  </div>
                </div>

                <span
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                  }}
                >
                  {cat.items.length} Technologies
                </span>
              </div>

              {/* Skills Items Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                  gap: '1rem',
                }}
              >
                {cat.items.map((skill, index) => (
                  <div
                    key={index}
                    style={{
                      padding: '1rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent-primary)';
                      e.currentTarget.style.background = 'rgba(99, 102, 241, 0.06)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.96rem', color: 'var(--text-primary)' }}>
                        {skill.name}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                        {skill.tag}
                      </div>
                    </div>

                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '0.2rem 0.55rem',
                        borderRadius: 'var(--radius-full)',
                        background:
                          skill.level === 'Advanced' || skill.level === 'Expert'
                            ? 'rgba(16, 185, 129, 0.12)'
                            : 'rgba(99, 102, 241, 0.12)',
                        color:
                          skill.level === 'Advanced' || skill.level === 'Expert'
                            ? 'var(--accent-emerald)'
                            : 'var(--accent-primary)',
                      }}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
