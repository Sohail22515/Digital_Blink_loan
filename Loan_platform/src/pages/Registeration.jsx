import React, { useState } from 'react';
import ModernInput from '../components/auth/ModernInput';
import ModernButton from '../components/auth/ModernButton';
import '../App.css';

const RegisterForm = ({ onSwitchToLogin }) => {
  // Step 1: Basic Information
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Step 2: Personal Information
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [phone, setPhone] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('Single');
  const [numberOfDependents, setNumberOfDependents] = useState(0);

  // Step 3: Financial Information
  const [residenceType, setResidenceType] = useState('House');
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [previousLoans, setPreviousLoans] = useState(0);

  // UI States
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const validateStep1 = () => {
    const newErrors = {};
    if (!username) newErrors.username = 'Username is required';
    if (!email.includes('@')) newErrors.email = 'Valid email is required';
    if (password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords must match';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!country) newErrors.country = 'Country is required';
    if (!city) newErrors.city = 'City is required';
    if (!state) newErrors.state = 'State is required';
    if (!phone) newErrors.phone = 'Phone is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous messages
    setSubmitError(null);
    setSubmitSuccess(false);

    if (currentStep < 3) {
      if (currentStep === 1 && validateStep1()) {
        setCurrentStep(2);
      } else if (currentStep === 2 && validateStep2()) {
        setCurrentStep(3);
      }
      return;
    }

    if (!agreeTerms) {
      setErrors({ ...errors, agreeTerms: 'You must agree to the terms' });
      return;
    }

    const userData = {
      username,
      email,
      password,
      country,
      city,
      state,
      phone,
      residenceType,
      monthlyIncome: Number(monthlyIncome),
      previousLoans: Number(previousLoans),
      maritalStatus,
      numberOfDependents: Number(numberOfDependents)
    };

    try {
      setIsSubmitting(true);
      const response = await fetch('https://digital-blink-loan.onrender.com/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      // Success case
      setSubmitSuccess(true);
      
      // Reset form after successful registration
      setTimeout(() => {
        setCurrentStep(1);
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setCountry('');
        setCity('');
        setState('');
        setPhone('');
        setMaritalStatus('Single');
        setNumberOfDependents(0);
        setResidenceType('House');
        setMonthlyIncome('');
        setPreviousLoans(0);
        setAgreeTerms(false);
        setSubmitSuccess(false);
      }, 3000);

    } catch (error) {
      // console.error('Registration error:', error);
      setSubmitError(error.message || 'An error occurred during registration');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepIndicator = () => (
    <div className="flex justify-center mb-6">
      {[1, 2, 3].map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center 
            ${currentStep >= step ? 'bg-cyan-500 text-white' : 'bg-white/10 text-white/50'}`}
          >
            {step}
          </div>
          {step < 3 && (
            <div className={`w-12 h-1 ${currentStep > step ? 'bg-cyan-500' : 'bg-white/10'}`}></div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Success Alert */}
      {submitSuccess && (
        <div className="bg-green-500/20 backdrop-blur-sm border border-green-500/30 text-green-400 px-4 py-3 rounded-xl mb-4 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Registration successful! You can now log in.
        </div>
      )}

      {/* Error Alert */}
      {submitError && (
        <div className="bg-red-500/20 backdrop-blur-sm border border-red-500/30 text-red-400 px-4 py-3 rounded-xl mb-4 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {submitError}
        </div>
      )}

      {renderStepIndicator()}

      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">
          {currentStep === 1 && 'Create Your Account'}
          {currentStep === 2 && 'Personal Information'}
          {currentStep === 3 && 'Financial Details'}
        </h2>
        <p className="text-white/60 mb-6">
          {currentStep === 1 && 'Step 1 of 3: Basic information'}
          {currentStep === 2 && 'Step 2 of 3: Tell us about yourself'}
          {currentStep === 3 && 'Step 3 of 3: Financial information'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {currentStep === 1 && (
          <>
            <ModernInput
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              error={errors.username}
            />
            <ModernInput
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              error={errors.email}
            />
            <ModernInput
              type="password"
              placeholder="Password (at least 8 characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              showPasswordToggle
              isPasswordVisible={showPassword}
              onTogglePassword={() => setShowPassword(!showPassword)}
              error={errors.password}
            />
            <ModernInput
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              showPasswordToggle
              isPasswordVisible={showConfirmPassword}
              onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
              error={errors.confirmPassword}
            />
          </>
        )}

        {currentStep === 2 && (
          <>
            <ModernInput
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
              error={errors.country}
            />
            <ModernInput
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              error={errors.city}
            />
            <ModernInput
              type="text"
              placeholder="State/Province"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
              error={errors.state}
            />
            <ModernInput
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              error={errors.phone}
            />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/70 mb-2">Marital Status</label>
                <select
                  value={maritalStatus}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl focus:outline-none focus:border-cyan-400/50"
                >
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-2">Dependents</label>
                <select
                  value={numberOfDependents}
                  onChange={(e) => setNumberOfDependents(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl focus:outline-none focus:border-cyan-400/50"
                >
                  {[0, 1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>
          </>
        )}

        {currentStep === 3 && (
          <>
            <div>
              <label className="block text-sm text-white/70 mb-2">Residence Type</label>
              <select
                value={residenceType}
                onChange={(e) => setResidenceType(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl focus:outline-none focus:border-cyan-400/50"
              >
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Condo">Condo</option>
                <option value="Townhouse">Townhouse</option>
              </select>
            </div>
            <ModernInput
              type="number"
              placeholder="Monthly Income ($)"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(e.target.value)}
              required
              min="0"
            />
            <div>
              <label className="block text-sm text-white/70 mb-2">Previous Loans</label>
              <select
                value={previousLoans}
                onChange={(e) => setPreviousLoans(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl focus:outline-none focus:border-cyan-400/50"
              >
                {[0, 1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'loan' : 'loans'}</option>
                ))}
              </select>
            </div>
            <div className="flex items-start space-x-3 pt-4">
              <input
                type="checkbox"
                id="agreeTerms"
                checked={agreeTerms}
                onChange={() => setAgreeTerms(!agreeTerms)}
                className="mt-1 rounded border-white/30 bg-white/10 text-cyan-500 focus:ring-cyan-500/50"
              />
              <label htmlFor="agreeTerms" className="text-sm text-white/70 leading-relaxed">
                I agree to the{' '}
                <button type="button" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 hover:underline">
                  Terms of Service
                </button>
                {' '}and{' '}
                <button type="button" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 hover:underline">
                  Privacy Policy
                </button>
                {errors.agreeTerms && <span className="block text-red-400 text-xs mt-1">{errors.agreeTerms}</span>}
              </label>
            </div>
          </>
        )}

        <div className="flex justify-between pt-4">
          {currentStep > 1 ? (
            <ModernButton 
              type="button"
              onClick={() => setCurrentStep(currentStep - 1)}
              variant="secondary"
              className="bg-transparent border border-white/20 hover:bg-white/5"
            >
              Back
            </ModernButton>
          ) : (
            <div></div>
          )}
          
          <ModernButton 
            type="submit" 
            className="w-full md:w-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              currentStep < 3 ? 'Continue' : 'Complete Registration'
            )}
          </ModernButton>
        </div>

        {currentStep === 1 && (
          <div className="text-center pt-4">
            <span className="text-white/60">Already have an account? </span>
            <button
              type="button"
              onClick={onSwitchToLogin}
              className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200 hover:underline focus:outline-none"
            >
              Sign in here
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default RegisterForm;