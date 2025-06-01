import React, { useState } from 'react';
import RocketIcon from '../components/auth/RockeIcon';
import LoginPage from './Login';
import RegisterPage from './Registeration';
import '../App.css'

const App = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-sans">

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-8 lg:gap-12">
          

          <div className="flex flex-col justify-center items-center text-center lg:text-left space-y-8 px-4 lg:px-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="text-2xl">💰</span>
                <span className="text-white/80 text-sm font-medium">Financial Freedom Made Simple</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Get the
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> funds </span>
                you need and
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> grow </span>
                your dreams
              </h1>
              
              <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
                Fast, transparent loans with competitive rates. Get approved in minutes and receive funds the same day.
              </p>

              <ul className="text-white/80 space-y-2 text-left">
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span> Instant approval decisions
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span> Rates from 3.99% APR
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span> No hidden fees
                </li>
              </ul>
            </div>
            
            <div className="hidden lg:block">
              <RocketIcon />
            </div>
            
            <div className="flex space-x-3">
              <div className="w-3 h-3 bg-white/40 rounded-full"></div>
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-white/40 rounded-full"></div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl shadow-black/20">
                
                {/* Tab Navigation */}
                <div className="flex bg-white/5 rounded-2xl p-1 mb-8">
                  <button
                    onClick={() => setIsRegistering(false)}
                    className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      !isRegistering
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => setIsRegistering(true)}
                    className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      isRegistering
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Get Started
                  </button>
                </div>

                {/* Form Content */}
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {isRegistering ? 'Begin Your Loan Journey' : 'Welcome Back'}
                    </h2>
                    <p className="text-white/60">
                      {isRegistering 
                        ? 'Join thousands who trusted us for their financial needs' 
                        : 'Access your loan dashboard and manage your account'
                      }
                    </p>
                  </div>

                  {isRegistering ? (
                    <RegisterPage onSwitchToLogin={() => setIsRegistering(false)} />
                  ) : (
                    <LoginPage onSwitchToRegister={() => setIsRegistering(true)} />
                  )}
                </div>

                {!isRegistering && (
                  <div className="mt-6 text-center text-sm text-white/60">
                    Pre-qualify for a loan without affecting your credit score
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;