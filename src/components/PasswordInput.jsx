import React from 'react';

// PasswordInput component with toggle eye button
const PasswordInput = ({ password, setPassword, showPassword, setShowPassword }) => {
  return (
    <div className="relative">
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your secret password"
        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all pr-12 font-medium"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg transition-colors"
        title={showPassword ? 'Hide password' : 'Show password'}
      >
        {showPassword ? (
          // Eye Slash Icon (Hide)
          <span className="text-base select-none">🙈</span>
        ) : (
          // Eye Icon (Show)
          <span className="text-base select-none">👁️</span>
        )}
      </button>
    </div>
  );
};

export default PasswordInput;
