import TampilanProduk from "../../views/product";
import { ProductType } from "../../types/product.type";

const HalamanProdukServer = (props: { products: ProductType[] }) => {
  return (
    <>
      <TampilanProduk products={props.products} />
    </>
  );
};

export default HalamanProdukServer;

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
  const response = await res.json();
  return {
    props: {
      products: response.data,
    },
  };
}









