import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo / Name */}
        <div className="font-bold text-lg tracking-wide text-slate-100">
          ian<span className="text-cyan-400">.babatuan</span>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm text-slate-400 font-medium">
        
          <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
      
        </div>
      </div>
    </nav>
  );
}