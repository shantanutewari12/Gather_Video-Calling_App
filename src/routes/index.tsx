import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  Video,
  Video as VideoIcon,
  Link2,
  Calendar,
  Shield,
  Sparkles,
  Users,
  MessageSquare,
  Plus,
  Check,
  Mic,
  PhoneOff,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SiteHeader } from "@/components/site-header";
import { useAuth } from "@/hooks/use-auth";
import { supabase } from "@/integrations/supabase/client";
import { generateRoomCode, isValidRoomCode, normalizeRoomCode } from "@/lib/room";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import logo from "@/assets/gather-logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [code, setCode] = useState("");
  const [creating, setCreating] = useState(false);

  const handleCreateInstant = async () => {
    setCreating(true);
    try {
      const roomCode = generateRoomCode();
      const { error } = await supabase.from("meetings").insert({
        room_code: roomCode,
        title: "Instant meeting",
        host_id: user?.id ?? null,
      });
      if (error) throw error;
      navigate({ to: "/room/$code", params: { code: roomCode } });
    } catch (e) {
      toast.error("Couldn't create meeting", { description: (e as Error).message });
    } finally {
      setCreating(false);
    }
  };

  const handleJoin = () => {
    const c = normalizeRoomCode(code);
    if (!c) return;
    if (!isValidRoomCode(c) && c.length < 3) {
      toast.error("Enter a valid meeting code");
      return;
    }
    navigate({ to: "/room/$code", params: { code: c } });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* ─── Hero ─────────────────────────────────────────── */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">

          {/* Full-screen video background */}
          <div className="absolute inset-0 -z-20">
            <video autoPlay loop muted playsInline className="h-full w-full object-cover opacity-20">
              <source
                src="https://assets.mixkit.co/videos/preview/mixkit-abstract-flowing-purple-and-blue-gradient-background-video-41227-large.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/70 to-background" />

          {/* Ambient orbs */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />
          <div className="pointer-events-none absolute top-1/3 -left-32 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-500/8 blur-[100px]" />
          <div className="pointer-events-none absolute top-1/3 -right-32 -z-10 h-[400px] w-[400px] rounded-full bg-fuchsia-500/8 blur-[100px]" />

          {/* Content */}
          <div className="mx-auto w-full max-w-5xl pt-24 text-center">
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">

              {/* Badge */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-2 text-sm font-semibold text-violet-400/90 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5" />
                The world's fastest way to meet
              </div>

              {/* Headline */}
              <h1 className="text-5xl font-black leading-[0.92] tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl">
                Meetings
                <br />
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                  without friction.
                </span>
              </h1>

              {/* Sub */}
              <p className="mx-auto mt-7 max-w-xl text-base text-white/50 sm:text-lg">
                No accounts. No downloads. Just click, share&nbsp;&amp;&nbsp;talk.
              </p>

              {/* CTA row */}
              <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  disabled={creating}
                  onClick={handleCreateInstant}
                  className="group relative h-14 w-full overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-10 text-base font-black text-white shadow-lg shadow-violet-500/25 transition-all hover:scale-[1.02] hover:shadow-violet-500/40 active:scale-[0.98] sm:w-auto"
                >
                  <Video className="mr-2 h-5 w-5" />
                  {creating ? "Starting…" : "Start meeting"}
                  {/* shimmer */}
                  <span className="absolute inset-0 translate-x-[-110%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[110%]" />
                </Button>

                <div className="flex h-14 w-full items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 backdrop-blur-md focus-within:ring-1 focus-within:ring-violet-500/50 sm:w-auto">
                  <Link2 className="h-4 w-4 shrink-0 text-white/30" />
                  <Input
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleJoin()}
                    placeholder="Enter room code"
                    className="h-full border-0 bg-transparent text-sm font-medium text-white placeholder:text-white/30 focus-visible:ring-0 sm:w-44"
                  />
                  <Button
                    onClick={handleJoin}
                    className="h-9 rounded-xl bg-white/10 px-5 text-sm font-bold text-white hover:bg-white/20"
                  >
                    Join
                  </Button>
                </div>
              </div>

              {/* Stats strip */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] font-bold uppercase tracking-widest text-white/30">
                <div className="flex items-center gap-2">
                  <Shield className="h-3.5 w-3.5 text-violet-400/60" />
                  Peer-to-peer encrypted
                </div>
                <div className="h-1 w-1 rounded-full bg-white/10 sm:block hidden" />
                <div className="flex items-center gap-2">
                  <Users className="h-3.5 w-3.5 text-cyan-400/60" />
                  No login required
                </div>
                <div className="h-1 w-1 rounded-full bg-white/10 sm:block hidden" />
                <div className="flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-fuchsia-400/60" />
                  Instant join
                </div>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative mt-20 sm:mt-24">
              <div className="flex flex-1 overflow-hidden">
                <div className="relative flex-1 p-4 overflow-y-auto custom-scrollbar">
                  <div className={cn("mx-auto grid max-w-4xl gap-6", "grid-cols-1")}>
                    <div className="relative aspect-video max-w-5xl overflow-hidden rounded-[3rem] border border-white/10 bg-black/40 p-4 shadow-2xl backdrop-blur-xl">
                      <div className="grid h-full grid-cols-12 gap-4">
                        <div className="col-span-8 overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-500 to-purple-600 shadow-inner">
                          <div className="flex h-full items-center justify-center">
                            <Users className="h-20 w-20 text-white/20" />
                          </div>
                        </div>
                        <div className="col-span-4 flex flex-col gap-4">
                          <div className="flex-1 overflow-hidden rounded-[2rem] bg-gradient-to-br from-pink-500 to-rose-600 shadow-inner" />
                          <div className="flex-1 overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-500 to-teal-600 shadow-inner" />
                        </div>
                      </div>
                      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 rounded-3xl bg-black/80 p-4 border border-white/10 backdrop-blur-2xl shadow-2xl">
                        {[Mic, VideoIcon, Share2, MessageSquare, PhoneOff].map((Icon, i) => (
                          <div
                            key={i}
                            className={cn(
                              "h-12 w-12 flex items-center justify-center rounded-2xl transition-colors",
                              i === 4 ? "bg-destructive text-white" : "bg-white/10 text-white",
                            )}
                          >
                            <Icon className="h-6 w-6" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white/5 py-24 backdrop-blur-3xl">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-black sm:text-5xl">Loved by fast-moving teams.</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Don't take our word for it. Listen to our users.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {[
                {
                  quote:
                    "Gather is our go-to for quick architectural syncs at Maruti Suzuki. The zero-latency experience is just unmatched.",
                  author: "Manas Singh",
                  role: "Software Engineer - 3 @ Maruti Suzuki",
                  avatar: "MS",
                },
                {
                  quote:
                    "Being in Gurgaon, we handle global teams. Gather makes jumping into a call as easy as sending a WhatsApp message.",
                  author: "Abhishek Gupta",
                  role: "Senior Frontend Engineer @ boAt Lifestyle",
                  avatar: "AG",
                },
                {
                  quote:
                    "We've tried everything. Gather's simplicity is why our dev teams at Google Gurgaon love it for quick huddles.",
                  author: "Rohan Malhotra",
                  role: "Senior Staff Engineer @ Google India",
                  avatar: "RM",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 backdrop-blur-md transition-all hover:-translate-y-2 hover:border-primary/40 hover:bg-white/10 shadow-2xl"
                >
                  <p className="text-xl font-medium leading-relaxed italic text-foreground/90">
                    "{t.quote}"
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 text-sm font-black text-white shadow-lg">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-white">{t.author}</div>
                      <div className="text-xs font-medium text-primary/80">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
              {/* Text side */}
              <div>
                <h2 className="text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
                  Built for the{" "}
                  <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                    speed of thought.
                  </span>
                </h2>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed sm:mt-6 sm:text-xl">
                  We've optimized every single millisecond of the experience. From the moment you
                  land on the page to the first 'hello', Gather stays out of your way.
                </p>
                <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-6">
                  {[
                    {
                      title: "One-Click Rooms",
                      desc: "No configuration needed. Instant peer-to-peer connection.",
                    },
                    {
                      title: "High Fidelity Video",
                      desc: "Crystal clear 4K video with ultra-low latency.",
                    },
                    {
                      title: "Universal Compatibility",
                      desc: "Works on every browser and device. No exceptions.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 sm:gap-4">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 sm:h-8 sm:w-8">
                        <Check className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold sm:text-lg">{item.title}</h3>
                        <p className="text-sm text-muted-foreground sm:text-base">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual side — feature cards grid, looks great on all screens */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { icon: "⚡", label: "< 2s to join", sub: "World's fastest" },
                  { icon: "🔒", label: "E2E Private", sub: "No data stored" },
                  { icon: "📱", label: "Any Device", sub: "Mobile · Desktop" },
                  { icon: "🎙️", label: "HD Audio", sub: "Noise cancelled" },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/10 sm:rounded-3xl sm:p-6"
                  >
                    <span className="text-2xl sm:text-3xl">{card.icon}</span>
                    <div>
                      <div className="text-sm font-bold text-white sm:text-base">{card.label}</div>
                      <div className="text-xs text-muted-foreground sm:text-sm">{card.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/20 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-9 w-9 items-center justify-center">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 opacity-60 blur-sm" />
                <img src={logo} alt="Gather" className="relative h-9 w-9 rounded-xl object-cover" />
              </div>
              <span className="text-lg font-black tracking-tight">Gather</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-muted-foreground">
              <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
              <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
              <Link to="/security" className="hover:text-foreground transition-colors">Security</Link>
              <Link to="/report-bug" className="hover:text-violet-400 transition-colors">Report Bug 🐛</Link>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Gather Technologies.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
