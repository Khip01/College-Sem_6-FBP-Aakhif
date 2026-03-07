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

## Bagian 4 – Uji Perbedaan SSR vs CSR

Sekarang saya igin melakukan uji pada halaman yang menggunakan SSR dan CSR,

### Uji 1 - Skeleton

Saya membuka halaman CSR dan melakukan refresh dan hasilnya seperti ini,

![tampilan halaman CSR pada saat dimuat](Screencast_20260305_084522.gif)

Lalu saya membuka halaman SSR dan melakukan refresh, dan hasilnya seperti ini,

![tampilan halaman SSR pada saat dimuat](Screencast_20260305_090534.gif)

### Uji 2 – Network Tab

Saya mencoba membandingkan SSR dan CSR menggunakan network tab dari inspect element, pertama-tama saya coba untuk melihat di mode **CSR** terlebih dahulu, dan hasilnya adalah seperti berikut,

![tampilan bukti halaman CSR melakukan pemanggilan API di sisi pengguna/client](image-6.png)

Terlihat jika ada request yang dilakukan dari sisi client untuk halaman produk. Sekarang saya ingin mencoba menggunakan halaman **SSR**, dan hasilnya adalah sebagai berikut,

![tampilan bukti halaman SSR tidak melakukan pemanggilan API dari sisi pengguna](image-7.png)

Terlihat jika tidak ada request yang dilakukan untuk menampilkan item product dari penggunaan halaman SSR.

# D. Tugas Praktikum

## Tugas Individu

### 1. Buat 2 halaman:

- /products (CSR)
- /products/server (SSR)

#### **Jawab**

Saya sudah melakukan pembuatan 2 halaman produk yang dimana masing-masing menggunakan implementasi CSR, dan SSR untuk melakukan pengambilan data.

![tampilan halaman CSR pada saat dimuat](Screencast_20260305_084522.gif)

![tampilan halaman SSR pada saat dimuat](Screencast_20260305_090534.gif)

### 2. Dokumentasikan:

- Screenshot CSR
- Screenshot SSR
- Perbedaan Network tab
- Perbedaan View Source

#### **Jawab**

Saya sudah melihat tampilan network (jejak get response) dari masing-masing halmaan dan berikut gambarnya,

![tampilan bukti halaman CSR melakukan pemanggilan API di sisi pengguna/client](image-6.png)

![tampilan bukti halaman SSR tidak melakukan pemanggilan API dari sisi pengguna](image-7.png)
