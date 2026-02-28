import TampilanLogin from "../views/auth/login";

const halamanLogin = ({ setIsLogin }: any) => {
  return (
    <>
      <TampilanLogin setIsLogin={setIsLogin} />
    </>
  );
};

export default halamanLogin;
