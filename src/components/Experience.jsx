import React from 'react';
import { Briefcase, Calendar, CheckCircle2, ChevronRight, Laptop } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Briefcase size={15} />
            <span>Experience & Leadership</span>
          </span>
          <h2 className="section-title">
            Hands-on <span className="text-gradient">Engineering Experience</span>
          </h2>
          <p className="section-subtitle">
            Demonstrating teamwork, version control rigor, and full-stack software delivery.
          </p>
        </div>

        {/* Experience List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '880px', margin: '0 auto' }}>
          {portfolioData.experience.map((exp, index) => (
            <div
              key={index}
              className="glass-card"
              style={{
                padding: '2.25rem',
                position: 'relative',
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
                      gap: '0.4rem',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: 'var(--accent-cyan)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    <Laptop size={14} />
                    <span>{exp.type}</span>
                  </div>
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.25rem' }}>{exp.role}</h3>
                  <div style={{ fontSize: '1.02rem', color: 'var(--text-secondary)' }}>{exp.organization}</div>
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
                      fontSize: '0.94rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                    }}
                  >
                    <CheckCircle2
                      size={17}
                      color="var(--accent-primary)"
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
    </section>
  );
}
