# C. Langkah Praktikum

## Bagian 1 – Setup Halaman Static

Jadi disini saya ingin membuat halaman baru dengan SSG (Static Site Generation). Pada langkah pertama yang saya lakukan adalah membuat file baru bernama `static.tsx` didalam folder `/pages/produk/` dan mengisinya dengan kode berikut,

![tampilan kode halaman static](image.png)

## Bagian 3 – Build Production Mode

Untuk menghindari error pada saat melakukan build, saya memindahkan folder `views`, `utils`, `types` diluar folder pages. Sehingga tampilannya seperti berikut,

![tampilan direktori setelah folder dipindahkan](image-1.png)

Setelah itu saya menjalankan `npm run build` untuk melakukan build dari project nextjs ini,

![tampilan konsole pada saat selesai npm run build](image-2.png)

Terlihat jika saya selesai melakukan build (di sebelah kanan) juga sambil menjalankan npm run dev (di sebelah kiri).

Setelah melakukan build, saya menjalankan `npm run start` untuk menjalankan production ready seperti berikut (di sebelah kanan),

![tampilan npm run start](image-4.png)

Lalu hasil dari halaman staticnya adalah seperti berikut,

![tampilan halaman static](image-3.png)

Pada saat saya load halaman nya, proses memuatnya terasa sangat cepat, dikarenakan semua konten dari API nya sudah diambil dan digenerate langsung menjadi sebuah halaman statis.
