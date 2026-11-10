import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ENQUIRY_CATEGORIES = [
  'Software Development',
  'Web Application Development',
  'Enterprise Solutions',
  'IT Training',
  'Corporate Training',
  'Internship / Career Enquiry',
  'General Enquiry'
];

// Configurable official WhatsApp business number (e.g. '919876543210')
// Per requirements: Provide separate WhatsApp enquiry option ONLY when configured.
const OFFICIAL_WHATSAPP_NUMBER = '';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    enquiryType: '',
    subject: '',
    message: '',
    consent: false
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submittedState, setSubmittedState] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);

  // Validation function
  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        if (!value || !value.trim()) return 'Full Name is required.';
        if (value.trim().length < 2) return 'Full Name must be at least 2 characters.';
        return '';

      case 'email':
        if (!value || !value.trim()) return 'Email Address is required.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Please enter a valid email address (e.g. name@example.com).';
        }
        return '';

      case 'phone': {
        if (!value || !value.trim()) return 'Phone Number is required.';
        const digitsOnly = value.replace(/\D/g, '');
        if (digitsOnly.length < 7 || digitsOnly.length > 15) {
          return 'Please enter a valid phone number (7 to 15 digits).';
        }
        return '';
      }

      case 'enquiryType':
        if (!value || !value.trim()) return 'Please select an enquiry type.';
        if (!ENQUIRY_CATEGORIES.includes(value)) return 'Please select a valid enquiry type.';
        return '';

      case 'subject':
        if (!value || !value.trim()) return 'Subject is required.';
        if (value.trim().length < 3) return 'Subject must be at least 3 characters.';
        return '';

      case 'message':
        if (!value || !value.trim()) return 'Message is required.';
        if (value.trim().length < 10) return 'Message must be at least 10 characters.';
        return '';

      case 'consent':
        if (!value) return 'You must consent to proceed with this enquiry.';
        return '';

      default:
        return '';
    }
  };

  const validateAll = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue
    }));

    if (touched[name]) {
      const fieldError = validateField(name, fieldValue);
      setErrors((prev) => ({
        ...prev,
        [name]: fieldError
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldError = validateField(name, fieldValue);
    setErrors((prev) => ({
      ...prev,
      [name]: fieldError
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all as touched
    const allTouched = {};
    Object.keys(formData).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    const validationErrors = validateAll();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      // Focus first error field
      const firstErrorField = Object.keys(validationErrors)[0];
      const el = document.getElementById(firstErrorField);
      if (el) {
        el.focus();
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Format email content
    const emailSubject = `[${formData.enquiryType}] ${formData.subject.trim()}`;
    const emailBody = [
      'TRICUBE DIGITAL SOLUTIONS - ENQUIRY DETAILS',
      '==========================================',
      `Full Name:     ${formData.fullName.trim()}`,
      `Email Address: ${formData.email.trim()}`,
      `Phone Number:  ${formData.phone.trim()}`,
      formData.organization.trim() ? `Organization:  ${formData.organization.trim()}` : null,
      `Enquiry Type:  ${formData.enquiryType}`,
      `Subject:       ${formData.subject.trim()}`,
      '',
      'MESSAGE:',
      '--------',
      formData.message.trim(),
      '',
      '==========================================',
      'Consent: Privacy Policy accepted by visitor.'
    ]
      .filter((line) => line !== null)
      .join('\n');

    const mailtoUrl = `mailto:contact@tricubedigitalsolutions.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    // Open default email client
    try {
      window.location.href = mailtoUrl;
    } catch (err) {
      console.warn('Could not automatically invoke mailto:', err);
    }

    setSubmittedState({
      mailtoUrl,
      subject: emailSubject,
      body: emailBody
    });
    setCopySuccess(false);

    // Scroll to status banner
    setTimeout(() => {
      const banner = document.getElementById('submission-status-banner');
      if (banner) {
        banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const handleCopyDetails = () => {
    if (!submittedState) return;
    const textToCopy = `To: contact@tricubedigitalsolutions.com\nSubject: ${submittedState.subject}\n\n${submittedState.body}`;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 4000);
      });
    }
  };

  return (
    <div style={{ width: '100%', background: '#FFFFFF' }}>
      {/* 1. Contact Hero */}
      <section
        id="contact-hero"
        style={{
          position: 'relative',
          background: '#14264F',
          color: '#FFFFFF',
          padding: '112px 40px 96px',
          boxSizing: 'border-box',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '1080px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Gold Accent Bar */}
          <div style={{ width: '48px', height: '4px', background: '#C98A1B', margin: '0 auto 24px' }} />

          {/* Subtitle / Tag */}
          <div
            style={{
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.16em',
              color: '#8FD8CB',
              marginBottom: '20px'
            }}
          >
            CONTACT TRICUBE DIGITAL SOLUTIONS
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: "'Source Serif 4', Georgia, serif",
              fontWeight: 600,
              fontSize: '52px',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              margin: '0 auto 24px',
              maxWidth: '880px',
              color: '#FFFFFF'
            }}
          >
            Let's Start a Conversation
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: '19px',
              lineHeight: 1.6,
              color: '#E3E9F1',
              maxWidth: '780px',
              margin: '0 auto',
              fontWeight: 400
            }}
          >
            Whether you are looking for reliable software development services or industry-focused IT training, our team
            is ready to understand your requirements.
          </p>
        </div>
      </section>

      {/* 2. Main Content: Contact Information + Form */}
      <section
        id="contact-main"
        style={{
          background: '#F8FAFC',
          padding: '96px 40px 112px',
          boxSizing: 'border-box'
        }}
      >
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Contact Information */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '32px'
            }}
          >
            {/* Primary Contact Card */}
            <div
              style={{
                background: '#FFFFFF',
                border: '1px solid #D5DBE3',
                padding: '40px 36px',
                boxSizing: 'border-box'
              }}
            >
              {/* Gold Accent */}
              <div style={{ width: '36px', height: '3px', background: '#C98A1B', marginBottom: '20px' }} />

              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  color: '#1F7A6E',
                  marginBottom: '12px'
                }}
              >
                CONNECT DIRECTLY
              </div>

              <h2
                style={{
                  fontFamily: "'Source Serif 4', Georgia, serif",
                  fontWeight: 600,
                  fontSize: '28px',
                  lineHeight: 1.25,
                  color: '#14264F',
                  margin: '0 0 8px'
                }}
              >
                TRICUBE DIGITAL SOLUTIONS
              </h2>

              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.6,
                  color: '#55657D',
                  margin: '0 0 28px'
                }}
              >
                Enterprise Software Development &amp; Professional IT Training Services
              </p>

              {/* Email Address */}
              <div
                style={{
                  borderTop: '1px solid #E2E8F0',
                  paddingTop: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    color: '#64748B'
                  }}
                >
                  OFFICIAL EMAIL
                </span>
                <a
                  href="mailto:contact@tricubedigitalsolutions.com"
                  style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#1F7A6E',
                    textDecoration: 'none',
                    wordBreak: 'break-all',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#14264F';
                    e.currentTarget.style.textDecoration = 'underline';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#1F7A6E';
                    e.currentTarget.style.textDecoration = 'none';
                  }}
                >
                  contact@tricubedigitalsolutions.com
                </a>
              </div>

              {/* Optional WhatsApp option (only when configured) */}
              {OFFICIAL_WHATSAPP_NUMBER && (
                <div
                  style={{
                    borderTop: '1px solid #E2E8F0',
                    marginTop: '24px',
                    paddingTop: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      color: '#64748B'
                    }}
                  >
                    WHATSAPP ENQUIRY
                  </span>
                  <a
                    href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '16px',
                      fontWeight: 600,
                      color: '#1B6F64',
                      textDecoration: 'none'
                    }}
                  >
                    Chat on WhatsApp &rarr;
                  </a>
                </div>
              )}
            </div>

            {/* What to Expect Card */}
            <div
              style={{
                background: '#FFFFFF',
                border: '1px solid #D5DBE3',
                padding: '36px',
                boxSizing: 'border-box'
              }}
            >
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  color: '#1F7A6E',
                  marginBottom: '16px'
                }}
              >
                OUR COMMITMENT
              </div>
              <h3
                style={{
                  fontFamily: "'Source Serif 4', Georgia, serif",
                  fontWeight: 600,
                  fontSize: '20px',
                  color: '#14264F',
                  margin: '0 0 20px'
                }}
              >
                Structured &amp; Timely Engagement
              </h3>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  fontSize: '15px',
                  lineHeight: 1.6,
                  color: '#33435A'
                }}
              >
                <li>
                  <strong>Prompt Response:</strong> We aim to review and respond to all enquiries within 24 to 48 business hours.
                </li>
                <li>
                  <strong>Requirements Analysis:</strong> Initial consultations focus on practical operational needs and clear project scoping.
                </li>
                <li>
                  <strong>Data Privacy:</strong> Your contact details and project descriptions are treated with complete confidentiality.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid #D5DBE3',
              padding: '44px 40px',
              boxSizing: 'border-box'
            }}
          >
            <div style={{ marginBottom: '32px' }}>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  color: '#1F7A6E',
                  marginBottom: '8px'
                }}
              >
                ENQUIRY FORM
              </div>
              <h2
                style={{
                  fontFamily: "'Source Serif 4', Georgia, serif",
                  fontWeight: 600,
                  fontSize: '32px',
                  color: '#14264F',
                  margin: '0 0 12px'
                }}
              >
                Submit Your Enquiry
              </h2>
              <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#55657D' }}>
                Complete the form below. On submission, an email will be prepared in your email client addressed to{' '}
                <strong>contact@tricubedigitalsolutions.com</strong> with all your information prefilled.
              </p>
            </div>

            {/* Submission Status Banner */}
            {submittedState && (
              <div
                id="submission-status-banner"
                role="status"
                style={{
                  background: '#F0FDF4',
                  border: '1px solid #86EFAC',
                  borderLeft: '4px solid #16A34A',
                  padding: '20px 24px',
                  marginBottom: '32px',
                  boxSizing: 'border-box'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ color: '#16A34A', fontSize: '20px', lineHeight: 1 }}>✔</span>
                  <strong style={{ fontSize: '16px', color: '#14532D' }}>
                    Email Client Launched
                  </strong>
                </div>
                <p style={{ margin: '0 0 16px', fontSize: '14.5px', lineHeight: 1.6, color: '#166534' }}>
                  Your default email application has been opened with your enquiry prefilled.
                  <br />
                  <strong>Important:</strong> You must click <strong>Send</strong> inside your email client to deliver your message to{' '}
                  <span style={{ textDecoration: 'underline' }}>contact@tricubedigitalsolutions.com</span>.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  <a
                    href={submittedState.mailtoUrl}
                    style={{
                      background: '#1F7A6E',
                      color: '#FFFFFF',
                      fontSize: '13.5px',
                      fontWeight: 600,
                      padding: '8px 16px',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center'
                    }}
                  >
                    Reopen Email Client
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyDetails}
                    style={{
                      background: '#FFFFFF',
                      color: '#14264F',
                      border: '1px solid #D5DBE3',
                      fontSize: '13.5px',
                      fontWeight: 600,
                      padding: '8px 16px',
                      cursor: 'pointer'
                    }}
                  >
                    {copySuccess ? 'Copied to Clipboard!' : 'Copy Enquiry Details'}
                  </button>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                {/* 1. Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#14264F',
                      marginBottom: '8px'
                    }}
                  >
                    Full Name <span style={{ color: '#DC2626' }}>*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your full name"
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      minHeight: '48px',
                      padding: '10px 14px',
                      fontSize: '15px',
                      fontFamily: "'Inter', sans-serif",
                      border: `1px solid ${errors.fullName && touched.fullName ? '#DC2626' : '#D5DBE3'}`,
                      background: '#FFFFFF',
                      color: '#14264F',
                      outline: 'none'
                    }}
                  />
                  {errors.fullName && touched.fullName && (
                    <div id="fullName-error" style={{ color: '#DC2626', fontSize: '13px', marginTop: '6px' }}>
                      {errors.fullName}
                    </div>
                  )}
                </div>

                {/* 2. Email Address */}
                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#14264F',
                      marginBottom: '8px'
                    }}
                  >
                    Email Address <span style={{ color: '#DC2626' }}>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="you@company.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      minHeight: '48px',
                      padding: '10px 14px',
                      fontSize: '15px',
                      fontFamily: "'Inter', sans-serif",
                      border: `1px solid ${errors.email && touched.email ? '#DC2626' : '#D5DBE3'}`,
                      background: '#FFFFFF',
                      color: '#14264F',
                      outline: 'none'
                    }}
                  />
                  {errors.email && touched.email && (
                    <div id="email-error" style={{ color: '#DC2626', fontSize: '13px', marginTop: '6px' }}>
                      {errors.email}
                    </div>
                  )}
                </div>

                {/* 3. Phone Number */}
                <div>
                  <label
                    htmlFor="phone"
                    style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#14264F',
                      marginBottom: '8px'
                    }}
                  >
                    Phone Number <span style={{ color: '#DC2626' }}>*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+91 98765 43210"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      minHeight: '48px',
                      padding: '10px 14px',
                      fontSize: '15px',
                      fontFamily: "'Inter', sans-serif",
                      border: `1px solid ${errors.phone && touched.phone ? '#DC2626' : '#D5DBE3'}`,
                      background: '#FFFFFF',
                      color: '#14264F',
                      outline: 'none'
                    }}
                  />
                  {errors.phone && touched.phone && (
                    <div id="phone-error" style={{ color: '#DC2626', fontSize: '13px', marginTop: '6px' }}>
                      {errors.phone}
                    </div>
                  )}
                </div>

                {/* 4. Organization (Optional) */}
                <div>
                  <label
                    htmlFor="organization"
                    style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#14264F',
                      marginBottom: '8px'
                    }}
                  >
                    Organization / Company{' '}
                    <span style={{ color: '#64748B', fontWeight: 400, fontSize: '13px' }}>(Optional)</span>
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Company, Institute or Organization name"
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      minHeight: '48px',
                      padding: '10px 14px',
                      fontSize: '15px',
                      fontFamily: "'Inter', sans-serif",
                      border: '1px solid #D5DBE3',
                      background: '#FFFFFF',
                      color: '#14264F',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* 5. Enquiry Type (Dropdown) */}
                <div>
                  <label
                    htmlFor="enquiryType"
                    style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#14264F',
                      marginBottom: '8px'
                    }}
                  >
                    Enquiry Type <span style={{ color: '#DC2626' }}>*</span>
                  </label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(errors.enquiryType)}
                    aria-describedby={errors.enquiryType ? 'enquiryType-error' : undefined}
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      minHeight: '48px',
                      padding: '10px 14px',
                      fontSize: '15px',
                      fontFamily: "'Inter', sans-serif",
                      border: `1px solid ${errors.enquiryType && touched.enquiryType ? '#DC2626' : '#D5DBE3'}`,
                      background: '#FFFFFF',
                      color: formData.enquiryType ? '#14264F' : '#64748B',
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="" disabled>
                      Select an enquiry type...
                    </option>
                    {ENQUIRY_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat} style={{ color: '#14264F' }}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  {errors.enquiryType && touched.enquiryType && (
                    <div id="enquiryType-error" style={{ color: '#DC2626', fontSize: '13px', marginTop: '6px' }}>
                      {errors.enquiryType}
                    </div>
                  )}
                </div>

                {/* 6. Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#14264F',
                      marginBottom: '8px'
                    }}
                  >
                    Subject <span style={{ color: '#DC2626' }}>*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Brief summary of your enquiry"
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      minHeight: '48px',
                      padding: '10px 14px',
                      fontSize: '15px',
                      fontFamily: "'Inter', sans-serif",
                      border: `1px solid ${errors.subject && touched.subject ? '#DC2626' : '#D5DBE3'}`,
                      background: '#FFFFFF',
                      color: '#14264F',
                      outline: 'none'
                    }}
                  />
                  {errors.subject && touched.subject && (
                    <div id="subject-error" style={{ color: '#DC2626', fontSize: '13px', marginTop: '6px' }}>
                      {errors.subject}
                    </div>
                  )}
                </div>

                {/* 7. Message */}
                <div>
                  <label
                    htmlFor="message"
                    style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#14264F',
                      marginBottom: '8px'
                    }}
                  >
                    Message <span style={{ color: '#DC2626' }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Please describe your project, technical goals, training needs or timeline..."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      padding: '12px 14px',
                      fontSize: '15px',
                      lineHeight: 1.6,
                      fontFamily: "'Inter', sans-serif",
                      border: `1px solid ${errors.message && touched.message ? '#DC2626' : '#D5DBE3'}`,
                      background: '#FFFFFF',
                      color: '#14264F',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                  {errors.message && touched.message && (
                    <div id="message-error" style={{ color: '#DC2626', fontSize: '13px', marginTop: '6px' }}>
                      {errors.message}
                    </div>
                  )}
                </div>

                {/* 8. Privacy Policy Consent Checkbox */}
                <div>
                  <label
                    htmlFor="consent"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      lineHeight: 1.5,
                      color: '#33435A'
                    }}
                  >
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      checked={formData.consent}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(errors.consent)}
                      aria-describedby={errors.consent ? 'consent-error' : undefined}
                      style={{
                        marginTop: '3px',
                        width: '18px',
                        height: '18px',
                        cursor: 'pointer',
                        accentColor: '#1F7A6E'
                      }}
                    />
                    <span>
                      I consent to TriCube Digital Solutions storing and processing my submitted details in accordance
                      with its privacy standards to respond to this enquiry.{' '}
                      <span style={{ color: '#DC2626' }}>*</span>
                    </span>
                  </label>
                  {errors.consent && touched.consent && (
                    <div id="consent-error" style={{ color: '#DC2626', fontSize: '13px', marginTop: '6px', marginLeft: '30px' }}>
                      {errors.consent}
                    </div>
                  )}
                </div>

                {/* Submit Action */}
                <div style={{ marginTop: '8px' }}>
                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      minHeight: '54px',
                      background: '#14264F',
                      color: '#FFFFFF',
                      border: 'none',
                      fontSize: '16px',
                      fontWeight: 600,
                      letterSpacing: '0.02em',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      transition: 'background-color 0.2s ease, transform 0.1s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#1F7A6E';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#14264F';
                    }}
                  >
                    <span>Prepare Enquiry Email</span>
                    <span style={{ fontSize: '18px' }}>&rarr;</span>
                  </button>

                  <p
                    style={{
                      margin: '14px 0 0',
                      fontSize: '12.5px',
                      lineHeight: 1.5,
                      color: '#64748B',
                      textAlign: 'center'
                    }}
                  >
                    Submitting prepares your message in your default email application. You will need to click{' '}
                    <strong>Send</strong> in your email client to complete the enquiry.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
