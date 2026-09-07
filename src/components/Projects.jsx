import { FolderGit2, ExternalLink, Sparkles, CheckCircle2, Code, Terminal, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const getAccentGradient = (accent) => {
    switch (accent) {
      case 'cyan':
        return 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)';
      case 'purple':
        return 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)';
      case 'emerald':
        return 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)';
      case 'blue':
      default:
        return 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)';
    }
  };

  return (
    <section id="projects" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <FolderGit2 size={15} />
            <span>Featured Work</span>
          </span>
          <h2 className="section-title">
            Featured <span className="text-gradient">Full-Stack Projects</span>
          </h2>
          <p className="section-subtitle">
            Curated software engineering and full-stack projects showcasing scalable architectures, RESTful APIs, and responsive frontends.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
          }}
        >
          {portfolioData.projects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* Card Accent Top Banner */}
              <div
                style={{
                  height: '4px',
                  width: '100%',
                  background: getAccentGradient(project.accent),
                }}
              />

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
                  {/* Top Metadata Row */}
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
                        color: 'var(--accent-cyan)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {project.category}
                    </span>

                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '0.25rem 0.65rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(99, 102, 241, 0.12)',
                        border: '1px solid rgba(99, 102, 241, 0.25)',
                        color: 'var(--accent-primary)',
                      }}
                    >
                      {project.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '1.35rem',
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
                      fontSize: '0.94rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem',
                    }}
                  >
                    {project.summary}
                  </p>

                  {/* Technical Highlights */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        marginBottom: '0.6rem',
                      }}
                    >
                      Key Implementation Highlights:
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      {project.keyFeatures.map((feature, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.5rem',
                            fontSize: '0.88rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.5,
                          }}
                        >
                          <CheckCircle2
                            size={15}
                            color="var(--accent-emerald)"
                            style={{ flexShrink: 0, marginTop: '3px' }}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Section: Tech Tags & Links */}
                <div>
                  {/* Tech Tags */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      paddingTop: '1.25rem',
                      marginBottom: '1.5rem',
                      borderTop: '1px solid var(--border-color)',
                    }}
                  >
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.78rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '6px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          color: '#e2e8f0',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      style={{
                        flex: 1,
                        padding: '0.6rem 1rem',
                        fontSize: '0.88rem',
                      }}
                    >
                      <GithubIcon size={16} />
                      <span>Source Code</span>
                    </a>

                    <a
                      href="#contact"
                      className="btn btn-outline"
                      style={{
                        padding: '0.6rem 1rem',
                        fontSize: '0.88rem',
                      }}
                    >
                      <ExternalLink size={16} />
                      <span>Details</span>
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
