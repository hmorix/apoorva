"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close menu on resize or Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="navbar-container">
      <nav className="navbar" aria-label="Main Navigation">
        <Link href="/" className="navbar-logo" onClick={() => setOpen(false)}>
          APOORVA KAUSHAL
        </Link>

        {/* Desktop & Mobile Links */}
        <ul className={`navbar-links${open ? " open" : ""}`}>
          <li><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link href="/#work" onClick={() => setOpen(false)}>My Work</Link></li>
          <li><Link href="/services" onClick={() => setOpen(false)}>Services</Link></li>
          <li><Link href="/case-studies" onClick={() => setOpen(false)}>Case Studies</Link></li>
          <li><Link href="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link></li>
          <li><Link href="/#gallery" onClick={() => setOpen(false)}>Gallery</Link></li>
          <li><Link href="/qna" onClick={() => setOpen(false)}>Q&amp;A</Link></li>
          <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
          <li>
            <Link href="/hire" className="navbar-cta" onClick={() => setOpen(false)}>
              Hire Me ✦
            </Link>
          </li>
        </ul>

        {/* Hamburger Toggle */}
        <button
          className={`hamburger${open ? " active" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span className="ham-line top" />
          <span className="ham-line mid" />
          <span className="ham-line bot" />
        </button>
      </nav>
      {/* Mobile backdrop */}
      {open && (
        <div
          className="navbar-backdrop"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
