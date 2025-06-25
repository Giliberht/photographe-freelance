"use client";

import { useEffect, useState } from "react";
import CookieBanner from "./cookieBanner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function ClientWrapper() {
  const [consentGiven, setConsentGiven] = useState<boolean | null>(null);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (consent === "true") {
      setConsentGiven(true);
    } else if (consent === "false") {
      setConsentGiven(false);
    } else {
      setConsentGiven(null);
    }
  }, []);

  const handleConsentChange = (consent: boolean) => {
    setConsentGiven(consent);
    localStorage.setItem("cookie-consent", String(consent));
  };

  return (
    <>
      {consentGiven === null && (
        <CookieBanner onConsentChangeAction={handleConsentChange} />
      )}

      {consentGiven === true && (
        <>
          <Analytics />
          <SpeedInsights />
        </>
      )}
    </>
  );
}
