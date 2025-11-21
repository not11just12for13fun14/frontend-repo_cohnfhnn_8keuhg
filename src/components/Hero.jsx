import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative pt-20 md:pt-28 pb-16 md:pb-24">
      {/* Gradient aura background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_10%,rgba(124,58,237,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_70%_20%,rgba(59,130,246,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_30%_20%,rgba(249,115,22,0.12),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 mb-4">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Now with real-time voice agents
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-white">
              AI products that sound human. Built for SaaS.
            </h1>
            <p className="mt-4 text-slate-300/90 text-lg">
              Launch AI voice and chat experiences in minutes. From lead capture to support, our platform gives your product a natural voice.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex justify-center items-center rounded-xl bg-white text-slate-900 font-medium px-5 py-3 shadow-lg shadow-purple-500/20">
                Start free
              </a>
              <a href="#features" className="inline-flex justify-center items-center rounded-xl bg-white/10 hover:bg-white/15 text-white px-5 py-3 border border-white/10">
                See features
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-300/80">
              <div className="flex -space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-7 w-7 rounded-full border border-white/20 bg-gradient-to-tr from-slate-600 to-slate-500" />
                ))}
              </div>
              <p>2,000+ teams building with AuraAI</p>
            </div>
          </div>

          <div className="relative h-[420px] md:h-[520px] rounded-3xl overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur-md">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
