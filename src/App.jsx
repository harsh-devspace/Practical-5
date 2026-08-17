import React, { useState } from 'react';
import PasswordInput from './components/PasswordInput';
import PasswordStrength from './components/PasswordStrength';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please fill out all fields!');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
        <div className="text-center pb-6 border-b border-slate-100 mb-6">
          <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full border border-indigo-100 mb-2">
            Practical 5: Visibility Toggle
          </span>
          <h1 className="text-2xl font-bold text-slate-800">Show/Hide Password</h1>
          <p className="text-xs text-slate-500 mt-1">
            Using useState & conditional rendering for seamless UX.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="student@example.edu"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
              Password
            </label>
            <PasswordInput
              password={password}
              setPassword={setPassword}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
            <PasswordStrength password={password} />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-sm transition-all duration-150 shadow-md hover:shadow-lg mt-2"
          >
            Submit Credentials
          </button>
        </form>

        {submitted && (
          <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-xs animate-fade-in">
            <p className="font-semibold">Form Submitted Successfully!</p>
            <p className="mt-1">
              Email: <span className="font-mono">{email}</span>
            </p>
            <p>
              Entered Password Length: <span className="font-mono">{password.length} chars</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
