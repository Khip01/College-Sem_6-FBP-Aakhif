import { Inter } from "next/font/google";
import styles from "./navbar.module.css";

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <h1 className={inter.className}>Navbar Component</h1>
      </div>
    </div>
  );
};

export default Navbar;
