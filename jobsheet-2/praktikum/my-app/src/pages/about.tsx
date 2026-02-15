import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <Head>
        <title>About Me</title>
      </Head>

      <main>
        <h1>Profil Saya</h1>
        <div style={{ marginTop: "10px", lineHeight: "1.6" }}>
          <p>
            <strong>Nama:</strong> Akhmad Aakhif Athallah
          </p>
          <p>
            <strong>NIM:</strong> 2341720071
          </p>
          <p>
            <strong>Program Studi:</strong> D4 Pengembangan Web
          </p>
        </div>
      </main>

      <footer style={{ marginTop: "20px" }}>
        {/** navigasi tanpa SPA */}
        {/* <a href="/" style={{ color: "blue", textDecoration: "underline" }}>
          ← Kembali ke Beranda
        </a> */}{" "}
        <br />
        <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>
          Kembali ke Beranda (Mode SPA)
        </Link>
      </footer>
    </div>
  );
}
