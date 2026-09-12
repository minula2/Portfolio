import React, { useState } from 'react';
import { Cpu, Code2, Server, Database, Wrench, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend', icon: <Code2 size={16} /> },
    { id: 'backend', label: 'Backend & APIs', icon: <Server size={16} /> },
    { id: 'database', label: 'Databases', icon: <Database size={16} /> },
    { id: 'devops', label: 'Testing & DevOps', icon: <Wrench size={16} /> },
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
        return <Code2 size={20} color="var(--text-primary)" />;
      case 'backend':
        return <Server size={20} color="var(--text-primary)" />;
      case 'database':
        return <Database size={20} color="var(--text-primary)" />;
      case 'devops':
        return <Wrench size={20} color="var(--text-primary)" />;
      default:
        return <Cpu size={20} color="var(--text-primary)" />;
    }
  };

  return (
    <AnimatedSection id="skills" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Cpu size={14} />
            <span>Skills & Tooling</span>
          </span>
          <h2 className="section-title">
            Technologies & <span style={{ color: 'var(--text-secondary)' }}>Developer Tools</span>
          </h2>
          <p className="section-subtitle">
            Languages, frameworks, databases, and testing environments I have hands-on experience building with across university modules and personal projects.
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
                padding: '0.55rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: '1px solid',
                borderColor: selectedCategory === cat.id ? '#09090b' : 'var(--border-color)',
                background: selectedCategory === cat.id ? '#09090b' : '#ffffff',
                color: selectedCategory === cat.id ? '#ffffff' : 'var(--text-secondary)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Categories Grouping */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {getFilteredCategories().map((cat) => (
            <div
              key={cat.id}
              className="portox-card"
              style={{
                padding: '2.25rem',
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
                  marginBottom: '1.75rem',
                  paddingBottom: '1.25rem',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <span
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {getCategoryIcon(cat.id)}
                  </span>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{cat.name}</h3>
                    <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>{cat.description}</p>
                  </div>
                </div>

                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    color: 'var(--text-muted)',
                    background: 'var(--bg-subtle)',
                    padding: '0.25rem 0.8rem',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  {cat.items.length} Competencies
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
                      padding: '1rem 1.15rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-hover)';
                      e.currentTarget.style.background = '#ffffff';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                      e.currentTarget.style.background = 'var(--bg-subtle)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.94rem', color: 'var(--text-primary)' }}>
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
                            ? 'rgba(22, 163, 74, 0.1)'
                            : 'rgba(9, 9, 11, 0.06)',
                        color:
                          skill.level === 'Advanced' || skill.level === 'Expert'
                            ? 'var(--accent-emerald)'
                            : 'var(--text-secondary)',
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
    </AnimatedSection>
  );
}
