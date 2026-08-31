"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  SparkleIcon,
  InstagramIcon,
  YouTubeIcon,
  WhatsAppIcon,
  MailIcon,
  CloseIcon,
} from "@/components/Icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#work", label: "My Work" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/qna", label: "Q&A" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on resize or Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="navbar-container">
      <nav className="navbar" aria-label="Main Navigation">
        <Link href="/" className="navbar-logo" onClick={() => setOpen(false)}>
          <span className="navbar-logo-badge" aria-hidden="true">
            <span className="navbar-logo-text">AK</span>
            <span className="navbar-logo-sparkle">✦</span>
          </span>
          <span>APOORVA KAUSHAL</span>
        </Link>

        {/* Desktop Links */}
        <ul className={`navbar-links${open ? " open" : ""}`}>
          {navLinks.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={active ? "active-link" : ""}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/hire"
              className="navbar-cta"
              onClick={() => setOpen(false)}
            >
              <SparkleIcon size={13} />
              <span>Hire Me</span>
            </Link>
          </li>

          {/* Mobile-Only Socials Footer inside drawer */}
          <li className="navbar-mobile-socials">
            <div className="navbar-mobile-divider" />
            <div className="navbar-mobile-contact">
              <a
                href="https://wa.me/919368153189?text=Hi%20Apoorva%2C%20I%20visited%20your%20website%20and%20want%20to%20collaborate!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp-sm"
                onClick={() => setOpen(false)}
              >
                <WhatsAppIcon size={14} />
                <span>WhatsApp Chat</span>
              </a>
              <div className="navbar-mobile-icons">
                <a
                  href="https://instagram.com/apoorva__kaushal"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={18} />
                </a>
                <a
                  href="https://youtube.com/@_apoorva7__"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <YouTubeIcon size={18} />
                </a>
                <a href="mailto:apoorva@apoorvakaushal.com" aria-label="Email">
                  <MailIcon size={18} />
                </a>
              </div>
            </div>
          </li>
        </ul>

        {/* Hamburger Toggle */}
        <button
          className={`hamburger${open ? " active" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? (
            <CloseIcon size={20} />
          ) : (
            <>
              <span className="ham-line top" />
              <span className="ham-line mid" />
              <span className="ham-line bot" />
            </>
          )}
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
