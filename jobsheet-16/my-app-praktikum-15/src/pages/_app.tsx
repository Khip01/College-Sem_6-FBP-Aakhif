import AppShell from "@/components/layouts/Appshell";
import Navbar from "@/components/layouts/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { SessionProvider } from "next-auth/react";

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
      <AppShell>
        <Component {...pageProps} />
        {/* <footer>
          <p>footer aakhif</p>
        </footer> */}
      </AppShell>
    </SessionProvider>
  );
}
