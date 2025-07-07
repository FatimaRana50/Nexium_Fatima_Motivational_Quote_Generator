"use client";

import { useEffect, useState } from "react";

export default function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  const [bgLoadError, setBgLoadError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/images/pic1.jpg";
    img.onload = () => setBgLoadError(false);
    img.onerror = () => setBgLoadError(true);
  }, []);

  return (
    <>
      {!bgLoadError && (
        <div
          className="fixed inset-0 -z-10"
          style={{
            backgroundImage: "url('/images/pic1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      )}

      {!bgLoadError && (
        <div className="fixed inset-0 -z-10 bg-black/30 backdrop-blur-sm" />
      )}

      {bgLoadError && (
        <div className="fixed inset-0 -z-10 bg-pink-100 text-black flex items-center justify-center text-xl">
          ⚠️ Failed to load background image.
        </div>
      )}

      <div className="relative min-h-screen">
        {children}
      </div>
    </>
  );
}
