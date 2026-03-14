# C. Langkah Praktikum

## Bagian 1 – Membuat Dynamic Route

Saya menambahkan link pada masing masing item, sehingga item bisa ditekan,

![menambahkan link pada item produk](image.png)

![tampilan url pada saat item produk di hover](image-1.png)

![tampilan detail produk pada saat salah satu item produk ditekan](image-2.png)

## Bagian 2 – Implementasi CSR (Client Rendering)

Saya sudah memodifikasi halaman `detail product` agar bisa mengambil data produk dari database berdasarkan id yang diterima,

![tampilan halaman detail produk](image-3.png)

Melakukan rename file `produk.ts` -> [[...produk]].ts di folder api,

![rename file produk.ts](image-4.png)

Melakukan modifikasi `serviceirebase.ts`,

![modifikasi file servicefirebase.ts](image-5.png)

Melakukan modifikasi juga ke file `[[...produk]].ts`

![tampilan file produk.ts yang telah dimodifikasi](image-6.png)

Sehingga pada saat saya coba api nya, hasilnya seperti ini,

![tampilan endpoint api yang sudah berhasil menampilkan data detail produk](image-7.png)

![tampilan endpoint api dengan id yang tidak sesuai](image-8.png)

Setelah itu saya membuat file `detailProduk.module.scss` dan `index.tsx` baru beserta isinya,

![tampilan isi module scss dan index nya](image-9.png)

![tampilan isi halaman detail](image-10.png)

Dan hasilnya adalah seperti berikut,

![tampilan detail produk setelah perubahan](image-11.png)

## Bagian 3 – Implementasi SSR

Lalu saya mencoba untuk mengubah kode CSR yang ada di `/produk/[id].tsx dan menggantinya ke penggunaan SSR,

![tampilan kode CSR yang telah diubah ke SSR di halaman produk detail](image-12.png)

Dan tampilannya adalah sebagai berikut,

![tampilan gif perpundahan halaman produk menuju detail produk](Screencast_20260314_220520.gif)

Terlihat jika hasilnya memang tidak ada load image pada saat melihat detial image/load sudah dilakukan di sisi server sebelum tampil ke pengguna.
