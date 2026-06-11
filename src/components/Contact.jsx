import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { RevealOnScroll } from '../hooks/useAnimations';
import './Contact.css';

const contactItems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'Teléfono',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'juan-david-garcia',
    href: personalInfo.linkedin,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/>
      </svg>
    ),
    label: 'GitHub',
    value: 'JjuanGarcia77',
    href: personalInfo.github,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Ubicación',
    value: personalInfo.location,
    href: null,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="contact section">
      <div className="section__container">
        <RevealOnScroll>
          <div className="section__header">
            <span className="section__label">04 — Contacto</span>
            <h2 className="section__title">Hablemos</h2>
          </div>
        </RevealOnScroll>

        <div className="contact__layout">
          {/* Left side */}
          <RevealOnScroll delay={0.1}>
            <div className="contact__intro">
              <p className="contact__intro-text">
                Estoy abierto a nuevas oportunidades, proyectos freelance y colaboraciones.
                Si tienes una idea interesante o quieres trabajar juntos, no dudes en contactarme.
              </p>

              <motion.button
                className="contact__copy-btn"
                onClick={copyEmail}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="contact__copy-email">{personalInfo.email}</span>
                <span className="contact__copy-action">
                  {copied ? (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      Copiado
                    </>
                  ) : (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                      </svg>
                      Copiar
                    </>
                  )}
                </span>
              </motion.button>

              <div className="contact__availability">
                <div className="contact__avail-dot" />
                <span>Disponible para trabajar</span>
              </div>
            </div>
          </RevealOnScroll>

          {/* Contact cards */}
          <RevealOnScroll delay={0.2}>
            <div className="contact__cards">
              {contactItems.map(({ icon, label, value, href }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="contact__card contact__card--link"
                    >
                      <div className="contact__card-icon">{icon}</div>
                      <div className="contact__card-info">
                        <span className="contact__card-label">{label}</span>
                        <span className="contact__card-value">{value}</span>
                      </div>
                      <svg className="contact__card-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7v10"/>
                      </svg>
                    </a>
                  ) : (
                    <div className="contact__card">
                      <div className="contact__card-icon">{icon}</div>
                      <div className="contact__card-info">
                        <span className="contact__card-label">{label}</span>
                        <span className="contact__card-value">{value}</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Footer */}
      <div className="contact__footer">
        <div className="contact__footer-inner">
          <span className="contact__footer-copy">
            © 2025 Juan David Garcia Jimenez — Full Stack Developer
          </span>
          <span className="contact__footer-made">
            Hecho con <span style={{ color: 'var(--white)' }}>React</span> + Framer Motion
          </span>
        </div>
      </div>
    </section>
  );
}
