"use client";

import { useState } from "react";
import {
  Play,
  Download,
  ScanSearch,
  BookOpen,
  ShoppingBag,
  Smartphone,
  Server,
  ShieldCheck,
  BrainCircuit,
  ChevronRight,
  Sparkles,
  Eye,
  ArrowRight,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";

/* ── Inline GitHub Icon (not available in this lucide version) ── */
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   NAVIGATION
   ───────────────────────────────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg border border-white/10 group-hover:scale-105 transition-transform flex-shrink-0">
            <img 
              src="/afrilens_no_bg.png" 
              alt="AfriLens Logo" 
              className="w-full h-full object-cover" 
            />
          </div>
          <span className="text-2xl font-bold tracking-tight text-warm-white">
            Afri<span className="text-gradient-gold">Lens</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm text-muted-light hover:text-warm-white transition-colors duration-300"
          >
            Features
          </a>
          <a
            href="#architecture"
            className="text-sm text-muted-light hover:text-warm-white transition-colors duration-300"
          >
            Architecture
          </a>
          <a
            href="/app-release.apk"
            download="AfriLens.apk"
            className="text-sm px-4 py-2 rounded-full gradient-terracotta text-white font-medium hover:opacity-90 transition-opacity"
          >
            Download APK
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-warm-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-border px-6 py-4 space-y-3 animate-fade-in-up">
          <a
            href="#features"
            onClick={() => setOpen(false)}
            className="block text-sm text-muted-light hover:text-warm-white transition-colors"
          >
            Features
          </a>
          <a
            href="#architecture"
            onClick={() => setOpen(false)}
            className="block text-sm text-muted-light hover:text-warm-white transition-colors"
          >
            Architecture
          </a>
          <a
            href="/app-release.apk"
            download="AfriLens.apk"
            onClick={() => setOpen(false)}
            className="block text-sm px-4 py-2 rounded-full gradient-terracotta text-white font-medium text-center"
          >
            Download APK
          </a>
        </div>
      )}
    </nav>
  );
}

/* ─────────────────────────────────────────────
   HERO SECTION
   ───────────────────────────────────────────── */
function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Radial gold accent */}
      <div className="absolute inset-0 gradient-radial-gold opacity-40" />

      {/* Floating particles (decorative) */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-gold/30 animate-float" />
      <div
        className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-terracotta/40 animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-1/3 left-1/3 w-1 h-1 rounded-full bg-gold/20 animate-float"
        style={{ animationDelay: "4s" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light mb-8 animate-fade-in-up">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span className="text-xs font-medium tracking-wider uppercase text-gold-light">
            Hackathon Project — Kuriftu African Village
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="text-gradient-gold">Afri</span>
          <span className="text-warm-white">Lens</span>
        </h1>

        {/* Tagline */}
        <p
          className="text-xl sm:text-2xl md:text-3xl font-light text-warm-white/90 tracking-wide mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Scan the culture.{" "}
          <span className="text-gradient-terracotta font-semibold">
            Own the craft.
          </span>
        </p>

        {/* Subtext */}
        <p
          className="max-w-2xl mx-auto text-base sm:text-lg text-muted-light leading-relaxed mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          Transforming Kuriftu African Village from a passive hotel stay into an
          interactive, zero-inventory revenue engine.
        </p>

        {/* Video Player */}
        <div
          className="relative max-w-3xl mx-auto mb-12 animate-scale-in"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="video-player-glow rounded-2xl overflow-hidden">
            {/* Video aspect ratio container */}
            <div className="relative aspect-video bg-surface-elevated rounded-2xl overflow-hidden group cursor-pointer">
              {/* Video background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface-elevated to-surface" />

              {/* Decorative grid */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Center elements */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                {/* Play button */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="relative mb-4 group/btn"
                  aria-label="Play demo video"
                >
                  {/* Pulse ring */}
                  <div className="absolute inset-0 rounded-full gradient-terracotta opacity-30 animate-ping" />
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full gradient-terracotta flex items-center justify-center shadow-2xl group-hover/btn:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" />
                  </div>
                </button>
                <p className="text-sm text-muted-light font-medium">
                  Watch the Demo
                </p>
              </div>

              {/* Bottom bar — fake video controls */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/60 to-transparent flex items-end pb-3 px-4">
                <div className="flex items-center gap-3 w-full">
                  <div className="w-8 h-1 rounded-full bg-terracotta" />
                  <div className="flex-1 h-1 rounded-full bg-white/10">
                    <div className="w-1/3 h-full rounded-full gradient-terracotta" />
                  </div>
                  <span className="text-[10px] text-white/50 font-mono">
                    2:34
                  </span>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-terracotta animate-pulse-glow" />
                <span className="text-[10px] uppercase tracking-widest text-white/30 font-mono">
                  AfriLens Demo
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          id="download"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          {/* Primary — Download APK */}
          <a
            href="/app-release.apk"
            download="AfriLens.apk"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl gradient-terracotta text-white font-semibold text-base shadow-lg shadow-terracotta/20 hover:shadow-terracotta/40 hover:scale-[1.02] transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 animate-shimmer" />
            <Download className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Download Android MVP (.apk)</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary — GitHub */}
          <a
            href="https://github.com/mosisafeyissa/Kuriftu-AI-Cultural-Exploration-Platform"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl glass-light text-warm-white font-semibold text-base hover:bg-white/[0.06] transition-all duration-300"
          >
            <GithubIcon className="w-5 h-5" />
            <span>View Source Code</span>
            <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* Disclaimer */}
        <p
          className="text-xs text-muted max-w-md mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          Requires Android 8.0+. iOS users, please view the interactive demo
          video above.
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up"
        style={{ animationDelay: "0.8s" }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FEATURES SECTION  — "Why It Wins"
   ───────────────────────────────────────────── */
const features = [
  {
    icon: ScanSearch,
    title: "Discover",
    subtitle: "AI Image Recognition",
    description:
      "Point your phone at any artifact, textile, or piece of art in your Kuriftu villa. Our AI instantly identifies the item and unlocks its story — no QR codes, no labels needed.",
    iconColor: "text-terracotta",
    subtitleColor: "text-terracotta",
    gradient: "from-terracotta/20 to-terracotta-dark/5",
    accentVia: "via-terracotta",
  },
  {
    icon: BookOpen,
    title: "Learn",
    subtitle: "Dynamic Cultural Storytelling",
    description:
      "Every scan triggers a rich, AI-generated narrative — the origin, artisan lineage, cultural symbolism, and the hands that made it. Each artifact becomes a living chapter of African heritage.",
    iconColor: "text-gold",
    subtitleColor: "text-gold",
    gradient: "from-gold/20 to-gold-dark/5",
    accentVia: "via-gold",
  },
  {
    icon: ShoppingBag,
    title: "Earn",
    subtitle: "Zero-Inventory E-Commerce",
    description:
      "Love what you see? Buy it instantly. Orders go straight to local artisans — no warehouse, no middlemen. Kuriftu earns commission, artisans earn livelihoods. Everyone wins.",
    iconColor: "text-earth-light",
    subtitleColor: "text-earth-light",
    gradient: "from-earth-light/20 to-earth/5",
    accentVia: "via-earth-light",
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] gradient-radial-gold opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light mb-6">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs font-medium tracking-wider uppercase text-gold-light">
              Core Experience
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">
            Why It <span className="text-gradient-gold">Wins</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-light text-lg leading-relaxed">
            Three steps. One seamless experience. From curiosity to commerce,
            powered entirely by AI.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group relative card-hover rounded-3xl glass-light p-8 lg:p-10"
            >
              {/* Top gradient accent */}
              <div
                className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${feature.accentVia} to-transparent opacity-40`}
              />

              {/* Step number */}
              <div className="absolute top-6 right-8 text-7xl font-black text-white/[0.03] select-none">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div
                className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-warm-white mb-1 tracking-tight">
                {feature.title}
              </h3>
              <p
                className={`text-sm font-semibold ${feature.subtitleColor} mb-4 tracking-wide`}
              >
                {feature.subtitle}
              </p>
              <p className="text-muted-light leading-relaxed text-[15px]">
                {feature.description}
              </p>

              {/* Bottom accent line */}
              <div className="mt-8 h-px w-0 group-hover:w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ARCHITECTURE SECTION — Tech Stack Flow
   ───────────────────────────────────────────── */
const techStack = [
  {
    icon: Smartphone,
    name: "Flutter",
    role: "Mobile App",
    description:
      "Cross-platform UI with camera integration and real-time scanning",
    color: "text-terracotta-light",
    bg: "from-terracotta/15 to-terracotta-dark/5",
    border: "border-terracotta/20",
  },
  {
    icon: Server,
    name: "Django REST",
    role: "Backend Engine",
    description:
      "Robust API layer handling artifacts, orders, and user management",
    color: "text-gold-light",
    bg: "from-gold/15 to-gold-dark/5",
    border: "border-gold/20",
  },
  {
    icon: ShieldCheck,
    name: "SimpleJWT",
    role: "Authentication",
    description:
      "Secure token-based auth with refresh rotation and session management",
    color: "text-earth-light",
    bg: "from-earth-light/15 to-earth/5",
    border: "border-earth-light/20",
  },
  {
    icon: BrainCircuit,
    name: "AI / LLM",
    role: "Vision + Language",
    description:
      "Image recognition and cultural narrative generation via LLM integration",
    color: "text-terracotta",
    bg: "from-terracotta/15 to-terracotta-dark/5",
    border: "border-terracotta/20",
  },
];

function ArchitectureSection() {
  return (
    <section id="architecture" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface/50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gradient-radial-gold opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light mb-6">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs font-medium tracking-wider uppercase text-gold-light">
              Under the Hood
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">
            Architecture <span className="text-gradient-gold">Stack</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-light text-lg leading-relaxed">
            A modern, production-grade pipeline from scan to sale.
          </p>
        </div>

        {/* Flow — Desktop: Horizontal with arrows, Mobile: Vertical */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {techStack.map((tech, i) => (
            <div
              key={tech.name}
              className="relative flex flex-col items-center"
            >
              {/* Card */}
              <div
                className={`relative w-full max-w-[280px] card-hover rounded-3xl glass-light p-8 text-center border ${tech.border}`}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${tech.bg} flex items-center justify-center mb-5`}
                >
                  <tech.icon className={`w-7 h-7 ${tech.color}`} />
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-warm-white mb-1 tracking-tight">
                  {tech.name}
                </h3>
                <p
                  className={`text-xs font-semibold ${tech.color} uppercase tracking-wider mb-3`}
                >
                  {tech.role}
                </p>
                <p className="text-sm text-muted-light leading-relaxed">
                  {tech.description}
                </p>
              </div>

              {/* Arrow connector (desktop - between cards) */}
              {i < techStack.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 items-center">
                  <div className="w-6 h-px bg-gradient-to-r from-gold/60 to-gold/20" />
                  <ChevronRight className="w-4 h-4 text-gold/60 -ml-1" />
                </div>
              )}

              {/* Arrow connector (mobile - between cards) */}
              {i < techStack.length - 1 && (
                <div className="flex lg:hidden justify-center py-4">
                  <div className="flex flex-col items-center">
                    <div className="w-px h-4 bg-gradient-to-b from-gold/60 to-gold/20" />
                    <ChevronRight className="w-4 h-4 text-gold/60 rotate-90 -mt-1" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FOOTER
   ───────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="relative py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/10 opacity-90 transition-opacity">
              <img 
                src="/afrilens_no_bg.png" 
                alt="AfriLens Logo" 
                className="w-full h-full object-cover" 
              />
            </div>
            <span className="text-base font-bold tracking-tight text-warm-white">
              Afri<span className="text-gradient-gold">Lens</span>
            </span>
          </div>

          {/* Tagline */}
          <p className="text-sm text-muted text-center">
            Built with ❤️ for hospitality hackathon 2026
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/mosisafeyissa/Kuriftu-AI-Cultural-Exploration-Platform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-light hover:text-warm-white transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */
export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ArchitectureSection />
      <Footer />
    </main>
  );
}
