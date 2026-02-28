import Link from "next/link";
import styles from "./register.module.css";

const TampilanRegister = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Halaman Register</h1>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <div className={styles.formSection}>
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
          </div>
          <div className={styles.formSection}>
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
          </div>
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
          <button type="submit" className={styles.submitBtn}>
            Register
          </button>
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
