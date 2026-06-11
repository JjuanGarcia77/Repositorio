import { useState } from 'react';
import { motion } from 'framer-motion';
import { profileSummary, techSkills, humanSkills, languages } from '../data/portfolio';
import { RevealOnScroll, StaggerContainer, staggerItem } from '../hooks/useAnimations';
import './About.css';

export default function About() {
  const [activeTab, setActiveTab] = useState('tech');

  return (
    <section id="about" className="about section">
      <div className="section__container">
        {/* Section header */}
        <RevealOnScroll>
          <div className="section__header">
            <span className="section__label">01 — Sobre mí</span>
            <h2 className="section__title">Perfil Profesional</h2>
          </div>
        </RevealOnScroll>

        <div className="about__grid">
          {/* Profile text */}
          <RevealOnScroll delay={0.1}>
            <div className="about__bio">
              <div className="about__bio-text">
                {profileSummary.split('\n').map((para, i) => (
                  <p key={i}>{para.trim()}</p>
                ))}
              </div>

              {/* Stats */}
              <div className="about__stats">
                {[
                  { num: '2+', label: 'Años de experiencia' },
                  { num: '10+', label: 'Certificaciones' },
                  { num: '3+', label: 'Proyectos completados' },
                ].map(({ num, label }) => (
                  <div key={label} className="about__stat">
                    <span className="about__stat-num">{num}</span>
                    <span className="about__stat-label">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Skills */}
          <RevealOnScroll delay={0.2}>
            <div className="about__skills-panel">
              {/* Tabs */}
              <div className="about__tabs">
                {[
                  { key: 'tech', label: 'Técnicas' },
                  { key: 'human', label: 'Humanas' },
                  { key: 'lang', label: 'Idiomas' },
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    className={`about__tab ${activeTab === key ? 'active' : ''}`}
                    onClick={() => setActiveTab(key)}
                  >
                    {label}
                    {activeTab === key && (
                      <motion.div className="about__tab-indicator" layoutId="tab-indicator" />
                    )}
                  </button>
                ))}
              </div>

              {/* Tech skills */}
              {activeTab === 'tech' && (
                <StaggerContainer className="about__tags">
                  {techSkills.map((skill) => (
                    <motion.span key={skill} variants={staggerItem} className="about__tag">
                      {skill}
                    </motion.span>
                  ))}
                </StaggerContainer>
              )}

              {/* Human skills */}
              {activeTab === 'human' && (
                <StaggerContainer className="about__tags">
                  {humanSkills.map((skill) => (
                    <motion.span key={skill} variants={staggerItem} className="about__tag about__tag--human">
                      {skill}
                    </motion.span>
                  ))}
                </StaggerContainer>
              )}

              {/* Languages */}
              {activeTab === 'lang' && (
                <div className="about__languages">
                  {languages.map(({ lang, level, percent }) => (
                    <div key={lang} className="about__lang-item">
                      <div className="about__lang-header">
                        <span className="about__lang-name">{lang}</span>
                        <span className="about__lang-level">{level}</span>
                      </div>
                      <div className="about__lang-bar">
                        <motion.div
                          className="about__lang-fill"
                          initial={{ width: 0 }}
                          animate={{ width: `${percent}%` }}
                          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
