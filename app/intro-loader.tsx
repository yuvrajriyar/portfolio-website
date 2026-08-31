"use client";

import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1250);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="intro-loader" aria-label="Loading Yuvraj Riyar portfolio">
      <div className="loader-mark"><span>Y</span><span>R</span></div>
      <i aria-hidden="true" />
    </div>
  );
}
