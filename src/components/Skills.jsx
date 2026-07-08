import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../data/portfolio-data';

function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <p className="section-label">Expertise</p>
          <h2 className="section-title">Keahlian Teknis</h2>
          <p className="section-subtitle">
            Kombinasi skill QA dan Development yang saling melengkapi.
          </p>
        </Reveal>

        <div className="skills__grid" style={{ marginTop: '2.5rem' }}>
          {Object.entries(SKILLS).map(([category, data], catIndex) => (
            <Reveal key={category} delay={catIndex * 0.1}>
              <div className="skill-category">
                <div className="skill-category__header">
                  <span className="skill-category__icon">{data.icon}</span>
                  <h3 className="skill-category__title">{category}</h3>
                </div>
                <div className="skill-list">
                  {data.items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      className="skill-pill"
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.15 + i * 0.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
