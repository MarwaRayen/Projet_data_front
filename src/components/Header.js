import React, { useState, useEffect } from "react";
import Path from "./../assets/miniLogo-removed.png";
import lighting from "./../assets/light.png";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 text-gray-200 border-b transition-all duration-300 ${
        scrolled 
          ? 'border-purple-800/60 shadow-[0_4px_30px_rgba(124,58,237,0.3)] backdrop-blur-lg bg-[#0C0B12]/95' 
          : 'border-purple-900/30 shadow-[0_2px_20px_rgba(0,0,0,0.4)] bg-[#0C0B12]'
      }`}
      style={{
        backgroundImage: `url(${lighting})`,
        backgroundPosition: "right",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <nav className="relative flex items-center py-4 px-10 max-w-[1600px] mx-auto">

        {/* Logo on the far left */}
        <div className="absolute left-10">
          <a href="#home" className="group flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <img
                src={Path}
                alt="Logo"
                className="relative h-12 drop-shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="hidden md:block">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              </span>
            </div>
          </a>
        </div>

        {/* Centered links */}
        <div className="flex space-x-8 text-[15px] font-medium mx-auto">
          <a 
            href="#section1" 
            className="relative px-4 py-2 text-purple-200 hover:text-white transition-all duration-300 group"
          >
            <span className="relative z-10">Accueil</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-purple-600/0 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          
          <a 
            href="#section2" 
            className="relative px-4 py-2 text-purple-200 hover:text-white transition-all duration-300 group"
          >
            <span className="relative z-10">Mon Portefeuille</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-purple-600/0 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

        {/* Guide button on the far right */}
        <div className="absolute right-10">
          <a
            href="#section3"
            className="relative group overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-2.5 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Guide
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
        </div>

      </nav>

      {/* Subtle bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </header>
  );
}

export default Header;