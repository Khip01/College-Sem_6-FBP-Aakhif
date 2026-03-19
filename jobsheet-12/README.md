# C. Implementasi ISR Otomatis

## Bagian 1 – Tambahkan revalidate

Di bagian tampilan halaman rute `/produk/static` saya menambahkan kode relaidate seperti berikut,

![tampilan kode revalidate](image.png)

Yang fungsinya untuk melakukan pengecekan cache setiap 10 detik.

## Bagian 2 – Pengujian ISR

Lalu setelah menambahkan kode revalidate tersebut, saya melakukan build SSG project nextjs ini seperti berikut,

![tampilan konsole dalam melakukan build](image-1.png)

Setelah itu saya mengecek tampilan halaman statis nya, awalnya seperti berikut,

![tampilan halaman produk static](image-2.png)

Lalu saya mencoba menambahkan data baru di database firebase seperti berikut,

![tampilan tambah document baru](image-3.png)

Lalu saya coba lihat tampilannya di web, setelah dilakukan penambahan data tampilannya seperti berikut,

![tampilan halaman static setelah perubahan data di database](image-4.png)

Terlihat jika data baru berhasil ditampilkan walaupun ini menggunakan Site Generation.

# D. On-Demand Revalidation

## Bagian 1 – Buat API Revalidate

Sekarang saya ingin membuat ISR manual dengan trigger, jadi ada sesuatu yang di trigger terlebih dahulu maka data di website akan diperbarui.Untuk langkah pertama ini saya coba membuat file baru di `pages/api/` bernama `revalidate.ts` seperti berikut,

![tampilan kode revalidate di api](image-5.png)

Sehingga untuk melakukan revalidate/merefresh data produk di halaman static, kita bisa tinggal mengakses rute url `/api/revalidate`

> [!NOTE]
> UNtuk mengenguji nya, pastikan kita menjalankan `npm start` alih-alih menggunakan `npm run dev`

Misalnya jika kita hapus salah satu item produk seperti berikut (Nama Produk: Sepatu Adidas Merah),

![tampilan penghapusan salah satu document produk](image-6.png)

Tampilan awalnya sebelum dilakukan revalidate adalah seperti ini,

![tampilan awal sebelum revalidate](image-7.png)

Setelah itu saya akses endpoint `api/revalidate`

![tampilan akses endpoint revalidate](image-8.png)

Sehingga pada saat halaman direfresh, produknya sudah hilang seperti berikut,

![tampilan produk adidas merah yang hilang](image-9.png)
