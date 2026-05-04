import { Link } from "@tanstack/react-router";
import logo from "@/assets/gather-logo.png";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full transition-all duration-300">
      {/* Glossy Background with strong blur */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[20px]" />

      {/* Bottom Gradient Line (Stylish Accent) */}
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500/50 to-transparent shadow-[0_1px_10px_rgba(139,92,246,0.3)]" />

      <div className="relative mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between px-6 sm:px-12">
        {/* Logo Section */}
        <Link to="/" className="group flex items-center gap-4">
          <div className="relative flex h-11 w-11 items-center justify-center">
            {/* Spinning background glow on hover */}
            <div className="absolute inset-[-4px] rounded-2xl bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-cyan-400 opacity-30 blur-xl transition-all duration-500 group-hover:opacity-80 group-hover:rotate-180" />
            <img
              src={logo}
              alt="Gather"
              className="relative h-11 w-11 rounded-xl object-cover shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all duration-500 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col leading-none">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tighter text-white">Gather</span>
              <span className="rounded-md border border-violet-500/30 bg-violet-500/10 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-violet-400">
                Beta
              </span>
            </div>
            <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.4em] text-white/30">
              Future of Meetings
            </span>
          </div>
        </Link>

        {/* Dynamic Navigation */}
        <nav className="flex items-center gap-4 sm:gap-8">
          <div className="hidden items-center gap-2.5 rounded-full border border-white/5 bg-white/[0.03] px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 transition-all hover:bg-white/[0.08] hover:text-white/80 sm:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Live · NCR Region
          </div>

          <Button
            asChild
            className="group relative h-11 overflow-hidden rounded-xl bg-gradient-to-br from-white to-white/90 px-8 text-sm font-black text-black shadow-xl transition-all hover:scale-[1.02] hover:shadow-white/10 active:scale-[0.98]"
          >
            <Link to="/">
              <span className="relative z-10 flex items-center gap-2">
                Create Free Room
                <div className="h-1.5 w-1.5 rounded-full bg-violet-600 transition-all group-hover:scale-150" />
              </span>
              {/* Shimmer Effect */}
              <div className="absolute inset-0 z-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-violet-200/50 to-transparent transition-transform duration-500 group-hover:translate-x-[100%]" />
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
