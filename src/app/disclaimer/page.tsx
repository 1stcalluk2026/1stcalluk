export const metadata = {
  title: "Disclaimer | 1st Call UK Immigration Services",
  description:
    "Important information regarding the use of this website, limitations of liability, and legal responsibilities.",
};

export default function DisclaimerPage() {
  return (
<main className="min-h-screen bg-gray-50 py-12 px-6 animate-fade-in">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">

        {/* Header Section */}
        <div className="bg-[#2d459c] text-white px-8 py-10 text-center">
          <h1 className="text-3xl font-bold tracking-wide">Disclaimer</h1>
          <p className="text-white/90 mt-3 text-lg">
            Important information about the use of this website.
          </p>

          {/* Download PDF */}
          <div className="mt-6">
            <a
              href="/disclaimer.pdf"
              download
              className="inline-block bg-white text-[#2d459c] font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-100 transition"
            >
              Download Official PDF
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-10 space-y-8 text-gray-900">

          {/* 1. General information only */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#2d459c] flex items-center gap-2">
              <span>ℹ️</span> 1. General Information Only
            </h2>
            <p className="mt-3 leading-relaxed">
              The information presented on this website is provided for general purposes only.
              No warranties are made as to its accuracy, completeness, reliability, or suitability
              for any specific purpose.
            </p>
          </section>

          {/* 2. No legal advice */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#2d459c] flex items-center gap-2">
              <span>⚖️</span> 2. No Legal Advice
            </h2>
            <p className="mt-3 leading-relaxed">
              The content on this website does <strong>not</strong> constitute legal advice and should
              not be relied upon as such. Users should seek professional assistance for legal or
              immigration matters tailored to their individual circumstances.
            </p>
          </section>

          {/* 3. External links */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#2d459c] flex items-center gap-2">
              <span>🔗</span> 3. External Links
            </h2>
            <p className="mt-3 leading-relaxed">
              Any links to external websites are provided solely for convenience. The Firm has no
              control over the content of third-party websites and is not responsible for their
              accuracy, reliability, or suitability.
            </p>
          </section>

          {/* 4. Limitation of liability */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#2d459c] flex items-center gap-2">
              <span>⚠️</span> 4. Limitation of Liability
            </h2>
            <p className="mt-3 leading-relaxed">
              The Firm is not liable for any indirect, consequential, or other losses arising from
              the use of this website or reliance on its content, whether in contract, tort, or otherwise.
            </p>
          </section>

          {/* 5. Availability */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#2d459c] flex items-center gap-2">
              <span>⏳</span> 5. Availability
            </h2>
            <p className="mt-3 leading-relaxed">
              While we strive to maintain continuous access, the Firm accepts no responsibility for
              temporary unavailability of the website due to technical issues beyond our control.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
