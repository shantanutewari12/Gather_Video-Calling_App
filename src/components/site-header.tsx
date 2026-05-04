import { Link } from "@tanstack/react-router";
import logo from "@/assets/gather-logo.png";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="fixed top-4 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-7xl -translate-x-1/2 rounded-2xl border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-2xl transition-all duration-300 sm:rounded-3xl sm:px-6">
      <div className="flex h-12 items-center justify-between sm:h-14">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2.5 sm:gap-3">
          <div className="relative flex h-9 w-9 items-center justify-center sm:h-11 sm:w-11">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 opacity-70 blur-md group-hover:opacity-100 transition-opacity" />
            <img
              src={logo}
              alt="Gather"
              className="relative h-9 w-9 rounded-2xl object-cover shadow-xl sm:h-11 sm:w-11"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-black tracking-tight text-white sm:text-xl">Gather</span>
            <span className="hidden text-[9px] font-semibold uppercase tracking-[0.25em] text-white/40 sm:block">
              Video · Fast
            </span>
          </div>
        </Link>

        {/* Right nav */}
        <nav className="flex items-center gap-2 sm:gap-4">
          <div className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
            No login
          </div>
          <Button
            asChild
            size="sm"
            className="h-9 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-4 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-violet-500/30 sm:h-10 sm:px-5"
          >
            <Link to="/">New room</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}

