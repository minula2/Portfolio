import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Laptop } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="section-wrapper" style={{ background: '#ffffff', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Briefcase size={14} />
            <span>Practical Experience</span>
          </span>
          <h2 className="section-title">
            Engineering & <span style={{ color: 'var(--text-secondary)' }}>Project Leadership</span>
          </h2>
          <p className="section-subtitle">
            Demonstrating teamwork, version control rigor, and full-stack software delivery.
          </p>
        </div>

        {/* Experience List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '860px', margin: '0 auto' }}>
          {portfolioData.experience.map((exp, index) => (
            <div
              key={index}
              className="portox-card"
              style={{
                padding: '2.5rem',
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '1.25rem',
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
                    <Laptop size={13} />
                    <span>{exp.type}</span>
                  </div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.25rem' }}>{exp.role}</h3>
                  <div style={{ fontSize: '1.02rem', color: 'var(--text-secondary)' }}>{exp.organization}</div>
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
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Responsibilities list */}
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {exp.responsibilities.map((resp, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.65rem',
                      fontSize: '0.95rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                    }}
                  >
                    <CheckCircle2
                      size={17}
                      color="var(--accent-emerald)"
                      style={{ flexShrink: 0, marginTop: '3px' }}
                    />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
