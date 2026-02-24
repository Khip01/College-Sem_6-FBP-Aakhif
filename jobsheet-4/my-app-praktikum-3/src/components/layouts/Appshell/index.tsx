import Navbar from "../navbar";

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
  const { children } = props;

  return (
    <>
      <main>
        <Navbar />
        {children}
      </main>
      <footer>
        <p>footer AppShell</p>
      </footer>
    </>
  );
};

export default AppShell;
