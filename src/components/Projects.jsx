import React from 'react';
import { FolderGit2, ExternalLink, CheckCircle2, Code2, Terminal, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="section-wrapper" style={{ background: '#ffffff', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <FolderGit2 size={14} />
            <span>University Projects</span>
          </span>
          <h2 className="section-title">
            Featured <span style={{ color: 'var(--text-secondary)' }}>Academic & Practical Work</span>
          </h2>
          <p className="section-subtitle">
            Real software engineering projects, automated testing frameworks, and full-stack applications completed throughout my university degree.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {portfolioData.projects.map((project, index) => (
            <div
              key={project.id}
              className={`portox-card animate-fade-up delay-${(index % 5) + 1}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                borderRadius: 'var(--radius-md)',
              }}
            >
              {/* Portox Browser Mockup Frame */}
              <div
                style={{
                  background: 'var(--bg-subtle)',
                  borderBottom: '1px solid var(--border-color)',
                  padding: '0.85rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                {/* Window Traffic Dots */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }}></span>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }}></span>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }}></span>
                </div>

                {/* Minimalist URL slug */}
                <div
                  style={{
                    background: '#ffffff',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-full)',
                    padding: '0.2rem 0.85rem',
                    fontSize: '0.74rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-muted)',
                  }}
                >
                  github.com/{project.id}
                </div>

                <Code2 size={15} color="var(--text-muted)" />
              </div>

              {/* Project Image */}
              {project.image && (
                <div style={{ width: '100%', height: '220px', overflow: 'hidden', borderBottom: '1px solid var(--border-color)', background: 'var(--bg-subtle)' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.4s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>
              )}

              {/* Card Body */}
              <div
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  {/* Category & Badge */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1rem',
                      gap: '0.5rem',
                      flexWrap: 'wrap',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {project.category}
                    </span>

                    <span
                      style={{
                        fontSize: '0.76rem',
                        fontWeight: 600,
                        padding: '0.25rem 0.75rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--bg-subtle)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {project.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      marginBottom: '0.75rem',
                      lineHeight: 1.3,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem',
                    }}
                  >
                    {project.summary}
                  </p>

                  {/* Key Implementation Highlights */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        marginBottom: '0.65rem',
                      }}
                    >
                      Key Technical Contributions:
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {project.keyFeatures.map((feature, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.55rem',
                            fontSize: '0.88rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.5,
                          }}
                        >
                          <CheckCircle2
                            size={16}
                            color="var(--accent-emerald)"
                            style={{ flexShrink: 0, marginTop: '2px' }}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Section: Tech Tags & Action Buttons */}
                <div>
                  {/* Tech Tags */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.45rem',
                      paddingTop: '1.25rem',
                      marginBottom: '1.5rem',
                      borderTop: '1px solid var(--border-subtle)',
                    }}
                  >
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.76rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '6px',
                          background: 'var(--bg-subtle)',
                          border: '1px solid var(--border-color)',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{
                        flex: 1,
                        padding: '0.65rem 1rem',
                        fontSize: '0.86rem',
                      }}
                    >
                      <GithubIcon size={16} />
                      <span>GitHub Code</span>
                      <ArrowUpRight size={14} />
                    </a>

                    <a
                      href="#contact"
                      className="btn btn-secondary"
                      style={{
                        padding: '0.65rem 1rem',
                        fontSize: '0.86rem',
                      }}
                    >
                      <span>Inquire</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
