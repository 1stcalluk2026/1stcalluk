import Image from "next/image";

const advantages = [
  "Free initial conference",
  "Teams conferences available",
  "Clients refer us to their friends and family",
  "Affordable, caring and quality service",
  "Family owned and run business",
];

const legalLinks = [
  { href: "/consumer-contracts-regulations-2013", label: "Consumer Contracts Regulations 2013" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/gdpr-data-privacy-notice", label: "GDPR Data Privacy Notice" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/terms-of-website-use", label: "Terms of Website Use" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2d459c] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 items-start pb-10 border-b border-white/15">
          {/* IAA + We Can Help */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <a
              href="https://www.yoshki.co/validation-results/?111105115099+109101109098101114098097100103101+100101102097117108116046115118103+104116116112115058047047049115116099097108108117107046099111109047"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-2 shadow-sm transition hover:shadow-md"
            >
              <Image
                src="/IAA-logo.jpg"
                alt="IAA Immigration Advice Authority logo"
                width={160}
                height={160}
                className="w-24 h-auto"
              />
            </a>
            <p className="text-white/60 text-xs text-center md:text-left">
              Regulated by the Immigration Advice Authority
            </p>
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl font-bold">We Can Help</h3>
              <p className="text-white/85 leading-relaxed text-sm">
                At 1st Call UK, your problem is our passion and success is our journey.
                Providing expert immigration advice is all we do. Whatever your immigration
                problem, we can help.
              </p>
            </div>
          </div>

          {/* Our Advantages */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-center md:text-left">Our Advantages</h3>
            <ul className="space-y-2.5 text-white/85 text-sm">
              {advantages.map((text) => (
                <li key={text} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-300" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-center md:text-left">Legal</h3>
            <ul className="space-y-2.5 text-white/85 text-sm text-center md:text-left">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white hover:underline underline-offset-2 transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <p className="text-white/85 text-sm leading-relaxed">
              The Old Coach House, 25 Noel Street,
              <br />
              Forest Fields, Nottingham NG7 6AQ
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@1stcalluk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#2d459c] font-semibold py-2.5 px-5 rounded-md hover:bg-white/90 transition text-center"
              >
                Email
              </a>
              <a
                href="tel:+441158453325"
                className="bg-white/10 border border-white/30 text-white font-semibold py-2.5 px-5 rounded-md hover:bg-white/20 transition text-center"
              >
                Call 0115 845 3325
              </a>
            </div>
            <div className="flex gap-3 justify-center md:justify-start pt-1">
              <a
                href="https://www.facebook.com/1stCallUK2008/?locale=en_GB"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="bg-white/10 hover:bg-white text-white hover:text-[#2d459c] w-10 h-10 flex items-center justify-center rounded-full border border-white/20 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.326v21.348C0 23.404.595 24 1.326 24h11.495v-9.294H9.691V11.01h3.13V8.41c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.92c-1.506 0-1.797.717-1.797 1.77v2.324h3.592l-.468 3.696h-3.124V24h6.125C23.405 24 24 23.404 24 22.674V1.326C24 .595 23.405 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/james-ramowski-0588a139/?originalSubdomain=uk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="bg-white/10 hover:bg-white text-white hover:text-[#2d459c] w-10 h-10 flex items-center justify-center rounded-full border border-white/20 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.85-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.354V9h3.414v1.561h.048c.476-.9 1.637-1.85 3.368-1.85 3.602 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM6.959 20.452H3.714V9h3.245v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Sister companies */}
        <div className="pt-8">
          <p className="text-white/70 text-sm mb-4 text-center md:text-left">
            Visit our sister companies
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto md:mx-0">
            <a
              href="https://www.1stcalluk.financial"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-md px-3 py-2.5 flex items-center justify-center h-16 transition hover:shadow-md"
            >
              <Image
                src="/1st-CallUK-financial-logo02.jpg"
                alt="1st Call UK Financial Services"
                width={180}
                height={56}
                className="max-h-10 w-auto object-contain"
              />
            </a>
            <a
              href="https://www.1stcalluk.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-md px-3 py-2.5 flex items-center justify-center h-16 transition hover:shadow-md"
            >
              <Image
                src="/1stCallUK_group_logo02.jpg"
                alt="1st Call UK Group"
                width={180}
                height={56}
                className="max-h-10 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#233a86] text-white/60 py-4 text-xs">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pr-20 sm:pr-24 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p>© {new Date().getFullYear()} 1st Call UK Immigration Services. All rights reserved.</p>
          <p className="sm:mr-8">
            Website by{" "}
            <a
              href="https://www.karoldigital.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white transition"
            >
              Karol Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
