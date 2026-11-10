import React from 'react';

export default function CoreExpertise() {
  return (
    <section id="expertise" style={{ background: '#F3F5F9', borderTop: '1px solid #D5DBE3' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '112px 40px', boxSizing: 'border-box' }}>
        <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.14em', color: '#1F7A6E', marginBottom: '20px' }}>
          OUR CORE EXPERTISE
        </div>

        <h2
          style={{
            fontFamily: "'Source Serif 4', Georgia, serif",
            fontWeight: 600,
            fontSize: '44px',
            lineHeight: 1.15,
            letterSpacing: '-0.015em',
            margin: '0 0 72px 0',
            maxWidth: '780px',
            color: '#14264F'
          }}
        >
          Technology solutions and practical learning for a digital future.
        </h2>

        <div className="coregrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
          {/* Pillar 1: Software Development */}
          <div className="core core-a" style={{ padding: '0 56px 0 0', minWidth: 0, boxSizing: 'border-box' }}>
            <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.14em', color: '#1F7A6E', marginBottom: '20px' }}>
              01 &nbsp;SOFTWARE DEVELOPMENT
            </div>
            <h3
              style={{
                fontFamily: "'Source Serif 4', Georgia, serif",
                fontWeight: 600,
                fontSize: '30px',
                lineHeight: 1.3,
                letterSpacing: '-0.01em',
                color: '#14264F',
                margin: '0 0 32px 0',
                maxWidth: '460px'
              }}
            >
              Building reliable digital products, business applications and custom software solutions.
            </h3>

            <div style={{ borderTop: '1px solid #14264F', maxWidth: '460px' }}>
              <div style={{ padding: '18px 0', borderBottom: '1px solid #C4CAD6', fontSize: '17px', fontWeight: 500, color: '#14264F' }}>
                Digital products
              </div>
              <div style={{ padding: '18px 0', borderBottom: '1px solid #C4CAD6', fontSize: '17px', fontWeight: 500, color: '#14264F' }}>
                Business applications
              </div>
              <div style={{ padding: '18px 0', borderBottom: '1px solid #C4CAD6', fontSize: '17px', fontWeight: 500, color: '#14264F' }}>
                Custom software solutions
              </div>
            </div>

            <a
              className="corelink"
              href="#services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: '44px',
                marginTop: '28px',
                color: '#1F7A6E',
                fontWeight: 600,
                fontSize: '16px',
                textDecoration: 'underline',
                textUnderlineOffset: '4px'
              }}
            >
              View software development services
              <span aria-hidden="true" style={{ marginLeft: '8px' }}>
                →
              </span>
            </a>
          </div>

          {/* Pillar 2: IT Training */}
          <div className="core core-b" style={{ padding: '0 0 0 56px', minWidth: 0, boxSizing: 'border-box' }}>
            <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.14em', color: '#1F7A6E', marginBottom: '20px' }}>
              02 &nbsp;IT TRAINING
            </div>
            <h3
              style={{
                fontFamily: "'Source Serif 4', Georgia, serif",
                fontWeight: 600,
                fontSize: '30px',
                lineHeight: 1.3,
                letterSpacing: '-0.01em',
                color: '#14264F',
                margin: '0 0 32px 0',
                maxWidth: '460px'
              }}
            >
              Developing practical technology skills through professional courses and hands-on learning.
            </h3>

            <div style={{ borderTop: '1px solid #14264F', maxWidth: '460px' }}>
              <div style={{ padding: '18px 0', borderBottom: '1px solid #C4CAD6', fontSize: '17px', fontWeight: 500, color: '#14264F' }}>
                Professional courses
              </div>
              <div style={{ padding: '18px 0', borderBottom: '1px solid #C4CAD6', fontSize: '17px', fontWeight: 500, color: '#14264F' }}>
                Hands-on learning
              </div>
              <div style={{ padding: '18px 0', borderBottom: '1px solid #C4CAD6', fontSize: '17px', fontWeight: 500, color: '#14264F' }}>
                Practical technology skills
              </div>
            </div>

            <a
              className="corelink"
              href="#services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: '44px',
                marginTop: '28px',
                color: '#1F7A6E',
                fontWeight: 600,
                fontSize: '16px',
                textDecoration: 'underline',
                textUnderlineOffset: '4px'
              }}
            >
              View IT training programmes
              <span aria-hidden="true" style={{ marginLeft: '8px' }}>
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
