import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { personalInfo } from '../data/portfolio';
import './Hero.css';

const socialLinks = [
  {
    label: 'GitHub',
    href: personalInfo.github,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: personalInfo.linkedin,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: `mailto:${personalInfo.email}`,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
];

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>/{}[]';

function scrambleText(el, finalText, duration = 1000) {
  if (!el) return;
  let frame = 0;
  const totalFrames = Math.floor(duration / 16);
  const interval = setInterval(() => {
    const progress = frame / totalFrames;
    const revealedCount = Math.floor(progress * finalText.length);
    let output = '';
    for (let i = 0; i < finalText.length; i++) {
      if (i < revealedCount) {
        output += finalText[i];
      } else if (finalText[i] === ' ') {
        output += ' ';
      } else {
        output += CHARS[Math.floor(Math.random() * CHARS.length)];
      }
    }
    el.textContent = output;
    frame++;
    if (frame >= totalFrames) {
      el.textContent = finalText;
      clearInterval(interval);
    }
  }, 16);
}

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const grainRef = useRef(null);
  const sphereRef = useRef(null);

  useEffect(() => {
    // Scramble text on load
    const t1 = setTimeout(() => scrambleText(titleRef.current, personalInfo.name, 1400), 500);
    const t2 = setTimeout(() => scrambleText(subtitleRef.current, personalInfo.subtitle, 900), 1200);

    // GSAP floating sphere
    if (sphereRef.current) {
      gsap.to(sphereRef.current, {
        y: -24,
        duration: 3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      });
    }

    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <section id="hero" className="hero">
      {/* Background grid */}
      <div className="hero__grid" aria-hidden="true" />

      {/* Glow orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />

      {/* Floating sphere */}
      <div ref={sphereRef} className="hero__sphere" aria-hidden="true">
        <div className="hero__sphere-inner" />
      </div>

      <div className="hero__container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Badge */}
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="hero__badge-dot" />
            <span>Disponible para proyectos</span>
          </motion.div>

          {/* Main title */}
          <h1 className="hero__title" aria-label={personalInfo.name}>
            <span ref={titleRef} className="hero__title-text">{personalInfo.name}</span>
          </h1>

          {/* Role */}
          <div className="hero__roles">
            <span className="hero__role-tag">Full Stack Developer</span>
            <span className="hero__role-sep">·</span>
            <span className="hero__role-tag">AI Specialist</span>
            <span className="hero__role-sep">·</span>
            <span className="hero__role-tag">Software Architect</span>
          </div>

          {/* Subtitle scramble */}
          <p className="hero__subtitle" ref={subtitleRef}>
            {personalInfo.subtitle}
          </p>

          {/* Location */}
          <motion.div
            className="hero__meta"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <span className="hero__meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              {personalInfo.location}
            </span>
            <span className="hero__meta-sep" />
            <span className="hero__meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {personalInfo.phone}
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="hero__ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <a href="#experience" className="btn btn--primary" onClick={e => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Ver Proyectos
            </a>
            <a href="#contact" className="btn btn--ghost" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Contactar
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            className="hero__socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-btn"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Avatar side */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          <div className="hero__avatar-wrapper">
            <div className="hero__avatar-ring hero__avatar-ring--1" />
            <div className="hero__avatar-ring hero__avatar-ring--2" />
            <div className="hero__avatar-frame">
              <img
                src={personalInfo.avatar}
                alt={`${personalInfo.name} - Full Stack Developer`}
                className="hero__avatar-img"
                onError={e => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('hero__avatar-frame--fallback');
                }}
              />
              <div className="hero__avatar-fallback">JDG</div>
            </div>
            {/* Floating badges */}
            <motion.div
              className="hero__float-badge hero__float-badge--tl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            >
              <span className="hero__float-badge-icon">⚡</span>
              <span>React</span>
            </motion.div>
            <motion.div
              className="hero__float-badge hero__float-badge--br"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            >
              <span className="hero__float-badge-icon">🤖</span>
              <span>AI Dev</span>
            </motion.div>
            <motion.div
              className="hero__float-badge hero__float-badge--tr"
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <span className="hero__float-badge-icon">🚀</span>
              <span>Node.js</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span>Scroll</span>
        <motion.div
          className="hero__scroll-line"
          animate={{ scaleY: [0, 1, 0], originY: 'top' }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
