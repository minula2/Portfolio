import React, { useState } from 'react';
import { Mail, Copy, Check, MapPin, Send, MessageSquare } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Internship Opportunity / IT & Full-Stack Inquiry',
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
        subject: 'Internship Opportunity / IT & Full-Stack Inquiry',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 5000);
    }, 700);
  };

  return (
    <AnimatedSection id="contact" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Mail size={14} />
            <span>Get in Touch</span>
          </span>
          <h2 className="section-title">
            Let's Connect for <span style={{ color: 'var(--text-secondary)' }}>Internship Opportunities</span>
          </h2>
          <p className="section-subtitle">
            I am actively seeking Information Technology & Full-Stack Developer internship roles. Feel free to reach out directly or send a message below!
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div
              className="portox-card"
              style={{
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.75rem',
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                  Ready to Contribute
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                  Whether you have an internship opening in frontend, backend, or full-stack engineering, I'd welcome the chance to talk about how I can add value to your team.
                </p>
              </div>

              {/* Email Direct Box with Copy Button */}
              <div
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: '#ffffff',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Mail size={18} color="var(--text-primary)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Direct Email</div>
                    <a
                      href={`mailto:${portfolioData.personal.email}`}
                      style={{ fontSize: '0.96rem', fontWeight: 600, color: 'var(--text-primary)' }}
                    >
                      {portfolioData.personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="btn btn-secondary"
                  style={{
                    padding: '0.5rem 1rem',
                    fontSize: '0.82rem',
                    background: '#ffffff',
                  }}
                >
                  {copied ? <Check size={14} color="var(--accent-emerald)" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy'}</span>
                </button>
              </div>

              {/* Location & GitHub */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <span
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-primary)',
                    }}
                  >
                    <MapPin size={17} />
                  </span>
                  <div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>Location</div>
                    <div style={{ fontSize: '0.94rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                      {portfolioData.personal.location}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <span
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-primary)',
                    }}
                  >
                    <GithubIcon size={17} />
                  </span>
                  <div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>GitHub Profile</div>
                    <a
                      href={portfolioData.personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '0.94rem', fontWeight: 500, color: 'var(--text-primary)', textDecoration: 'underline' }}
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
            className="portox-card"
            style={{
              padding: '2.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.75rem' }}>
              <MessageSquare size={20} color="var(--text-primary)" />
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700 }}>Send a Message</h3>
            </div>

            {submitted ? (
              <div
                style={{
                  padding: '2.5rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border-color)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'rgba(22, 163, 74, 0.12)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <Check size={24} color="var(--accent-emerald)" />
                </div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                  Message Sent!
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  Thank you for reaching out. I will respond to your email promptly!
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
                        marginBottom: '0.45rem',
                      }}
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        background: '#ffffff',
                        border: '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-primary)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--text-primary)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border-color)')}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.84rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                        marginBottom: '0.45rem',
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
                        background: '#ffffff',
                        border: '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-primary)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--text-primary)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border-color)')}
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
                      marginBottom: '0.45rem',
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
                      background: '#ffffff',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
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
                      marginBottom: '0.45rem',
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hi Minula, we reviewed your university projects and would like to discuss an internship opportunity with you..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: '#ffffff',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
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
                  <Send size={15} />
                  <span>{isSubmitting ? 'Sending...' : 'Send Inquiry'}</span>
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
    </AnimatedSection>
  );
}
