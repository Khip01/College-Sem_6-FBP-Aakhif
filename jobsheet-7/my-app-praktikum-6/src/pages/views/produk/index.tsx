import TitleText from "@/components/utility/title-text";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Props = {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
};

type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
};

const TampilanProduk = ({ isLogin, setIsLogin }: Props) => {
  const { push } = useRouter();
  const [products, setProducts] = useState([]);
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }

    fetch("/api/produk")
      .then((res) => res.json())
      .then((resData) => setProducts(resData.data))
      .catch((err) => console.error("Error fetching products:", err));

    fetch("/api/category")
      .then((res) => res.json())
      .then((resData) => setCategory(resData.data))
      .catch((err) => console.error("Error fetching category:", err));
  }, [isLogin]);

  const handlerLogout = () => {
    // tanpa melakukan push() ke login, ini sudah auto redirect
    // karena state isLogin nya menjadi false
    setIsLogin(false);
  };

  return (
    <div>
      <main>
        <TitleText text="Kategori Produk" />
        {categories.length > 0 ? (
          <div>
            {categories.map((cat: ProductType, index: number) => (
              <span key={cat.id}>
                {cat.name} {index === categories.length - 1 ? "" : " - "}
              </span>
            ))}
          </div>
        ) : (
          <p>Loading category...</p>
        )}
        <br />
        <TitleText text="Daftar Produk" />
        {products.length > 0 ? (
          <div>
            {products.map((product: ProductType) => (
              <div key={product.id}>
                <h2>{product.name}</h2>
                <p>Harga : {product.price}</p>
                <p>Ukuran: {product.size}</p>
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
