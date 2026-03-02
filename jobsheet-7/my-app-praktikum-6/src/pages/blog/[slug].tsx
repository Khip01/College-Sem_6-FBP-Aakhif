import Head from "next/head";
import { Router, useRouter } from "next/router";

const BlogDetail = () => {
  // console.log(useRouter());
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>Blog detail</title>
      </Head>
      <main>
        <h1>Blog: {query.slug}</h1>
        <p>Detail dari Blog {query.slug}</p>
      </main>
    </>
  );
};

export default BlogDetail;
