import React from 'react';
import { UserCheck, Zap, Layers, GitBranch, Users, Award, BookOpen, Compass } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const highlightIcons = [
    <Layers size={24} color="var(--accent-primary)" />,
    <Zap size={24} color="var(--accent-cyan)" />,
    <GitBranch size={24} color="var(--accent-purple)" />,
    <Users size={24} color="var(--accent-emerald)" />
  ];

  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <UserCheck size={15} />
            <span>About Me</span>
          </span>
          <h2 className="section-title">
            Undergraduate Engineer with a <span className="text-gradient">Builder's Mindset</span>
          </h2>
          <p className="section-subtitle">
            Bridging foundational computer science theory with modern full-stack development.
          </p>
        </div>

        {/* About Main Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            marginBottom: '3rem',
          }}
          className="about-grid"
        >
          {/* Left: Bio card */}
          <div
            className="glass-card"
            style={{
              padding: '2.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(99, 102, 241, 0.15)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <BookOpen size={22} color="var(--accent-primary)" />
              </span>
              <div>
                <h3 style={{ fontSize: '1.35rem' }}>Who I Am</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Undergraduate • Computer Science / IT Student
                </p>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
              {portfolioData.about.paragraphs[0]}
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
              {portfolioData.about.paragraphs[1]}
            </p>
            <p style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '1.02rem', lineHeight: 1.7 }}>
              {portfolioData.about.paragraphs[2]}
            </p>

            {/* Quick tag list */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '1.5rem' }}>
              {['Object-Oriented Design', 'REST API Architecture', 'React State Management', 'Relational DB Modeling', 'Git Collaboration'].map((tag, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: '0.8rem',
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: 4 Pillar Highlight Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {portfolioData.about.highlights.map((highlight, index) => (
              <div
                key={index}
                className="glass-card"
                style={{
                  padding: '1.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {highlightIcons[index]}
                </div>
                <h4 style={{ fontSize: '1.1rem' }}>{highlight.title}</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {highlight.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
