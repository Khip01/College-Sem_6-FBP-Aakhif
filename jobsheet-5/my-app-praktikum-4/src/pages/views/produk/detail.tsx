import Head from "next/head";
import { useRouter } from "next/router";

const TampilanProdukId = () => {
  //   const Router = useRouter();
  //   console.log(Router);

  const { query } = useRouter();

  return (
    <div>
      <Head>
        <title>Halaman Produk: {query.id}</title>
      </Head>
      <main>
        <h1>Halaman Produk</h1>
        {/* <p>Produk: {Router.query.id}</p> */}
        <p>Produk: {query.id}</p>
      </main>
    </div>
  );
};

export default TampilanProdukId;
