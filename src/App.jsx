import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Subtle grid */}
      <div className="pointer-events-none fixed inset-0 [background:radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.06),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(250,204,21,0.05),transparent_40%)]" />

      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <CTA />

      <footer className="relative border-t border-white/5 mt-10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} AuraAI Inc.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
