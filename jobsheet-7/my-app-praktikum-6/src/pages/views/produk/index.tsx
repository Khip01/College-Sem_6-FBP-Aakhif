import TitleText from "@/components/utility/title-text";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Props = {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
};

type ProductType = {
  id: string;
  nama: string;
  harga: number;
  ukuran: string;
  warna: string;
};

const TampilanProduk = ({ isLogin, setIsLogin }: Props) => {
  const { push } = useRouter();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }

    fetch("/api/produk")
      .then((res) => res.json())
      .then((resData) => setProducts(resData.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, [isLogin]);

  const handlerLogout = () => {
    // tanpa melakukan push() ke login, ini sudah auto redirect
    // karena state isLogin nya menjadi false
    setIsLogin(false);
  };

  return (
    <div>
      <main>
        <TitleText text="Daftar Produk" />
        {products.length > 0 ? (
          <div>
            {products.map((product: ProductType) => (
              <div key={product.id}>
                <h2>{product.nama}</h2>
                <p>Harga : {product.harga}</p>
                <p>Ukuran: {product.ukuran}</p>
                <p>Warna : {product.warna}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading products...</p>
        )}
      </main>
      <button onClick={handlerLogout}>Logout</button>
    </div>
  );
};

export default TampilanProduk;
