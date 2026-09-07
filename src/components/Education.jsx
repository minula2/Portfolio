import React from 'react';
import { GraduationCap, Calendar, BookOpen, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </span>
          <h2 className="section-title">
            Education & <span style={{ color: 'var(--text-secondary)' }}>Qualifications</span>
          </h2>
          <p className="section-subtitle">
            Formal computer science and software engineering studies backing my practical development capabilities.
          </p>
        </div>

        {/* Education List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '860px', margin: '0 auto' }}>
          {portfolioData.education.map((edu, index) => (
            <div
              key={index}
              className="portox-card"
              style={{
                padding: '2.5rem',
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
                      gap: '0.45rem',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      background: 'var(--bg-subtle)',
                      padding: '0.2rem 0.65rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--border-color)',
                      marginBottom: '0.65rem',
                    }}
                  >
                    <BookOpen size={13} />
                    <span>{edu.status}</span>
                  </div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.35rem' }}>{edu.degree}</h3>
                  <div style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>{edu.institution}</div>
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.35rem 0.85rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-color)',
                    fontSize: '0.84rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <Calendar size={14} />
                  <span>{edu.period}</span>
                </div>
              </div>

              {/* Description */}
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                {edu.description}
              </p>

              {/* Relevant Coursework */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div
                  style={{
                    fontSize: '0.78rem',
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
                        fontSize: '0.82rem',
                        fontWeight: 500,
                        padding: '0.3rem 0.75rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--bg-subtle)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
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
                  borderTop: '1px solid var(--border-subtle)',
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
                      gap: '0.55rem',
                      fontSize: '0.9rem',
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
