import { Bot, Headphones, Gauge, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'Natural conversations',
    desc: 'Neural speech and intent understanding that feels human across languages.'
  },
  {
    icon: Headphones,
    title: 'Omnichannel',
    desc: 'Voice, chat, SMS, and email—meet users where they are with one platform.'
  },
  {
    icon: Gauge,
    title: 'Fast to integrate',
    desc: 'Drop-in SDKs and webhooks. Go from idea to production in days, not months.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade',
    desc: 'SOC2 ready, data residency options, and private model hosting.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(80%_60%_at_50%_10%,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Everything you need to ship AI experiences</h2>
          <p className="mt-3 text-slate-300/90">Purpose-built tooling so you can focus on your product, not the plumbing.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-200/90 hover:bg-white/10 transition-colors">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 flex items-center justify-center text-white shadow-md shadow-purple-500/30">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
