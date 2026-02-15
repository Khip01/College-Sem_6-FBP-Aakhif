import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>Praktikum Next.js Pages Router</h1> <br />
      <p>Mahasiswa D4 Pengembangan Web</p> <br />
      <div style={{ display: "flex", flexDirection: "row" }}>
        Aakhif menggunakan <div style={{ width: "18px" }}></div>
        <ImageComponent />
      </div>
    </div>
  );
}

export function ImageComponent() {
  return (
    <Image
      className={styles.logo}
      src="/next.svg"
      alt="Next.js Logo"
      width={180}
      height={37}
      priority
      style={{ filter: "brightness(0)" }}
    />
  );
}
