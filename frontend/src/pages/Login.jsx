import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Login = () => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login and redirect
    navigate('/lms/dashboard');
  };

  return (
    <div className="flex h-screen w-full font-sans">
      {/* Left Side (Image Container) */}
      <div className="w-1/2 hidden md:block relative">
        <img 
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop" 
          alt="Layered cake" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-12">
          <h2 className="text-4xl text-white font-serif font-bold mb-4">
            Welcome Back.
          </h2>
          <p className="text-lg text-white/90 max-w-md">
            Ready to continue mastering the art of premium baking?
          </p>
        </div>
      </div>

      {/* Right Side (Form Container) */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-[#FFFDF8] px-8 overflow-y-auto">
        <div className="w-full max-w-[560px] mx-auto py-12 inline-block">
          {/* Logo / Home Link */}
          <Link to="/" className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Flour Shower Logo" className="w-[85px] h-auto object-contain" />
            <span className="font-serif font-bold text-xl text-gray-800">Flour Shower</span>
          </Link>

          <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-gray-900 mt-16">
            Log In
          </h1>
          <p className="text-gray-500 mt-4 mb-12">
            Don't have an account?{' '}
            <Link to="/signup" className="text-[#E91E63] font-semibold hover:underline">
              Sign up here
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-y-12 mt-12">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold tracking-wider text-gray-400 uppercase">
                Email Address
              </label>
              <input 
                type="email" 
                placeholder="hello@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-gray-50/50 border border-gray-200 text-gray-900 rounded-xl px-5 py-5 text-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/40 focus:border-pink-500 transition-all duration-300 placeholder:text-gray-400"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold tracking-wider text-gray-400 uppercase">
                  Password
                </label>
                <a href="#" className="text-xs text-[#E91E63] hover:underline font-semibold">Forgot password?</a>
              </div>
              <input 
                type="password" 
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full bg-gray-50/50 border border-gray-200 text-gray-900 rounded-xl px-5 py-5 text-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/40 focus:border-pink-500 transition-all duration-300 placeholder:text-gray-400"
                required
              />
            </div>

            <button type="submit" className="w-full bg-[#E91E63] text-white font-semibold py-5 text-lg rounded-xl hover:bg-pink-600 transition-all duration-300 hover:shadow-[0_8px_20px_-6px_rgba(233,30,99,0.5)] hover:-translate-y-0.5 mt-8">
              Sign In
            </button>
          </form>

          <div className="mt-14 mb-14 flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-xs text-gray-400 font-bold tracking-wide uppercase px-2">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <button className="w-full bg-white border border-gray-200 text-gray-700 font-semibold py-5 text-lg rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-sm hover:border-gray-300 mt-8">
            <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

        </div>
      </div>
    </div>
  );
};

export default Login;
