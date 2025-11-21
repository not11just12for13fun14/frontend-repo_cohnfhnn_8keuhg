export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-300/90">Start free. Scale when you’re ready.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          {/* Free */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-medium">Starter</h3>
            <p className="mt-1 text-sm text-slate-300/80">Build and test your first agent</p>
            <p className="mt-6 text-4xl font-semibold text-white">$0</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-300/90">
              <li>• 1,000 voice minutes</li>
              <li>• Community support</li>
              <li>• Basic analytics</li>
            </ul>
            <a href="#" className="mt-6 inline-flex justify-center items-center w-full rounded-xl bg-white text-slate-900 font-medium px-5 py-3">Start free</a>
          </div>

          {/* Pro */}
          <div className="rounded-3xl border border-purple-400/30 bg-gradient-to-b from-white/10 to-white/5 p-6 ring-1 ring-purple-400/30">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">Most popular</div>
            <h3 className="mt-3 text-white font-medium">Pro</h3>
            <p className="mt-1 text-sm text-slate-300/80">Production-ready scale</p>
            <p className="mt-6 text-4xl font-semibold text-white">$99<span className="text-base font-normal text-slate-300/80">/mo</span></p>
            <ul className="mt-6 space-y-2 text-sm text-slate-300/90">
              <li>• 50,000 voice minutes</li>
              <li>• Priority support</li>
              <li>• Webhooks and SDKs</li>
            </ul>
            <a href="#" className="mt-6 inline-flex justify-center items-center w-full rounded-xl bg-white text-slate-900 font-medium px-5 py-3">Start Pro</a>
          </div>

          {/* Enterprise */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-medium">Enterprise</h3>
            <p className="mt-1 text-sm text-slate-300/80">Custom deployments</p>
            <p className="mt-6 text-4xl font-semibold text-white">Custom</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-300/90">
              <li>• Unlimited voice minutes</li>
              <li>• SSO, SOC2, and SLAs</li>
              <li>• Dedicated success manager</li>
            </ul>
            <a href="#" className="mt-6 inline-flex justify-center items-center w-full rounded-xl bg-white/10 hover:bg-white/15 text-white px-5 py-3 border border-white/10">Talk to sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}
