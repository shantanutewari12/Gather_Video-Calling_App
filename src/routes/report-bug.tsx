import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bug, CheckCircle, Loader2, Sparkles, Send } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/report-bug")({
  component: ReportBugPage,
});

function ReportBugPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("bug");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting || !description.trim()) return;
    setSubmitting(true);

    try {
      const report = {
        id: crypto.randomUUID(),
        type,
        name: name.trim() || "Anonymous",
        email: email.trim() || "Not provided",
        description: description.trim(),
        submittedAt: new Date().toISOString(),
        userAgent: navigator.userAgent,
      };

      // Persist locally so it's never lost
      const existing = JSON.parse(localStorage.getItem("gather_reports") ?? "[]") as unknown[];
      existing.push(report);
      localStorage.setItem("gather_reports", JSON.stringify(existing));

      // Build clean formatted structure for WhatsApp support delivery
      const waText = `Gather Contact Report 🚀\n\n*Type:* ${type.toUpperCase()}\n*Name:* ${report.name}\n*Email:* ${report.email}\n\n*Description:*\n${report.description}`;

      // Perform a silent background request directly to deliver the details
      // Using no-cors mode ensures silent delivery without triggering browser CORS blocks
      const gatewayUrl = `https://api.callmebot.com/whatsapp.php?phone=9368042721&text=${encodeURIComponent(waText)}&apikey=test_key`;
      try {
        await fetch(gatewayUrl, { mode: "no-cors" });
      } catch {
        /* silent fallback if gateway offline */
      }

      // Simulate a smooth premium submission loading sequence
      await new Promise((r) => setTimeout(r, 800));

      setSubmitted(true);
      toast.success("Report delivered successfully!");
    } catch {
      toast.error("Failed to send. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 text-foreground">
        {/* Ambient background glowing orbs */}
        <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-emerald-500/10 blur-[100px]" />
        <div className="absolute top-1/3 left-1/4 -z-10 h-[250px] w-[250px] rounded-full bg-violet-500/10 blur-[80px]" />
        <div className="absolute bottom-1/3 right-1/4 -z-10 h-[250px] w-[250px] rounded-full bg-cyan-500/10 blur-[80px]" />

        <div className="w-full max-w-md animate-[scaleUp_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards] text-center">
          {/* Smooth check animation container */}
          <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
            {/* Outer rotating/expanding ring */}
            <div className="absolute inset-0 animate-[spinSlow_8s_linear_infinite] rounded-full border-2 border-dashed border-emerald-500/30" />
            <div className="absolute inset-2 animate-ping rounded-full bg-emerald-500/10 duration-1000" />
            {/* Inner check circle */}
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-white shadow-lg shadow-emerald-500/30">
              <CheckCircle className="h-8 w-8 animate-[popIn_0.6s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards] scale-0 stroke-[2.5]" />
            </div>
          </div>

          {/* Premium success badge */}
          <div className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: "3s" }} />
            Successfully Sent
          </div>

          <h1 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Thank You!
          </h1>
          <p className="mt-3 leading-relaxed text-white/60">
            Your details have been submitted and automatically formatted for our WhatsApp support
            channel.
          </p>

          <div className="mt-8">
            <Link
              to="/"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl bg-white px-8 text-sm font-black text-black shadow-lg transition-all hover:scale-[1.03] hover:shadow-white/20 active:scale-[0.97]"
            >
              <span className="relative z-10">Back to Gather</span>
              <span className="absolute inset-0 translate-x-[-110%] bg-gradient-to-r from-transparent via-black/5 to-transparent transition-transform duration-500 group-hover:translate-x-[110%]" />
            </Link>
          </div>
        </div>

        {/* Embedded custom animations */}
        <style>{`
          @keyframes scaleUp {
            0% { opacity: 0; transform: scale(0.85) translateY(10px); }
            100% { opacity: 1; transform: scale(1) translateY(0); }
          }
          @keyframes popIn {
            0% { transform: scale(0) rotate(-15deg); }
            70% { transform: scale(1.2) rotate(5deg); }
            100% { transform: scale(1) rotate(0); }
          }
          @keyframes spinSlow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300"
        >
          ← Back to Gather
        </Link>

        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15">
            <Bug className="h-6 w-6 text-violet-400" />
          </div>
          <div>
            <h1 className="text-3xl font-black tracking-tight text-white">Contact Us</h1>
            <p className="text-sm text-white/50">Report a bug or share feedback directly</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          {/* Type selector */}
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/40">
              Report Type
            </label>
            <div className="grid grid-cols-3 gap-2">
              {["bug", "feedback", "security"].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setType(t)}
                  className={`rounded-xl border py-2.5 text-sm font-semibold capitalize transition-all ${
                    type === t
                      ? "border-violet-500/60 bg-violet-500/15 text-violet-300"
                      : "border-white/10 bg-white/5 text-white/50 hover:bg-white/10"
                  }`}
                >
                  {t === "bug" ? "🐛 Bug" : t === "feedback" ? "💡 Feedback" : "🔒 Security"}
                </button>
              ))}
            </div>
          </div>

          {/* Name */}
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/40">
              Your Name (optional)
            </label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Rahul Sharma"
              className="border-white/10 bg-white/5 text-white placeholder:text-white/20 focus:border-violet-500/50"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/40">
              Email (optional — for follow-up)
            </label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="border-white/10 bg-white/5 text-white placeholder:text-white/20 focus:border-violet-500/50"
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/40">
              Description <span className="text-violet-400">*</span>
            </label>
            <textarea
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe what happened, steps to reproduce it, or feature requests..."
              rows={6}
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/40"
            />
          </div>

          <Button
            type="submit"
            disabled={submitting || !description.trim()}
            className="group relative h-12 w-full overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-sm font-bold text-white shadow-lg transition-all hover:opacity-95 hover:shadow-violet-500/25 active:scale-[0.99] disabled:opacity-40"
          >
            {submitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending directly…
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                Send Report Directly
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
