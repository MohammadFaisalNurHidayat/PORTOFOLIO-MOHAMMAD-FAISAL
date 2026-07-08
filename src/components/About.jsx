import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL, STATS, EDUCATION } from '../data/portfolio-data';

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

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal>
          <p className="section-label">About Me</p>
          <h2 className="section-title">Sedikit Tentang Saya</h2>
        </Reveal>

        <div className="about__grid" style={{ marginTop: '2.5rem' }}>
          {/* Avatar */}
          <Reveal delay={0.1}>
            <div className="about__avatar-wrapper">
              <div className="about__avatar">
                {PERSONAL.initials}
              </div>
              <div className="about__avatar-ring" />
            </div>
          </Reveal>

          {/* Info */}
          <div className="about__info">
            <Reveal delay={0.15}>
              <p className="about__text">{PERSONAL.bio}</p>
            </Reveal>

            {/* Stats */}
            <Reveal delay={0.2}>
              <div className="about__stats">
                {STATS.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="stat-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  >
                    <div className="stat-card__value">{stat.value}</div>
                    <div className="stat-card__label">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </Reveal>

            {/* Education Timeline */}
            <Reveal delay={0.3}>
              <h3
                className="section-label"
                style={{ marginBottom: '1rem', marginTop: '0.5rem' }}
              >
                Education
              </h3>
              <div className="about__timeline">
                {EDUCATION.map((edu) => (
                  <div key={edu.title} className="timeline-item">
                    <span className="timeline-item__year">{edu.year}</span>
                    <h4 className="timeline-item__title">{edu.title}</h4>
                    <p className="timeline-item__institution">{edu.institution}</p>
                    <p className="timeline-item__desc">{edu.description}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
