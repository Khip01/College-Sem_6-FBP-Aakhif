import styles from "@/styles/404.module.scss";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
// import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

const Custom404 = () => {
  //   const { push } = useRouter();

  //   const onClick = () => {
  //     push("/");
  //   };

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
        <br />
        <br />
        {/* <button className={styles.error__button} onClick={onClick}>
          Kembali Ke Beranda
        </button> */}
        <Link href="/" className={`${styles.error__button} ${inter.className}`}>
          Kembali Ke Beranda
        </Link>
      </div>
    </>
  );
};

export default Custom404;
