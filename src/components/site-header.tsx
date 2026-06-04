import { Link } from "@tanstack/react-router";
import logo from "@/assets/gather-logo.png";
import { useEffect, useState } from "react";
import { Download, X } from "lucide-react";

export function SiteHeader() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstructions, setShowInstructions] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // If the event already fired before mount
    if ((window as any).deferredPrompt) {
      setDeferredPrompt((window as any).deferredPrompt);
    }

    const handleInstallable = () => {
      setDeferredPrompt((window as any).deferredPrompt);
    };

    window.addEventListener("pwa-installable", handleInstallable);
    return () => window.removeEventListener("pwa-installable", handleInstallable);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);
    }
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response to PWA install prompt: ${outcome}`);
      (window as any).deferredPrompt = null;
      setDeferredPrompt(null);
    } else {
      setShowInstructions(true);
    }
  };

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
          {/* PWA Install Button — Mobile only */}
          {!isStandalone && (
            <button
              onClick={handleInstallClick}
              className="flex items-center gap-1.5 rounded-xl border border-violet-500/30 bg-violet-500/15 px-3 h-9 text-xs font-black text-violet-300 transition-all hover:bg-violet-500/25 active:scale-95 sm:hidden"
            >
              <Download className="h-3.5 w-3.5 animate-pulse" />
              Install
            </button>
          )}

          {/* Status chip — hidden on mobile */}
          <div className="hidden items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-violet-300 sm:flex">
            Beta
          </div>
        </nav>
      </div>

      {/* Manual Install Instructions Modal */}
      {showInstructions && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div className="w-full max-w-xs rounded-[2rem] border border-white/10 bg-surface-elevated p-6 text-foreground shadow-elevated animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <h3 className="text-sm font-black text-white flex items-center gap-2">
                <Download className="h-4.5 w-4.5 text-violet-400" />
                Install Gather
              </h3>
              <button
                onClick={() => setShowInstructions(false)}
                className="rounded-lg p-1 text-white/40 hover:bg-white/5 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="mt-4 space-y-4 text-xs text-white/70">
              <p>
                Add **Gather** to your home screen for an app-like experience:
              </p>
              
              {/* iOS Safari */}
              <div className="rounded-xl bg-white/5 p-3 border border-white/5">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <span>🍎</span> Apple Safari (iOS)
                </div>
                <ol className="mt-2 list-decimal list-inside space-y-1.5 text-[11px] text-white/60">
                  <li>Tap the <strong>Share</strong> icon in Safari.</li>
                  <li>Scroll down and select <strong>Add to Home Screen</strong>.</li>
                </ol>
              </div>

              {/* Android/Chrome */}
              <div className="rounded-xl bg-white/5 p-3 border border-white/5">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <span>🤖</span> Android Chrome
                </div>
                <ol className="mt-2 list-decimal list-inside space-y-1.5 text-[11px] text-white/60">
                  <li>Tap the <strong>three dots</strong> menu.</li>
                  <li>Select <strong>Add to Home screen</strong> or <strong>Install app</strong>.</li>
                </ol>
              </div>

              <p className="text-[10px] text-white/40 leading-relaxed">
                ⚠️ Note: Automatic background installation requires a secure HTTPS connection.
              </p>
            </div>

            <button
              onClick={() => setShowInstructions(false)}
              className="mt-6 w-full rounded-xl bg-white py-2 text-center text-xs font-bold text-black shadow-lg transition hover:opacity-90 active:scale-95"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
