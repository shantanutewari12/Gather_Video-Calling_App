import { Link } from "@tanstack/react-router";
import logo from "@/assets/gather-logo.png";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="fixed top-6 left-1/2 z-50 w-[95%] max-w-6xl -translate-x-1/2 rounded-[2rem] border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-2xl transition-all duration-500 hover:border-primary/30 hover:bg-black/70 sm:px-8">
      <div className="flex h-12 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center sm:h-12 sm:w-12">
            {/* Animated Glow ring */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-400 opacity-60 blur-lg group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 animate-pulse" />
            <img
              src={logo}
              alt="Gather"
              className="relative h-10 w-10 rounded-2xl object-cover shadow-2xl transition-transform duration-500 group-hover:rotate-3 sm:h-12 sm:w-12"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-black tracking-tighter text-white sm:text-2xl">
              Gather
            </span>
            <span className="hidden text-[10px] font-bold uppercase tracking-[0.3em] text-primary/80 sm:block">
              Made in India
            </span>
          </div>
        </Link>

        {/* Right nav */}
        <nav className="flex items-center gap-3 sm:gap-6">
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white/60 transition-colors hover:text-white sm:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            Instant Join
          </div>
          <Button
            asChild
            size="sm"
            className="h-11 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 text-sm font-black text-white shadow-[0_10px_20px_-10px_rgba(124,58,237,0.5)] transition-all hover:scale-105 hover:shadow-violet-500/40 active:scale-95"
          >
            <Link to="/">Create Room</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
