import React from 'react';

export default function Hero() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-24">
      {/* Left-Aligned, Clean Layout */}
      <div className="border-l-4 border-cyan-400 pl-6 space-y-4">
        {/* Name Badge */}
        <p className="text-cyan-400 font-bold text-7xl tracking-wide">
          Ian Babatuan
        </p>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Building simple, functional, and modern web apps.
        </h1>

        {/* Short Bio */}
        <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed">
          I'm a web developer focused on creating clean digital experiences with modern web technologies.
        </p>

        {/* Action Links */}
        <div className="flex gap-6 pt-2 font-medium">
          <a 
            href="#projects" 
            className="text-cyan-400 hover:underline"
          >
            Explore My Work →
          </a>
          <a 
            href="#contact" 
            className="text-slate-400 hover:text-white transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}