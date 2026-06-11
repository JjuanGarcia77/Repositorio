import { motion } from 'framer-motion';
import { education, certifications } from '../data/portfolio';
import { RevealOnScroll, StaggerContainer, staggerItem } from '../hooks/useAnimations';
import './Certifications.css';

export default function Certifications() {
  return (
    <section id="certifications" className="certifications section">
      <div className="section__container">
        <RevealOnScroll>
          <div className="section__header">
            <span className="section__label">03 — Formación</span>
            <h2 className="section__title">Educación & Certificaciones</h2>
          </div>
        </RevealOnScroll>

        <div className="certifications__grid">
          {/* Education */}
          <RevealOnScroll delay={0.1}>
            <div className="certifications__education">
              <h3 className="certifications__sub-title">Educación</h3>
              <div className="certifications__timeline">
                {education.map((edu, i) => (
                  <div key={edu.id} className="certifications__timeline-item">
                    <div className="certifications__timeline-dot">
                      {edu.current && <div className="certifications__timeline-dot-pulse" />}
                    </div>
                    <div className="certifications__timeline-content">
                      <span className="certifications__timeline-period">{edu.period}</span>
                      <h4 className="certifications__timeline-degree">{edu.degree}</h4>
                      <p className="certifications__timeline-institution">{edu.institution}</p>
                      <p className="certifications__timeline-location">{edu.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Certifications */}
          <RevealOnScroll delay={0.2}>
            <div>
              <h3 className="certifications__sub-title">Certificaciones</h3>
              <StaggerContainer className="certifications__certs">
                {certifications.map((cert) => (
                  <motion.div
                    key={cert.id}
                    variants={staggerItem}
                    className="certifications__cert-card"
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="certifications__cert-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="8" r="6"/>
                        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                      </svg>
                    </div>
                    <div className="certifications__cert-info">
                      <span className="certifications__cert-name">{cert.name}</span>
                      <span className="certifications__cert-platform">{cert.platform}</span>
                    </div>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
