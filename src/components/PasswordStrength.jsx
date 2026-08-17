import React from 'react';

// PasswordStrength indicator component
const PasswordStrength = ({ password }) => {
  if (!password) return null;

  // Simple strength calculation logic
  const getStrength = (pass) => {
    let score = 0;
    if (pass.length >= 6) score++;
    if (pass.length >= 10) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;
    return score;
  };

  const strength = getStrength(password);

  const getLabel = () => {
    if (strength <= 2) return { text: 'Weak', color: 'bg-rose-500', textColor: 'text-rose-600' };
    if (strength <= 4) return { text: 'Medium', color: 'bg-amber-500', textColor: 'text-amber-600' };
    return { text: 'Strong', color: 'bg-emerald-500', textColor: 'text-emerald-600' };
  };

  const info = getLabel();

  return (
    <div className="mt-3 space-y-1.5">
      <div className="flex justify-between items-center text-xs">
        <span className="text-slate-500">Password Strength:</span>
        <span className={`font-semibold ${info.textColor}`}>{info.text}</span>
      </div>
      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden flex gap-1">
        <div
          className={`h-full transition-all duration-300 ${info.color}`}
          style={{ width: `${(strength / 5) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default PasswordStrength;
