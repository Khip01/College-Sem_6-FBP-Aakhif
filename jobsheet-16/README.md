# C. Langkah Praktikum

## BAGIAN 1 – Custom Login Page

Sekarang saya mencoba untuk menambahkan custom pages di file `[...nextauth].ts` seperti berikut,

![tampilan custom pages di file [...nextauth].ts](image.png)

setelah itu saya mencoba untuk menjalankan project nextjs saya di url `/` seperti berikut,

dan pada saat tombol sign in ditekan maka akan diarahkan ke halaman login,

![tampilan halaman login pada saat tombol sign in ditekan](image-1.png)

## BAGIAN 2 – Handle Login di Frontend

Setelah itu saya membuat ulang halaman `login.tsx` dengan melakukan copy seluruh kode di register dan melakukan
modifikasi/penyesuaian untuk halaman login,

![tampilan kode login/index.tsx yang baru](image-2.png)

![tampilan kode login/login.module.scss yang baru](image-3.png)

Sehingga hasil tampilannya seperti berikut,

![tampilan halaman login yang baru hasil copy dari register](image-4.png)

Setelah itu saya modifikasi lagi tampilan halaman login dengan menghapus textfield fullname (karena halaman tidak
memerlukan fullname). Sehingga tampilannya adalah seperti berikut,

![tampilan halaman login setelah textfield fullname dihapus](image-5.png)

Lalu setelah itu saya modifikasi lagi untuk file index.tsx di direktori `views/auth/login/` untuk melakukan
fungsionalitas proses submit login.

![tampilan kode setelah modifikasi fungsionalitas submitlogin](image-6.png)

Setelah itu saya menambahkan fungsi untuk `signIn` di file `servicefirebase.ts` seperti berikut,

![tampilan kode servicefirebase.ts setelah penambahan kode signin](image-7.png)

## BAGIAN 3 – Authorize di NextAuth (Database Login)

Lalu saat ini saya memodifikasi kode di file `[...nextauth].ts` (di bagian provider) untuk memperbaiki mekanisme login

![tampilan modifikasi kode [...nextauth].ts di bagian provider](image-8.png)

## BAGIAN 4 – Tambahkan Role ke Token

Setelah itu saya memperbaiki kode `[...nextauth].ts` (di bagian callbacks) untuk menyesuaikan validasi role dari
pengguna,

![tampilan kode hasil modifikasi file [...nextauth].ts di bagian callbacks](image-9.png)

Setelah itu saya mencoba menjalankan browser dan mencoba login menggunakan hasil modifikasi yang sudah saya lakukan, dan
hasilnya aadalah seperti berikut,

**(sebelum login)**
![tampilan halaman login setelah perubahan (sebelum login)](image-10.png)

**(sesudah login)**
![tampilan halaman setelah login sukses](image-11.png)

## BAGIAN 5 – Callback URL Logic

Lalu saya sekarang memodifikasi file `withAuth.ts` pada folder `src/middleware/`, dan kodenya adalah seperti berikut,

_(melakukan edit di baris 23 - 25)_
![tampilan hasil modifikasi kode withAuth.ts](image-12.png)

Tujuannya pada saat user setelah login bisa kembali ke halaman sebelumnya yang ia akses.

## BAGIAN 6 – Membuat halaman Admin dan authorize

Setelah itu saat ini saya mencoba membuat halaman admin di direktori `/pages/admin/`, seperti berikut,

![tampilan kode untuk halaman admin](image-13.png)

Setelah itu saya memodifikasi kode di file `withAuth.ts` menjadi seperti berikut,

![tampilan kode withAuth.ts setelah modifikasi](image-14.png)

tujuannya agar path/url `/admin` dapat diakses oleh pengguna yanbg memiliki role `admin`.

Sehingga pada saat kita mencoba mengakses halaman admin, yang padahal role kita sendiri adalah `user` alias **bukan
admin**, maka kita akan dipentalkan ke halmaan utama `/` seperti berikut,

**(role saya adalah `user`)**

![tampilan document users akun saya di firestore database](image-15.png)

![gif pada saat mencoba mengakses path /admin tetapi role masih user](Screencast_20260404_000414.gif)

Setelah itu saya mencoba memodifikasi role saya sendiri menjadi seorang admin lewat firestore database langsung,

![tampilan perubahan role secara manual lewat firestore database](image-16.png)

setelah itu saya mencoba mengakses path `/admin` kembali,

![gif pada saat saya mencoba mengakses path /admin dengan role yang sudah diubah menjadi /admin](Screencast_20260404_000848.gif)

Terlihat jika saya bisa mengakses path admin setelah mengubah role saya menjadi seorang admin.

# D. Pengujian

## Uji 1 – Login Valid

Input:

- Email benar
- Password benar

> Hasil:
>
> - Login berhasil
> - Redirect sesuai callbackUrl

### **Jawab**

Jadi saya sebelumnya mencoba mengakses url `/admin` tetapi saya mendapati diarahkan ke halaman login seperti berikut,

![tampilan callback di url](image-17.png)

terlihat jika callback tampil di url, setelah login berhasil saya diarahkan lagi ke halaman `/admin`,

![tampilan setelah callback dijalankan](image-18.png)

## Uji 2 – Password Salah

Input:

- Email benar
- Password salah

> Hasil:
>
> - Error message tampil
> - Tidak login

### **Jawab**

![tampilan password salah](image-19.png)

Terlihat jika terjadi error kredensial signin

## Uji 3 – Akses Admin sebagai User

Login sebagai:

- role: `user`

Akses: `/admin`

> Hasil:
>
> - Redirect ke home

### **Jawab**

**(role saya adalah `user`)**

![tampilan document users akun saya di firestore database](image-15.png)

![gif pada saat mencoba mengakses path /admin tetapi role masih user](Screencast_20260404_000414.gif)

## Uji 4 – Akses Admin sebagai Admin

Login sebagai:

- role: `admin`

Akses: `/admin`

> Hasil:
>
> - Bisa masuk halaman admin

### **Jawab**

**(role saya adalah `admin`)**

![gif pada saat saya mencoba mengakses path /admin dengan role yang sudah diubah menjadi /admin](Screencast_20260404_000848.gif)
