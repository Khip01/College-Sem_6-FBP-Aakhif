import Head from "next/head";
import { useRouter } from "next/router";
import TampilanProdukId from "../views/produk/detail";

const HalamanProduk = () => {
  //   const Router = useRouter();
  //   console.log(Router);

  // const { query } = useRouter();

  return (
    <>
      <TampilanProdukId />
    </>
  );
};

export default HalamanProduk;
