import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="relative">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 shadow-lg shadow-purple-500/25"></div>
          <span className="text-white text-lg font-semibold tracking-tight">AuraAI</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-200/80 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm transition-colors border border-white/10">
            Get started
          </a>
        </div>

        <button aria-label="Toggle menu" className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-white" onClick={() => setOpen((v) => !v)}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-6 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-4 space-y-2">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-xl text-slate-200/90 hover:text-white hover:bg-white/5">
              {item.label}
            </a>
          ))}
          <a href="#pricing" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-center border border-white/10">
            Get started
          </a>
        </div>
      )}
    </header>
  );
}
