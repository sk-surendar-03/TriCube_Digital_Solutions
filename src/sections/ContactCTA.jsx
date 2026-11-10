import React from 'react';

export default function ContactCTA() {
  return (
    <section id="contact" style={{ background: '#1B6F64', color: '#FFFFFF' }}>
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '88px 40px',
          boxSizing: 'border-box',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '40px',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ flex: '1 1 480px', minWidth: 0 }}>
          <h2
            style={{
              fontFamily: "'Source Serif 4', Georgia, serif",
              fontWeight: 600,
              fontSize: '40px',
              lineHeight: 1.15,
              letterSpacing: '-0.015em',
              margin: '0 0 16px 0'
            }}
          >
            Discuss your next programme with our team.
          </h2>
          <p style={{ fontSize: '18px', lineHeight: 1.6, margin: 0, maxWidth: '600px', color: '#EAF1FA' }}>
            Tell us what you are trying to achieve. A senior member of our team will respond within business days.
          </p>
        </div>

        <a
          className="btnlight"
          href="mailto:[EMAIL ADDRESS]"
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
