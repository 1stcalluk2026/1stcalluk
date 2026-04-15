export const metadata = {
  title: "Cookie Policy | 1st Call UK Immigration Services",
  description:
    "Our use of website cookies, how they work, and how you can manage your preferences.",
};

export default function CookiePolicyPage() {
  return (
<main className="min-h-screen bg-gray-50 py-12 px-6 animate-fade-in">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">

        {/* Header Section */}
        <div className="bg-[#2d459c] text-white px-8 py-10 text-center">
          <h1 className="text-3xl font-bold tracking-wide">Cookie Policy</h1>
          <p className="text-white/90 mt-3 text-lg">
            Understand how cookies are used to enhance your browsing experience.
          </p>

          {/* Download PDF */}
          <div className="mt-6">
            <a
              href="/cookie_policy.pdf"
              download
              className="inline-block bg-white text-[#2d459c] font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-100 transition"
            >
              Download Official PDF
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-10 space-y-8 text-gray-900">

          {/* 1. What cookies are */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#2d459c] flex items-center gap-2">
              <span>🍪</span> 1. What Cookies Are
            </h2>
            <p className="mt-3 leading-relaxed">
              Cookies are small text files stored on your device. They support website functionality,
              improve performance and help deliver a smoother, more personalised user experience.
            </p>
          </section>

          {/* 2. How cookies are used */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#2d459c] flex items-center gap-2">
              <span>📊</span> 2. How Cookies Are Used
            </h2>
            <p className="mt-3 leading-relaxed">
              Cookies help distinguish users, enhance website performance, and provide insights
              through analytics. This information helps us maintain and improve the quality of our website.
            </p>
          </section>

          {/* 3. Types of cookies */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#2d459c] flex items-center gap-2">
              <span>🧩</span> 3. Types of Cookies We Use
            </h2>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li><strong>Strictly Necessary Cookies</strong> — essential for core website functionality.</li>
              <li><strong>Analytical Cookies</strong> — used to analyse visitor interactions and traffic patterns.</li>
              <li><strong>Functionality Cookies</strong> — enhance usability and remember preferences.</li>
              <li><strong>Targeting Cookies</strong> — used to deliver relevant marketing or adverts.</li>
            </ul>
          </section>

          {/* 4. Third-party cookies */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#2d459c] flex items-center gap-2">
              <span>🌐</span> 4. Third-Party Cookies
            </h2>
            <p className="mt-3 leading-relaxed">
              Third-party service providers may place cookies on our website. These are outside our
              direct control and governed by the respective third-party policies.
            </p>
          </section>

          {/* 5. Blocking cookies */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#2d459c] flex items-center gap-2">
              <span>🚫</span> 5. Blocking Cookies
            </h2>
            <p className="mt-3 leading-relaxed">
              Users may block or delete cookies using their browser settings. However, disabling
              certain cookies may affect site performance or functionality.
            </p>
          </section>

          {/* 6. Expiry */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#2d459c] flex items-center gap-2">
              <span>⏳</span> 6. Expiry
            </h2>
            <p className="mt-3 leading-relaxed">
              Non-essential cookies expire after predetermined periods and may be refreshed when
              users revisit the site.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
