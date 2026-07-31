import React from 'react';

export default function ProjectsSection() {
  return (
    <section id='projects' className="max-w-6xl mx-auto px-6 py-16">
      {/* Section Header */}
      <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
      <p className="text-slate-400 mb-8">Some of the projects I have built.</p>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Project 1 */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-5">
          <h3 className="text-xl font-semibold text-white mb-2">
            Full-Stack Web App
          </h3>
          <p className="text-slate-400 text-sm mb-4">
            A responsive web application with real-time data sync.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-slate-800 text-cyan-400 text-xs px-2 py-1 rounded">React</span>
            <span className="bg-slate-800 text-cyan-400 text-xs px-2 py-1 rounded">Node.js</span>
            <span className="bg-slate-800 text-cyan-400 text-xs px-2 py-1 rounded">Tailwind CSS</span>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-5">
          <h3 className="text-xl font-semibold text-white mb-2">
            UI/UX Interactive System
          </h3>
          <p className="text-slate-400 text-sm mb-4">
            Clean user interfaces with smooth transitions.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-slate-800 text-cyan-400 text-xs px-2 py-1 rounded">Figma</span>
            <span className="bg-slate-800 text-cyan-400 text-xs px-2 py-1 rounded">React</span>
            <span className="bg-slate-800 text-cyan-400 text-xs px-2 py-1 rounded">Tailwind CSS</span>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-5">
          <h3 className="text-xl font-semibold text-white mb-2">
            API Integration Hub
          </h3>
          <p className="text-slate-400 text-sm mb-4">
            Backend service for authentication and data flows.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-slate-800 text-cyan-400 text-xs px-2 py-1 rounded">Express</span>
            <span className="bg-slate-800 text-cyan-400 text-xs px-2 py-1 rounded">REST API</span>
            <span className="bg-slate-800 text-cyan-400 text-xs px-2 py-1 rounded">TypeScript</span>
          </div>
        </div>

      </div>
    </section>
  );
}