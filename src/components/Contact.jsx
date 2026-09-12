import React, { useState } from 'react';
import { Mail, Copy, Check, MapPin, Send, MessageSquare, ExternalLink, AlertCircle } from 'lucide-react';
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
  const [errorMessage, setErrorMessage] = useState('');

  const targetEmail = portfolioData.personal.email; // minulasavindu2002@gmail.com

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(targetEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getGmailUrl = () => {
    const subject = encodeURIComponent(formData.subject || 'Internship Opportunity / Inquiry');
    const body = encodeURIComponent(
      formData.message
        ? `Hi Minula,\n\n${formData.message}\n\nFrom: ${formData.name || ''} (${formData.email || ''})`
        : 'Hi Minula,\n\nI reviewed your portfolio and would like to connect regarding an internship opportunity.'
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${subject}&body=${body}`;
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(formData.subject || 'Internship Opportunity / Inquiry');
    const body = encodeURIComponent(
      formData.message
        ? `${formData.message}\n\nFrom: ${formData.name || ''} (${formData.email || ''})`
        : 'Hi Minula,\n\nI would like to connect regarding an internship opportunity.'
    );
    return `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
<<<<<<< HEAD
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: 'Internship Opportunity / IT & Full-Stack Inquiry',
        message: '',
=======
    setErrorMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio Message from ${formData.name}: ${formData.subject}`,
          _template: 'table',
        }),
>>>>>>> b7f4da01daf004ca3f2c34ea7c9e0f6b1bd7f091
      });

      const result = await response.json();
      if (response.ok || result.success === 'true' || result.success === true) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: 'Internship Opportunity / Software Engineering Inquiry',
          message: '',
        });
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      console.warn('Form submission encountered an error, falling back to direct email:', err);
      // Fallback: direct window mailto or show direct email action
      setErrorMessage(
        'Direct web submission was blocked by your browser network. You can send directly via Gmail below!'
      );
    } finally {
      setIsSubmitting(false);
    }
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
<<<<<<< HEAD
            I am actively seeking Information Technology & Full - Stack Developer internship roles.Feel free to reach out directly or send a message below!
=======
            Have an internship opening or want to discuss full-stack projects? Send a message directly to my Gmail inbox or connect via GitHub!
>>>>>>> b7f4da01daf004ca3f2c34ea7c9e0f6b1bd7f091
          </p >
        </div >

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
      {/* Left Column: Direct Email & Quick Actions */}
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
              Whether you have an internship opening in frontend, backend, or full-stack engineering, I'd welcome the opportunity to discuss how I can contribute to your engineering team.
            </p>
          </div>

          {/* Direct Gmail Card */}
          <div
            style={{
              padding: '1.35rem',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--bg-subtle)',
              border: '1px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
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
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>Direct Gmail Inbox</div>
                  <a
                    href={`mailto:${targetEmail}`}
                    style={{ fontSize: '0.96rem', fontWeight: 600, color: 'var(--text-primary)' }}
                  >
                    {targetEmail}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="btn btn-secondary"
                style={{
                  padding: '0.45rem 0.95rem',
                  fontSize: '0.82rem',
                  background: '#ffffff',
                }}
              >
                {copied ? <Check size={14} color="var(--accent-emerald)" /> : <Copy size={14} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Direct 1-click open in Gmail */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href={getGmailUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                  flex: 1,
                  padding: '0.6rem 1rem',
                  fontSize: '0.84rem',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                <Mail size={15} />
                <span>Open Directly in Gmail</span>
                <ExternalLink size={13} />
              </a>

              <a
                href={getMailtoUrl()}
                className="btn btn-secondary"
                style={{
                  padding: '0.6rem 1rem',
                  fontSize: '0.84rem',
                  background: '#ffffff',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                <span>Default Mail App</span>
              </a>
            </div>
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
          <div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700 }}>Send Message to My Gmail</h3>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
              Delivers straight to {targetEmail}
            </p>
          </div>
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
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'rgba(22, 163, 74, 0.12)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
              }}
            >
              <Check size={26} color="var(--accent-emerald)" />
            </div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
              Message Sent to Minula's Inbox!
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Thank you for reviewing my portfolio and reaching out. Your message has been sent to <strong>{targetEmail}</strong>. I will get back to you shortly!
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn btn-secondary"
              style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {errorMessage && (
              <div
                style={{
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  background: '#fef2f2',
                  border: '1px solid #fecaca',
                  color: '#991b1b',
                  fontSize: '0.86rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                }}
              >
                <AlertCircle size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ flex: 1 }}>
                  {errorMessage}
                  <div style={{ marginTop: '0.4rem' }}>
                    <a
                      href={getGmailUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontWeight: 600, textDecoration: 'underline' }}
                    >
                      Click here to open in Gmail →
                    </a>
                  </div>
                </div>
              </div>
            )}

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
                  name="name"
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
                  name="email"
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
                name="subject"
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
                name="message"
                required
                rows={4}
                placeholder="Hi Minula, we reviewed your university projects and would like to invite you for an internship interview..."
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

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{
                  padding: '0.85rem 1.8rem',
                  opacity: isSubmitting ? 0.7 : 1,
                }}
              >
                <Send size={15} />
                <span>{isSubmitting ? 'Sending to Gmail...' : 'Send Message to Minula'}</span>
              </button>

              <a
                href={getGmailUrl()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.84rem',
                  color: 'var(--text-muted)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  textDecoration: 'underline',
                }}
              >
                <span>Or compose in Gmail</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
      </div >

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
    </AnimatedSection >
  );
}
