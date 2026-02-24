import AppShell from "@/components/layouts/Appshell";
import Navbar from "@/components/layouts/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isLogin, setIsLogin] = useState(false);

  return (
    // <>
    //   <Navbar />
    //   <Component {...pageProps} />
    // </>
    <AppShell>
      <Component {...pageProps} isLogin={isLogin} setIsLogin={setIsLogin} />
      {/* <footer>
        <p>footer aakhif</p>
      </footer> */}
    </AppShell>
  );
}
