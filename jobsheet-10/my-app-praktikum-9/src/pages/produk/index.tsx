import { useEffect, useState } from "react";
import TampilanProduk from "../../views/product";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";

type Props = {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
};

const produk = ({ isLogin, setIsLogin }: Props) => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("/api/products")
  //     .then((response) => response.json())
  //     .then((responseData) => setProducts(responseData.data))
  //     .catch((error) => {
  //       console.error("Error fetching products:", error);
  //     });
  // }, []);

  const { data, error, isLoading } = useSWR("/api/products", fetcher);

  return (
    <>
      <TampilanProduk products={isLoading ? [] : data.data} />
    </>
  );
};

export default produk;
