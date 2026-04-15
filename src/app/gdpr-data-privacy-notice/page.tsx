export const metadata = {
  title: "GDPR Data Privacy Notice | 1st Call UK Immigration Services",
  description:
    "Information on how we collect, process, store and protect your personal data in line with GDPR requirements.",
};

export default function GDPRDataPrivacyPage() {
  return (
<main className="min-h-screen bg-gray-50 py-12 px-6 animate-fade-in">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">

        {/* Header Section */}
        <div className="bg-[#2d459c] text-white px-8 py-10 text-center">
          <h1 className="text-3xl font-bold tracking-wide">GDPR Data Privacy Notice</h1>
          <p className="text-white/90 mt-3 text-lg">
            How we collect, use, share and protect your personal information.
          </p>

          {/* Download PDF */}
          <div className="mt-6">
            <a
              href="/gdpr_data_privacy_notice.pdf"
              download
              className="inline-block bg-white text-[#2d459c] font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-100 transition"
            >
              Download Official PDF
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-10 space-y-8 text-gray-900">

          {/* 1. Who we are */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#2d459c] flex items-center gap-2">
              <span>🏢</span> 1. Who We Are
            </h2>
            <p className="mt-3 leading-relaxed">
              This notice relates to the Firm, acting as the <strong>data controller</strong> responsible
              for the personal data you provide or that we collect during your interactions with us.
            </p>
          </section>

          {/* 2. Data collected */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#2d459c] flex items-center gap-2">
              <span>🗂️</span> 2. Data We Collect
            </h2>
            <p className="mt-3 leading-relaxed">We may collect the following categories of personal data:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Identity data</li>
              <li>Contact data</li>
              <li>Usage data (including website interactions)</li>
              <li>Aggregated analytical data</li>
            </ul>
          </section>

          {/* 3. How data is collected */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#2d459c] flex items-center gap-2">
              <span>🧾</span> 3. How Data Is Collected
            </h2>
            <p className="mt-3 leading-relaxed">
              Data is collected <strong>directly</strong> from users (e.g., enquiries or forms) and
              <strong> indirectly</strong> through interactions with our website and online services.
            </p>
          </section>

          {/* 4. How data is used */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#2d459c] flex items-center gap-2">
              <span>⚙️</span> 4. How Data Is Used
            </h2>
            <p className="mt-3 leading-relaxed">
              Personal data is processed for the following purposes:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>To perform contractual obligations</li>
              <li>To pursue legitimate business interests</li>
              <li>To comply with legal or regulatory obligations</li>
            </ul>
          </section>

          {/* 5. Sharing data */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#2d459c] flex items-center gap-2">
              <span>🤝</span> 5. Sharing Your Data
            </h2>
            <p className="mt-3 leading-relaxed">
              Personal data may be shared with:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Internal staff and authorised personnel</li>
              <li>Service providers acting on our behalf</li>
              <li>Regulators or legal authorities (where required)</li>
            </ul>
          </section>

          {/* 6. International transfers */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#2d459c] flex items-center gap-2">
              <span>✈️</span> 6. International Data Transfers
            </h2>
            <p className="mt-3 leading-relaxed">
              Where personal data is transferred outside the UK or EEA, appropriate safeguards
              are implemented to ensure compliance with GDPR requirements.
            </p>
          </section>

          {/* 7. Security */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#2d459c] flex items-center gap-2">
              <span>🔐</span> 7. Data Security
            </h2>
            <p className="mt-3 leading-relaxed">
              We apply appropriate technical and organisational measures to protect personal data from
              misuse, loss, or unauthorised access.
            </p>
          </section>

          {/* 8. Retention */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#2d459c] flex items-center gap-2">
              <span>🗄️</span> 8. Data Retention
            </h2>
            <p className="mt-3 leading-relaxed">
              Personal data is retained only as long as necessary. In most cases, data is retained
              for <strong>up to six years</strong> to meet legal or regulatory requirements.
            </p>
          </section>

          {/* 9. Your rights */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#2d459c] flex items-center gap-2">
              <span>📜</span> 9. Your Rights
            </h2>
            <p className="mt-3 leading-relaxed">
              Under GDPR, individuals have the following rights regarding their personal data:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Right of access</li>
              <li>Right to correction (rectification)</li>
              <li>Right to erasure</li>
              <li>Right to object</li>
              <li>Right to data portability</li>
            </ul>
          </section>

          {/* 10. Changes */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#2d459c] flex items-center gap-2">
              <span>🔄</span> 10. Changes to This Notice
            </h2>
            <p className="mt-3 leading-relaxed">
              This notice may be updated periodically to reflect legal or operational changes.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
