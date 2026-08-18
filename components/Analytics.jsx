"use client";

import Script from "next/script";
import { GA_ID, ADS_ID } from "@/lib/tracking";

// Nacita gtag.js a nastavuje Google Consent Mode v2.
// Dokud nejsou vyplnene env promenne, nenacte se vubec nic.
export default function Analytics() {
  const primary = GA_ID || ADS_ID;
  if (!primary) return null;

  return (
    <>
      {/* Vychozi souhlas MUSI byt nastaven driv, nez se nacte gtag.js */}
      <Script id="consent-default" strategy="beforeInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('consent','default',{
          ad_storage:'denied', ad_user_data:'denied', ad_personalization:'denied',
          analytics_storage:'denied', functionality_storage:'granted',
          security_storage:'granted', wait_for_update:500
        });
        gtag('set','url_passthrough',true);
        gtag('set','ads_data_redaction',true);
        try{
          var s = JSON.parse(localStorage.getItem('cookie_consent_v1')||'null');
          if(s) gtag('consent','update',{
            analytics_storage: s.analytics ? 'granted' : 'denied',
            ad_storage: s.marketing ? 'granted' : 'denied',
            ad_user_data: s.marketing ? 'granted' : 'denied',
            ad_personalization: s.marketing ? 'granted' : 'denied'
          });
        }catch(e){}
      `}</Script>

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${primary}`}
        strategy="afterInteractive"
      />

      <Script id="gtag-init" strategy="afterInteractive">{`
        gtag('js', new Date());
        ${GA_ID ? `gtag('config','${GA_ID}',{send_page_view:false});` : ""}
        ${ADS_ID ? `gtag('config','${ADS_ID}',{allow_enhanced_conversions:true});` : ""}
      `}</Script>
    </>
  );
}
