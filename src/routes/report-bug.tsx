import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bug, CheckCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
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
    if (!description.trim()) return;
    setSubmitting(true);

    try {
      // Store in Supabase meeting_messages as a workaround (using a dedicated "feedback" room)
      // In a production app, you'd have a dedicated feedback table
      const { error } = await supabase.from("meeting_messages").insert({
        meeting_id: "00000000-0000-0000-0000-000000000000", // sentinel feedback room id
        sender_id: null,
        sender_name: name.trim() || "Anonymous",
        content: `[${type.toUpperCase()}] ${email ? `(${email}) ` : ""}${description.trim()}`,
      });

      if (error) throw error;
      setSubmitted(true);
    } catch {
      toast.error("Failed to send. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4 text-foreground">
        <div className="text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-emerald-400" />
          <h1 className="mt-6 text-3xl font-black text-white">Thank you!</h1>
          <p className="mt-3 text-white/60">Your report has been received. We'll look into it.</p>
          <Link to="/" className="mt-8 inline-block rounded-xl bg-violet-600 px-6 py-3 text-sm font-bold text-white hover:bg-violet-500">
            Back to Gather
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:px-8">
        <Link to="/" className="mb-10 inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300">
          ← Back to Gather
        </Link>

        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15">
            <Bug className="h-6 w-6 text-violet-400" />
          </div>
          <div>
            <h1 className="text-3xl font-black tracking-tight text-white">Report a Bug</h1>
            <p className="text-sm text-white/50">Help us make Gather better</p>
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
              placeholder="Describe what happened, steps to reproduce it, and your device/browser..."
              rows={6}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/40 resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={submitting || !description.trim()}
            className="h-12 w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-sm font-bold text-white shadow-lg disabled:opacity-40"
          >
            {submitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending…
              </>
            ) : (
              "Send Report"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
