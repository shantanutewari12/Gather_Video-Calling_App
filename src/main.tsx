import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import "./styles.css";

// Force dark mode globally — the entire Gather app is designed dark
document.documentElement.classList.add("dark");

// Register PWA service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js")
      .then((reg) => console.log("PWA Service Worker registered successfully:", reg.scope))
      .catch((err) => console.error("PWA Service Worker registration failed:", err));
  });
}

// Track installation prompt
window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent standard browser bar from showing
  e.preventDefault();
  // Stash the event so it can be triggered later
  (window as any).deferredPrompt = e;
  // Notify header components that app is installable
  window.dispatchEvent(new CustomEvent("pwa-installable"));
});

const router = getRouter();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
