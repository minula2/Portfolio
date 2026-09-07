import React, { useState } from 'react';
import { ArrowRight, Download, Mail, Sparkles, Check, Copy, Code2, Database, Server } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('minula.ts');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    'minula.ts': `// Developer Profile
interface FullStackEngineer {
  name: string;
  role: string;
  education: string;
  seeking: string;
  skills: string[];
}

export const candidate: FullStackEngineer = {
  name: "Minula",
  role: "Full-Stack Developer",
  education: "BSc (Hons) IT / Software Engineering",
  seeking: "Internship (Immediate / Summer)",
  skills: [
    "React.js", "Node.js", "Java / Spring Boot",
    "PostgreSQL", "MongoDB", "REST APIs", "Docker"
  ],
  readyToContribute: true
};`,
    'tech-stack.json': `{
  "developer": "Minula",
  "frontend": ["React", "JavaScript (ES6+)", "HTML5/CSS3", "Vite"],
  "backend": ["Node.js", "Express", "Spring Boot", "REST APIs"],
  "databases": ["PostgreSQL", "MongoDB", "MySQL"],
  "devops_tools": ["Git", "GitHub", "Docker", "Vercel", "Postman"],
  "status": "Ready for Internship Interview"
}`,
    'status.sh': `#!/usr/bin/env bash
# Checking candidate availability
$ agy check-candidate --name "Minula"

[OK] Academic Foundations: Strong (Year 3 Undergraduate)
[OK] Problem Solving: Algorithms & Data Structures
[OK] Full-Stack Architecture: End-to-End Ready
[OK] Collaboration: Agile & Git Certified
>>> Status: 100% READY FOR INTERNSHIP OFFER`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      style={{
        paddingTop: '8.5rem',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden',
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
          {/* Left Column: Hero Text & Call to Actions */}
          <div>
            {/* Live Availability Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.45rem 1.1rem',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                borderRadius: 'var(--radius-full)',
                marginBottom: '1.5rem',
              }}
            >
              <span className="pulse-dot"></span>
              <span
                style={{
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  color: 'var(--accent-emerald)',
                  letterSpacing: '0.01em',
                }}
              >
                {portfolioData.personal.status}
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                marginBottom: '1.25rem',
              }}
            >
              Hi, I'm <span className="text-gradient">Minula</span>
              <br />
              <span className="text-gradient-cyan" style={{ fontSize: '0.9em' }}>
                Full-Stack Developer
              </span>
            </h1>

            {/* Value Proposition */}
            <p
              style={{
                fontSize: '1.12rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '560px',
                marginBottom: '2rem',
              }}
            >
              Undergraduate student passionate about engineering clean RESTful APIs,
              modular React user interfaces, and robust database architectures.
              Driven to learn rapidly and contribute value to dynamic software teams.
            </p>

            {/* Quick Metrics Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '1rem',
                padding: '1.25rem',
                background: 'rgba(255, 255, 255, 0.025)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                marginBottom: '2.25rem',
                maxWidth: '580px',
              }}
            >
              {portfolioData.personal.quickStats.map((stat, i) => (
                <div key={i}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.15rem' }}>
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <a href="#projects" className="btn btn-primary" style={{ padding: '0.85rem 1.6rem' }}>
                <span>View My Projects</span>
                <ArrowRight size={17} />
              </a>

              <a href="#contact" className="btn btn-secondary" style={{ padding: '0.85rem 1.5rem' }}>
                <Mail size={17} />
                <span>Contact for Internship</span>
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

          {/* Right Column: Interactive Code & Architecture Terminal */}
          <div>
            <div
              className="glass-card"
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px var(--accent-glow)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              {/* Terminal Window Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1rem',
                  background: 'rgba(10, 15, 29, 0.95)',
                  borderBottom: '1px solid var(--border-color)',
                }}
              >
                {/* Traffic lights */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ef4444' }}></span>
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#f59e0b' }}></span>
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#10b981' }}></span>
                  <span style={{ marginLeft: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    intern-profile ~ fullstack
                  </span>
                </div>

                {/* Copy button */}
                <button
                  onClick={handleCopy}
                  title="Copy snippet"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    background: 'transparent',
                    border: 'none',
                    color: copied ? 'var(--accent-emerald)' : 'var(--text-muted)',
                    fontSize: '0.78rem',
                    cursor: 'pointer',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Code File Tabs */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: 'rgba(15, 23, 42, 0.8)',
                  borderBottom: '1px solid var(--border-color)',
                  overflowX: 'auto',
                }}
              >
                {Object.keys(codeSnippets).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      padding: '0.6rem 1.1rem',
                      fontSize: '0.82rem',
                      fontFamily: 'var(--font-mono)',
                      background: activeTab === tab ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                      color: activeTab === tab ? 'var(--text-primary)' : 'var(--text-muted)',
                      border: 'none',
                      borderBottom: activeTab === tab ? '2px solid var(--accent-primary)' : '2px solid transparent',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Code Content Container */}
              <div
                style={{
                  padding: '1.3rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.86rem',
                  lineHeight: 1.6,
                  color: '#cbd5e1',
                  background: '#0a0f1d',
                  overflowX: 'auto',
                  minHeight: '290px',
                }}
              >
                <pre style={{ margin: 0 }}>
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Terminal Footer Info */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.65rem 1rem',
                  background: 'rgba(10, 15, 29, 0.85)',
                  borderTop: '1px solid var(--border-color)',
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Code2 size={13} color="var(--accent-primary)" /> Frontend
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Server size={13} color="var(--accent-cyan)" /> Backend
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Database size={13} color="var(--accent-purple)" /> Databases
                  </span>
                </div>
                <span style={{ color: 'var(--accent-emerald)' }}>UTF-8</span>
              </div>
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
