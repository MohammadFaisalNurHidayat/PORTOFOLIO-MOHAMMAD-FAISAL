import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL } from '../data/portfolio-data';

// Typing effect hook
function useTypingEffect(strings, typingSpeed = 90, deletingSpeed = 45, pauseMs = 2200) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = strings[index];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), pauseMs);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % strings.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [text, index, isDeleting, strings, typingSpeed, deletingSpeed, pauseMs]);

  return text;
}

export default function Hero() {
  const typedRole = useTypingEffect(PERSONAL.roles);

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="hero" className="hero">
      <motion.div
        className="hero__content"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge */}
        <motion.div variants={item}>
          <span className="hero__badge">
            <span className="hero__badge-dot" />
            Open for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 variants={item} className="hero__name">
          {PERSONAL.name}
        </motion.h1>

        {/* Typing roles */}
        <motion.p variants={item} className="hero__roles">
          {typedRole}
          <span className="hero__cursor" />
        </motion.p>

        {/* Bio */}
        <motion.p variants={item} className="hero__description">
          {PERSONAL.bio}
        </motion.p>

        {/* Social Links */}
        <motion.div variants={item} className="hero__socials">
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-link"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${PERSONAL.email}`}
            className="hero__social-link"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </motion.div>
      </motion.div>

      <div className="hero__divider" />
    </section>
  );
}
