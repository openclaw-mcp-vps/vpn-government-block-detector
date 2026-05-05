export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] flex flex-col items-center px-4 py-16">
      {/* Hero */}
      <section className="max-w-2xl w-full text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Real-Time VPN Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Know When Your VPN Gets Blocked —{" "}
          <span className="text-[#58a6ff]">Before You Need It</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8">
          Continuous monitoring of VPN accessibility across 50+ countries. Get
          instant alerts, real-time blocking status, and working alternatives
          recommended automatically.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Monitoring — $5/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          {[
            ["50+", "Countries Monitored"],
            ["< 5 min", "Alert Latency"],
            ["200+", "VPNs Tracked"]
          ].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm w-full mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 flex flex-col items-center shadow-lg shadow-[#58a6ff]/10">
          <span className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro</span>
          <div className="text-5xl font-extrabold text-white mb-1">$5</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 w-full">
            {[
              "Real-time blocking status for 50+ countries",
              "Instant email & push alerts",
              "Working VPN recommendations",
              "Historical block data & trends",
              "API access for automation"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="w-full text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl w-full mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does VPN block detection work?",
              a: "Our infrastructure runs automated probes from servers inside each monitored country, attempting connections through hundreds of VPN endpoints every few minutes. When a VPN becomes unreachable, we flag it as blocked and immediately notify affected users."
            },
            {
              q: "How quickly will I be alerted when my VPN is blocked?",
              a: "Alerts are sent within 5 minutes of a block being detected. You can receive notifications via email or browser push, so you always have time to switch to a working alternative before losing access."
            },
            {
              q: "Can I cancel my subscription at any time?",
              a: "Yes. You can cancel anytime from your billing portal with no questions asked. Your access continues until the end of the current billing period."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-[#8b949e] text-xs text-center">
        &copy; {new Date().getFullYear()} VPN Block Detector. All rights reserved.
      </footer>
    </main>
  );
}
