"use client";

import { useEffect, useState } from "react";

export default function CookieBanner({
  onConsentChangeAction,
}: {
  onConsentChangeAction: (consent: boolean) => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const acceptConsent = () => {
    onConsentChangeAction(true);
    setVisible(false);
  };

  const refuseConsent = () => {
    onConsentChangeAction(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Bannière de consentement à la collecte anonyme"
      className="fixed bottom-4 sm:left-4 sm:w-[23%] m-4 sm:my-0 max-w-full bg-white border-2 border-[#8e4b3b] rounded-lg shadow-lg p-5 z-50 flex flex-col items-center justify-between gap-4"
    >
      <p className="text-sm sm:text-base max-w-xl leading-relaxed text-[#4a3b2f]">
        Ce site utilise <strong>Vercel Analytics</strong> pour collecter des
        données anonymes sur les performances du site, sans dépôt de cookies.
        <br />
        En cliquant sur <strong>Accepter</strong>, vous consentez à cette
        collecte anonyme.
        <br />
        <br />
        Vous pouvez aussi&nbsp;
        <a
          href="/politique-de-cookie"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#8e4b3b] hover:text-[#b97468]"
        >
          consulter notre politique de données
        </a>
        .
      </p>
      <div className="flex gap-6 mt-4">
        <button
          onClick={refuseConsent}
          className="bg-transparent border-2 border-[#8e4b3b] text-[#8e4b3b] font-semibold px-5 py-2 rounded-md hover:bg-[#8e4b3b] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8e4b3b]"
        >
          Refuser
        </button>
        <button
          onClick={acceptConsent}
          className="bg-[#8e4b3b] border-2 border-[#8e4b3b] text-white font-semibold px-5 py-2 rounded-md hover:bg-transparent hover:text-[#8e4b3b] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8e4b3b]"
        >
          Accepter
        </button>
      </div>
    </div>
  );
}
