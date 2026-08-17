"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link href="/" className="navbar-logo">APOORVA KAUSHAL</Link>

      {/* Desktop & Mobile Links */}
      <ul className={`navbar-links${open ? " open" : ""}`}>
        <li><Link href="/#work" onClick={() => setOpen(false)}>My Work</Link></li>
        <li><Link href="/#case" onClick={() => setOpen(false)}>Case Study</Link></li>
        <li><Link href="/#gallery" onClick={() => setOpen(false)}>Gallery</Link></li>
        <li><Link href="/services" onClick={() => setOpen(false)}>Services</Link></li>
        <li><Link href="/case-studies" onClick={() => setOpen(false)}>Case Studies</Link></li>
        <li><Link href="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link></li>
        <li><Link href="/#testimonials" onClick={() => setOpen(false)}>Testimonials</Link></li>
        <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
        <li>
          <Link href="/hire" className="navbar-cta" onClick={() => setOpen(false)}>
            Hire Me ✦
          </Link>
        </li>
      </ul>

      {/* Hamburger Toggle */}
      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
      >
        <span style={open ? { transform: "rotate(45deg) translate(5px,5px)" } : {}} />
        <span style={open ? { opacity: 0 } : {}} />
        <span style={open ? { transform: "rotate(-45deg) translate(5px,-5px)" } : {}} />
      </button>
    </nav>
  );
}
