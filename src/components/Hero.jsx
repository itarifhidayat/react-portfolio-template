import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="text-center py-20 bg-white rounded shadow mb-8"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-bold mb-2 text-blue-600">Arif Hidayat</h1>
      <p className="text-xl text-gray-600">Front-End Developer</p>
    </motion.section>
  );
}