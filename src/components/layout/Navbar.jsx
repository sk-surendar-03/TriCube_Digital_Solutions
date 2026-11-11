import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper for hash links depending on whether user is on homepage or /about
  const getNavHref = (hash) => (isHome ? hash : `/${hash}`);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Lock background body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

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
      <header style={{ borderBottom: '1px solid #D5DBE3', background: '#FFFFFF', position: 'relative', zIndex: 100 }}>
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '0 40px',
            boxSizing: 'border-box',
            minHeight: '84px',
            display: 'flex',
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
                  fontFamily: "'Fraunces', Georgia, serif",
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
                  fontFamily: "'Plus Jakarta Sans', Arial, sans-serif",
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

          {/* Desktop Primary Navigation Menu */}
          <nav aria-label="Primary" className="nav" style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
            <a href={getNavHref('#services')}>Services</a>
            <a href={getNavHref('#industries')}>Industries</a>
            <a href={getNavHref('#approach')}>How we work</a>
            <Link to="/about" style={{ color: location.pathname === '/about' ? '#1B6F64' : '#14264F' }}>
              About
            </Link>
          </nav>

          {/* Header Action & Hamburger Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link
              className="btn desktop-contact-btn"
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

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="mobile-menu-toggle"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-panel"
              onClick={toggleMenu}
              style={{
                background: isMenuOpen ? '#F1F5F9' : '#FFFFFF',
                border: '1px solid #D5DBE3',
                padding: '10px',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#14264F',
                minHeight: '46px',
                minWidth: '46px',
                boxSizing: 'border-box'
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#14264F"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer & Backdrop */}
      {isMenuOpen && (
        <>
          {/* Overlay Backdrop */}
          <div
            aria-hidden="true"
            onClick={closeMenu}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(12, 24, 54, 0.55)',
              zIndex: 9998
            }}
          />

          {/* Drawer Panel */}
          <aside
            id="mobile-nav-panel"
            aria-label="Mobile Navigation"
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: 'min(320px, 85vw)',
              background: '#FFFFFF',
              zIndex: 9999,
              boxShadow: '-4px 0 24px rgba(20, 38, 79, 0.18)',
              display: 'flex',
              flexDirection: 'column',
              boxSizing: 'border-box',
              overflowY: 'auto'
            }}
          >
            {/* Drawer Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px 24px',
                borderBottom: '1px solid #D5DBE3',
                background: '#F8FAFC'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img
                  src="/assets/tricube-emblem.png"
                  alt="TriCube"
                  width="26"
                  height="30"
                  style={{ display: 'block', width: '26px', height: 'auto' }}
                />
                <span
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontWeight: 600,
                    fontSize: '18px',
                    color: '#14264F'
                  }}
                >
                  TRICUBE
                </span>
              </div>
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close navigation menu"
                style={{
                  background: 'transparent',
                  border: 'none',
                  padding: '8px',
                  cursor: 'pointer',
                  color: '#14264F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '40px',
                  minHeight: '40px'
                }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#14264F"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '24px 20px',
                gap: '4px',
                flex: 1
              }}
            >
              <a
                href={getNavHref('#services')}
                onClick={closeMenu}
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#14264F',
                  textDecoration: 'none',
                  padding: '12px 14px',
                  borderBottom: '1px solid #F1F5F9'
                }}
              >
                Services
              </a>
              <a
                href={getNavHref('#industries')}
                onClick={closeMenu}
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#14264F',
                  textDecoration: 'none',
                  padding: '12px 14px',
                  borderBottom: '1px solid #F1F5F9'
                }}
              >
                Industries
              </a>
              <a
                href={getNavHref('#approach')}
                onClick={closeMenu}
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#14264F',
                  textDecoration: 'none',
                  padding: '12px 14px',
                  borderBottom: '1px solid #F1F5F9'
                }}
              >
                How We Work
              </a>
              <Link
                to="/about"
                onClick={closeMenu}
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: location.pathname === '/about' ? '#1B6F64' : '#14264F',
                  textDecoration: 'none',
                  padding: '12px 14px',
                  borderBottom: '1px solid #F1F5F9'
                }}
              >
                About
              </Link>

              <div style={{ marginTop: '24px', paddingTop: '16px' }}>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#14264F',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '15px',
                    minHeight: '48px',
                    textDecoration: 'none',
                    boxSizing: 'border-box',
                    letterSpacing: '0.02em',
                    width: '100%'
                  }}
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </aside>
        </>
      )}
    </>
  );
}
