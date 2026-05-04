<div align="center">

<svg width="600" height="160" viewBox="0 0 600 160" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#a78bfa">
        <animate attributeName="stop-color" values="#a78bfa;#38bdf8;#a78bfa" dur="4s" repeatCount="indefinite"/>
      </stop>
      <stop offset="100%" stop-color="#38bdf8">
        <animate attributeName="stop-color" values="#38bdf8;#a78bfa;#38bdf8" dur="4s" repeatCount="indefinite"/>
      </stop>
    </linearGradient>
    <filter id="blur"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>

  <!-- pulsing ring -->
  <circle cx="300" cy="75" r="58" fill="none" stroke="url(#g1)" stroke-width="1" opacity="0.3">
    <animate attributeName="r" values="58;70;58" dur="3s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.3;0.05;0.3" dur="3s" repeatCount="indefinite"/>
  </circle>
  <circle cx="300" cy="75" r="48" fill="none" stroke="url(#g1)" stroke-width="0.5" opacity="0.2">
    <animate attributeName="r" values="48;60;48" dur="3s" begin="0.5s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.2;0.05;0.2" dur="3s" begin="0.5s" repeatCount="indefinite"/>
  </circle>

  <!-- GATHER -->
  <text x="300" y="95" font-family="'Segoe UI',Arial,sans-serif" font-size="64" font-weight="700"
    fill="url(#g1)" text-anchor="middle" filter="url(#blur)" letter-spacing="8">GATHER</text>

  <!-- subtitle -->
  <text x="300" y="128" font-family="'Segoe UI',Arial,sans-serif" font-size="13"
    fill="#94a3b8" text-anchor="middle" letter-spacing="4">MEETINGS WITHOUT FRICTION</text>

  <!-- animated line -->
  <rect x="0" y="155" width="600" height="1.5" fill="url(#g1)" rx="1">
    <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite"/>
  </rect>
</svg>

<br/>

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Now-7c3aed?style=for-the-badge)](https://app-blueprint-tau.vercel.app)
[![User Guide](https://img.shields.io/badge/User%20Guide-Read%20More-0ea5e9?style=for-the-badge)](#-user-guide)

<br/>

> **Gather** — No accounts. No downloads. Just instant peer-to-peer video calls, built for speed.

<br/>

| 🚀 `< 500ms` startup | 🔒 P2P encrypted | 📱 Mobile ready | 🇮🇳 Made in India |
|:---:|:---:|:---:|:---:|

</div>

---

## 💎 Features

| Feature | Description |
|---|---|
| 🛰️ **Real-time Presence** | Instant participant sync via Supabase |
| 🎨 **Glassmorphic UI** | Sleek modern design with smooth blurs |
| 🔔 **Smart Chimes** | Melodic join/leave audio feedback |
| ⚡ **WebRTC Powered** | Low-latency peer-to-peer video & audio |
| 📱 **Mobile First** | Fully optimized for mobile browsers |
| 🔒 **Secure Rooms** | Unique encrypted meeting codes |

---

## 📖 User Guide

<details>
<summary><b>🛠️ Step 1 — Create Your Workspace</b></summary>
<br/>
Click <b>"Create Room"</b> — instantly dropped into your private meeting space. No signup, no waiting.
<br/><br/>
</details>

<details>
<summary><b>🔗 Step 2 — Invite Your Team</b></summary>
<br/>
Share the unique URL or meeting code. One click to join for everyone.
<br/><br/>
</details>

<details>
<summary><b>🖥️ Step 3 — Present Your Ideas</b></summary>
<br/>
Hit the <b>Screen Share</b> icon to broadcast your screen in HD to all participants.
<br/><br/>
</details>

<details>
<summary><b>🎵 Step 4 — Sensory Feedback</b></summary>
<br/>
Melodic join chimes let you know who arrived — without breaking your flow.
<br/><br/>
</details>

---

## 🏗️ Tech Stack

<div align="center">

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![WebRTC](https://img.shields.io/badge/WebRTC-333333?style=for-the-badge&logo=webrtc&logoColor=white)

</div>

---

## 🛠️ Local Development

```bash
git clone https://github.com/shantanutewari12/app-blueprint.git
npm install
npm run dev
```

---

<div align="center">
<sub>Designed with ❤️ for the Indian Tech Ecosystem 🇮🇳</sub>
</div>
