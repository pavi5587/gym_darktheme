import Link from "next/link";
import { site, waLink } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink-soft">
      <div className="container-page grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-display text-xl tracking-tight text-bone">
            GURU<span className="text-ember">STHETICS</span>
          </span>
          <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-bone-dim">
            Your ultimate online fitness destination — if you want to build your
            dream physique.
          </p>
          <div className="mt-5 flex gap-4">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-bone-dim transition-colors hover:text-ember">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.6"/><circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor"/></svg>
            </a>
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-bone-dim transition-colors hover:text-ember">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 8.5h2.5V5H14c-2.2 0-4 1.8-4 4v2H8v3.5h2V21h3.5v-6.5H16l.5-3.5h-3V9c0-.6.4-1 1-1z" fill="currentColor"/></svg>
            </a>
            <a href={site.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-bone-dim transition-colors hover:text-ember">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="2" y="5.5" width="20" height="13" rx="4" stroke="currentColor" strokeWidth="1.6"/><path d="M10.5 9.5L15 12L10.5 14.5V9.5Z" fill="currentColor"/></svg>
            </a>
          </div>
        </div>

        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-bone">Pages</p>
          <ul className="mt-4 space-y-2.5 font-body text-sm text-bone-dim">
            <li><Link href="/" className="hover:text-ember">Home</Link></li>
            <li><Link href="/blogs" className="hover:text-ember">Blogs</Link></li>
            <li><Link href="/shop" className="hover:text-ember">Shop</Link></li>
            <li><Link href="/about" className="hover:text-ember">About</Link></li>
            <li><a href={waLink("Transformation")} target="_blank" rel="noopener noreferrer" className="hover:text-ember">Contact</a></li>
          </ul>
        </div>

        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-bone">Programs</p>
          <ul className="mt-4 space-y-2.5 font-body text-sm text-bone-dim">
            <li><Link href="/programs/weight-loss" className="hover:text-ember">Weight Loss</Link></li>
            <li><Link href="/programs/muscle-building" className="hover:text-ember">Muscle Building</Link></li>
            <li><Link href="/programs/powerlifting" className="hover:text-ember">Powerlifting</Link></li>
            <li><Link href="/programs/mobility" className="hover:text-ember">Mobility</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-bone">Get in Touch</p>
          <ul className="mt-4 space-y-2.5 font-body text-sm text-bone-dim">
            <li>{site.email}</li>
            <li><a href={`tel:+${site.whatsappNumber}`} className="hover:text-ember">{site.phoneDisplay}</a></li>
            <li><a href={waLink("Transformation")} target="_blank" rel="noopener noreferrer" className="hover:text-ember">WhatsApp</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-line">
        <div className="container-page flex flex-col gap-3 py-6 font-body text-xs text-bone-dim sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Gurusthetics. All rights reserved.</p>
          <p className="max-w-xl">
            Disclosure: some links on this website are affiliate links. We may earn a small commission at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
