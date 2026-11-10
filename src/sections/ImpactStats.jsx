import React from 'react';
import { statsData } from '../data/stats';

export default function ImpactStats() {
  return (
    <section aria-label="TriCube at a glance" style={{ background: '#F3F5F9', borderBottom: '1px solid #D5DBE3' }}>
      <div
        className="stats"
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 40px',
          boxSizing: 'border-box',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, minmax(0, 1fr))'
        }}
      >
        {statsData.map((stat, index) => (
          <div
            key={stat.label}
            className="stat"
            style={{
              padding: '32px 24px',
              borderLeft: index === 0 ? '0' : '1px solid #D5DBE3',
              minWidth: 0,
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div
              style={{
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                color: '#4A5A6E',
                marginBottom: '8px',
                textAlign: 'center'
              }}
            >
              {stat.label}
            </div>
            <div
              style={{
                fontFamily: "'Source Serif 4', Georgia, serif",
                fontWeight: 600,
                fontSize: '28px',
                textAlign: 'center'
              }}
            >
              {stat.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
