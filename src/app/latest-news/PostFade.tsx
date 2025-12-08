"use client";

import { useEffect, useRef } from "react";

export default function PostFade({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // ✅ Force initial hidden state
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";

    // ✅ Force a real layout reflow
    void el.offsetHeight;

    // ✅ Delay one frame so animation actually triggers
    requestAnimationFrame(() => {
      el.classList.add("animate-fade-in");
    });
  }, []);

  return <div ref={ref}>{children}</div>;
}
