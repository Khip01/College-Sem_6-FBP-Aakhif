# C. Langkah Praktikum

## Bagian 1 – Install NextAuth

Saya menginstall library `next-auth` seperti berikut,

![tampilan konsole menjalankan perintah npm install](image.png)

## Bagian 2 – Konfigurasi API Auth

Saya menambahkan konfigurasi untuk autentikasi menggunakan next-auth dengan cara membuat file baru bernama [...next-auth].ts di folder `/pages/api/auth/` seperti berikut,

![tampilan kode next auth options](image-1.png)

## Bagian 3 – Tambahkan Secret

Saya menambahkan variabel secret di `.env.local` untuk menjadi secret dari next auth seperti berikut,

![tampilan next auth secret dari env local](image-2.png)

## Bagian 4 – Tambahkan SessionProvider

Lalu saya menuju ke file `_app.tsx` dan memodifikasi kode nya untuk mengimplementasikan autentikasi session dari next auth, dengan cara menambahkan `SessionProvider` seperti berikut,

![tampilan kode implementasi SessionProvider](image-3.png)

## Bagian 5 – Tambahkan Tombol Login & Logout

Lalu sekarang saya akan menambahkan tombol sign in/login di Navbar dari web nextjs saya seperti berikut,

![tampilan kode navbar dan styling module css nya](image-4.png)

![tampilan halaman root "/" dari website dengan tombol sign in di navbar](image-5.png)

Sehingga pada saat saya tekan tombol Sign In nya hasilnya seperti berikut,

![tampilan form sign in dari next-auth](image-6.png)

Setelah itu saya coba tekan tombol "Sign in with credentials" nya, dan mendapatkan session baru seperti ini jika di inspect,

![tampilan session setelah menekan tombol sign in](image-7.png)

Sehingga untuk menangkap data dari session tersebut bisa dengan cara menambahkan kode seperti berikut (contohnya di navbar),

![tampilan pengkondisian tombol sign in di navbar](image-8.png)

Sehingga saya sudah bisa melakukan Sign In dan Sign Out seperti berikut,

_pertama-tama session akan kosong,_

![tampilan halaman dasar/root dengan navbar sign in](image-9.png)

_setelah itu menekan tombol sign in dan mengisi form,_

![tampilan halaman form sign in dan pengisian field form nya](image-10.png)

_setelah itu menekan tombol "Sign in with credentials" dan mendapatkan session baru beserta datanya (email),_

![tampilan session setelah sign in](image-11.png)

_terlihat di gambar diatas tombol "sign in" berubah menjadi "sign out", dan sekarang kita coba menekannya,_

![tampilan halaman web dasar dan inspect session setelah sign out](image-12.png)

_terlihat jika setelah menekan tombol "sign out", tombol nya berubah menjadi "sign in" dan data didalam session nya sudah tidak ada._

# D. Menambahkan Data Tambahan (Full Name)

Sekarang saya ingin menambahkan Full Name ke data yang berada di dalam session, seperti ini kode nya,

![tampilan kode konfigurasi next-auth setelah penambahan full name](image-14.png)

lalu setelah itu saya melakukan modifikasi styling terlebih dahulu seperti berikut hasilnya,

![tampilan halaman setelah modifikasi styling](image-13.png)

lalu saya mencoba untuk melakukan sign in dengan beberapa field form terisi seperti berikut,

![tampilan form sign in yang terisi](image-15.png)

Sehingga isi dari sessionnya adalah seperti berikut,

![tampilan halaman dasar/root dengan inspect data dari session](image-16.png)

Terlihat data Full Name sudah muncul.
