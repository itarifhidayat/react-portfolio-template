import React from 'react'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <header className="text-center mb-8">
        <img 
          src="/profile.jpg" 
          alt="Profile" 
          className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-gray-400"
        />
        <h1 className="text-3xl font-bold">Arif Hidayat</h1>
        <p className="text-lg text-gray-600">Front-End Developer</p>
      </header>

      <main className="grid gap-6 md:grid-cols-2">
        <motion.section 
          className="bg-white p-4 rounded shadow"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <p>I am a front-end developer who loves building beautiful and performant UIs with React.</p>
        </motion.section>

        <motion.section 
          className="bg-white p-4 rounded shadow"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <h2 className="text-xl font-semibold mb-2">Projects</h2>
          <ul className="list-disc list-inside">
            <li>Portfolio Website</li>
            <li>Landing Page UI</li>
            <li>Dashboard App</li>
          </ul>
        </motion.section>

        <motion.section 
          className="bg-white p-4 rounded shadow col-span-2"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <ul className="list-disc list-inside">
              <li>HTML</li>
              <li>Tailwind CSS</li>
              <li>CSS</li>
              <li>Git</li>
            </ul>
            <ul className="list-disc list-inside">
              <li>JavaScript</li>
              <li>Figma</li>
              <li>React</li>
              <li>REST API</li>
            </ul>
          </div>
        </motion.section>

        <motion.section 
          className="bg-white p-4 rounded shadow col-span-2"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.4 }}
        >
          <h2 className="text-xl font-semibold mb-2">Experience</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>🌐 Front-End Developer at PT. XYZ (2023–2024)</li>
            <li>🧪 UI Designer – Freelance (2022–sekarang)</li>
          </ul>
        </motion.section>

        <motion.section 
          className="bg-white p-4 rounded shadow col-span-2"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.6 }}
        >
          <h2 className="text-xl font-semibold mb-2">Contact Me</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
            <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
            <textarea placeholder="Your Message" className="w-full p-2 border rounded h-32"></textarea>
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Send Message</button>
          </form>
        </motion.section>

        <motion.section 
          className="bg-white p-4 rounded shadow col-span-2 text-center"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.8 }}
        >
          <h2 className="text-xl font-semibold mb-2">Connect with Me</h2>
          <div className="space-x-4">
            <a href="https://github.com/yourusername" className="text-blue-600 hover:underline">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" className="text-blue-600 hover:underline">LinkedIn</a>
            <a href="mailto:youremail@example.com" className="text-blue-600 hover:underline">Email</a>
          </div>
        </motion.section>
      </main>

      <footer className="mt-12 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Arif Hidayat. All rights reserved.
      </footer>
    </div>
  )
}

export default App
