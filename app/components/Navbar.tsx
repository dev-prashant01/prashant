"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  // { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-mono text-sm tracking-widest">
          <span className="text-accent">P</span>
          <span className="text-[#e8e8e8]">.</span>
          <span className="text-teal">MERN</span>
          <span className="text-muted">/</span>
          <span className="text-[#e8e8e8]">DEV</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`font-mono text-xs tracking-[0.15em] uppercase transition-colors duration-200 ${
                  active === link.href
                    ? "text-accent"
                    : "text-muted hover:text-accent"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/prashant_resume.pdf"
              download
              className="font-mono text-xs tracking-[0.1em] uppercase border border-accent text-accent px-4 py-2 hover:bg-accent hover:text-[#0a0a0a] transition-all duration-200"
            >
              Resume ↓
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden font-mono text-muted hover:text-accent text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-border px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-sm tracking-[0.15em] uppercase text-muted hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/prashant_resume.pdf"
            download
            className="font-mono text-sm tracking-[0.1em] uppercase border border-accent text-accent px-4 py-2 text-center hover:bg-accent hover:text-[#0a0a0a] transition-all"
          >
            Resume ↓
          </a>
        </div>
      )}
    </nav>
  );
}
