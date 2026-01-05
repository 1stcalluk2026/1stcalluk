"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isStudio = pathname?.startsWith("/studio");
  if (isStudio) return null;

  return (
    <header className="text-white shadow-lg relative z-50">

      {/* GROUP BAR */}
<div className="bg-[#233a86]">
  <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex justify-end">
    <Link
      href="https://1st-call-uk-group.vercel.app/"
      className="inline-flex items-center rounded-full bg-white text-[#233a86] border border-white/30 px-4 py-1.5 text-xs font-medium shadow-sm hover:bg-white/90 transition-all duration-200"
    >
      1st Call UK Group
    </Link>
  </div>
</div>


      {/* MAIN HEADER */}
      <div className="bg-[#2d459c] py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6">

          {/* LEFT COLUMN — LOGO + CONTACT BUTTONS */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col items-start gap-4 pl-3 md:pl-4">
              <Link href="/" className="block">
                <div className="w-[260px] h-[100px] relative bg-white rounded-xl shadow-md border border-white/40 overflow-hidden">
                  <Image
                    src="/1st-calluk-logo02.jpg"
                    alt="1st Call UK Immigration advisers Logo — go to homepage"
                    fill
                    priority
                    className="object-contain p-2"
                  />
                </div>
              </Link>

              <div className="hidden md:flex gap-4">
                <a
                  href="tel:+441158453325"
                  className="bg-white text-[#2d459c] font-semibold py-2 px-5 rounded-lg shadow hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2"
                >
                  📞 Call Us
                </a>
                <a
                  href="mailto:info@1stcalluk.com"
                  className="bg-white text-[#2d459c] font-semibold py-2 px-5 rounded-lg shadow hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2"
                >
                  ✉️ Email Us
                </a>
              </div>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm xl:text-base font-medium whitespace-nowrap">
            {[
              { href: "/", label: "Home" },
              { href: "/about-us", label: "About" },
              { href: "/our-immigration-services", label: "Services" },
              { href: "/our-immigration-team", label: "Our Team" },
              { href: "/reviews", label: "Reviews" },
              { href: "/blog", label: "Blog" },
              { href: "/document-management", label: "DMS" },
              { href: "/latest-news", label: "Media" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => {
              const isActive = pathname === href;

              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative group transition duration-300 ${
                    isActive ? "text-yellow-300" : "text-white"
                  } hover:text-yellow-300`}
                >
                  {label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[3px] bg-yellow-300 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden flex flex-col items-center justify-center space-y-1"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
          >
            <span
              className={`block h-0.5 w-7 bg-white transform transition ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-7 bg-white transition ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-7 bg-white transform transition ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden absolute left-0 right-0 w-full bg-[#2d459c] shadow-lg transition-[max-height,opacity] duration-300 overflow-hidden ${
          menuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-5 space-y-4 text-base font-medium">
          {[
            { href: "/", label: "Home" },
            { href: "/about-us", label: "About" },
            { href: "/our-immigration-services", label: "Services" },
            { href: "/our-immigration-team", label: "Our Team" },
            { href: "/reviews", label: "Reviews" },
            { href: "/blog", label: "Blog" },
            { href: "/document-management", label: "DMS" },
            { href: "/latest-news", label: "Media" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-gray-200"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          <div className="flex gap-3 pt-2">
            <a
              href="tel:+441158453325"
              className="bg-white text-[#2d459c] font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-100 transition"
              onClick={() => setMenuOpen(false)}
            >
              📞 Call
            </a>

            <a
              href="mailto:info@karoldigital.co.uk"
              className="bg-white text-[#2d459c] font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-100 transition"
              onClick={() => setMenuOpen(false)}
            >
              ✉ Email
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
