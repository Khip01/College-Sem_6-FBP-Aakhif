import styles from "@/styles/404.module.scss";
import Head from "next/head";

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
        <h1>404 - Halaman tidak ditemukan</h1>
        <p>Maaf, halaman yang anda cari tidak ada</p>
      </div>
    </>
  );
};

export default Custom404;
