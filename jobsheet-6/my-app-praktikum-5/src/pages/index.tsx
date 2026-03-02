import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/layouts/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Praktikum Next.js Page Router</title>
      </Head>
      <h1>Praktikum Next.js Page Router</h1> <br />
      <div>Mahasiswa D4 Pengembangan Web</div>
    </div>
  );
}
