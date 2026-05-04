import { Link } from "@tanstack/react-router";
import logo from "@/assets/gather-logo.png";

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      {/* Glass background */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-2xl" />

      {/* Shimmer bottom border */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />

      <div className="relative mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between px-4 sm:px-8 lg:px-16">

        {/* ── Logo ── */}
        <Link to="/" className="group flex items-center gap-3 select-none">
          <div className="relative flex h-9 w-9 shrink-0 items-center justify-center">
            {/* Glow ring */}
            <div className="absolute inset-[-3px] rounded-xl bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-cyan-400 opacity-0 blur-md transition-all duration-500 group-hover:opacity-70" />
            <img
              src={logo}
              alt="Gather"
              className="relative h-9 w-9 rounded-xl object-cover shadow-lg transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-black tracking-tighter text-white sm:text-xl">
              Gather
            </span>
            <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-white/30">
              Future of meetings
            </span>
          </div>
        </Link>

        {/* ── Center pill badge ── */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/8 bg-white/[0.04] px-4 py-1.5 text-[11px] font-semibold text-white/50 backdrop-blur-md lg:flex">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          Live · India · No signup required
        </div>

        {/* ── Right nav ── */}
        <nav className="flex items-center gap-2 sm:gap-4">
          {/* Status chip — hidden on mobile */}
          <div className="hidden items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-violet-400/70 sm:flex">
            Beta
          </div>

          {/* CTA button */}
          <Link
            to="/"
            className="group relative h-9 overflow-hidden rounded-xl bg-white px-5 text-sm font-black text-black shadow-lg transition-all hover:scale-[1.03] hover:shadow-white/20 active:scale-[0.97] flex items-center gap-1.5"
          >
            <span className="relative z-10">New Room</span>
            <span className="relative z-10 h-1.5 w-1.5 rounded-full bg-violet-600 transition-all group-hover:scale-150" />
            {/* Shimmer sweep */}
            <span className="absolute inset-0 translate-x-[-110%] bg-gradient-to-r from-transparent via-violet-200/60 to-transparent transition-transform duration-500 group-hover:translate-x-[110%]" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
