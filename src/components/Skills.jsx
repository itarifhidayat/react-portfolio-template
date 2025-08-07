// === File: src/components/Skills.jsx ===
import React from 'react';
import { motion } from 'framer-motion';

const skills = ["HTML", "CSS", "JavaScript", "React", "TailwindCSS", "Git"];

export default function Skills() {
  return (
    <motion.section
      className="bg-white p-4 rounded shadow mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold mb-2">Skills</h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
