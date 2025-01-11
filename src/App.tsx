import React, { useState, useEffect } from 'react';
import { Mail, Lock } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const waves = document.querySelectorAll('.wave');
      const icon = document.querySelector('.icon-container');
      if (!icon) return;
      
      const rect = icon.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * 0.015;
      const deltaY = (e.clientY - centerY) * 0.015;

      waves.forEach((wave) => {
        const depth = parseFloat(wave.getAttribute('data-depth') || '0');
        const moveX = deltaX * depth;
        const moveY = deltaY * depth;
        (wave as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center relative overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-red-900/30 to-black">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%)',
          backgroundSize: '100% 100%'
        }}>
          {/* Stars effect */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            opacity: '0.15'
          }} />
        </div>
      </div>

      {/* Login container */}
      <div className="relative z-10 w-full max-w-md px-6">
        {/* Logo circle with waves */}
        <div className="relative mx-auto w-16 h-16">
          {/* Waves container positioned relative to icon */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="wave absolute rounded-full" 
              data-depth="0.05"
              style={{
                width: '200px',
                height: '200px',
                left: '-100px',
                top: '-100px',
                background: 'rgba(255, 255, 255, 0)',
                boxShadow: 'inset -10.608px 7.072px 54.808px rgb(220 38 38), inset 0 2px 0px 0px rgba(254, 202, 202, 0.5)'
              }} />
            <div className="wave absolute rounded-full blur-[2px]" 
              data-depth="0.07"
              style={{
                width: '400px',
                height: '400px',
                left: '-200px',
                top: '-200px',
                boxShadow: 'inset 1px 1px 80px rgb(220 38 38)'
              }} />
            <div className="wave absolute rounded-full" 
              data-depth="0.03"
              style={{
                width: '600px',
                height: '600px',
                left: '-300px',
                top: '-300px',
                boxShadow: 'inset -53.04px 35.36px 274.04px rgb(220 38 38), inset -1px 2px 2px 0px rgba(254, 202, 202, 0.5)'
              }} />
            <div className="wave absolute rounded-full blur-md" 
              data-depth="0.14"
              style={{
                width: '800px',
                height: '800px',
                left: '-400px',
                top: '-400px',
                background: 'rgba(255, 255, 255, 0.001)',
                boxShadow: 'inset -53.04px 35.36px 274.04px rgb(220 38 38), inset 0 2px 0px 0px rgba(254, 202, 202, 0.5)'
              }} />
            <div className="wave absolute rounded-full blur-lg" 
              data-depth="0.1"
              style={{
                width: '1000px',
                height: '1000px',
                left: '-500px',
                top: '-500px',
                background: 'rgba(255, 255, 255, 0.001)',
                boxShadow: 'inset -53.04px 35.36px 274.04px rgb(220 38 38), inset 0 2px 0px 0px rgba(254, 202, 202, 0.3)'
              }} />
          </div>
          
          {/* Icon */}
          <div className="icon-container relative z-10 w-full h-full rounded-full bg-gradient-to-br from-red-500 to-red-800 flex items-center justify-center">
            <div className="text-white text-2xl">✧</div>
          </div>
        </div>

        {/* Welcome text with higher z-index */}
        <h1 className="relative z-20 text-4xl font-medium text-white text-center mb-12 mt-8">Welcome Back!</h1>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-gray-300 text-sm">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-lg py-3 px-10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-gray-300 text-sm">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-lg py-3 px-10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-gray-500 text-red-600 focus:ring-red-500"
              />
              <span className="text-gray-300 text-sm">Remember for 30 days</span>
            </label>
            <button type="button" className="text-gray-300 text-sm hover:text-white">
              Forgot password
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg py-3 font-medium hover:from-red-700 hover:to-red-800 transition-colors"
          >
            Sign in
          </button>

          <button
            type="button"
            className="w-full bg-white/5 border border-white/10 text-white rounded-lg py-3 font-medium hover:bg-white/10 transition-colors flex items-center justify-center space-x-2"
          >
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
            <span>Sign in with Google</span>
          </button>

          <p className="text-center text-gray-400">
            Don't have an account?{' '}
            <button type="button" className="text-white hover:text-red-400">
              Sign up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;