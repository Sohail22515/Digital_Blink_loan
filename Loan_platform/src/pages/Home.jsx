import React, { useState } from 'react';

// Icons
const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const DashboardIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6a2 2 0 01-2 2H10a2 2 0 01-2-2V5z" />
  </svg>
);

const ProjectsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const TasksIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const BellIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

const EyeIcon = ({ isVisible }) => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    {isVisible ? (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ) : (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1l22 22" />
      </>
    )}
  </svg>
);

// Modern Input Component
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
          className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 rounded-xl focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all duration-300 hover:bg-white/15 ${
            isFocused ? 'shadow-lg shadow-cyan-500/20' : ''
          }`}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors duration-200"
          >
            <EyeIcon isVisible={isPasswordVisible} />
          </button>
        )}
      </div>
    </div>
  );
};

// Modern Button Component
const ModernButton = ({ children, onClick, className = "", variant = "primary" }) => {
  const baseClasses = "relative overflow-hidden font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 group";
  
  const variants = {
    primary: "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30",
    secondary: "bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30",
    outline: "border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      )}
    </button>
  );
};

// Stats Card Component
const StatsCard = ({ title, value, change, icon: Icon, color = "cyan" }) => {
    const colorClasses = {
      cyan: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30",
      purple: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
      green: "from-green-500/20 to-emerald-500/20 border-green-500/30",
      orange: "from-orange-500/20 to-red-500/20 border-orange-500/30"
    };
  
    return (
      <div className={`bg-gradient-to-br ${colorClasses[color]} backdrop-blur-sm border rounded-2xl p-6 hover:scale-105 transition-all duration-300 group cursor-pointer`}>
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-br from-${color}-500 to-${color}-600 text-white group-hover:scale-110 transition-transform duration-300`}>
            <Icon />
          </div>
          <span className={`text-${color}-400 text-sm font-medium`}>{change}</span>
        </div>
        <h3 className="text-white/80 text-sm font-medium mb-1">{title}</h3>
        <p className="text-2xl font-bold text-white">{value}</p>
      </div>
    );
};

// Auth Modal Component
const AuthModal = ({ isOpen, onClose, isLogin, onToggleMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    console.log(isLogin ? 'Login' : 'Register', { email, password, fullName });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900/90 backdrop-blur-lg border border-white/10 rounded-3xl p-8 w-full max-w-md transform transition-all duration-300">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">{isLogin ? 'Sign In' : 'Sign Up'}</h2>
          <button onClick={onClose} className="text-white/60 hover:text-white transition-colors">
            <CloseIcon />
          </button>
        </div>

        <div className="space-y-4">
          {!isLogin && (
            <ModernInput
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          )}
          
          <ModernInput
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <ModernInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            showPasswordToggle
            isPasswordVisible={showPassword}
            onTogglePassword={() => setShowPassword(!showPassword)}
          />

          <ModernButton onClick={handleSubmit} className="w-full">
            {isLogin ? 'Sign In' : 'Create Account'}
          </ModernButton>

          <div className="text-center">
            <span className="text-white/60">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
            </span>
            <button
              onClick={onToggleMode}
              className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200 hover:underline"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);

  const sidebarItems = [
    { name: 'Dashboard', icon: DashboardIcon, active: true },
    { name: 'Loan Applications', icon: ProjectsIcon, active: false },
    { name: 'Payments', icon: TasksIcon, active: false },
    { name: 'Analytics', icon: AnalyticsIcon, active: false },
    { name: 'Settings', icon: SettingsIcon, active: false },
  ];

  const statsData = [
    { title: 'Total Projects', value: '24', change: '+12%', icon: ProjectsIcon, color: 'cyan' },
    { title: 'Active Tasks', value: '67', change: '+8%', icon: TasksIcon, color: 'purple' },
    { title: 'Completed', value: '143', change: '+23%', icon: DashboardIcon, color: 'green' },
    { title: 'Team Members', value: '12', change: '+2%', icon: UserIcon, color: 'orange' },
  ];

  const recentActivities = [
    { id: 1, title: 'Home Loan Application', status: 'Approved', priority: 'High', customer: 'John D.' },
    { id: 2, title: 'Car Loan Payment', status: 'Received', priority: 'Medium', customer: 'Jane S.' },
    { id: 3, title: 'Business Loan Review', status: 'Pending', priority: 'High', customer: 'Mike J.' },
    { id: 4, title: 'Personal Loan Inquiry', status: 'New', priority: 'Medium', customer: 'Sarah W.' },
  ];

  const getPriorityColor = (priority) => {
    const colors = {
      High: 'bg-red-500/20 text-red-400 border-red-500/30',
      Medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      Low: 'bg-green-500/20 text-green-400 border-green-500/30'
    };
    return colors[priority] || colors.Medium;
  };

  const getStatusColor = (status) => {
    const colors = {
      'Approved': 'bg-green-500/20 text-green-400 border-green-500/30',
      'Received': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Pending': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      'New': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'Rejected': 'bg-red-500/20 text-red-400 border-red-500/30'
    };
    return colors[status] || colors.New;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-400/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900/90 backdrop-blur-lg border-r border-white/10 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0`}>
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="text-white font-bold text-xl">LoanFlow</span>
          </div>

          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.name}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  item.active
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon />
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="relative z-40 bg-gray-900/50 backdrop-blur-lg border-b border-white/10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="lg:hidden text-white/70 hover:text-white transition-colors"
                >
                  {sidebarOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
                <h1 className="ml-4 lg:ml-0 text-xl font-semibold text-white">Loan Management Dashboard</h1>
              </div>

              <div className="flex items-center space-x-4">
                <button className="relative p-2 text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                  <BellIcon />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                <div className="hidden sm:flex items-center space-x-3">
                  <ModernButton
                    variant="secondary"
                    onClick={() => {
                      setIsLoginMode(true);
                      setAuthModalOpen(true);
                    }}
                    className="text-sm"
                  >
                    Lender Login
                  </ModernButton>
                  <ModernButton
                    onClick={() => {
                      setIsLoginMode(false);
                      setAuthModalOpen(true);
                    }}
                    className="text-sm"
                  >
                    Apply Now
                  </ModernButton>
                </div>

                <button className="sm:hidden p-2 text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                  <UserIcon />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="relative z-10 p-4 sm:p-6 lg:p-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-2">Welcome to LoanFlow</h2>
              <p className="text-white/70">Your comprehensive loan management platform. Track applications, payments, and financial health.</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsData.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>

          {/* Recent Activities */}
          <div className="bg-gray-900/50 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Recent Loan Activities</h3>
              <ModernButton variant="secondary" className="text-sm">
                View All Applications
              </ModernButton>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-white/60 text-sm">
                    <th className="pb-4">Loan Type</th>
                    <th className="pb-4 hidden sm:table-cell">Status</th>
                    <th className="pb-4 hidden md:table-cell">Priority</th>
                    <th className="pb-4 hidden lg:table-cell">Customer</th>
                  </tr>
                </thead>
                <tbody className="space-y-4">
                  {recentActivities.map((activity) => (
                    <tr key={activity.id} className="border-t border-white/5">
                      <td className="py-4">
                        <span className="text-white font-medium">{activity.title}</span>
                      </td>
                      <td className="py-4 hidden sm:table-cell">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(activity.status)}`}>
                          {activity.status}
                        </span>
                      </td>
                      <td className="py-4 hidden md:table-cell">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(activity.priority)}`}>
                          {activity.priority}
                        </span>
                      </td>
                      <td className="py-4 hidden lg:table-cell">
                        <span className="text-white/70">{activity.customer}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Auth Buttons */}
          <div className="sm:hidden fixed bottom-4 right-4 flex flex-col space-y-2">
            <ModernButton
              variant="secondary"
              onClick={() => {
                setIsLoginMode(true);
                setAuthModalOpen(true);
              }}
              className="text-sm"
            >
              Lender Login
            </ModernButton>
            <ModernButton
              onClick={() => {
                setIsLoginMode(false);
                setAuthModalOpen(true);
              }}
              className="text-sm"
            >
              Apply Now
            </ModernButton>
          </div>
        </main>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        isLogin={isLoginMode}
        onToggleMode={() => setIsLoginMode(!isLoginMode)}
      />
    </div>
  );
};

export default Dashboard;