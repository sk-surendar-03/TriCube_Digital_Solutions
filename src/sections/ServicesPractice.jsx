import React, { useState } from 'react';
import { servicesData } from '../data/services';

export default function ServicesPractice() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedService = servicesData[selectedIndex];

  return (
    <section id="services" style={{ background: '#FFFFFF' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: 'clamp(64px, 8vw, 112px) clamp(20px, 4vw, 40px)', boxSizing: 'border-box' }}>
        {/* Section Header */}
        <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.14em', color: '#1B6F64', marginBottom: '20px' }}>
          SERVICES
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px 64px',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: 'clamp(36px, 5vw, 56px)'
          }}
        >
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 600,
              fontSize: 'clamp(28px, 3.5vw + 0.5rem, 42px)',
              lineHeight: 1.2,
              letterSpacing: '-0.015em',
              margin: 0,
              maxWidth: '640px',
              textWrap: 'balance'
            }}
          >
            Seven practices, one delivery model.
          </h2>
          <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', lineHeight: 1.6, color: '#33435A', margin: 0, maxWidth: '440px' }}>
            Each engagement is staffed and governed the same way, whether it runs for three months or ten years. Select a service to see what it covers.
          </p>
        </div>

        {/* Interactive Service Selector Grid */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', border: '1px solid #D5DBE3' }}>
          {/* Left Column: 7 Practice Tabs */}
          <div style={{ flex: '1 1 320px', maxWidth: '100%', minWidth: 0, display: 'flex', flexDirection: 'column', background: '#F3F5F9' }}>
            {servicesData.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={item.num}
                  aria-pressed={isSelected}
                  onClick={() => setSelectedIndex(index)}
                  type="button"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '16px',
                    width: '100%',
                    boxSizing: 'border-box',
                    textAlign: 'left',
                    minHeight: '68px',
                    padding: '0 24px',
                    border: 0,
                    borderBottom: '1px solid #D5DBE3',
                    cursor: 'pointer',
                    fontFamily: "'Plus Jakarta Sans', Arial, sans-serif",
                    fontSize: '17px',
                    fontWeight: 600,
                    background: isSelected ? '#14264F' : '#F3F5F9',
                    color: isSelected ? '#FFFFFF' : '#14264F',
                    transition: 'background 0.15s ease, color 0.15s ease'
                  }}
                >
                  <span style={{ display: 'flex', gap: '16px', alignItems: 'baseline' }}>
                    <span style={{ fontSize: '14px', fontWeight: 600, opacity: 0.75 }}>
                      {item.num}
                    </span>
                    <span>{item.title}</span>
                  </span>
                  <span aria-hidden="true" style={{ fontSize: '18px' }}>
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Practice Details */}
          <div style={{ flex: '2 1 460px', minWidth: 0, background: '#14264F', color: '#FFFFFF', padding: 'clamp(32px, 5vw, 56px) clamp(20px, 5vw, 56px)', boxSizing: 'border-box' }}>
            <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.14em', color: '#8FD8CB', marginBottom: '20px' }}>
              {selectedService.label}
            </div>

            <h3
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontWeight: 600,
                fontSize: 'clamp(24px, 3.5vw, 32px)',
                lineHeight: 1.2,
                letterSpacing: '-0.015em',
                margin: '0 0 20px 0',
                textWrap: 'balance'
              }}
            >
              {selectedService.title}
            </h3>

            <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: 1.65, color: '#E3E9F1', margin: '0 0 36px 0', maxWidth: '620px' }}>
              {selectedService.long}
            </p>

            <div style={{ borderTop: '1px solid #34466E', maxWidth: '620px' }}>
              {selectedService.points.map((point) => (
                <div
                  key={point}
                  style={{
                    padding: '16px 0',
                    borderBottom: '1px solid #34466E',
                    fontSize: 'clamp(14.5px, 2vw, 17px)',
                    fontWeight: 500
                  }}
                >
                  {point}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: '44px',
                marginTop: '36px',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '16px',
                textDecoration: 'underline',
                textUnderlineOffset: '4px'
              }}
            >
              Discuss this service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
