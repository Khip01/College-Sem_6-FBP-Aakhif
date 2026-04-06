import { useRouter } from "next/router";
import Navbar from "../navbar";
import Footer from "@/components/utility/footer";
import { Roboto } from "next/font/google";

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

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
