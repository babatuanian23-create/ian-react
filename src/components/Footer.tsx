import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-800 py-10 px-6 bg-slate-950 text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
        
        {/* Copyright Text */}
        <p>© 2026 Ian Babatuan. All rights reserved.</p>

        {/* Social Links */}
        <div className="flex gap-6 font-medium">
          <a href="#" className="hover:text-cyan-400 transition-colors">
            GitHub
          </a>
          <a href="#" className="hover:text-cyan-400 transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-cyan-400 transition-colors">
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}