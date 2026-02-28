import { useRouter } from "next/router";
import Navbar from "../navbar";
import Footer from "@/components/utility/footer";

const disableNavbar = ["/auth/login", "/auth/register"];

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();

  // console.log(useRouter());

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {!disableNavbar.includes(pathname) && <Navbar />}
        {children}
      </main>
      {!disableNavbar.includes(pathname) && <Footer />}
    </div>
  );
};

export default AppShell;
