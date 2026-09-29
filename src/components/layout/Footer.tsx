import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <footer className="bg-[#F7F3EE] dark:bg-[#0A0A0A] border-t border-[#E8E4D8] dark:border-[#1A1A1A] pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-20 mb-32">
          <div className="lg:col-span-2 space-y-10">
            <Link to="/" className="inline-block group">
              <span className="text-5xl font-normal text-[#8C3B4A] dark:text-[#FDFCFB] transition-all duration-300 group-hover:opacity-70" style={{ fontFamily: "'Great Vibes', cursive" }}>
                Misbah Writes
              </span>
            </Link>
            <p className="text-[#6B6658] dark:text-[#8E8A7D] max-w-xs leading-relaxed font-serif italic text-lg opacity-80">
              An editorial platform narrating youth culture, community dynamics, 
              and the quiet transformations of Upper Chitral.
            </p>
          </div>
          
          <div className="space-y-10">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C3B4A]">Platform</h4>
            <ul className="space-y-6 text-[#6B6658] dark:text-[#8E8A7D] font-serif italic text-lg">
              <li><Link to="/" className="hover:text-[#8C3B4A] transition-colors">Home Archive</Link></li>
              <li><Link to="/about" className="hover:text-[#8C3B4A] transition-colors">The Author</Link></li>
              <li><Link to="/search" className="hover:text-[#8C3B4A] transition-colors">Explore</Link></li>
            </ul>
          </div>

          <div className="space-y-10">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C3B4A]">Editorial</h4>
            <ul className="space-y-6 text-[#6B6658] dark:text-[#8E8A7D] font-serif italic text-lg">
              <li><a href="#" className="hover:text-[#8C3B4A] transition-colors">Culture</a></li>
              <li><a href="#" className="hover:text-[#8C3B4A] transition-colors">Society</a></li>
              <li><a href="#" className="hover:text-[#8C3B4A] transition-colors">Essays</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-10">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C3B4A]">Join the Circle</h4>
            <p className="text-[#6B6658] dark:text-[#8E8A7D] font-serif italic text-lg opacity-80 leading-relaxed">
              Receive a monthly curation of stories directly in your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                required
                placeholder="Editorial newsletter"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/50 dark:bg-black/50 border border-[#E8E4D8] dark:border-[#2A2A20] rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#8C3B4A] transition-all"
              />
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full py-4 text-xs tracking-widest uppercase"
              >
                {status === 'loading' ? 'Authenticating...' : 'Secure Subscription'}
              </button>
              {status === 'success' && (
                <p className="text-xs text-[#8C3B4A] font-bold tracking-widest uppercase text-center animate-pulse">
                  Welcome to the community.
                </p>
              )}
            </form>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-[#E8E4D8] dark:border-[#2A2A20] gap-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#8E8A7D]">© 2024 MisbahWrites. Narrating the Future.</p>
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-[#8E8A7D]">
              <a href="#" className="hover:text-[#8C3B4A] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#8C3B4A] transition-colors">Terms</a>
            </div>
          </div>
          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-widest text-[#8E8A7D]">
            <button className="hover:text-[#8C3B4A] transition-colors">Feed</button>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-[#8C3B4A] transition-colors"
            >
              Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
