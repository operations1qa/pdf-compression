"use client";

import { useEffect, useRef } from "react";
import { ADSENSE_CLIENT } from "@/lib/constants";

type AdSlotProps = {
  slotId: string;
  className?: string;
};

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export default function AdSlot({ slotId, className = "" }: AdSlotProps) {
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // Ad blockers or missing script should not break the tool.
    }
  }, [slotId]);

  return (
    <div className={`ad-slot w-full overflow-hidden ${className}`.trim()}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
