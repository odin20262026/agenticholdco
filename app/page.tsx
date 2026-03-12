export default function Home() {
  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <rect x="5" y="2" width="14" height="20" rx="3" />
          <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      title: "iOS Applications",
      desc: "AI-native mobile apps that solve real problems. Built with Swift, shipped to the App Store.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
          <path d="M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
        </svg>
      ),
      title: "Agentic Services",
      desc: "Autonomous AI agents that handle workflows end-to-end. From research to execution, 24/7.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M4 6h16M4 12h16M4 18h8" />
          <circle cx="18" cy="18" r="3" />
          <path d="M18 16v4m-2-2h4" />
        </svg>
      ),
      title: "AI Automation",
      desc: "Custom automation pipelines that eliminate manual work. Cron jobs, data processing, reporting.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      title: "SaaS Products",
      desc: "Full-stack software products powered by AI. Financial tools, business intelligence, and more.",
    },
  ];

  const portfolio = [
    { name: "AppForge", desc: "Autonomous iOS app factory", status: "Active" },
    { name: "FuelBooks", desc: "Gas station financial reporting SaaS", status: "Active" },
    { name: "Stoke", desc: "AI employees for small businesses", status: "Active" },
    { name: "BeatzBreeze", desc: "Music discovery iOS app", status: "In Development" },
  ];

  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b" style={{ borderColor: "var(--border)", background: "rgba(10,10,15,0.85)", backdropFilter: "blur(20px)" }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold" style={{ background: "var(--accent-glow)", color: "var(--accent)" }}>
              A
            </div>
            <span className="font-semibold text-white text-sm tracking-wide">Agentic Hold Co</span>
          </div>
          <div className="hidden sm:flex items-center gap-8 text-sm" style={{ color: "var(--text-muted)" }}>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(108,99,255,0.08) 0%, transparent 70%)",
        }} />
        <div className="max-w-6xl mx-auto relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8" style={{ background: "var(--accent-glow)", color: "var(--accent)" }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
              Building with AI
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
              AI-powered services<br />
              <span style={{ color: "var(--accent)" }}>for the real world</span>
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed max-w-2xl mb-10" style={{ color: "var(--text-muted)" }}>
              Agentic Hold Co is a holding company building AI-native products and services.
              From autonomous agents to iOS apps, we create technology that works while you sleep.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="px-6 py-3 rounded-lg text-sm font-medium text-white transition-all hover:opacity-90" style={{ background: "var(--accent)" }}>
                Our Services
              </a>
              <a href="#contact" className="px-6 py-3 rounded-lg text-sm font-medium border transition-all hover:bg-white/5" style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl border p-6 sm:p-8 transition-all hover:border-white/10"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5" style={{ background: "var(--accent-glow)", color: "var(--accent)" }}>
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 px-6" style={{ background: "var(--surface)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>Our Companies</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Portfolio</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {portfolio.map((p, i) => (
              <div
                key={i}
                className="rounded-2xl border p-6 transition-all hover:border-white/10"
                style={{ background: "var(--bg)", borderColor: "var(--border)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-semibold text-white">{p.name}</h3>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full" style={{
                    background: p.status === "Active" ? "rgba(52,211,153,0.1)" : "rgba(251,191,36,0.1)",
                    color: p.status === "Active" ? "#34D399" : "#FBBF24",
                  }}>
                    {p.status}
                  </span>
                </div>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>Contact</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let&apos;s build something</h2>
            <p className="text-base mb-10" style={{ color: "var(--text-muted)" }}>
              Interested in our services or want to explore a partnership? Reach out.
            </p>
            <a
              href="mailto:hello@agenticholdco.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-white transition-all hover:opacity-90"
              style={{ background: "var(--accent)" }}
            >
              hello@agenticholdco.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-6" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold" style={{ background: "var(--accent-glow)", color: "var(--accent)" }}>
              A
            </div>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>Agentic Hold Co LLC</span>
          </div>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            &copy; {new Date().getFullYear()} Agentic Hold Co LLC. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
