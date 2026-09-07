import React from 'react';
import { ArrowRight, Mail, MapPin, GraduationCap, Sparkles, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        paddingTop: '8.5rem',
        paddingBottom: '5rem',
        position: 'relative',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Bio & Value Proposition */}
          <div>
            {/* Live Availability Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 1rem',
                background: '#ffffff',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-full)',
                marginBottom: '1.5rem',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <span className="pulse-dot"></span>
              <span
                style={{
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}
              >
                {portfolioData.personal.status}
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5.2vw, 3.8rem)',
                fontWeight: 800,
                letterSpacing: '-0.035em',
                lineHeight: 1.15,
                marginBottom: '1.25rem',
                color: 'var(--text-primary)',
              }}
            >
              Hey, I'm {portfolioData.personal.name} —
              <br />
              <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>
                Full-Stack Developer
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '1.12rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '560px',
                marginBottom: '2rem',
              }}
            >
              Undergraduate student specializing in Software Engineering. Focused on building clean
              RESTful architectures, responsive React interfaces, and robust database systems.
              Eager to contribute and grow through an internship role.
            </p>

            {/* Quick Metrics Strip */}
            <div
              className="portox-card"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: '1rem',
                padding: '1.25rem 1.5rem',
                marginBottom: '2.25rem',
                maxWidth: '560px',
              }}
            >
              {portfolioData.personal.quickStats.map((stat, i) => (
                <div key={i}>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.9rem', alignItems: 'center' }}>
              <a href="#contact" className="btn btn-primary" style={{ padding: '0.85rem 1.6rem' }}>
                <span>Get In Touch</span>
                <ArrowRight size={16} />
              </a>

              <a href="#projects" className="btn btn-secondary" style={{ padding: '0.85rem 1.6rem' }}>
                <span>View University Projects</span>
              </a>

              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ padding: '0.85rem 1.25rem' }}
                title="GitHub"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: User Portrait Frame (Portox Editorial Style) */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '420px',
              }}
            >
              {/* Image Frame Card */}
              <div
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '12px',
                  boxShadow: 'var(--shadow-lg)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={portfolioData.personal.avatar}
                  alt={portfolioData.personal.fullName}
                  style={{
                    width: '100%',
                    height: '460px',
                    objectFit: 'cover',
                    borderRadius: 'calc(var(--radius-lg) - 8px)',
                    display: 'block',
                  }}
                />

                {/* Floating badge 1 (Top right: Ready to contribute) */}
                <div
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
                  }}
                >
                  <span className="pulse-dot"></span>
                  <span>Intern Ready</span>
                </div>

                {/* Floating badge 2 (Bottom left: Degree info) */}
                <div
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
                  }}
                >
                  <GraduationCap size={16} color="var(--accent-primary)" />
                  <span>Software Engineering • Yr 3</span>
                </div>
              </div>

              {/* Decorative Subtle Background Backplate */}
              <div
                style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '-12px',
                  width: '100%',
                  height: '100%',
                  background: 'var(--bg-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-subtle)',
                  zIndex: -1,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
