import TampilanProduk from "../views/product";

type ProdukType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

const HalamanProdukServer = (props: { products: ProdukType[] }) => {
  return (
    <>
      <TampilanProduk products={props.products} />
    </>
  );
};

export default HalamanProdukServer;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const response = await res.json();
  return {
    props: {
      products: response.data,
    },
  };
}
