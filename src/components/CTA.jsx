export default function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-orange-500/20 p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-white">Ready to give your product a voice?</h3>
          <p className="mt-3 text-slate-300/90 max-w-2xl mx-auto">Get started in minutes with our SDKs or talk to our team about a custom deployment tailored to your stack.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="inline-flex justify-center items-center rounded-xl bg-white text-slate-900 font-medium px-5 py-3">Create free account</a>
            <a href="#" className="inline-flex justify-center items-center rounded-xl bg-white/10 hover:bg-white/15 text-white px-5 py-3 border border-white/10">Book a demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
