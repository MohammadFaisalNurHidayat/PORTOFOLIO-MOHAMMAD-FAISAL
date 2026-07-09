import React from 'react';
import { motion } from 'framer-motion';
import { RESEARCH_PROJECTS } from '../data/portfolio-data';

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

function ResearchCard({ project, index }) {
  return (
    <Reveal delay={index * 0.1}>
      <div className="research-item">
        {/* Timeline dot */}
        <div className="research-item__dot">
          <div className="research-item__dot-ring" />
        </div>

        {/* Content */}
        <div className="research-item__content">
          {/* Role badge */}
          <span className="research-item__role">{project.role}</span>

          <h3 className="research-item__title">{project.title}</h3>

          <p className="research-item__desc">{project.description}</p>

          {/* Methodology pill */}
          <div className="research-item__meta">
            <div className="research-meta">
              <span className="research-meta__label">Metodologi</span>
              <span className="research-meta__value">{project.methodology}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="research-item__tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Research() {
  return (
    <section id="research" className="section">
      <div className="container">
        <Reveal>
          <p className="section-label">Research</p>
          <h2 className="section-title">
            Research &amp; Academic Projects
          </h2>
          <p className="section-subtitle">
            Proyek riset Machine Learning dan komputasi ilmiah selama
            perkuliahan — fokus pada metodologi, eksperimen, dan publikasi.
          </p>
        </Reveal>

        <div className="research-timeline" style={{ marginTop: '3rem' }}>
          {RESEARCH_PROJECTS.map((project, i) => (
            <ResearchCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
