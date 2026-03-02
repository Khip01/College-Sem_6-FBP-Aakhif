import styles from "@/styles/404.module.scss";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 - Halaman tidak ditemukan</title>
      </Head>
      <div className={styles.error}>
        <img
          src="/not_found.png"
          alt="404 Not Found"
          className={styles.error__image}
        />
        <h1 className={inter.className}>404 - Halaman tidak ditemukan</h1>
        <p className={inter.className}>
          Maaf, halaman yang anda cari tidak ada
        </p>
      </div>
    </>
  );
};

export default Custom404;
