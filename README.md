<div align="center">

<!-- ANIMATED SVG HERO - No external dependency, works on GitHub -->
<svg width="800" height="200" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f0c29"/>
      <stop offset="50%" style="stop-color:#302b63"/>
      <stop offset="100%" style="stop-color:#24243e"/>
    </linearGradient>
    <linearGradient id="textgrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#a78bfa">
        <animate attributeName="stop-color" values="#a78bfa;#22d3ee;#a78bfa" dur="4s" repeatCount="indefinite"/>
      </stop>
      <stop offset="100%" style="stop-color:#22d3ee">
        <animate attributeName="stop-color" values="#22d3ee;#a78bfa;#22d3ee" dur="4s" repeatCount="indefinite"/>
      </stop>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
      <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <rect width="800" height="200" fill="url(#bg)" rx="12"/>

  <!-- Animated bg circles -->
  <circle cx="80" cy="40" r="60" fill="#7c3aed" opacity="0.15">
    <animate attributeName="r" values="60;80;60" dur="5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="720" cy="160" r="70" fill="#06b6d4" opacity="0.15">
    <animate attributeName="r" values="70;50;70" dur="5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="400" cy="180" r="50" fill="#a78bfa" opacity="0.1">
    <animate attributeName="r" values="50;70;50" dur="6s" repeatCount="indefinite"/>
  </circle>

  <!-- Floating stars -->
  <circle cx="150" cy="100" r="3" fill="#a78bfa" opacity="0.6">
    <animate attributeName="cy" values="100;90;100" dur="3s" repeatCount="indefinite"/>
  </circle>
  <circle cx="650" cy="80" r="2" fill="#22d3ee" opacity="0.6">
    <animate attributeName="cy" values="80;70;80" dur="2.5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="300" cy="150" r="2.5" fill="#fff" opacity="0.3">
    <animate attributeName="cy" values="150;140;150" dur="4s" repeatCount="indefinite"/>
  </circle>
  <circle cx="500" cy="50" r="2" fill="#fff" opacity="0.3">
    <animate attributeName="cy" values="50;60;50" dur="3.5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="200" cy="60" r="1.5" fill="#fff" opacity="0.4">
    <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite"/>
  </circle>
  <circle cx="600" cy="140" r="1.5" fill="#a78bfa" opacity="0.5">
    <animate attributeName="opacity" values="0.5;1;0.5" dur="2.8s" repeatCount="indefinite"/>
  </circle>

  <!-- GATHER title -->
  <text x="400" y="108" font-family="'Segoe UI', Arial, sans-serif" font-size="72" font-weight="700"
    fill="url(#textgrad)" text-anchor="middle" filter="url(#glow)" letter-spacing="12">
    GATHER
    <animate attributeName="opacity" values="0;1" dur="1s" fill="freeze"/>
  </text>

  <!-- Subtitle -->
  <text x="400" y="148" font-family="'Segoe UI', Arial, sans-serif" font-size="14"
    fill="#94a3b8" text-anchor="middle" letter-spacing="3">
    MEETINGS AT THE SPEED OF THOUGHT
    <animate attributeName="opacity" values="0;1" begin="0.5s" dur="1s" fill="freeze"/>
  </text>

  <!-- Animated underline -->
  <line x1="200" y1="165" x2="600" y2="165" stroke="url(#textgrad)" stroke-width="1" opacity="0.5">
    <animate attributeName="x1" values="400;200;400" dur="3s" repeatCount="indefinite"/>
    <animate attributeName="x2" values="400;600;400" dur="3s" repeatCount="indefinite"/>
  </line>
</svg>

<br/>

<h3>✨ Experience the Magic of Instant Communication ✨</h3>

<p>
  <a href="https://app-blueprint-tau.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20LIVE%20DEMO-VISIT%20NOW-7c3aed?style=for-the-badge" alt="Live Demo"/>
  </a>
  &nbsp;&nbsp;
  <a href="#-user-guide">
    <img src="https://img.shields.io/badge/📖%20USER%20GUIDE-READ%20MORE-06b6d4?style=for-the-badge" alt="User Guide"/>
  </a>
</p>

<br/>

<blockquote>
<b>Gather</b> is a high-performance video conferencing platform designed to strip away the friction of modern communication.<br/>
No accounts, no downloads — just instant connection.
</blockquote>

<br/>

<table>
  <tr>
    <td align="center"><h3>🚀</h3><b>&lt;500ms</b><br/><sub>Time to start</sub></td>
    <td align="center"><h3>🔒</h3><b>Peer-to-Peer</b><br/><sub>End-to-end privacy</sub></td>
    <td align="center"><h3>📱</h3><b>Mobile First</b><br/><sub>Works on any device</sub></td>
    <td align="center"><h3>🇮🇳</h3><b>Made in India</b><br/><sub>Built for Indian tech</sub></td>
  </tr>
</table>

</div>

---

## 💎 Premium Features

<div align="center">

| 🛰️ Real-time Presence | 🎨 Glassmorphic UI | 🔔 Smart Chimes |
|:---:|:---:|:---:|
| Instant participant sync via Supabase | Sleek, modern design with smooth blurs | Melodic join/leave audio feedback |

| ⚡ WebRTC Powered | 📱 Mobile First | 🔒 Secure Rooms |
|:---:|:---:|:---:|
| Low-latency P2P video/audio | Optimized for mobile browsers | Unique encrypted meeting codes |

</div>

---

## 📖 User Guide

<details>
<summary><b>🛠️ Step 1 — Create Your Workspace</b></summary>
<br/>

Click the **"Create Room"** button. You'll be instantly transported to your private meeting space. No signup, no waiting.

<br/>
</details>

<details>
<summary><b>🔗 Step 2 — Invite Your Team</b></summary>
<br/>

Share the unique URL or meeting code with your colleagues. They can join instantly with one click — no account needed.

<br/>
</details>

<details>
<summary><b>🖥️ Step 3 — Present Your Ideas</b></summary>
<br/>

Use the **Screen Share** icon at the bottom to broadcast your screen to all participants in high definition.

<br/>
</details>

<details>
<summary><b>🎵 Step 4 — Sensory Feedback</b></summary>
<br/>

Listen for the *melodic join chimes* that notify you when someone enters or leaves — without ever interrupting the flow.

<br/>
</details>

---

## 🏗️ Tech Stack

<div align="center">

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![WebRTC](https://img.shields.io/badge/WebRTC-333333?style=for-the-badge&logo=webrtc&logoColor=white)

</div>

---

## 🛠️ Local Development

```bash
# Clone the repository
git clone https://github.com/shantanutewari12/app-blueprint.git

# Install dependencies
npm install

# Launch development server
npm run dev
```

---

<div align="center">

<!-- ANIMATED SVG FOOTER -->
<svg width="800" height="100" viewBox="0 0 800 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="footerbg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f0c29"/>
      <stop offset="50%" style="stop-color:#302b63"/>
      <stop offset="100%" style="stop-color:#24243e"/>
    </linearGradient>
    <linearGradient id="footertext" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#a78bfa">
        <animate attributeName="stop-color" values="#a78bfa;#22d3ee;#a78bfa" dur="4s" repeatCount="indefinite"/>
      </stop>
      <stop offset="100%" style="stop-color:#22d3ee">
        <animate attributeName="stop-color" values="#22d3ee;#a78bfa;#22d3ee" dur="4s" repeatCount="indefinite"/>
      </stop>
    </linearGradient>
  </defs>

  <rect width="800" height="100" fill="url(#footerbg)" rx="12"/>

  <!-- Twinkling stars -->
  <circle cx="100" cy="30" r="1.5" fill="white" opacity="0.5">
    <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
  </circle>
  <circle cx="250" cy="60" r="1" fill="white" opacity="0.4">
    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3s" repeatCount="indefinite"/>
  </circle>
  <circle cx="550" cy="25" r="1.5" fill="white" opacity="0.5">
    <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="700" cy="65" r="1" fill="white" opacity="0.4">
    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="1.8s" repeatCount="indefinite"/>
  </circle>
  <circle cx="400" cy="20" r="1" fill="#a78bfa" opacity="0.6">
    <animate attributeName="opacity" values="0.6;1;0.6" dur="2.2s" repeatCount="indefinite"/>
  </circle>
  <circle cx="680" cy="35" r="2" fill="#22d3ee" opacity="0.4">
    <animate attributeName="opacity" values="0.4;1;0.4" dur="3.2s" repeatCount="indefinite"/>
  </circle>

  <text x="400" y="52" font-family="'Segoe UI', Arial, sans-serif" font-size="16"
    fill="url(#footertext)" text-anchor="middle" letter-spacing="2" font-weight="500">
    Designed with ❤️ for the Indian Tech Ecosystem 🇮🇳
  </text>

  <text x="400" y="76" font-family="'Segoe UI', Arial, sans-serif" font-size="11"
    fill="#64748b" text-anchor="middle" letter-spacing="1">
    © 2025 Gather · Built with WebRTC + Supabase
  </text>
</svg>

</div>
