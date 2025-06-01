import React, { useState } from 'react';
import ModernInput from '../components/auth/ModernInput';
import ModernButton from '../components/auth/ModernButton';
import { useNavigate } from 'react-router-dom';
import '../App.css'
const LoginForm = ({ onSwitchToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const handleSubmit =async (e) => {

    e.preventDefault();

    try {
      console.log("Sending login with:", { email, password });
      const response = await fetch('https://digital-blink-loan.onrender.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login success", data);
        navigate("/home")
        // Optionally redirect user or store token
      } else {
        const error = await response.json();
        console.error("Login failed:", error.message);
        alert("Login failed: " + error.message);
      }
      
    } catch (error) {
      console.error('Error during login:', error);

    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-5">
        <ModernInput
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <ModernInput
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          showPasswordToggle
          isPasswordVisible={showPassword}
          onTogglePassword={() => setShowPassword(!showPassword)}
        />
      </div>

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center text-white/70 hover:text-white cursor-pointer transition-colors duration-200">
          <input type="checkbox" className="mr-2 rounded border-white/30 bg-white/10 text-cyan-500 focus:ring-cyan-500/50" />
          Remember me
        </label>
        <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 hover:underline">
          Forgot password?
        </button>
      </div>

      <ModernButton onClick={handleSubmit} className="w-full">
        Sign In
      </ModernButton>

      <div className="text-center">
        <span className="text-white/60">Don't have an account? </span>
        <button
          type="button"
          onClick={onSwitchToRegister}
          className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200 hover:underline focus:outline-none"
        >
          Sign up here
        </button>
      </div>
    </div>
  );
};

export default LoginForm;