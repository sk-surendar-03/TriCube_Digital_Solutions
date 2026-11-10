import React from 'react';

const clientLogos = [
  {
    id: 'hawklyn-tech',
    name: 'Hawklyn Tech',
    website: null,
    logo: '/assets/clients/hawklyn-tech-transparent.png',
    alt: 'Hawklyn Tech',
    maxHeight: '56px',
    maxWidth: '150px'
  },
  {
    id: 'skillup',
    name: 'SkillUp',
    website: 'https://www.skillups.co.in/',
    logo: '/assets/clients/skillup.png',
    alt: 'SkillUp',
    maxHeight: '46px',
    maxWidth: '180px'
  },
  {
    id: 'jas-3d-printing',
    name: 'JAS 3D PRINTING',
    website: 'https://jasvel3dmakers.co.in/',
    logo: '/assets/clients/jas-3d-printing.png',
    alt: 'JAS 3D PRINTING',
    maxHeight: '62px',
    maxWidth: '150px'
  }
];

export default function ClientsMarquee() {
  return (
    <section id="clients" style={{ background: '#FFFFFF' }}>
      {/* Header Container */}
      <div
        style={{
          width: '100%',
          maxWidth: '1320px',
          margin: '0 auto',
          padding: '112px 40px 0',
          boxSizing: 'border-box',
          textAlign: 'left'
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
          OUR SATISFIED CLIENTS
        </div>
        <h2
          style={{
            fontFamily: "'Source Serif 4', Georgia, serif",
            fontWeight: 600,
            fontSize: '44px',
            lineHeight: 1.15,
            letterSpacing: '-0.015em',
            margin: '0 0 20px 0',
            color: '#14264F',
            maxWidth: '780px'
          }}
        >
          Trusted by businesses. Driven by results.
        </h2>
        <p
          style={{
            margin: '0 0 64px 0',
            fontSize: '19px',
            lineHeight: 1.6,
            color: '#33435A',
            maxWidth: '620px'
          }}
        >
          We value the businesses that trust TriCube Digital Solutions.
        </p>
      </div>

      {/* Client Logos Showcase Strip */}
      <div
        aria-label="Client logos"
        role="region"
        style={{
          borderTop: '1px solid #D5DBE3',
          borderBottom: '1px solid #D5DBE3',
          padding: '44px 0',
          marginBottom: '112px',
          background: '#FFFFFF'
        }}
      >
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '0 40px',
            boxSizing: 'border-box',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '24px 36px'
          }}
        >
          {clientLogos.map((client) => {
            const hasExternalUrl = Boolean(client.website);
            const linkProps = hasExternalUrl
              ? {
                  href: client.website,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  'aria-label': `${client.name} Website (opens in new tab)`,
                  title: `${client.name} - Official Website (opens in new tab)`
                }
              : {
                  href: '#clients',
                  'aria-label': client.name,
                  title: client.name
                };

            return (
              <a
                key={client.id}
                {...linkProps}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '84px',
                  flex: '1 1 240px',
                  maxWidth: '320px',
                  minWidth: '200px',
                  padding: '12px 28px',
                  background: '#FFFFFF',
                  border: '1px solid #D5DBE3',
                  boxSizing: 'border-box',
                  textDecoration: 'none',
                  cursor: hasExternalUrl ? 'pointer' : 'default',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#1B6F64';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(27, 111, 100, 0.12)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#D5DBE3';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <img
                  src={client.logo}
                  alt={client.alt}
                  style={{
                    maxHeight: client.maxHeight,
                    maxWidth: client.maxWidth,
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
