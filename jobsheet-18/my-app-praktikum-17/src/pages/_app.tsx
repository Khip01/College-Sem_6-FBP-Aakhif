import AppShell from "@/components/layouts/Appshell";
import Navbar from "@/components/layouts/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    // <>
    //   <Navbar />
    //   <Component {...pageProps} />
    // </>
    <SessionProvider session={pageProps.session}>
      <Script
          strategy="afterInteractive"
          src={`https://googletagmanager.com`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID');
      `}
      </Script>
      <AppShell>
        <Component {...pageProps} />
        {/* <footer>
          <p>footer aakhif</p>
        </footer> */}
      </AppShell>
    </SessionProvider>
  );
}
