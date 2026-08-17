import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand */}
        <div>
          <div className="footer-brand-name">APOORVA KAUSHAL</div>
          <p className="footer-brand-desc">
            Social Media Manager &amp; Content Creator from Hathras, Uttar Pradesh, India.
            Comedy · Parody · Informative · Krishna Content.
          </p>
          <div className="footer-socials">
            {/* Instagram */}
            <a href="https://instagram.com/apoorva_kaushal" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 2 .25 2.5.42.6.24 1 .53 1.5 1s.76.9 1 1.5c.17.5.36 1.3.42 2.5.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9a7.6 7.6 0 0 1-.42 2.5c-.24.6-.53 1-1 1.5s-.9.76-1.5 1c-.5.17-1.3.36-2.5.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07a7.6 7.6 0 0 1-2.5-.42c-.6-.24-1-.53-1.5-1s-.76-.9-1-1.5a7.6 7.6 0 0 1-.42-2.5C2.21 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-2 .42-2.5.24-.6.53-1 1-1.5s.9-.76 1.5-1c.5-.17 1.3-.36 2.5-.42C8.4 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.14 0-3.52 0-4.76.07-1 .05-1.53.21-1.9.35-.47.18-.8.4-1.16.75-.35.36-.57.7-.75 1.16-.14.36-.3.9-.35 1.9C3.01 8.48 3 8.86 3 12s0 3.52.08 4.76c.04 1 .2 1.53.34 1.9.18.47.4.8.75 1.16.36.35.7.57 1.16.75.36.14.9.3 1.9.35 1.24.06 1.62.08 4.76.08s3.52-.02 4.76-.08c1-.04 1.53-.21 1.9-.35.47-.18.8-.4 1.16-.75.35-.36.57-.7.75-1.16.14-.36.3-.9.35-1.9.06-1.24.08-1.62.08-4.76s-.02-3.52-.08-4.76c-.04-1-.21-1.53-.35-1.9-.18-.47-.4-.8-.75-1.16a3.1 3.1 0 0 0-1.16-.75c-.36-.14-.9-.3-1.9-.35C15.52 4.01 15.14 4 12 4Zm0 3.4a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2Zm0 1.8a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm4.8-2a1.08 1.08 0 1 1 0 2.16 1.08 1.08 0 0 1 0-2.16Z"/></svg>
            </a>
            {/* YouTube */}
            <a href="https://youtube.com/@apoorva_kaushal" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.5V8.5L15.8 12Z"/></svg>
            </a>
            {/* X/Twitter */}
            <a href="https://twitter.com/apoorva_kaushal" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <svg viewBox="0 0 24 24"><path d="M13.9 10.6 21.6 2h-2l-6.6 7.5L7.6 2H1l8.1 11.4L1 22h2l7-8 5.6 8H22Zm-2.5 2.9-.8-1.1L3.6 3.5h2.9l5.2 7.3.8 1.1 6.8 9.6h-2.9Z"/></svg>
            </a>
            {/* Facebook */}
            <a href="https://facebook.com/apoorva_kaushal" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <div className="footer-col-title">Quick Links</div>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/case-studies">Case Studies</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <div className="footer-col-title">Services</div>
          <ul>
            <li><Link href="/services">Social Media Management</Link></li>
            <li><Link href="/services">Content Creation</Link></li>
            <li><Link href="/services">Meta Ads Campaigns</Link></li>
            <li><Link href="/services">Brand Collaboration</Link></li>
            <li><Link href="/services">SEO &amp; Copywriting</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <div className="footer-col-title">Contact</div>
          <ul>
            <li><Link href="/hire">Hire Me</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><a href="mailto:apoorva@apoorvakaushal.com">apoorva@apoorvakaushal.com</a></li>
            <li><a href="https://wa.me/919XXXXXXXXX" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li><Link href="/contact">Hathras, UP, India</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© {year} Apoorva Kaushal. All rights reserved. Hathras, Uttar Pradesh, India.</p>
        <div className="footer-legal">
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/legal">Legal</Link>
        </div>
      </div>
    </footer>
  );
}
