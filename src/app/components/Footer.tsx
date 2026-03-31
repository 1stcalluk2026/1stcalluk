import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2d459c] text-white py-14 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 items-start">

        {/* Column 1 — Logo & Help (UNCHANGED) */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <a
            href="https://www.yoshki.co/validation-results/?111105115099+109101109098101114098097100103101+100101102097117108116046115118103+104116116112115058047047049115116099097108108117107046099111109047"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/IAA-logo.jpg"
              alt="IAA Immigration Advice Authority logo"
              width={200}
              height={200}
              className="w-28 h-auto rounded-md shadow-md hover:scale-105 transition-transform duration-300"
            />
          </a>

          <h3 className="text-xl font-bold">We Can Help</h3>
          <p className="text-gray-200 leading-relaxed text-sm">
            At 1st Call UK, your problem is our passion and success is our journey.
            <br /><br />
            Providing expert immigration advice is all we do. Whatever your immigration problem, we can help.
          </p>

          <p className="text-gray-400 text-xs mt-2">
            Website by –{" "}
            <a
              href="https://www.karoldigital.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition"
            >
              Karol Digital
            </a>
          </p>
        </div>

        {/* Columns 2 + 3 — REORDERED ONLY */}
        <div className="md:col-span-2 space-y-10">

          {/* Sister Companies — WITH LOGOS (MOVED ABOVE) */}
          <div>
            <p className="text-gray-300 text-sm mb-4">
              Visit our sister companies:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[460px]">

              {/* Financial Services */}
              <a
                href="coming-soon"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 flex flex-col items-center justify-center w-[220px]"
              >
                <Image
                  src="/1st-calluk-financial-logo05.jpg"
                  alt="1st Call UK Financial Services"
                  width={200}
                  height={90}
                  className="object-contain"
                />
                <span className="text-xs font-semibold text-[#2d459c] mt-2 text-center">
                  Financial Services
                </span>
              </a>

              {/* 1st Call UK Group */}
              <a
                href="/1stcalluk-group"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 flex flex-col items-center justify-center w-[220px]"
              >
                <Image
                  src="/1st-CallUK-group-logo.jpg"
                  alt="1st Call UK Group"
                  width={200}
                  height={90}
                  className="object-contain"
                />
                <span className="text-xs font-semibold text-[#2d459c] mt-2 text-center">
                  Group
                </span>
              </a>

            </div>
          </div>

          {/* Our Advantages + Legal (MOVED BELOW, CONTENT UNCHANGED) */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* Our Advantages */}
            <div>
              <h3 className="text-xl font-bold mb-4">Our Advantages</h3>
              <ul className="space-y-2 text-gray-200 text-sm">
                {[
                  "Free initial conference",
                  "Teams conferences available",
                  "Clients refer us to their friends and family",
                  "Affordable, caring and quality service",
                  "Family owned and run business",
                ].map((text, index) => (
                  <li key={index} className="flex items-start">
                    <span style={{ color: "#ffffff", marginRight: "0.5rem" }}>✔</span>
                    <span className="text-gray-200">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-200 text-sm">
                <li><a href="/legal/consumer-contracts-regulations-2013" className="hover:underline">Consumer Contracts Regulations 2013</a></li>
                <li><a href="/disclaimer" className="hover:underline">Disclaimer</a></li>
                <li><a href="/legal/gdpr-data-privacy-notice" className="hover:underline">GDPR Data Privacy Notice</a></li>
                <li><a href="/legal/cookie-policy" className="hover:underline">Cookie Policy</a></li>
                <li><a href="/legal/terms-of-website-use" className="hover:underline">Terms of Website Use</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Column 4 — Contact + Social (UNCHANGED) */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-200 text-sm leading-relaxed">
            📍 The Old Coach House, 25 Noel Street,
            Forest Fields, Nottingham NG7 6AQ
          </p>

          <div className="mt-5 flex flex-col gap-3">
            <a
              href="mailto:info@1stcalluk.com"
              className="bg-white text-[#2d459c] font-semibold py-2 px-5 rounded-md hover:bg-gray-100 flex items-center justify-center transition"
            >
              ✉ Email
            </a>
            <a
              href="tel:+441158453325"
              className="bg-white text-[#2d459c] font-semibold py-2 px-5 rounded-md hover:bg-gray-100 flex items-center justify-center transition"
            >
              ☎ Call
            </a>
          </div>

          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <a
              href="https://www.facebook.com/1stCallUK2008/?locale=en_GB"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="bg-white text-[#2d459c] hover:bg-[#2d459c] hover:text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.326v21.348C0 23.404.595 24 1.326 24h11.495v-9.294H9.691V11.01h3.13V8.41c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.92c-1.506 0-1.797.717-1.797 1.77v2.324h3.592l-.468 3.696h-3.124V24h6.125C23.405 24 24 23.404 24 22.674V1.326C24 .595 23.405 0 22.675 0z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/james-ramowski-0588a139/?originalSubdomain=uk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="bg-white text-[#2d459c] hover:bg-[#2d459c] hover:text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.85-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.354V9h3.414v1.561h.048c.476-.9 1.637-1.85 3.368-1.85 3.602 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM6.959 20.452H3.714V9h3.245v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
