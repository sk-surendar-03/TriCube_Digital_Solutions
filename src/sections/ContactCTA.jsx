import React from 'react';

export default function ContactCTA() {
  return (
    <section id="contact" style={{ background: '#1B6F64', color: '#FFFFFF' }}>
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: 'clamp(56px, 8vw, 88px) clamp(20px, 4vw, 40px)',
          boxSizing: 'border-box',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '40px',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ flex: '1 1 480px', minWidth: 0, maxWidth: '720px' }}>
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 600,
              fontSize: 'clamp(28px, 3.5vw + 0.5rem, 42px)',
              lineHeight: 1.2,
              letterSpacing: '-0.015em',
              margin: '0 0 16px 0',
              color: '#FFFFFF',
              textWrap: 'balance'
            }}
          >
            Discuss your next programme with our team.
          </h2>
          <p style={{ fontSize: 'clamp(16px, 2.5vw, 18px)', lineHeight: 1.6, margin: 0, maxWidth: '600px', color: '#EAF1FA' }}>
            Tell us what you are trying to achieve. A senior member of our team will respond within business days.
          </p>
        </div>

        <a
          className="btnlight"
          href="/contact"
          style={{
            background: '#FFFFFF',
            color: '#14264F',
            fontWeight: 600,
            fontSize: '16px',
            padding: '0 32px',
            minHeight: '56px',
            display: 'inline-flex',
            alignItems: 'center'
          }}
        >
          Contact us
        </a>
      </div>
    </section>
  );
}
