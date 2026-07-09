import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/portfolio-data';

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'qa', label: 'Quality Assurance' },
  { key: 'fullstack', label: 'Fullstack' },
];

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

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Pengalaman Proyek</h2>
          <p className="section-subtitle">
            Kumpulan proyek yang mencerminkan keahlian saya di bidang QA dan Web Development.
          </p>
        </Reveal>

        {/* Filters */}
        <Reveal delay={0.1}>
          <div className="projects__filters" style={{ marginTop: '2rem' }}>
            {FILTERS.map((f) => (
              <button
                key={f.key}
                className={`filter-btn ${activeFilter === f.key ? 'filter-btn--active' : ''}`}
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Project Grid */}
        <motion.div className="projects__grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
              >
                <div className="project-card">
                  <div className="project-card__header">
                    <span className="project-card__role">{project.role}</span>
                    {project.link && project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__link-icon"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.description}</p>
                  <div className="project-card__tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
