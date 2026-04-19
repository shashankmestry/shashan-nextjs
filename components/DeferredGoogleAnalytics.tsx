"use client";

import Script from "next/script";

type Props = { gaId: string };

export default function DeferredGoogleAnalytics({ gaId }: Props) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="lazyOnload"
      />
      <Script id={`ga-init-${gaId}`} strategy="lazyOnload">
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');
`.trim()}
      </Script>
    </>
  );
}
