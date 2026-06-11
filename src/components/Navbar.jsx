import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import './Navbar.css';

const navLinks = [
  { href: '#hero', label: 'Inicio' },
  { href: '#about', label: 'Perfil' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#certifications', label: 'Certificaciones' },
  { href: '#contact', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section tracking
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="navbar__container">
          <a className="navbar__logo" href="#hero" onClick={e => handleLinkClick(e, '#hero')}>
            <span className="navbar__logo-bracket">&lt;</span>
            <span className="navbar__logo-name">JDG</span>
            <span className="navbar__logo-bracket">/&gt;</span>
          </a>

          <ul className="navbar__links">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  className={`navbar__link ${activeSection === href.slice(1) ? 'active' : ''}`}
                  href={href}
                  onClick={e => handleLinkClick(e, href)}
                >
                  {label}
                  {activeSection === href.slice(1) && (
                    <motion.span
                      className="navbar__link-dot"
                      layoutId="nav-dot"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={`mailto:${personalInfo.email}`}
            className="navbar__cta"
          >
            Contáctame
          </a>

          <button
            className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map(({ href, label }, i) => (
              <motion.a
                key={href}
                href={href}
                className={`mobile-menu__link ${activeSection === href.slice(1) ? 'active' : ''}`}
                onClick={e => handleLinkClick(e, href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
