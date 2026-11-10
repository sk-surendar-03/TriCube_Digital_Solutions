import React from 'react';
import { industriesData } from '../data/industries';

export default function Industries() {
  return (
    <section id="industries" style={{ background: '#14264F', color: '#FFFFFF' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '112px 40px', boxSizing: 'border-box' }}>
        <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.14em', color: '#9DB8D9', marginBottom: '20px' }}>
          INDUSTRIES
        </div>

        <h2
          style={{
            fontFamily: "'Source Serif 4', Georgia, serif",
            fontWeight: 600,
            fontSize: '44px',
            lineHeight: 1.15,
            letterSpacing: '-0.015em',
            margin: '0 0 64px 0',
            maxWidth: '780px'
          }}
        >
          Technology solutions for businesses across diverse industries.
        </h2>

        <div
          className="indgrid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            columnGap: '64px',
            borderBottom: '1px solid #34466E'
          }}
        >
          {industriesData.map((ind) => (
            <div key={ind.title} className="ind" style={{ borderTop: '1px solid #34466E', padding: '32px 0 36px' }}>
              <div style={{ fontSize: '21px', fontWeight: 600, lineHeight: 1.3, marginBottom: '10px' }}>
                {ind.title}
              </div>
              <div style={{ fontSize: '16px', lineHeight: 1.65, color: '#C9D2DE', maxWidth: '480px' }}>
                {ind.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
