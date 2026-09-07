import React, { useState } from 'react';
import { Mail, Copy, Check, MapPin, Send, MessageSquare, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Internship Opportunity / Software Engineering Inquiry',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: 'Internship Opportunity / Software Engineering Inquiry',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="section-wrapper" style={{ background: 'rgba(11, 17, 33, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Mail size={15} />
            <span>Contact</span>
          </span>
          <h2 className="section-title">
            Let's Connect for <span className="text-gradient">Internships</span>
          </h2>
          <p className="section-subtitle">
            I am actively seeking Full-Stack / Software Engineering internship opportunities. Feel free to reach out directly or drop a message!
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            maxWidth: '1020px',
            margin: '0 auto',
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Info & Quick Copy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div
              className="glass-card"
              style={{
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Ready to Add Value</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.6 }}>
                  Whether you're hiring interns for frontend, backend, or full-stack engineering, I'd love to chat about how my skills can support your engineering team.
                </p>
              </div>

              {/* Email Copy Card */}
              <div
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(99, 102, 241, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Mail size={20} color="var(--accent-primary)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Direct Email</div>
                    <a
                      href={`mailto:${portfolioData.personal.email}`}
                      style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}
                    >
                      {portfolioData.personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="btn btn-secondary"
                  style={{
                    padding: '0.5rem 0.9rem',
                    fontSize: '0.84rem',
                    color: copied ? 'var(--accent-emerald)' : 'var(--text-primary)',
                    borderColor: copied ? 'var(--accent-emerald)' : 'var(--border-color)',
                  }}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy'}</span>
                </button>
              </div>

              {/* Metadata details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-muted)',
                    }}
                  >
                    <MapPin size={18} />
                  </span>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Location</div>
                    <div style={{ fontSize: '0.94rem', color: 'var(--text-primary)' }}>
                      {portfolioData.personal.location}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-muted)',
                    }}
                  >
                    <GithubIcon size={18} />
                  </span>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>GitHub Repository</div>
                    <a
                      href={portfolioData.personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '0.94rem', color: 'var(--accent-primary)', textDecoration: 'underline' }}
                    >
                      github.com/minula2
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div
            className="glass-card"
            style={{
              padding: '2.25rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
              <MessageSquare size={20} color="var(--accent-cyan)" />
              <h3 style={{ fontSize: '1.35rem' }}>Send a Message</h3>
            </div>

            {submitted ? (
              <div
                style={{
                  padding: '2rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.2)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <Check size={24} color="var(--accent-emerald)" />
                </div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#ffffff' }}>Message Sent!</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  Thank you for reaching out. I'll get back to you as soon as possible!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.84rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                        marginBottom: '0.4rem',
                      }}
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-sm)',
                        color: '#ffffff',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.84rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                        marginBottom: '0.4rem',
                      }}
                    >
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="recruiter@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-sm)',
                        color: '#ffffff',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hi Minula, we came across your portfolio and would like to invite you for an internship interview..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{
                    padding: '0.85rem 1.6rem',
                    width: '100%',
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                >
                  <Send size={16} />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 880px) {
          .contact-grid {
            grid-template-columns: 1fr 1.25fr !important;
          }
        }
        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
