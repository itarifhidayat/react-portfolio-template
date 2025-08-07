import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
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
      </main>
    </div>
  )
}

export default App
