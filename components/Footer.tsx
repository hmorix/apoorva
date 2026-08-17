import Link from "next/link";
import {
  InstagramIcon,
  YouTubeIcon,
  TwitterXIcon,
  FacebookIcon,
  WhatsAppIcon,
  MailIcon,
  MapPinIcon,
} from "@/components/Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand Column */}
        <div className="footer-brand-col">
          <Link href="/" className="footer-brand-name">
            APOORVA KAUSHAL
          </Link>
          <p className="footer-brand-desc">
            Social Media Manager &amp; Content Creator from Hathras, Uttar Pradesh, India.
            Hindi Comedy · Parody · Informative · Krishna &amp; Spiritual Content.
          </p>
          <div className="footer-socials">
            {/* Instagram */}
            <a
              href="https://instagram.com/apoorva__kaushal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-btn"
            >
              <InstagramIcon size={16} />
            </a>
            {/* YouTube */}
            <a
              href="https://youtube.com/@_apoorva7__"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="social-btn"
            >
              <YouTubeIcon size={16} />
            </a>
            {/* X/Twitter */}
            <a
              href="https://twitter.com/apoorva_kaushal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="social-btn"
            >
              <TwitterXIcon size={15} />
            </a>
            {/* Facebook */}
            <a
              href="https://facebook.com/apoorva_kaushal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-btn"
            >
              <FacebookIcon size={16} />
            </a>
            {/* WhatsApp */}
            <a
              href="https://wa.me/919368153189?text=Hi%20Apoorva%2C%20I%20visited%20your%20website%20and%20would%20love%20to%20collaborate!"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="social-btn"
            >
              <WhatsAppIcon size={16} />
            </a>
            {/* Email */}
            <a
              href="mailto:apoorva@apoorvakaushal.com"
              aria-label="Email"
              className="social-btn"
            >
              <MailIcon size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <div className="footer-col-title">Navigation</div>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Apoorva</Link></li>
            <li><Link href="/#work">Portfolio &amp; Work</Link></li>
            <li><Link href="/services">Services &amp; Pricing</Link></li>
            <li><Link href="/case-studies">Case Studies</Link></li>
            <li><Link href="/dashboard">Account Dashboard</Link></li>
            <li><Link href="/qna">Questions &amp; Answers</Link></li>
          </ul>
        </div>

        {/* Services Column */}
        <div className="footer-col">
          <div className="footer-col-title">Services</div>
          <ul>
            <li><Link href="/services">Social Media Management</Link></li>
            <li><Link href="/services">Content Creation &amp; UGC</Link></li>
            <li><Link href="/services">Meta &amp; Instagram Ads</Link></li>
            <li><Link href="/services">Brand Collaboration</Link></li>
            <li><Link href="/services">SEO &amp; Copywriting</Link></li>
            <li><Link href="/services">Krishna Devotional Content</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-col">
          <div className="footer-col-title">Get in Touch</div>
          <ul className="footer-contact-list">
            <li>
              <Link href="/hire" className="footer-hire-link">
                Hire Me ✦
              </Link>
            </li>
            <li><Link href="/contact">Contact Form</Link></li>
            <li>
              <a href="mailto:apoorva@apoorvakaushal.com" className="footer-icon-link">
                <MailIcon size={14} />
                <span>apoorva@apoorvakaushal.com</span>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/919368153189?text=Hi%20Apoorva!"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-link"
              >
                <WhatsAppIcon size={14} />
                <span>+91 9368153189</span>
              </a>
            </li>
            <li>
              <Link href="/contact" className="footer-icon-link">
                <MapPinIcon size={14} />
                <span>Hathras, UP, India (204101)</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          © {year} Apoorva Kaushal. All rights reserved. Content Creator &amp; Social Media Manager · Hathras, Uttar Pradesh, India.
        </p>
        <div className="footer-legal">
          <Link href="/terms">Terms of Service</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/legal">Legal Notice</Link>
        </div>
      </div>
    </footer>
  );
}
