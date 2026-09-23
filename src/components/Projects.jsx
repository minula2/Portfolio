import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, CheckCircle2, Code2, ArrowUpRight, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';

/* ─── CSS injected once for carousel animations ──────────────────────────── */
const CAROUSEL_CSS = `
@keyframes _cs-slide-right {
  from { opacity:0; transform:translateX(48px); }
  to   { opacity:1; transform:translateX(0); }
}
@keyframes _cs-slide-left {
  from { opacity:0; transform:translateX(-48px); }
  to   { opacity:1; transform:translateX(0); }
}
@keyframes _cs-fade {
  from { opacity:0; }
  to   { opacity:1; }
}
@keyframes _cs-progress {
  from { width:0%; }
  to   { width:100%; }
}
._cs-enter-right { animation: _cs-slide-right 0.42s cubic-bezier(.22,1,.36,1) forwards; }
._cs-enter-left  { animation: _cs-slide-left  0.42s cubic-bezier(.22,1,.36,1) forwards; }
._cs-enter-fade  { animation: _cs-fade         0.38s ease forwards; }
._cs-dot {
  width:7px; height:7px; border-radius:50%;
  background:rgba(255,255,255,0.35);
  border:none; cursor:pointer; padding:0; flex-shrink:0;
  transition: all 0.25s ease;
}
._cs-dot._cs-dot-active { background:#fff; width:20px; border-radius:4px; }
._cs-dot:hover { background:rgba(255,255,255,0.7); }
._cs-arrow {
  width:32px; height:32px; border-radius:50%;
  background:rgba(255,255,255,0.18);
  backdrop-filter:blur(8px);
  border:1px solid rgba(255,255,255,0.28);
  color:#fff; cursor:pointer;
  display:flex; align-items:center; justify-content:center;
  transition: all 0.2s ease;
}
._cs-arrow:hover { background:rgba(255,255,255,0.32); transform:scale(1.1); }
._cs-arrow:active { transform:scale(0.95); }
.proj-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.proj-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 24px 60px rgba(0,0,0,0.13);
}
`;

/* ─── Carousel component ─────────────────────────────────────────────────── */
function ImageCarousel({ images, title }) {
  const imgs = Array.isArray(images) && images.length > 0 ? images : [];
  const count = imgs.length;
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState('fade'); // 'right' | 'left' | 'fade'
  const [key, setKey] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback((nextIdx, direction) => {
    setDir(direction);
    setKey(k => k + 1);
    setIdx(((nextIdx % count) + count) % count);
  }, [count]);

  const next = useCallback(() => goTo(idx + 1, 'right'), [idx, goTo]);
  const prev = useCallback(() => goTo(idx - 1, 'left'),  [idx, goTo]);

  useEffect(() => {
    if (count <= 1 || paused) return;
    timerRef.current = setInterval(next, 3500);
    return () => clearInterval(timerRef.current);
  }, [count, paused, next]);

  if (count === 0) {
    return (
      <div style={{
        height: '220px', background: 'var(--bg-subtle)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)',
      }}>
        <ImageIcon size={32} />
      </div>
    );
  }

  const animClass = dir === 'right' ? '_cs-enter-right'
                  : dir === 'left'  ? '_cs-enter-left'
                  : '_cs-enter-fade';

  return (
    <div
      style={{ position: 'relative', width: '100%', height: '220px',
               overflow: 'hidden', background: '#111',
               borderBottom: '1px solid var(--border-color)' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Image */}
      <img
        key={key}
        src={imgs[idx]}
        alt={`${title} – screenshot ${idx + 1}`}
        className={animClass}
        style={{
          width: '100%', height: '100%', objectFit: 'cover',
          position: 'absolute', inset: 0, display: 'block',
        }}
        onError={e => { e.currentTarget.style.opacity = '0'; }}
      />

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.52) 100%)',
      }} />

      {/* Counter */}
      <div style={{
        position: 'absolute', top: 10, right: 10,
        background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(6px)',
        color: '#fff', fontSize: '0.7rem', fontFamily: 'var(--font-mono)',
        padding: '0.18rem 0.52rem', borderRadius: '20px',
        border: '1px solid rgba(255,255,255,0.18)',
      }}>
        {idx + 1} / {count}
      </div>

      {/* Arrows */}
      {count > 1 && (
        <>
          <button
            className="_cs-arrow"
            onClick={e => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
            style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }}
          >
            <ChevronLeft size={15} />
          </button>
          <button
            className="_cs-arrow"
            onClick={e => { e.stopPropagation(); next(); }}
            aria-label="Next"
            style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)' }}
          >
            <ChevronRight size={15} />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {count > 1 && (
        <div style={{
          position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', alignItems: 'center', gap: '6px',
        }}>
          {imgs.map((_, i) => (
            <button
              key={i}
              className={`_cs-dot${i === idx ? ' _cs-dot-active' : ''}`}
              onClick={e => { e.stopPropagation(); goTo(i, i > idx ? 'right' : 'left'); }}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Progress bar (auto-play) */}
      {count > 1 && !paused && (
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '3px', background: 'rgba(255,255,255,0.18)',
        }}>
          <div
            key={`pb-${key}`}
            style={{
              height: '100%',
              background: 'rgba(255,255,255,0.75)',
              animation: '_cs-progress 3.5s linear forwards',
            }}
          />
        </div>
      )}
    </div>
  );
}

/* ─── Main Projects section ──────────────────────────────────────────────── */
export default function Projects() {
  /* Inject carousel CSS once */
  useEffect(() => {
    if (document.getElementById('_carousel-css')) return;
    const el = document.createElement('style');
    el.id = '_carousel-css';
    el.textContent = CAROUSEL_CSS;
    document.head.appendChild(el);
  }, []);

  return (
    <AnimatedSection
      id="projects"
      className="section-wrapper"
      style={{
        background: '#ffffff',
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <FolderGit2 size={14} />
            <span>University Projects</span>
          </span>
          <h2 className="section-title">
            Featured <span style={{ color: 'var(--text-secondary)' }}>Academic &amp; Practical Work</span>
          </h2>
          <p className="section-subtitle">
            Real IT and development projects, automated testing frameworks, and full-stack applications
            completed throughout my university degree.
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
            <motion.div
              key={project.id}
              className="portox-card proj-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                borderRadius: 'var(--radius-md)',
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, boxShadow: '0 24px 60px rgba(0,0,0,0.13)' }}
            >
              {/* Browser mockup bar */}
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                </div>
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

              {/* Image carousel */}
              <ImageCarousel
                images={project.images || (project.image ? [project.image] : [])}
                title={project.title}
              />

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

                  {/* Key Contributions */}
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
                      {project.keyFeatures.map((feat, i) => (
                        <li
                          key={i}
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
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom: tags + buttons */}
                <div>
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
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
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

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ flex: 1, padding: '0.65rem 1rem', fontSize: '0.86rem' }}
                    >
                      <GithubIcon size={16} />
                      <span>GitHub Code</span>
                      <ArrowUpRight size={14} />
                    </a>
                    <a
                      href="#contact"
                      className="btn btn-secondary"
                      style={{ padding: '0.65rem 1rem', fontSize: '0.86rem' }}
                    >
                      <span>Inquire</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
