"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  // 1. Listen for the reCAPTCHA token from the browser event
  useEffect(() => {
    const handleVerify = (e: any) => {
      setCaptchaToken(e.detail);
    };
    window.addEventListener("captchaVerify", handleVerify);
    return () => window.removeEventListener("captchaVerify", handleVerify);
  }, []);

  // Fade-in animation
  useEffect(() => {
    const sections = document.querySelectorAll(".contact-fade");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    sections.forEach((section) => observer.observe(section));
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (!captchaToken) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // 2. Include the captchaToken in the request to your API
        body: JSON.stringify({ ...formData, captchaToken }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
        setCaptchaToken(null); // Reset for next time
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">

      {/* Calendly script (DO NOT REMOVE) */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      {/* === TOP SECTION: FORM + BOOKING === */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 contact-fade">

        {/* LEFT — Contact Form */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-[#2d459c] mb-4 text-center">
            Contact Us
          </h1>

          <p className="text-gray-700 mb-6 leading-relaxed">
            You can <strong>send us a message</strong> or <strong>book a call</strong> with our senior
            immigration advisor <strong>James</strong>.
            <br /><br />
            We usually reply to messages within <strong>two working days</strong>.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#2d459c]"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#2d459c]"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Message</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md p-2 h-28 focus:ring-2 focus:ring-[#2d459c]"
                placeholder="Write your message here..."
              />
            </div>

            {/* reCAPTCHA Widget */}
            <div className="flex justify-center py-2">
              <div 
                className="g-recaptcha" 
                data-sitekey="6LdRaKEsAAAAAGvyAO9Z_0TA6apXxjg8S-v90OCt"
                data-callback="onCaptchaChange"
              ></div>
            </div>

            <button
              type="submit"
              disabled={status === "sending" || !captchaToken}
              className="w-full bg-[#2d459c] hover:bg-[#22347a] text-white font-semibold py-2 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>

            {status === "sent" && (
              <p className="text-green-600 text-center mt-3">
                ✅ Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-center mt-3">
                ❌ Verification failed. Please try again.
              </p>
            )}

            {/* reCAPTCHA Logic Scripts */}
            <Script
              src="https://www.google.com/recaptcha/api.js"
              strategy="afterInteractive"
            />

            <script dangerouslySetInnerHTML={{
              __html: `
                function onCaptchaChange(value) {
                  window.dispatchEvent(new CustomEvent('captchaVerify', { detail: value }));
                }
              `
            }} />
          </form>
        </div>

    {/* RIGHT — Calendly Booking Widget */}
<div className="bg-white rounded-2xl shadow-md p-6">
  <h2 className="text-2xl font-bold text-[#2d459c] mb-4 text-center">
    Book a Call (15 Minutes)
  </h2>
<div className="mb-6 text-left">
  <p className="text-sm text-gray-600">
  <strong>15-Minute Consultation with James</strong><br />
  A complimentary session to discuss your enquiry and provide initial guidance. 
  Online bookings are for <strong>phone consultations only</strong> (Mon–Fri: 09:00–10:00 or after 16:30).
</p>

<p className="mt-2 text-sm text-gray-600">
  For in-person, Teams, or extended meetings, please contact us directly. 
  <strong>Fastest contact:</strong> Call 0115 8453325 (Option 1, then 1). Note: Lines are frequently busy.
</p>

<p className="mt-2 text-sm text-gray-600">
  <strong>International Clients:</strong> We do not place outbound calls abroad. 
  Please call us at your scheduled time or contact us via email.
</p>
</div>
  <iframe
    src="https://calendly.com/1stcalluk-info/15min"
    className="rounded-lg border border-gray-200 shadow-sm w-full"
    style={{
      height: "580px",
      minWidth: "100%",
      border: "0"
    }}
    frameBorder="0"
    scrolling="yes"
    title="Book a consultation"
  ></iframe>
</div>



        </div>

      {/* === MAP (Full Width Below) === */}
      
      <div className="max-w-6xl mx-auto mt-12 bg-white rounded-2xl shadow-md overflow-hidden h-[500px] contact-fade">
        <iframe
          title="1st Call UK Immigration advisors Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2422.574523327401!2d-1.167503923231381!3d52.967709247002746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c3e184a6b4c5%3A0x6c0a6ffcb23654e2!2s25%20Noel%20St%2C%20Nottingham%20NG7%206AQ%2C%20UK!5e0!3m2!1sen!2suk!4v1698480000000!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

    </main>
  );
}