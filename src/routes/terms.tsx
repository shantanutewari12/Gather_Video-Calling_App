import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <Link to="/" className="mb-10 inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300">
          ← Back to Gather
        </Link>
        <h1 className="text-4xl font-black tracking-tight">Terms of Service</h1>
        <p className="mt-2 text-sm text-white/40">Last updated: May 2025</p>

        <div className="mt-10 space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">1. Acceptance of Terms</h2>
            <p>By accessing or using Gather, you agree to be bound by these Terms of Service. If you do not agree, please do not use the platform.</p>
          </section>
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">2. Description of Service</h2>
            <p>Gather provides an instant, no-login video conferencing service. Rooms are ephemeral — no data is stored beyond the session. All communication is peer-to-peer (WebRTC) and does not pass through our servers.</p>
          </section>
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">3. User Conduct</h2>
            <p>You agree not to use Gather for any unlawful purpose, to harass, abuse, or harm others, or to transmit any content that violates applicable laws. We reserve the right to terminate access for violations.</p>
          </section>
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">4. Intellectual Property</h2>
            <p>All content, trademarks, and software on this platform belong to Gather Technologies. You may not copy, modify, or distribute any part of the platform without written permission.</p>
          </section>
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">5. Limitation of Liability</h2>
            <p>Gather is provided "as-is" without any warranties. We are not liable for any indirect, incidental, or consequential damages arising from your use of the service.</p>
          </section>
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">6. Changes to Terms</h2>
            <p>We may update these terms at any time. Continued use of Gather after changes constitutes acceptance of the revised terms.</p>
          </section>
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">7. Contact</h2>
            <p>Questions? <Link to="/report-bug" className="text-violet-400 underline hover:text-violet-300">Reach us here</Link>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
