# C. Langkah Praktikum

## Bagian 1 – Setup Halaman SSR

Pada praktikum kali ini, saya igin mencoba membuat halaman dengan teknik rendering SSR, yang saya lakukan sekarang adalah membuat file baru i direktori `pages/produk/` dengan nama `server.tsx` seperti berikut,

![tampilan kode server.tsx di direktori pages/produk/](image.png)

Dan tampilan halaman web nya sebagai berikut,

![tampilan halaman produk/server](image-1.png)

Terlihat jika karena saya memberikan data array kosong, sehingga hasilnya akan skeleton loading terus menerus.

## Bagian 2 – Implementasi getServerSideProps pada server.tsx

Saya mencoba mengimplementasikan retrieve data menggunakan rendering server seperti berikut,

![tampilan kode getServerSideProps](image-2.png)

Sehingga tampilannya pada saat halaman direfresh seperti ini,

![tampilan halaman pada saat selesai direfresh](image-3.png)\_

Pada saat saya akses, tidak ada tampilan skeleton yang ditampilkan, karena pada saat halaman selesai di muat, data sudah siap untuk ditampilkan.

## Bagian 3 – Refactor Type ( produk type )

Saya mencoba untuk membuat folder `types` pada folder pages untuk meletakkan type dari product yang akan dipanggil berulang-ulang (seperti `models` di laravel), seperti berikut,

![tampilan types product baru](image-4.png)

Setelah itu saya melakukan modifikasi pada file `server.tsx` yang tadi kita buat untuk menggunakan types product yang telah kita buat barusan seperti berikut,

![tampilan kode server.tsx setelah dilakukan refactor](image-5.png)
