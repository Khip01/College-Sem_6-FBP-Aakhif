import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const produk = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);

  return <main>Produk User Page Aakhif</main>;
};

export default produk;
