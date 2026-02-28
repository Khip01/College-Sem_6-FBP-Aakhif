import TampilanProduk from "../views/produk";

type Props = {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
};

const produk = ({ isLogin, setIsLogin }: Props) => {

  return (
    <>
      <TampilanProduk isLogin={isLogin} setIsLogin={setIsLogin} />
    </>
  );
};

export default produk;
