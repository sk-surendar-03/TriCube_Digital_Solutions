import React, { useState } from 'react';

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Smooth scroll to services based on search
      const target = document.getElementById('services');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="top" style={{ position: 'relative', background: '#14264F', color: '#FFFFFF', overflow: 'hidden' }}>
      {/* Background fallback color layer */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: '#14264F' }}></div>

      {/* Autoplaying muted looping background video */}
      <video
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        poster="/assets/hero-poster.jpg"
        preload="auto"
        src="/assets/hero-video.mp4"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: '50% 40%',
          transform: 'scale(1.07)',
          transformOrigin: '0 0'
        }}
      />

      {/* Dark tint overlay */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'rgba(12, 24, 54, 0.62)' }}></div>

      {/* Hero Content Container */}
      <div
        style={{
          position: 'relative',
          maxWidth: '1240px',
          margin: '0 auto',
          padding: 'clamp(80px, 12vw, 120px) clamp(20px, 4vw, 40px) clamp(64px, 8vw, 96px)',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          minHeight: '640px',
          justifyContent: 'center'
        }}
      >
        {/* Accent Bar */}
        <div style={{ width: '48px', height: '4px', background: '#C98A1B', marginBottom: '28px' }}></div>

        {/* Category Header */}
        <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.16em', color: '#8FD8CB', marginBottom: '24px' }}>
          TECHNOLOGY CONSULTING AND ENGINEERING
        </div>

        {/* Main Hero Headline */}
        <h1
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontWeight: 600,
            fontSize: 'clamp(32px, 5.5vw + 1rem, 64px)',
            lineHeight: 1.12,
            letterSpacing: '-0.02em',
            margin: '0 0 28px 0',
            maxWidth: '1000px',
            textWrap: 'balance'
          }}
        >
          Technology that keeps large organisations running, and moving forward.
        </h1>

        {/* Subtitle */}
        <p style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', lineHeight: 1.6, color: '#E3E9F1', margin: '0 0 48px 0', maxWidth: '720px' }}>
          We design, build and operate the systems that enterprises depend on, in every market where our clients work.
        </p>

        {/* Interactive Search Card */}
        <div
          style={{
            width: '100%',
            maxWidth: '880px',
            background: '#FFFFFF',
            color: '#14264F',
            textAlign: 'left',
            padding: 'clamp(20px, 4vw, 28px)',
            boxSizing: 'border-box'
          }}
        >
          <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.12em', color: '#1B6F64', marginBottom: '12px' }}>
            FIND WHAT YOU NEED
          </div>

          <form onSubmit={handleSearchSubmit} style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <input
              aria-label="Search services and industries"
              placeholder="Search services and industries"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                flex: '1 1 320px',
                minWidth: 0,
                boxSizing: 'border-box',
                minHeight: '52px',
                padding: '0 16px',
                fontFamily: "'Plus Jakarta Sans', Arial, sans-serif",
                fontSize: '16px',
                color: '#14264F',
                border: '1px solid #9AA7B8',
                background: '#FFFFFF'
              }}
              type="search"
            />
            <button
              className="btn"
              style={{
                background: '#14264F',
                color: '#FFFFFF',
                fontFamily: "'Plus Jakarta Sans', Arial, sans-serif",
                fontWeight: 600,
                fontSize: '16px',
                padding: '0 32px',
                minHeight: '52px',
                border: 0,
                cursor: 'pointer'
              }}
              type="submit"
            >
              Search
            </button>
          </form>

          {/* Quick-Jump Category Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '18px' }}>
            <a
              href="#services"
              style={{
                border: '1px solid #9AA7B8',
                color: '#14264F',
                fontSize: '14px',
                fontWeight: 500,
                padding: '0 14px',
                minHeight: '44px',
                display: 'inline-flex',
                alignItems: 'center'
              }}
            >
              Cloud and Infrastructure
            </a>
            <a
              href="#services"
              style={{
                border: '1px solid #9AA7B8',
                color: '#14264F',
                fontSize: '14px',
                fontWeight: 500,
                padding: '0 14px',
                minHeight: '44px',
                display: 'inline-flex',
                alignItems: 'center'
              }}
            >
              Data and AI
            </a>
            <a
              href="#services"
              style={{
                border: '1px solid #9AA7B8',
                color: '#14264F',
                fontSize: '14px',
                fontWeight: 500,
                padding: '0 14px',
                minHeight: '44px',
                display: 'inline-flex',
                alignItems: 'center'
              }}
            >
              Cybersecurity
            </a>
            <a
              href="#services"
              style={{
                border: '1px solid #9AA7B8',
                color: '#14264F',
                fontSize: '14px',
                fontWeight: 500,
                padding: '0 14px',
                minHeight: '44px',
                display: 'inline-flex',
                alignItems: 'center'
              }}
            >
              Training courses
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
