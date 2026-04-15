import Image from "next/image";

export const metadata = {
  title: "1st Call UK | Expert Immigration & Visas Nottingham",
  description:
    "Trusted UK immigration advisers in Nottingham. We assist with visas, appeals, family applications, work routes and sponsor licences. 300+ five-star reviews."
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* ===== Hero Section ===== */}
      <header className="relative h-36 sm:h-[50vh] md:h-[55vh] overflow-hidden mb-8">
        <Image
          src="/immigration-law-team.png"
          alt="UK immigration law team"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Overlay for text */}
        <div className="absolute inset-0 bg-[#2d459c]/80 flex flex-col items-center justify-center text-center px-3 sm:px-6 md:px-10 animate-fade-in">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-extrabold mb-2 sm:mb-3 md:mb-4 drop-shadow-lg leading-snug">
            Expert UK Immigration Services You Can Trust
          </h1>
          <p className="text-white/90 text-sm sm:text-base md:text-xl max-w-2xl mt-1">
            Your problem is our passion.
          </p>
          <p className="text-white/90 text-sm sm:text-base md:text-xl max-w-2xl mt-1">
            Call us today for a free assessment of your immigration issue.
          </p>
        </div>
      </header>

      {/* ===== Welcome Section ===== */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto text-gray-700 grid md:grid-cols-2 gap-10 items-center">
        {/* Left column - Text content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#2d459c]">
            Welcome to 1st Call UK Immigration Services
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            <span className="text-[#2d459c] font-semibold">
              Nottingham’s Best Independent
            </span>{" "}
            specialist in UK immigration law — trusted for clear, expert guidance since 2008.
          </p>
          <p>
            For over 18 years, our specialist team in Nottingham has focused exclusively on immigration law.
            We do not divide our expertise across practice areas — our sole focus means we stay updated on ever-changing regulations
            to provide tailored, high-quality advice.
          </p>
          <p>
            We have supported individuals, families, and businesses from across the UK and around the world since 2008.
            From initial visa applications to complex appeals, we guide you through each step with clarity and professionalism.
          </p>
          <p>
            Our approach combines personal care with rigorous professionalism.
            We believe in clear communication: you will receive precise guidance along with explanations that help you understand your options.
          </p>

          <div className="pt-2">
            <a
              href="/our-immigration-team"
              className="text-[#2d459c] font-semibold hover:underline"
            >
              Meet Our Team →
            </a>
          </div>

          {/* ⭐ Award Badge */}
          <div className="mt-6">
            <a
              href="https://threebestrated.co.uk/immigration-consultants-in-nottingham"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center"
            >
              <Image
                src="https://threebestrated.co.uk/awards/immigration_consultants-nottingham-2025-drk.svg"
                alt="Best immigration consultants award badge"
                width={220}
                height={220}
                className="mx-auto md:w-56 hover:scale-105 transition-transform duration-300"
                priority
                sizes="220px"
              />
              <p className="mt-2 text-sm text-gray-600 font-medium">
                Proudly awarded every year since 2016
              </p>
            </a>
          </div>
        </div>

        {/* Right column - Immigration-themed image */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl w-full max-w-md md:self-start mt-20">
          <Image
            src="/1st-call-uk-immigration-services.png"
            alt="1st Call UK office and immigration services branding"
            width={800}
            height={600}
            className="w-full h-full object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2d459c]/30 via-[#2d459c]/50 to-[#2d459c]/70"></div>
        </div>
      </section>

      {/* ===== Why Choose Us Section ===== */}
      <section className="bg-gradient-to-b from-[#dfe4f3] to-[#f3f4f8] py-16 px-6 md:px-10 text-center">
        <h3 className="text-3xl font-bold text-[#2d459c] mb-8">
          Why Choose 1st Call UK?
        </h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-gray-700">
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-[#2d459c] mb-3">
              Accredited Experts
            </h4>
            <p>
              Our advisors are IAA-regulated and uphold the highest professional
              standards in immigration representation.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-[#2d459c] mb-3">
              Personalised Service
            </h4>
            <p>
              Every client receives tailored guidance and clear explanations —
              because your case deserves individual attention and care.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-[#2d459c] mb-3">
              Proven Track Record
            </h4>
            <p>
              With over 18 years of success stories, we have helped hundreds of
              clients secure visas, residence, and citizenship in the UK.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-block bg-[#2d459c] hover:bg-[#22347a] text-white font-semibold py-4 px-8 rounded-md shadow-lg transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
      {/* ===== Sleek FAQ Section ===== */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-[#2d459c] mb-12 text-center">
            Frequently Asked Questions
          </h3>
          
          <div className="space-y-4">
            {[
              {
                q: "What UK immigration services do you offer in Nottingham?",
                a: "We provide comprehensive specialist advice on all aspects of UK immigration law. This includes Spouse and Family visas, Skilled Worker and Business visas, Student visas, Indefinite Leave to Remain (ILR), and British Citizenship applications."
              },
              {
                q: "How do I know if my UK visa application will be successful?",
                a: "While no one can guarantee a result from the Home Office, our 18 years of experience allow us to provide a highly accurate assessment of your chances. We perform a rigorous review of your documents to ensure you meet all requirements before submission."
              },
              {
                q: "Are your immigration advisors regulated?",
                a: "Yes. 1st Call UK Immigration Services is fully authorised and regulated by the Immigration Advice Authority (IAA), Ref No: F200800049. We adhere to strict professional standards for your peace of mind."
              },
              {
                q: "Do you offer consultations for complex immigration appeals?",
                a: "Absolutely. We have a strong track record in handling challenging appeals and refusals. We review your refusal letter and provide a clear strategy on the best grounds for appeal or a fresh application."
              },
              {
                q: "How long does the immigration process usually take?",
                a: "Processing times vary. Generally, standard applications take 3 to 12 weeks. We always provide you with the most current estimated timelines based on the latest Home Office data and priority service availability."
              }
            ].map((faq, index) => (
              <details key={index} className="group border border-gray-200 rounded-lg bg-gray-50 overflow-hidden transition-all duration-300">
                <summary className="flex items-center justify-between font-semibold p-5 cursor-pointer list-none text-[#2d459c] hover:bg-gray-100 transition-colors">
                  <span>{faq.q}</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 text-gray-600 animate-fade-in">
                  <p className="leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
