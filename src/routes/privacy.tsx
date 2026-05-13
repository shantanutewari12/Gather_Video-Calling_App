import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300"
        >
          ← Back to Gather
        </Link>
        <h1 className="text-4xl font-black tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-white/40">Last updated: May 2025</p>

        <div className="mt-10 space-y-8 leading-relaxed text-white/70">
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">1. What We Collect</h2>
            <p>Gather is designed to be privacy-first. We collect only what is necessary:</p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>Your chosen display name (stored in your session only)</li>
              <li>Chat messages (associated with your meeting session)</li>
              <li>Anonymous analytics (page views, no personal data)</li>
            </ul>
          </section>
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">2. What We Don&apos;t Collect</h2>
            <p>
              We do not store, record, or process your video or audio streams. All media is
              peer-to-peer (WebRTC) and never touches our servers.
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">3. Cookies</h2>
            <p>
              We use minimal session cookies to maintain your display name within a browser tab. We
              do not use tracking cookies.
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">4. Third-Party Services</h2>
            <p>
              Gather uses Supabase for real-time signaling and chat persistence. Vercel for hosting.
              Neither service receives your media streams.
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">5. Data Retention</h2>
            <p>
              Chat messages are retained for 30 days, then permanently deleted. Meeting metadata
              (room codes) may be retained for up to 90 days for abuse prevention.
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">6. Your Rights</h2>
            <p>
              You may request deletion of any data associated with a meeting you created. Contact us
              via our{" "}
              <Link to="/report-bug" className="text-violet-400 underline hover:text-violet-300">
                support form
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
