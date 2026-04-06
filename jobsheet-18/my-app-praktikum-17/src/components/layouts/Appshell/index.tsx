import { useRouter } from "next/router";
import Navbar from "../navbar";
import { Roboto } from "next/font/google";
import dynamic from "next/dynamic";

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

const Footer = dynamic(() => import ("@/components/utility/footer"), {
    ssr: false,
    loading: () => <div className="p-4 text-center">Loading Footer...</div>,
});

type AppShellProps = {
  children: React.ReactNode;
};

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();

  // console.log(useRouter());

  return (
    <div className={`min-h-screen flex flex-col ${roboto.className}`}>
      <main className="flex-grow">
        {!disableNavbar.includes(pathname) && <Navbar />}
        {children}
      </main>
      {!disableNavbar.includes(pathname) && <Footer />}
    </div>
  );
};

export default AppShell;
