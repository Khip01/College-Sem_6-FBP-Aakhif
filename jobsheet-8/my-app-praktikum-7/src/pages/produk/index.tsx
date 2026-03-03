import { useEffect, useState } from "react";
import TampilanProduk from "../views/product/";

type Props = {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
};

const produk = ({ isLogin, setIsLogin }: Props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((responseData) => setProducts(responseData.data))
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <>
      <TampilanProduk products={products} />
    </>
  );
};

export default produk;
