import { useRouter } from "next/router";
import Navbar from "../navbar";

const disableNavbar = ["/auth/login", "/auth/register"];

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();

  // console.log(useRouter());

  return (
    <>
      <main>
        {!disableNavbar.includes(pathname) && <Navbar />}
        {children}
      </main>
      <footer>
        <p>footer AppShell</p>
      </footer>
    </>
  );
};

export default AppShell;
