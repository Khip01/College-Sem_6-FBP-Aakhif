import Link from "next/link";
import { useRouter } from "next/router";
// import styles from "./login.module.css";
import styles from "./login.module.scss";
import TitleText from "@/components/utility/title-text";
import PrimaryButton from "@/components/utility/primary-button";
import BodyText from "@/components/utility/body-text";
import TextField from "@/components/utility/text-field";

const TampilanLogin = ({ setIsLogin }: any) => {
  const { push } = useRouter();

  const handlerLogin = () => {
    setIsLogin(true);
    push("/produk");
  };

  return (
    <div className={styles.login}>
      {/* <h1 className="text-3xl font-bold text-blue-600 ">Halaman Login</h1> */}
      <TitleText text="Halaman Login" />
      {/* <button onClick={handlerLogin}>Login</button>
      <br />
      <button onClick={() => push("/produk")}>Login</button>
      <br /> */}
      <BodyText text="Silahkan isi form dibawah untuk masuk ke halaman produk" />

      <h1
        style={{
          color: "red",
          border: "1px solid red",
          borderRadius: "5px",
          padding: "5px",
        }}
      >
        belum punya akun
      </h1>
      <br />


      <TextField label="Email" value="" onChange={() => {}} />
      <TextField label="Password" value="" onChange={() => {}} />
      <br />

      {/* <button onClick={() => handlerLogin()}>Login</button> */}
      <PrimaryButton text="Login" onClick={() => handlerLogin()} />
      <br />

      <Link href="/auth/register">Ke Halaman Register</Link>
    </div>
  );
};

export default TampilanLogin;
