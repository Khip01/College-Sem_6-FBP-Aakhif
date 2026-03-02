import { useRouter } from "next/router";

const CategoryPage = () => {
  const { query } = useRouter();

  return (
    <div>
      <h1>Halaman Kategori</h1>
      <p>Kategori:</p>
      <ul>
        {Array.isArray(query.slug) ? (
          query.slug.map((slug: string, index: number) => (
            <li key={index}>- {slug}</li>
          ))
        ) : (
          <li>Tidak ada kategori</li>
        )}
      </ul>
      <br />
    </div>
  );
};

export default CategoryPage;
