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
