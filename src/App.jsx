import React from 'react'
import { motion } from 'framer-motion'

function App() {
  return (
    <motion.div
      className="min-h-screen bg-gray-100 text-gray-800 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Arif Hidayat</h1>
        <p className="text-lg text-gray-600">Front-End Developer</p>
      </header>
      <main className="grid gap-6 md:grid-cols-2">
        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <p>I am a front-end developer who loves building beautiful and performant UIs with React.</p>
        </section>
        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Projects</h2>
          <ul className="list-disc list-inside">
            <li>Portfolio Website</li>
            <li>Landing Page UI</li>
            <li>Dashboard App</li>
          </ul>
        </section>
        <section className="bg-white p-4 rounded shadow md:col-span-2">
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc list-inside grid grid-cols-2 md:grid-cols-4 gap-x-4">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>Git</li>
            <li>Figma</li>
            <li>REST API</li>
          </ul>
        </section>
        <section className="bg-white p-4 rounded shadow md:col-span-2">
          <h2 className="text-xl font-semibold mb-2">Contact Me</h2>
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded px-3 py-2"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="border border-gray-300 rounded px-3 py-2"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
            >
              Send Message
            </button>
          </form>
        </section>
        <section className="bg-white p-4 rounded shadow md:col-span-2">
          <h2 className="text-xl font-semibold mb-2">Connect with Me</h2>
          <div className="flex gap-4">
            <a
              href="https://github.com/itarifhidayat"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/itarifhidayat"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="mailto:it.arifhidayat@gmail.com"
              className="text-blue-600 hover:underline"
            >
              Email
            </a>
          </div>
        </section>
      </main>
      <footer className="text-center mt-12 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Arif Hidayat. All rights reserved.
      </footer>
    </motion.div>
  )
}

export default App