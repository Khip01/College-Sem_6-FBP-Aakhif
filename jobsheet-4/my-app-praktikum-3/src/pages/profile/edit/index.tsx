import Head from "next/head";
import Link from "next/link";

const EditProfilePage = () => {
  return (
    <>
      <Head>
        <title>Edit Your Profile</title>
      </Head>
      <main>
        <h1>Edit Profile</h1>
        <p>Edit profil anda</p>
        <input type="text"></input>
        <p>
          <Link href={"/profile"} style={{ color: "blue" }}>
            Back
          </Link>
        </p>
      </main>
    </>
  );
};

export default EditProfilePage;
