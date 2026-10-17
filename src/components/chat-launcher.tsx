"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const TawkChat = dynamic(() => import("@/components/tawk.io"), { ssr: false });

type IdleWindow = Window & {
  requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
  cancelIdleCallback?: (id: number) => void;
};

/**
 * Loads the third-party Tawk.to widget only after the browser is idle so it
 * never competes with the LCP image or first input. Falls back to a short
 * timeout on browsers without requestIdleCallback.
 */
function ChatLauncher() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const w = window as IdleWindow;
    if (typeof w.requestIdleCallback === "function") {
      const id = w.requestIdleCallback(() => setEnabled(true), {
        timeout: 4000,
      });
      return () => w.cancelIdleCallback?.(id);
    }
    const id = window.setTimeout(() => setEnabled(true), 3000);
    return () => window.clearTimeout(id);
  }, []);

  if (!enabled) {
    return null;
  }

  return <TawkChat />;
}

export default ChatLauncher;
