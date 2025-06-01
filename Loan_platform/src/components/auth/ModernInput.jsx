import React, { useState } from 'react';
import EyeIcon from './EyeIcon';

const ModernInput = ({ 
  type, 
  placeholder, 
  value, 
  onChange, 
  required, 
  showPasswordToggle = false,
  isPasswordVisible = false,
  onTogglePassword = () => {}
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative group">
      <div className={`relative transition-all duration-300 ${isFocused ? 'transform scale-[1.02]' : ''}`}>
        <input
          type={showPasswordToggle ? (isPasswordVisible ? 'text' : 'password') : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 rounded-2xl focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all duration-300 hover:bg-white/15 group-hover:border-white/30 ${
            isFocused ? 'shadow-lg shadow-cyan-500/20' : ''
          }`}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors duration-200"
          >
            <EyeIcon isVisible={isPasswordVisible} />
          </button>
        )}
      </div>
      <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${
        isFocused ? 'w-full' : 'w-0'
      }`}></div>
    </div>
  );
};

export default ModernInput;