import Link from "next/link";
import styles from "./register.module.css";
import TitleText from "@/components/utility/title-text";
import PrimaryButton from "@/components/utility/primary-button";
import BodyText from "@/components/utility/body-text";
import TextField from "@/components/utility/text-field";

const TampilanRegister = () => {
  return (
    <div className={styles.container}>
      {/* <h1 className={styles.title}>Halaman Register</h1> */}
      <TitleText text="Halaman Register" />
      <BodyText text="Silakan isi form di bawah ini untuk membuat akun baru." />
      <div className={styles.formContainer}>
        <form className={styles.form}>
          {/* <div className={styles.formSection}>
            <label htmlFor="name" className={styles.formLabel}>
              Nama
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nama lengkap"
              required
              className={styles.formInput}
            />
          </div> */}
          <TextField label="Nama" value="" onChange={() => {}} />
          {/* <div className={styles.formSection}>
            <label htmlFor="email" className={styles.formLabel}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              className={styles.formInput}
            />
          </div> */}
          <TextField label="Email" value="" onChange={() => {}} />
          <div className={styles.formSection}>
            <label htmlFor="password" className={styles.formLabel}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              className={styles.formInput}
            />
          </div>
          {/* <button type="submit" className={styles.submitBtn}>
            Register
          </button> */}
          <PrimaryButton text="Register" onClick={()=>{}}/>
        </form>
        <Link
          className="block text-center mt-4 text-blue-600 hover:underline"
          href="/auth/login"
        >
          Ke Halaman Login
        </Link>
      </div>
    </div>
  );
};

export default TampilanRegister;
