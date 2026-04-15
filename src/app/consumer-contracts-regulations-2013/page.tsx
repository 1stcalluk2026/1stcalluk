export const metadata = {
  title: "Consumer Contracts Regulations 2013 | 1st Call UK",
  description:
    "Information about consumer rights and obligations under the Consumer Contracts Regulations 2013.",
};

export default function ConsumerContractsPage() {
  return (
<main className="min-h-screen bg-gray-50 py-12 px-6 animate-fade-in">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">

        {/* Header Section */}
        <div className="bg-[#2d459c] text-white px-8 py-10 text-center">
          <h1 className="text-3xl font-bold tracking-wide">
            Consumer Contracts Regulations 2013
          </h1>
          <p className="text-white/90 mt-3 text-lg">
            A clear summary of your rights and obligations.
          </p>

          {/* Download PDF */}
          <div className="mt-6">
            <a
          href="/consumer_contracts_regulations_2013.pdf"
              download
              className="inline-block bg-white text-[#2d459c] font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-100 transition"
            >
              Download Official PDF
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-10 space-y-8 text-gray-900">

          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#2d459c] flex items-center gap-2">
              <span>📘</span> 1. Applicability
            </h2>
            <p className="mt-3 leading-relaxed">
              These regulations apply when the Firm enters into a contract with a consumer
              <strong> at a distance </strong> or
              <strong> off-premises</strong>. They set out the rules on information disclosure and
              consumer rights during the contracting process.
            </p>
          </section>

          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#2d459c] flex items-center gap-2">
              <span>📄</span> 2. Information the Firm Must Provide
            </h2>
            <p className="mt-3">Before the contract is concluded, the Firm must provide clear information including:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>The identity of the Firm</li>
              <li>Main characteristics of the services provided</li>
              <li>Total price, or a clear explanation of how it is calculated</li>
              <li>Payment terms and performance arrangements</li>
              <li>Details about the consumer’s right to cancel</li>
              <li>Duration of the contract and applicable termination conditions</li>
            </ul>
          </section>

          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#2d459c] flex items-center gap-2">
              <span>🕒</span> 3. Right to Cancel
            </h2>
            <p className="mt-3 leading-relaxed">
              Consumers have the right to cancel the contract within
              <strong> 14 days</strong> from the day it is entered into.
            </p>
          </section>

          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#2d459c] flex items-center gap-2">
              <span>💳</span> 4. Effects of Cancellation
            </h2>
            <p className="mt-3 leading-relaxed">
              If the consumer cancels within the cooling-off period, the Firm must refund
              <strong> all payments </strong> within 14 days of cancellation.
            </p>
          </section>

          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#2d459c] flex items-center gap-2">
              <span>⚠️</span> 5. Termination After Cooling-Off Period
            </h2>
            <p className="mt-3 leading-relaxed">
              If the consumer requests the service to begin during the cooling-off period, the right
              to cancel may be lost once the services have been fully performed.
            </p>
          </section>

          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#2d459c] flex items-center gap-2">
              <span>❌</span> 6. Exclusions
            </h2>
            <p className="mt-3 leading-relaxed">
              The right to cancel does not apply to fully performed services that began with the
              consumer’s explicit consent.
            </p>
          </section>

          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#2d459c] flex items-center gap-2">
              <span>🔄</span> 7. Amendments
            </h2>
            <p className="mt-3 leading-relaxed">
              These regulations may be updated or amended in accordance with applicable UK law.
            </p>
          </section>

          {/* NEW SECTION — Opting Out */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#2d459c] flex items-center gap-2">
              <span>🚪</span> 8. Opting Out
            </h2>
            <p className="mt-3 leading-relaxed">
              Consumers may choose to opt out of certain rights under the Regulations only where
              permitted by law and where such an opt-out does not remove mandatory consumer
              protections. Any opt-out must be expressly agreed by the consumer in writing and must
              be based on clear, unambiguous information provided by the Firm. The Firm must not
              pressure or mislead the consumer into waiving rights that cannot legally be waived.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
