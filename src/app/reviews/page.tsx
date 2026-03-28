"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function ReviewsPage() {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.style.animationDelay = `${index * 0.2}s`;
            el.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      
      <main className="py-16 px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          
          {/* === Hero Section === */}
          <div className="w-full h-64 md:h-80 overflow-hidden fade-section relative">
            <Image
              src="/reviews-hero.jpg"
              alt="Happy clients after successful immigration cases"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* === Reviews Content === */}
          <div className="p-8 md:p-12 space-y-12">

            {/* === Intro Section === */}
            <section
              className="fade-section text-center opacity-0 mb-16"
              style={{ animationDelay: "0.3s" }}
            >
              <h1 className="text-3xl font-bold text-[#2d459c] mb-4">
                We're Proud of Our Work
              </h1>
              <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-4">
                At <strong>1st Call UK Immigration Services</strong>, we’re proud
                of the trust our clients place in us. James does not take on cases he believes cannot succeed,
                prioritising results over financial gain.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                {/* UPDATED GOOGLE REVIEW LINK */}
                <a
                  href="https://www.google.com/search?rlz=1C5CHFA_enGB1182GB1182&sca_esv=533a6b6c25e54f13&sxsrf=ANbL-n6QKOoGh0zR3djnJySoBkCyF50ang:1774627308083&si=AL3DRZHrmvnFAVQPOO2Bzhf8AX9KZZ6raUI_dT7DG_z0kV2_x40vsEW2kpXThzB0b6aDfOqcb0DazQN7yyGXhzhcPc8JW-F36fGvQ5PEzjrgfYy-04EDMzlqMBSa0IPWlnnD5P-9Q0MjgZBZPkKgZjEoTX2ue-mERg%3D%3D&q=1st+Call+Immigration+Services+Reviews&sa=X&ved=2ahUKEwjkjbryucCTAxWaW0EAHcgvOuIQ0bkNegQIJRAH&biw=1280&bih=654&dpr=2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2d459c] text-white font-semibold py-2 px-6 rounded-md hover:bg-[#1f3171] transition-colors duration-300"
                >
                  🌟 Read Our Google Reviews
                </a>
                
                <a
                  href="https://www.facebook.com/1stCallUK2008/?locale=en_GB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  👍 Leave a Facebook Review
                </a>
              </div>
            </section>

            {/* === Review Grid === */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-section opacity-0 mt-10">
              {[
                {
                  review: "“Absolutely fantastic service from start to finish. James guided me through every stage of my visa application and made a stressful process so much easier.”",
                  name: "Sarah A.",
                  type: "Family Visa Client",
                },
                {
                  review: "“Professional, honest, and extremely knowledgeable. 1st Call UK helped me secure my visa after another advisor had given up.”",
                  name: "Ahmed K.",
                  type: "Work Visa Client",
                },
                {
                  review: "“James and his team provided an excellent service when handling my immigration case. Their professionalism and empathy truly made a difference.”",
                  name: "Marina L.",
                  type: "Immigration Client",
                },
              ].map((r, i) => (
                <div key={i} className="bg-[#f9f9fb] p-6 rounded-2xl shadow-md">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#2d459c] text-white">
                      <span className="text-lg font-bold">{r.name[0]}</span>
                    </div>
                  </div>
                  <div className="flex justify-center mb-3 text-yellow-400">★★★★★</div>
                  <p className="text-gray-700 italic mb-4 text-center">{r.review}</p>
                  <p className="font-semibold text-[#2d459c] text-center">— {r.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}