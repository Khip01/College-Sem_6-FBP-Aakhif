import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "@/utils/swr/fetcher";
import DetailProduk from "@/views/DetailProduct";
import { ProductType } from "@/types/product.type";

const HalamanProduk = ({ product }: { product: ProductType }) => {
  //   const Router = useRouter();
  //   console.log(Router);
  // const { query } = useRouter();
  // const { data, error, isLoading } = useSWR(
  //   `/api/products/${query.id}`,
  //   fetcher,
  // );
  // return (
  //   <>
  //     <DetailProduk products={isLoading ? [] : data.data} />
  //   </>
  // );

  return (
    <div>
      <DetailProduk products={product} />
    </div>
  );
};

export default HalamanProduk;

export async function getServerSideProps({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/produk/${params?.id}`);
  const response = await res.json();
  return {
    props: {
      product: response.data,
    },
  };
}

// export async function getStaticPaths() {
//   const res = await fetch("http://localhost:3000/api/produk");
//   const response = await res.json();
//
//   const paths = response.data.map((product: ProductType) => ({
//     params: { id: product.id.toString() },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// }
//
// export async function getStaticProps({ params }: { params: { id: string } }) {
//   const res = await fetch(`http://localhost:3000/api/produk/${params.id}`);
//   const response: { data: ProductType[] } = await res.json();
//
//   return {
//     props: {
//       product: response.data,
//     },
//   };
// }
