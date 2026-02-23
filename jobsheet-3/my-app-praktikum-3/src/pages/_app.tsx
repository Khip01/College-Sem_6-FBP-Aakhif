import AppShell from "@/components/layouts/Appshell";
import Navbar from "@/components/layouts/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <>
    //   <Navbar />
    //   <Component {...pageProps} />
    // </>
    <AppShell>
      <Component {...pageProps} />
      <footer>
        <p>footer aakhif</p>
      </footer>
    </AppShell>
  );
}
