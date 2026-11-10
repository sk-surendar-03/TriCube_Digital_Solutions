import React from 'react';
import { aboutData } from '../data/about';

export default function AboutPage() {
  const { hero, whoWeAre, whatWeDo, missionVision, approach, coreValues, whyChooseUs, cta } = aboutData;

  return (
    <div style={{ width: '100%', background: '#FFFFFF' }}>
      {/* 1. Hero Section */}
      <section
        id="about-top"
        style={{
          position: 'relative',
          background: '#14264F',
          color: '#FFFFFF',
          padding: '120px 40px 96px',
          boxSizing: 'border-box',
          textAlign: 'center',
          overflow: 'hidden'
        }}
      >
        <div style={{ maxWidth: '1080px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Gold Accent Bar */}
          <div style={{ width: '48px', height: '4px', background: '#C98A1B', margin: '0 auto 28px' }} />

          {/* Badge */}
          <div
            style={{
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.16em',
              color: '#8FD8CB',
              marginBottom: '24px'
            }}
          >
            {hero.badge}
          </div>

          {/* Main Title */}
          <h1
            style={{
              fontFamily: "'Source Serif 4', Georgia, serif",
              fontWeight: 600,
              fontSize: '56px',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              margin: '0 auto 28px',
              maxWidth: '920px'
            }}
          >
            {hero.headline}
          </h1>

          {/* Lead Text */}
          <p
            style={{
              fontSize: '20px',
              lineHeight: 1.6,
              color: '#E3E9F1',
              maxWidth: '820px',
              margin: '0 auto 24px'
            }}
          >
            {hero.lead}
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.65,
              color: '#C9D2DE',
              maxWidth: '780px',
              margin: '0 auto'
            }}
          >
            {hero.sublead}
          </p>
        </div>
      </section>

      {/* 2. Who We Are */}
      <section style={{ background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '112px 40px', boxSizing: 'border-box' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '48px 80px',
              alignItems: 'flex-start'
            }}
          >
            {/* Left Header */}
            <div style={{ flex: '1 1 380px', minWidth: 0 }}>
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  color: '#1F7A6E',
                  marginBottom: '20px'
                }}
              >
                {whoWeAre.tag}
              </div>
              <h2
                style={{
                  fontFamily: "'Source Serif 4', Georgia, serif",
                  fontWeight: 600,
                  fontSize: '40px',
                  lineHeight: 1.15,
                  letterSpacing: '-0.015em',
                  color: '#14264F',
                  margin: 0,
                  maxWidth: '480px'
                }}
              >
                {whoWeAre.title}
              </h2>
            </div>

            {/* Right Narrative */}
            <div style={{ flex: '1 1 480px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {whoWeAre.paragraphs.map((p, i) => (
                <p
                  key={i}
                  style={{
                    margin: 0,
                    fontSize: '18px',
                    lineHeight: 1.7,
                    color: i === 0 ? '#14264F' : '#33435A',
                    fontWeight: i === 0 ? 500 : 400
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. What We Do (Two Core Areas) */}
      <section style={{ background: '#F3F5F9', borderTop: '1px solid #D5DBE3', borderBottom: '1px solid #D5DBE3' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '112px 40px', boxSizing: 'border-box' }}>
          <div
            style={{
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.14em',
              color: '#1F7A6E',
              marginBottom: '20px'
            }}
          >
            {whatWeDo.tag}
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
            {whatWeDo.subtitle}
          </h2>

          <div className="coregrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
            {whatWeDo.areas.map((area, idx) => {
              const isFirst = idx === 0;
              return (
                <div
                  key={area.num}
                  className={`core ${isFirst ? 'core-a' : 'core-b'}`}
                  style={{
                    padding: isFirst ? '0 56px 0 0' : '0 0 0 56px',
                    minWidth: 0,
                    boxSizing: 'border-box'
                  }}
                >
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      color: '#1F7A6E',
                      marginBottom: '20px'
                    }}
                  >
                    {area.num} &nbsp;{area.title.toUpperCase()}
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Source Serif 4', Georgia, serif",
                      fontWeight: 600,
                      fontSize: '28px',
                      lineHeight: 1.3,
                      letterSpacing: '-0.01em',
                      color: '#14264F',
                      margin: '0 0 20px 0',
                      maxWidth: '480px'
                    }}
                  >
                    {area.desc}
                  </h3>

                  {/* Bullet points */}
                  <div style={{ borderTop: '1px solid #14264F', maxWidth: '480px', marginBottom: '24px' }}>
                    {area.items.map((item) => (
                      <div
                        key={item}
                        style={{
                          padding: '14px 0',
                          borderBottom: '1px solid #C4CAD6',
                          fontSize: '16px',
                          fontWeight: 500,
                          color: '#14264F',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px'
                        }}
                      >
                        <span style={{ color: '#1F7A6E', fontWeight: 600 }}>•</span>
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Objective note */}
                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: 1.6,
                      color: '#4A5A6E',
                      maxWidth: '480px',
                      margin: 0,
                      fontStyle: 'italic'
                    }}
                  >
                    {area.objective}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision */}
      <section style={{ background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '112px 40px', boxSizing: 'border-box' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px'
            }}
          >
            {/* Mission Card */}
            <div
              style={{
                background: '#F3F5F9',
                border: '1px solid #D5DBE3',
                borderTop: '4px solid #C98A1B',
                padding: '48px 40px',
                boxSizing: 'border-box'
              }}
            >
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  color: '#C98A1B',
                  marginBottom: '16px'
                }}
              >
                {missionVision.mission.tag}
              </div>
              <p
                style={{
                  fontFamily: "'Source Serif 4', Georgia, serif",
                  fontSize: '24px',
                  lineHeight: 1.5,
                  color: '#14264F',
                  fontWeight: 600,
                  margin: 0
                }}
              >
                "{missionVision.mission.text}"
              </p>
            </div>

            {/* Vision Card */}
            <div
              style={{
                background: '#F3F5F9',
                border: '1px solid #D5DBE3',
                borderTop: '4px solid #1B6F64',
                padding: '48px 40px',
                boxSizing: 'border-box'
              }}
            >
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  color: '#1B6F64',
                  marginBottom: '16px'
                }}
              >
                {missionVision.vision.tag}
              </div>
              <p
                style={{
                  fontFamily: "'Source Serif 4', Georgia, serif",
                  fontSize: '24px',
                  lineHeight: 1.5,
                  color: '#14264F',
                  fontWeight: 600,
                  margin: 0
                }}
              >
                "{missionVision.vision.text}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Approach */}
      <section style={{ background: '#F3F5F9', borderTop: '1px solid #D5DBE3' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '112px 40px', boxSizing: 'border-box' }}>
          <div
            style={{
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.14em',
              color: '#1B6F64',
              marginBottom: '20px'
            }}
          >
            {approach.tag}
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
            {approach.title}
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
            {approach.steps.map((step, idx) => {
              const hasLine = idx < approach.steps.length - 1;
              return (
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
                    {hasLine && (
                      <span
                        aria-hidden="true"
                        className="stepline"
                        style={{ flex: '1 1 auto', height: '1px', background: '#C4CAD6', marginRight: '-40px' }}
                      />
                    )}
                  </div>

                  <div
                    style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      color: '#14264F',
                      marginBottom: '14px'
                    }}
                  >
                    {step.title.toUpperCase()}
                  </div>

                  <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.65, color: '#33435A', maxWidth: '280px' }}>
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Our Core Values */}
      <section style={{ background: '#FFFFFF', borderTop: '1px solid #D5DBE3' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '112px 40px', boxSizing: 'border-box' }}>
          <div
            style={{
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.14em',
              color: '#1F7A6E',
              marginBottom: '20px'
            }}
          >
            OUR CORE VALUES
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
            Principles that guide every solution and learning path.
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              columnGap: '48px',
              rowGap: '56px'
            }}
          >
            {coreValues.map((val) => (
              <div
                key={val.title}
                style={{
                  borderTop: '1px solid #14264F',
                  paddingTop: '28px',
                  minWidth: 0
                }}
              >
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    color: '#1F7A6E',
                    marginBottom: '14px'
                  }}
                >
                  {val.title.toUpperCase()}
                </div>
                <p style={{ margin: 0, fontSize: '17px', lineHeight: 1.6, color: '#33435A', maxWidth: '320px' }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Choose TriCube Digital Solutions? */}
      <section style={{ background: '#14264F', color: '#FFFFFF' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '112px 40px', boxSizing: 'border-box' }}>
          <div
            style={{
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.14em',
              color: '#9DB8D9',
              marginBottom: '20px'
            }}
          >
            WHY CHOOSE TRICUBE
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
            Built for transformation, designed for scale.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '880px' }}>
            {whyChooseUs.map((reason, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '20px',
                  padding: '24px 28px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  borderLeft: '3px solid #1B6F64',
                  boxSizing: 'border-box'
                }}
              >
                <span
                  style={{
                    fontFamily: "'Source Serif 4', Georgia, serif",
                    fontWeight: 600,
                    fontSize: '20px',
                    color: '#8FD8CB'
                  }}
                >
                  0{idx + 1}
                </span>
                <span style={{ fontSize: '18px', lineHeight: 1.6, color: '#E3E9F1', fontWeight: 400 }}>
                  {reason}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Let's Build What's Next (CTA) */}
      <section id="contact" style={{ background: '#1B6F64', color: '#FFFFFF' }}>
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '88px 40px',
            boxSizing: 'border-box',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ flex: '1 1 480px', minWidth: 0 }}>
            <h2
              style={{
                fontFamily: "'Source Serif 4', Georgia, serif",
                fontWeight: 600,
                fontSize: '40px',
                lineHeight: 1.15,
                letterSpacing: '-0.015em',
                margin: '0 0 16px 0'
              }}
            >
              {cta.title}
            </h2>
            <p style={{ fontSize: '18px', lineHeight: 1.6, margin: 0, maxWidth: '600px', color: '#EAF1FA' }}>
              {cta.text}
            </p>
          </div>

          <a
            className="btnlight"
            href={cta.email}
            style={{
              background: '#FFFFFF',
              color: '#14264F',
              fontWeight: 600,
              fontSize: '16px',
              padding: '0 32px',
              minHeight: '56px',
              display: 'inline-flex',
              alignItems: 'center'
            }}
          >
            {cta.buttonText}
          </a>
        </div>
      </section>
    </div>
  );
}
