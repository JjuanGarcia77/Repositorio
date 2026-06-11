import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { techSkills } from '../data/portfolio';
import { RevealOnScroll } from '../hooks/useAnimations';
import './Skills.css';

// Skill categories with groups
const skillCategories = [
  {
    label: 'Frontend',
    items: ['JavaScript', 'React', 'HTML5', 'CSS3', 'Responsive Design'],
    icon: '🎨',
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express.js', 'Python', 'APIs REST', 'Clean Code'],
    icon: '⚙️',
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL', 'Bases de Datos Vectoriales'],
    icon: '🗄️',
  },
  {
    label: 'AI & Automation',
    items: ['AI Agents', 'RAG Systems', 'Prompt Engineering', 'Embeddings', 'Fine-tuning', 'n8n'],
    icon: '🤖',
  },
  {
    label: 'DevOps & Tools',
    items: ['Git', 'GitHub', 'Figma', 'Postman', 'Vercel', 'Render'],
    icon: '🛠️',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="section__container">
        <RevealOnScroll>
          <div className="section__header">
            <span className="section__label">02 — Competencias</span>
            <h2 className="section__title">Stack Tecnológico</h2>
          </div>
        </RevealOnScroll>

        <div className="skills__grid">
          {skillCategories.map((cat, i) => (
            <RevealOnScroll key={cat.label} delay={i * 0.08}>
              <motion.div
                className="skills__card"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="skills__card-header">
                  <span className="skills__card-emoji">{cat.icon}</span>
                  <h3 className="skills__card-title">{cat.label}</h3>
                  <span className="skills__card-count">{cat.items.length}</span>
                </div>
                <div className="skills__card-items">
                  {cat.items.map((item) => (
                    <span key={item} className="skills__item">
                      <span className="skills__item-dot" />
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Marquee strip */}
        <RevealOnScroll delay={0.3}>
          <div className="skills__marquee-wrapper">
            <div className="skills__marquee">
              {[...techSkills, ...techSkills].map((skill, i) => (
                <span key={i} className="skills__marquee-item">
                  {skill}
                  <span className="skills__marquee-sep">·</span>
                </span>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
