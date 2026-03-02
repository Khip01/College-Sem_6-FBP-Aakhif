# D. Langkah Kerja Praktikum

## Langkah 1 – Menjalankan Project

Saya mencoba menjalankan project sebelumnya,

![tampilan running project saya](image.png)

Terlihat jika saya tidak mengalami kendala apapun.

## Langkah 2 – Membuat Custom Document

Saya melakukan modifikasi file `_document.tsx` dengan kode berikut,

![modifikasi lang menjadi id di file _document.tsx](image-1.png)

Lalu saya coba cek di inspect element,

![pengecekan lang id di inspect element](image-2.png)

Terlihat jika language nya sudah berubah menjadi "id".

## Langkah 3 – Pengaturan Title per Halaman

Saya mencoba menambahkan tag `<title>` di halaman index.tsx halaman pages (alias url '/')

![kode title di index.tsx dari folder pages](image-3.png)

Dan hasilnya adalah seperti berikut,

![tampilan title di browser berubah](image-4.png)

## Langkah 4 – Membuat Custom Error Page (404)

Saya akan mencoba menghandle halaman error 404 not found dengan cara pertama-tama saya akan membuat file 404.tsx baru di folder `pages/`,

---

Tetapi sebelum itu, karena saya merasa ada yang janggal dengan tampilannya, seperti h1 yang membuat text masih menjadi biasa saja seperti ini,

![tag heading 1 tidak bekerja](image-5.png)

Terlihat jika harusnya tulisan `"Praktikum Next.js Page Router"` itu harusnya sedang menggunakan heading 1, akhirnya saya memutuskan untuk menguninstall tailwindcss dengan cara,

uninstall tailwindcss dan package lainnya,

![uninstall tailwindcss](image-6.png)

menghapus file `tailwind.config.js` dan `postcss.config.js`, dan juga menghapus folder cache `.next`, `node_modules`, an `package-lock.json`, sehingga melakukan install kembali,

![uninstall segala cache dari running sebelumnya](image-7.png)

Dan pada saat saya jalankan `npm run dev` kembali, hasilnya sudah benar dan sesuai,

![hasil perbaikan dengan menghapus tailwindcss](image-8.png)

Sehingga kita bisa melanjutkan ke halaman 404 notfound,

---

Saya sudah membuat file `404.tsx` di folder `pages/` dan juga isinya dan seperti inilah hasilnya pada saat saya mencoba memanggil localhost dengan segmen `dashboard/`,

![tampilan not found](image-9.png)

Terlihat jika hasilnya sudah sesuai dengan heading 1 dan juga `404.tsx` juga berhasil ditampilkan.

