import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

const ProfilePage = () => {
  const { data }: any = useSession();

  return (
    <>
      <Head>
        <title>Profil</title>
      </Head>
      <main>
        <h1>Profile Page</h1>
        <p>Ini Halaman Profil</p>
        <p>Selamat datang {data?.user?.fullname}</p>
        <Link href={"/profile/edit"} style={{ color: "blue" }}>
          Edit Profil
        </Link>
      </main>
    </>
  );
};

export default ProfilePage;
