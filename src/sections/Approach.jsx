import React from 'react';

const stepsData = [
  {
    num: '01',
    title: 'UNDERSTAND',
    desc: 'We understand your business goals, requirements and challenges before recommending a solution.',
    hasLine: true
  },
  {
    num: '02',
    title: 'PLAN',
    desc: 'We define the right strategy, technology, timeline and delivery approach.',
    hasLine: true
  },
  {
    num: '03',
    title: 'BUILD & DELIVER',
    desc: 'Our team develops, tests and delivers solutions with regular progress updates.',
    hasLine: true
  },
  {
    num: '04',
    title: 'SUPPORT & IMPROVE',
    desc: 'We provide ongoing support, maintenance and improvements where agreed.',
    hasLine: false
  }
];

export default function Approach() {
  return (
    <section id="approach" style={{ background: '#FFFFFF' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '112px 40px', boxSizing: 'border-box' }}>
        <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.14em', color: '#1B6F64', marginBottom: '20px' }}>
          HOW WE WORK
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
          A clear process. From first conversation to successful delivery.
        </h2>

        <div
          className="steps"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            columnGap: '40px',
            rowGap: '56px'
          }}
        >
          {stepsData.map((step) => (
            <div key={step.num} className="step" style={{ minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '28px' }}>
                <span
                  style={{
                    fontFamily: "'Source Serif 4', Georgia, serif",
                    fontWeight: 600,
                    fontSize: '40px',
                    lineHeight: 1,
                    letterSpacing: '-0.01em',
                    color: '#1F7A6E'
                  }}
                >
                  {step.num}
                </span>
                {step.hasLine && (
                  <span
                    aria-hidden="true"
                    className="stepline"
                    style={{ flex: '1 1 auto', height: '1px', background: '#C4CAD6', marginRight: '-40px' }}
                  />
                )}
              </div>

              <div style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '0.12em', color: '#14264F', marginBottom: '14px' }}>
                {step.title}
              </div>

              <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.65, color: '#33435A', maxWidth: '280px' }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
