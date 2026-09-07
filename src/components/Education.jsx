import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section-wrapper" style={{ background: 'rgba(11, 17, 33, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <GraduationCap size={15} />
            <span>Education</span>
          </span>
          <h2 className="section-title">
            Academic <span className="text-gradient">Foundations</span>
          </h2>
          <p className="section-subtitle">
            Formal computer science and software engineering education supporting my practical development capabilities.
          </p>
        </div>

        {/* Education Timeline / Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '880px', margin: '0 auto' }}>
          {portfolioData.education.map((edu, index) => (
            <div
              key={index}
              className="glass-card"
              style={{
                padding: '2.25rem',
                position: 'relative',
              }}
            >
              {/* Header Info */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '1rem',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: 'var(--accent-primary)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    <BookOpen size={14} />
                    <span>{edu.status}</span>
                  </div>
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.35rem' }}>{edu.degree}</h3>
                  <div style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>{edu.institution}</div>
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.35rem 0.85rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-color)',
                    fontSize: '0.84rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  <Calendar size={14} />
                  <span>{edu.period}</span>
                </div>
              </div>

              {/* Description */}
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {edu.description}
              </p>

              {/* Relevant Coursework */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    marginBottom: '0.75rem',
                  }}
                >
                  Key Coursework & Modules:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {edu.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.84rem',
                        padding: '0.3rem 0.75rem',
                        borderRadius: '6px',
                        background: 'rgba(99, 102, 241, 0.08)',
                        border: '1px solid rgba(99, 102, 241, 0.18)',
                        color: '#c7d2fe',
                      }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Academic Highlights */}
              <div
                style={{
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}
              >
                {edu.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <CheckCircle size={15} color="var(--accent-emerald)" />
                    <span>{highlight}</span>
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
