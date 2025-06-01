import React from 'react';

const ModernButton = ({ children, type = "button", onClick, className = "" }) => (
  <button
    type={type}
    onClick={onClick}
    className={`relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30 active:scale-95 group ${className}`}
  >
    <span className="relative z-10">{children}</span>
    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
  </button>
);

export default ModernButton;