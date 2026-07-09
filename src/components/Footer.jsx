import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { PERSONAL } from '../data/portfolio-data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <p className="footer__text">
            Thanks for visiting my portfolio.
          </p>

          <div className="footer__socials">
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <Github size={14} />
              GitHub
            </a>
            <a href={`mailto:${PERSONAL.email}`} className="social-btn">
              Email
            </a>
          </div>

          <p className="footer__copy">
            © {year} <span>{PERSONAL.name}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
