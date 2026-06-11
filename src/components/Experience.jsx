import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experience } from '../data/portfolio';
import { RevealOnScroll } from '../hooks/useAnimations';
import './Experience.css';

export default function Experience() {
  const [activeId, setActiveId] = useState(1);
  const active = experience.find(e => e.id === activeId);

  return (
    <section id="experience" className="experience section">
      <div className="section__container">
        <RevealOnScroll>
          <div className="section__header">
            <span className="section__label">02 — Trayectoria</span>
            <h2 className="section__title">Experiencia Profesional</h2>
          </div>
        </RevealOnScroll>

        <div className="experience__layout">
          {/* Sidebar */}
          <RevealOnScroll delay={0.1}>
            <div className="experience__sidebar">
              {experience.map((exp) => (
                <button
                  key={exp.id}
                  className={`experience__tab ${activeId === exp.id ? 'active' : ''}`}
                  onClick={() => setActiveId(exp.id)}
                >
                  <div className="experience__tab-header">
                    <span className="experience__tab-role">{exp.role}</span>
                    {exp.current && <span className="experience__tab-badge">Activo</span>}
                  </div>
                  <span className="experience__tab-period">{exp.period}</span>
                  {activeId === exp.id && (
                    <motion.div className="experience__tab-indicator" layoutId="exp-indicator" />
                  )}
                </button>
              ))}
            </div>
          </RevealOnScroll>

          {/* Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              className="experience__detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
            >
              <div className="experience__detail-header">
                <div>
                  <h3 className="experience__detail-role">{active.role}</h3>
                  <p className="experience__detail-project">{active.project}</p>
                  <span className="experience__detail-period">{active.period}</span>
                </div>
                {active.current && (
                  <span className="experience__detail-status">
                    <span className="experience__detail-dot" />
                    En curso
                  </span>
                )}
              </div>

              <p className="experience__detail-desc">{active.description}</p>

              <div className="experience__achievements">
                <h4 className="experience__achievements-title">Logros Clave</h4>
                <ul>
                  {active.achievements.map((a, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="experience__achievement"
                    >
                      <span className="experience__achievement-arrow">→</span>
                      {a}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="experience__tech">
                <div className="experience__tech-group">
                  <span className="experience__tech-label">Tech Stack</span>
                  <div className="experience__tech-tags">
                    {active.stack.map(t => (
                      <span key={t} className="experience__tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="experience__tech-group">
                  <span className="experience__tech-label">Herramientas</span>
                  <div className="experience__tech-tags">
                    {active.tools.map(t => (
                      <span key={t} className="experience__tech-tag experience__tech-tag--tool">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
