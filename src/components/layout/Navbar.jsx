import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Helper for hash links depending on whether user is on homepage or /about
  const getNavHref = (hash) => (isHome ? hash : `/${hash}`);

  return (
    <>
      {/* Top Utility Bar */}
      <div style={{ background: '#14264F', color: '#C9D2DE', fontSize: '13px' }}>
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '0 40px',
            boxSizing: 'border-box',
            minHeight: '40px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px'
          }}
        >
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <Link to="/about" style={{ color: location.pathname === '/about' ? '#FFFFFF' : '#C9D2DE' }}>
              About
            </Link>
            <Link to="/contact" style={{ color: location.pathname === '/contact' ? '#FFFFFF' : '#C9D2DE' }}>
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header & Navigation */}
      <header style={{ borderBottom: '1px solid #D5DBE3', background: '#FFFFFF' }}>
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '0 40px',
            boxSizing: 'border-box',
            minHeight: '84px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px'
          }}
        >
          {/* Brand Logo & Name */}
          <Link
            aria-label="TriCube Digital Solutions home"
            to="/"
            style={{ display: 'flex', alignItems: 'center', gap: '14px', color: '#14264F' }}
          >
            <img
              alt="TriCube Digital Solutions Logo"
              height="61"
              src="/assets/logo.png"
              style={{ display: 'block', width: '54px', height: 'auto' }}
              width="54"
            />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
              <span
                style={{
                  fontFamily: "'Source Serif 4', Georgia, serif",
                  fontWeight: 600,
                  fontSize: '28px',
                  letterSpacing: '0.03em',
                  color: '#14264F'
                }}
              >
                TRICUBE
              </span>
              <span
                style={{
                  fontSize: '10.5px',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  color: '#1B6F64',
                  marginTop: '4px'
                }}
              >
                DIGITAL SOLUTIONS
              </span>
            </div>
          </Link>

          {/* Primary Navigation Menu */}
          <nav aria-label="Primary" className="nav" style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
            <a href={getNavHref('#services')}>Services</a>
            <a href={getNavHref('#industries')}>Industries</a>
            <a href={getNavHref('#approach')}>How we work</a>
            <Link to="/about" style={{ color: location.pathname === '/about' ? '#1B6F64' : '#14264F' }}>
              About
            </Link>
          </nav>

          {/* Header Action Button */}
          <Link
            className="btn"
            to="/contact"
            style={{
              background: '#14264F',
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: '15px',
              padding: '0 24px',
              minHeight: '46px',
              display: 'inline-flex',
              alignItems: 'center'
            }}
          >
            Contact us
          </Link>
        </div>
      </header>
    </>
  );
}
