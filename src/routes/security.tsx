import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield, Lock, Eye, Server, Wifi } from "lucide-react";

export const Route = createFileRoute("/security")({
  component: SecurityPage,
});

function SecurityPage() {
  const features = [
    {
      icon: Wifi,
      title: "Peer-to-Peer Encryption",
      desc: "All audio and video flows directly between participants using DTLS-SRTP encryption (WebRTC standard). No one — not even Gather — can intercept your calls.",
    },
    {
      icon: Lock,
      title: "No Recording",
      desc: "Gather never records your sessions. Media streams are transient and are never written to disk or passed through our infrastructure.",
    },
    {
      icon: Eye,
      title: "No Account Required",
      desc: "We don't require you to create an account, meaning there's no profile to breach, no password to steal, and no personal data on file.",
    },
    {
      icon: Server,
      title: "Signaling Security",
      desc: "Our signaling layer (used to connect peers) uses Supabase with row-level security. Signaling messages contain no media data.",
    },
    {
      icon: Shield,
      title: "Unique Room Codes",
      desc: "Each room code is a cryptographically random string. Guessing a room code is computationally infeasible.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <Link to="/" className="mb-10 inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300">
          ← Back to Gather
        </Link>
        <h1 className="text-4xl font-black tracking-tight">Security</h1>
        <p className="mt-3 max-w-2xl text-lg text-white/60">
          Gather is built with security as a first principle — not an afterthought. Here's exactly how we protect you.
        </p>

        <div className="mt-14 space-y-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:border-violet-500/30 hover:bg-white/[0.07]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/15">
                <f.icon className="h-6 w-6 text-violet-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{f.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/60">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
          <p className="text-sm font-semibold text-emerald-400">
            Found a security vulnerability?{" "}
            <Link to="/report-bug" className="underline hover:text-emerald-300">
              Report it responsibly →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
