'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { site } from '@/data/site';

const links = [
  { href: '/#work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/archive', label: 'Archive' },
  { href: '/resume', label: 'Resume' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/85 backdrop-blur-md print:hidden">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4 md:px-8">
        <Link href="/" className="min-w-0">
          <span className="block truncate text-lg font-semibold tracking-tight text-fg md:text-xl">
            {site.name}
          </span>
          <span className="block truncate text-xs text-fg-muted">{site.title}</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-fg-muted hover:text-fg">
              {link.label}
            </Link>
          ))}
          <a
            href={site.github}
            className="text-fg-muted hover:text-fg"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href={`mailto:${site.email}`} className="text-fg-muted hover:text-fg">
            Contact
          </a>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-fg md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-border px-6 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-4 text-base font-medium">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={site.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>Contact</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
