# 🎓 Gather: Interview Technical Guide

This document is designed to help you explain the technical depth of **Gather** to interviewers. It covers the architecture, the WebRTC implementation, and the rationale behind the tech stack.

---

## 🏗️ 1. High-Level Architecture

Gather is a **Serverless Peer-to-Peer (P2P)** video conferencing application.

- **Frontend**: Single Page Application (SPA) built with React 19 and Vite 7.
- **Backend (Signaling)**: Supabase Realtime (WebSockets) handles the "handshake" between peers.
- **Database**: Supabase (PostgreSQL) stores meeting metadata.
- **Communication**: WebRTC (Web Real-Time Communication) for direct browser-to-browser media streaming.

### Why this architecture?
By using a P2P approach, we achieve **zero-latency** communication and significantly reduce server costs, as the video data never touches our servers—it flows directly between users.

---

## ⚡ 2. The WebRTC Workflow (Deep Dive)

*Interviewer Question: "How does User A connect to User B without a central media server?"*

### The "Signaling" Phase
WebRTC cannot connect two browsers alone; they need to exchange information first. We use **Supabase Realtime Channels** as our signaling server.

1.  **SDP Exchange (Session Description Protocol)**:
    - User A creates an **Offer** (containing their media capabilities).
    - User A sends this Offer to User B via Supabase.
    - User B receives the Offer and sends back an **Answer**.
2.  **ICE Candidates (Interactive Connectivity Establishment)**:
    - Browsers exchange "ICE Candidates" (IP addresses and ports) to find the best path to connect (STUN/TURN).
    - Once a path is found, the P2P connection is established.

### Code Reference: `src/routes/room.$code.tsx`
- `pcsRef.current`: A dictionary storing `RTCPeerConnection` objects for every peer in the room.
- `onTrack`: This listener receives the remote video stream and attaches it to a video element.

---

## 🛰️ 3. Real-time Presence & Sync

*Interviewer Question: "How do you know when someone joins or leaves instantly?"*

We use **Supabase Presence**.
- When you join, you "track" your state (name, camera status).
- The `presence_diff` event triggers whenever someone joins or leaves.
- **Instant Removal**: We use the `leave` event to immediately destroy the peer connection and remove the video tile from the UI, preventing "ghost" participants.

---

## 🛠️ 4. Screen Sharing & Track Swapping

*Interviewer Question: "How do you switch from Camera to Screen Share without dropping the call?"*

We implement **Track Replacement** instead of re-negotiating the whole connection.
1.  We call `navigator.mediaDevices.getDisplayMedia()`.
2.  We use `RTCRtpSender.replaceTrack()` on all active peer connections.
3.  **Crucial Logic**: We replace the track *before* stopping the old one to avoid null pointer errors in the WebRTC state machine.

---

## 🎨 5. Tech Stack Rationale

- **React 19**: Leverages the latest concurrent rendering features for a lag-free UI.
- **Tailwind CSS 4**: Used for the "Speed of Thought" UI. Its zero-runtime overhead ensures maximum performance.
- **Web Audio API**: Instead of heavy MP3 files, we generate join/leave chimes using **Oscillators**. This ensures the sounds work offline and load instantly.
- **TanStack Router**: Provides type-safe routing, ensuring that room codes are always valid before a component even renders.

---

## 📂 6. Code Map (Where is what?)

- **`src/routes/room.$code.tsx`**: The "Brain". Contains 90% of the WebRTC, Presence, and Media logic.
- **`src/hooks/use-auth.tsx`**: Manages session state (even in "Instant Join" mode).
- **`src/components/site-header.tsx`**: Premium UI implementation (Glassmorphism).
- **`src/styles.css`**: Global theme and custom animations.

---

## ❓ 7. Potential Interview Questions

**Q: "What happens if a user is behind a strict firewall (Symmetric NAT)?"**
*A: Currently, the app uses public Google STUN servers. In a production environment, I would integrate a **TURN server** (like Coturn or Twilio) to relay traffic when a direct P2P connection is blocked.*

**Q: "How do you handle scaling to 50+ users?"**
*A: Standard WebRTC Mesh (which we use) scales well up to ~5-8 users. For 50+ users, I would transition from a Mesh architecture to an **SFU (Selective Forwarding Unit)** like Mediasoup or LiveKit, where users send one stream to a server which forwards it to others.*

**Q: "How did you optimize for mobile?"**
*A: I used dynamic grid layouts in CSS, optimized WebRTC constraints (lower resolution for mobile to save battery), and implemented specific `getDisplayMedia` checks since mobile support varies.*

---

**Gather** isn't just a clone; it's a demonstration of mastering **asynchronous state**, **real-time networking**, and **low-level browser APIs**.
