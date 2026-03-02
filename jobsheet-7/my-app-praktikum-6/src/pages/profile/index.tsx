import Head from "next/head";
import Link from "next/link";

const ProfilePage = () => {
  return (
    <>
      <Head>
        <title>Profil</title>
      </Head>
      <main>
        <h1>Profile Page</h1>
        <p>Ini Halaman Profil</p>
        <Link href={"/profile/edit"} style={{ color: "blue" }}>
          Edit Profil
        </Link>
      </main>
    </>
  );
};

export default ProfilePage;
