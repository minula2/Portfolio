import React from 'react';
import { UserCheck, Layers, GitBranch, CheckCircle2, Award, BookOpen, ShieldCheck, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const highlightIcons = [
    <Layers size={22} color="var(--text-primary)" />,
    <GitBranch size={22} color="var(--text-primary)" />,
    <ShieldCheck size={22} color="var(--text-primary)" />,
    <Zap size={22} color="var(--text-primary)" />
  ];

  return (
    <section id="about" className="section-wrapper" style={{ background: '#ffffff', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <UserCheck size={14} />
            <span>About Me</span>
          </span>
          <h2 className="section-title">
            Undergraduate Student with an <br />
            <span style={{ color: 'var(--text-secondary)' }}>Engineering & Builder's Mindset</span>
          </h2>
          <p className="section-subtitle">
            Combining university computer science rigor with hands-on full-stack development experience.
          </p>
        </div>

        {/* About Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left Column: Narrative Bio */}
          <div
            className="portox-card"
            style={{
              padding: '2.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.5rem' }}>
              <span
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <BookOpen size={20} color="var(--text-primary)" />
              </span>
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700 }}>Background & Journey</h3>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                  BSc (Hons) in Software Engineering • Undergraduate
                </p>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
              {portfolioData.about.paragraphs[0]}
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
              {portfolioData.about.paragraphs[1]}
            </p>
            <p style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '1.02rem', lineHeight: 1.7 }}>
              {portfolioData.about.paragraphs[2]}
            </p>

            {/* Quick Skills Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.75rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
              {['Object-Oriented Programming', 'REST API Architecture', 'MERN Stack', 'Playwright Testing', 'Agile Collaboration', 'Git Flow'].map((tag, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    padding: '0.35rem 0.85rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: 4 Pillar Highlight Cards */}
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
                className="portox-card"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {highlightIcons[index]}
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{highlight.title}</h4>
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
