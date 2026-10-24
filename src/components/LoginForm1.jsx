import React, { useRef, useState } from 'react';

const LoginForm = () => {
  // Direct DOM references for uncontrolled inputs
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  // State only for display & interactions
  const [submittedData, setSubmittedData] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    setSubmittedData({
      username,
      password,
      timestamp: new Date().toLocaleTimeString(),
    });
  };

  const handleCopyPayload = () => {
    if (!submittedData) return;
    navigator.clipboard.writeText(JSON.stringify(submittedData, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-[440px] px-4">
      {/* Outer Glow Halo */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500 rounded-3xl blur-xl opacity-40 animate-pulse transition duration-1000" />

      {/* Main Glass Shield */}
      <div className="relative bg-slate-950/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-7 sm:p-9 shadow-[0_0_50px_-12px_rgba(0,0,0,0.8)] text-slate-100">
        
        {/* Top Floating Badge & Status */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
          <div className="flex items-center gap-2.5">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </div>
            <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">
              Auth Gateway 2.0
            </span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            Uncontrolled
          </span>
        </div>

        {/* Title */}
        <div className="mb-7">
          <h2 className="text-3xl font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Welcome Back
          </h2>
          <p className="text-sm text-slate-400 mt-1 font-light">
            Authenticate to access your workspace.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username Input Field */}
          <div className="space-y-1.5">
            <label
              htmlFor="username"
              className="flex justify-between text-xs font-mono text-slate-400 uppercase tracking-wider"
            >
              <span>User Identity</span>
              <span className="text-cyan-400 text-[10px]">ref: username</span>
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500 group-focus-within:text-cyan-400 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                id="username"
                ref={usernameRef}
                type="text"
                required
                placeholder="developer_id"
                className="w-full pl-10 pr-4 py-3 bg-slate-900/60 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 text-sm font-sans focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-200"
              />
            </div>
          </div>

          {/* Password Input Field */}
          <div className="space-y-1.5">
            <label
              htmlFor="password"
              className="flex justify-between text-xs font-mono text-slate-400 uppercase tracking-wider"
            >
              <span>Secret Key</span>
              <span className="text-cyan-400 text-[10px]">ref: password</span>
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500 group-focus-within:text-cyan-400 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                id="password"
                ref={passwordRef}
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="••••••••••••"
                className="w-full pl-10 pr-12 py-3 bg-slate-900/60 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 text-sm font-sans focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="group relative w-full overflow-hidden rounded-xl p-[1px] font-semibold text-sm cursor-pointer shadow-lg active:scale-[0.99] transition duration-200"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500 group-hover:opacity-100 transition duration-300"></span>
            <span className="relative flex items-center justify-center gap-2 w-full py-3 px-4 rounded-[11px] bg-slate-950 text-white group-hover:bg-opacity-80 transition duration-300">
              <span>Initialize Session</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </form>

        {/* Display Output - Futuristic Terminal Inspector */}
        {submittedData && (
          <div className="mt-7 pt-5 border-t border-slate-800/80 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="bg-slate-900/90 border border-cyan-500/30 rounded-xl overflow-hidden shadow-inner">
              <div className="flex items-center justify-between px-3.5 py-2 bg-slate-800/50 border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  <span className="text-[11px] font-mono text-slate-400 ml-2">dom_ref_output.json</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyPayload}
                  className="text-[11px] font-mono text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  {copied ? 'Copied ✓' : 'Copy'}
                </button>
              </div>

              <div className="p-3.5 font-mono text-xs space-y-1.5 text-slate-300">
                <p>
                  <span className="text-indigo-400">"username":</span>{' '}
                  <span className="text-emerald-400">"{submittedData.username}"</span>
                </p>
                <p>
                  <span className="text-indigo-400">"password":</span>{' '}
                  <span className="text-emerald-400">"{submittedData.password}"</span>
                </p>
                <p>
                  <span className="text-indigo-400">"timestamp":</span>{' '}
                  <span className="text-slate-500">"{submittedData.timestamp}"</span>
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default LoginForm;