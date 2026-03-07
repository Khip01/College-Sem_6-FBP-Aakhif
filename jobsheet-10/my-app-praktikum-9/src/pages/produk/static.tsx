import { ProductType } from "../types/product.type";
import TampilanProduk from "../views/product";

const HalamanProdukStatic = (props: { products: ProductType[] }) => {
  const { products } = props;

  return (
    <div>
      <h1>Halaman Produk Static</h1>
      <TampilanProduk products={products} />
    </div>
  );
};

export default HalamanProdukStatic;

export async function getStaticprops() {
  const res = await fetch("http://localhost:3000/api/products");
  const response: { data: ProductType[] } = await res.json();
  return {
    props: {
      products: response.data,
    },
  };
}
