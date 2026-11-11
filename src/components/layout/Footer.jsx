import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const getNavHref = (hash) => (isHome ? hash : `/${hash}`);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="foot" style={{ background: '#14264F', color: '#C9D2DE' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: 'clamp(56px, 8vw, 72px) clamp(20px, 4vw, 40px) 32px', boxSizing: 'border-box' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '36px clamp(24px, 4vw, 64px)',
            paddingBottom: '56px',
            borderBottom: '1px solid #34466E'
          }}
        >
          {/* 1. Company Brand & Location */}
          <div style={{ flex: '2 1 280px', minWidth: 0 }}>
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '20px',
                textDecoration: 'none'
              }}
            >
              <img
                src="/assets/tricube-emblem.png"
                alt="TRICUBE"
                width="38"
                height="44"
                style={{
                  display: 'block',
                  width: '38px',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
              <span
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontWeight: 600,
                  fontSize: '22px',
                  letterSpacing: '0.03em',
                  color: '#FFFFFF'
                }}
              >
                TRICUBE{' '}
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', Arial, sans-serif",
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    color: '#C9D2DE'
                  }}
                >
                  DIGITAL SOLUTIONS
                </span>
              </span>
            </Link>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.65, maxWidth: '320px', color: '#C9D2DE' }}>
              Salem, Tamil Nadu, India
            </p>
          </div>

          {/* 2. Services Column */}
          <div style={{ flex: '1 1 160px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.14em', color: '#FFFFFF', marginBottom: '6px' }}>
              SERVICES
            </div>
            <a href={getNavHref('#services')}>Cloud &amp; Infrastructure</a>
            <a href={getNavHref('#services')}>Data &amp; Artificial Intelligence</a>
            <a href={getNavHref('#services')}>Application Engineering</a>
            <a href={getNavHref('#services')}>Cybersecurity</a>
            <a href={getNavHref('#services')}>Enterprise Platforms</a>
            <a href={getNavHref('#services')}>Managed Services</a>
            <a href={getNavHref('#services')}>Training &amp; Education</a>
          </div>

          {/* 3. Industries Column */}
          <div style={{ flex: '1 1 160px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.14em', color: '#FFFFFF', marginBottom: '6px' }}>
              INDUSTRIES
            </div>
            <a href={getNavHref('#industries')}>Financial Services</a>
            <a href={getNavHref('#industries')}>Retail &amp; E-commerce</a>
            <a href={getNavHref('#industries')}>Healthcare</a>
            <a href={getNavHref('#industries')}>Education &amp; Training</a>
            <a href={getNavHref('#industries')}>Manufacturing</a>
            <a href={getNavHref('#industries')}>Professional Services</a>
            <a href={getNavHref('#industries')}>Energy &amp; Utilities</a>
            <a href={getNavHref('#industries')}>Public Sector</a>
          </div>

          {/* 4. Company Column */}
          <div style={{ flex: '1 1 140px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.14em', color: '#FFFFFF', marginBottom: '6px' }}>
              COMPANY
            </div>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        {/* 5. Bottom Copyright */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            paddingTop: '28px',
            fontSize: '13px',
            color: '#A0ADC0'
          }}
        >
          <span>© {currentYear} TriCube Digital Solutions. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
