import React from 'react';

const strengthsData = [
  {
    title: 'CUSTOMER FOCUSED',
    desc: 'Solutions designed around real business requirements.'
  },
  {
    title: 'PRACTICAL LEARNING',
    desc: 'Hands-on training and project-based experience.'
  },
  {
    title: 'QUALITY DELIVERY',
    desc: 'Structured development, testing and delivery.'
  },
  {
    title: 'ONGOING SUPPORT',
    desc: 'Continued assistance and improvement.'
  }
];

export default function AboutWhyUs() {
  return (
    <section id="about" style={{ background: '#F3F5F9', borderTop: '1px solid #D5DBE3' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '112px 40px', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px 80px', alignItems: 'flex-start', marginBottom: '80px' }}>
          <div style={{ flex: '1 1 380px', minWidth: 0 }}>
            <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.14em', color: '#1F7A6E', marginBottom: '20px' }}>
              WHY TRICUBE
            </div>
            <h2
              style={{
                fontFamily: "'Source Serif 4', Georgia, serif",
                fontWeight: 600,
                fontSize: '44px',
                lineHeight: 1.15,
                letterSpacing: '-0.015em',
                margin: 0,
                color: '#14264F',
                maxWidth: '520px'
              }}
            >
              Built on trust. Focused on results.
            </h2>
          </div>

          <div style={{ flex: '1 1 380px', minWidth: 0, paddingTop: '34px' }}>
            <p style={{ margin: 0, fontSize: '21px', lineHeight: 1.6, color: '#33435A', maxWidth: '600px' }}>
              We combine software development expertise with practical IT education to help businesses grow and individuals build technology careers.
            </p>
          </div>
        </div>

        <div
          className="strengths"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            columnGap: '40px',
            rowGap: '48px'
          }}
        >
          {strengthsData.map((item) => (
            <div
              key={item.title}
              className="strength"
              style={{ minWidth: 0, borderTop: '1px solid #14264F', paddingTop: '28px' }}
            >
              <div style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.14em', color: '#1F7A6E', marginBottom: '14px' }}>
                {item.title}
              </div>
              <p style={{ margin: 0, fontSize: '17px', lineHeight: 1.6, color: '#33435A', maxWidth: '260px' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
