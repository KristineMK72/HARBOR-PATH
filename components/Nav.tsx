"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav">
      <div className="navInner">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          ⚓ Harbor Path
        </Link>

        {/* Desktop menu */}
        <div className="navLinks">
          <Link className="pill pillDanger" href="/help-now">Help Now</Link>
          <Link className="pill" href="/big-book">Big Book</Link>
          <Link className="pill" href="/daily">Daily</Link>
          <Link className="pill" href="/meetings">Meetings</Link>
          <Link className="pill" href="/families">Families</Link>
          <Link className="pill" href="/resources">Resources</Link>
          <Link className="pill" href="/fundraising">Treatment Fund</Link>
        </div>

        {/* Hamburger button */}
        <button
          className="hamburger"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mobileMenu">
          <Link href="/help-now" onClick={() => setOpen(false)}>Help Now</Link>
          <Link href="/big-book" onClick={() => setOpen(false)}>Big Book</Link>
          <Link href="/daily" onClick={() => setOpen(false)}>Daily</Link>
          <Link href="/meetings" onClick={() => setOpen(false)}>Meetings</Link>
          <Link href="/families" onClick={() => setOpen(false)}>Families</Link>
          <Link href="/resources" onClick={() => setOpen(false)}>Resources</Link>
          <Link href="/fundraising" onClick={() => setOpen(false)}>
            Treatment Fund
          </Link>
        </div>
      )}
    </div>
  );
}
