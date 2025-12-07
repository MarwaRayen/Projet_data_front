import React from "react";
import { Link } from 'react-scroll';
import logo from "./../assets/back.png";
import lighting from "./../assets/back_light.png"; 
import logo1 from "./../assets/logo-removed.png";

function Section1() {
  return (
    <section
      className="min-h-screen flex items-center justify-between px-16 py-24 text-gray-200 relative overflow-hidden"
      style={{
        background: "radial-gradient(circle at 20% 20%, #1A1325 0%, #0A0910 70%)"
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* LEFT : TEXT */}
      <div className="max-w-2xl space-y-6 relative z-10">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-purple-900/30 border border-purple-700/50 rounded-full px-4 py-2 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          <span className="text-purple-300 text-sm font-semibold tracking-wide">
            Plateforme d'Investissement Intelligent
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl font-extrabold leading-tight">
          <span className="text-white">Construisez un avenir</span>
          <br />
          <span className="text-white">financier plus sûr</span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
            grâce à l'analyse prédictive
          </span>
        </h1>

        {/* Description */}
        <p className="text-purple-200 text-lg leading-relaxed max-w-xl">
          Explorez vos stratégies d'investissement, comparez différentes approches
          et optimisez vos performances grâce à des outils avancés d'analyse de données.
        </p>

        {/* Stats/Features */}
        <div className="flex gap-8 pt-4">
          <div className="space-y-1">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              100+
            </div>
            <div className="text-purple-300 text-sm">ETF Disponibles</div>
          </div>
          <div className="w-px bg-purple-800/50"></div>
          <div className="space-y-1">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              24/7
            </div>
            <div className="text-purple-300 text-sm">Accès Gratuit</div>
          </div>
          <div className="w-px bg-purple-800/50"></div>
          <div className="space-y-1">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              IA
            </div>
            <div className="text-purple-300 text-sm">Analyse Avancée</div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-6 pt-6">
          <a
            href="#section2"
            className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Commencer la Simulation
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>

          <a
            href="#section3"
            className="group border-2 border-purple-700/50 hover:border-purple-600 bg-purple-900/20 hover:bg-purple-900/40 text-purple-200 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm flex items-center gap-2"
          >
            En savoir plus
            <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
        </div>

        {/* Trust indicators */}
        <div className="flex items-center gap-4 pt-6">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 border-2 border-[#0A0910] flex items-center justify-center text-white font-bold text-sm">
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <div className="text-sm text-purple-300">
            Rejoignez des milliers d'investisseurs
          </div>
        </div>

      </div>

      {/* RIGHT : IMAGE / GRAPHIC */}
      <div className="flex-shrink-0 ml-28 relative z-10">
        <div className="relative">
          {/* Glow effect behind image */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-3xl"></div>
          
          {/* Main image with hover effect */}
          <img
            src={logo1}
            alt="Illustration IA"
            className="relative w-[550px] opacity-95 transition-all duration-500 hover:scale-105 hover:opacity-100 drop-shadow-[0_0_50px_rgba(168,85,247,0.3)]"
          />
          
          {/* Floating elements */}
          <div className="absolute top-10 -left-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-4 shadow-2xl animate-float">
            <div className="text-white text-sm font-bold">+24.5%</div>
            <div className="text-purple-200 text-xs">ROI Annuel</div>
          </div>
          
          <div className="absolute bottom-20 -right-10 bg-gradient-to-br from-pink-600 to-purple-600 rounded-2xl p-4 shadow-2xl animate-float-delayed">
            <div className="text-white text-sm font-bold">1.8M+</div>
            <div className="text-purple-200 text-xs">Transactions</div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style>

    </section>
  );
}

export default Section1;