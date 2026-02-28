import TitleText from "@/components/utility/title-text";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Props = {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
};

const TampilanProduk = ({ isLogin, setIsLogin }: Props) => {
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, [isLogin]);

  const handlerLogout = () => {
    // tanpa melakukan push() ke login, ini sudah auto redirect
    // karena state isLogin nya menjadi false
    setIsLogin(false);
  };

  return (
    <div>
      <main>
        <TitleText text="Halaman Produk" />
      </main>
      <button onClick={handlerLogout}>Logout</button>
    </div>
  );
};

export default TampilanProduk;
