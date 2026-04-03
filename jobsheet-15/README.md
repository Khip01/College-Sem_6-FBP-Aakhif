# C. Langkah Praktikum

## Bagian 1 – Membuat Register View

Saya sudah mempunyai file bernama `index.tsx` dan `register.module.scss` seperti berikut didalam direktori
`src/auth/views/register/`,

![img.png](img.png)

Lalu saya melakukan modifikasi pada kode `pages/auth/register.tsx`, `views/auth/register/register.module.css`, dan
`views/auth/register/index.tsx` sepeti berikut,

**register.tsx**

![tampilan file register](image.png)

**regsiter.module.css**

![tampilan styling css](image-1.png)

**index.tsx**

![tampilan/view index dari halaman register](image-2.png)

Lalu saya menambahkan form inputan berupa email, fullname, dan password di file `index.tsx

![tampilan kode tsx setelah penambahan email, fullname, dan password](image-3.png)

Lalu saya memodifikasi `register.module.scss` seperti berikut,

![tampilan kode module scss](image-4.png)

Sehingga hasil akhirnya tampilannya seperti berikut,

![tampilan setelah modifikasi scss dan penambahan field](image-5.png)

## Bagian 2 – Membuat API Register

Setelah itu saya mencoba memodifikasi file `servicefirebase.ts` seperti berikut,

![kode setelah melakukan modifikasi servicefirebase.ts](image-6.png)

Setelah itu saya mencoba membuat file baru bernama `register.ts` didalam direktori `src/pages/api/`, lalu melakukan
modifikasi untuk file `register.ts` juga seperti berikut,

![tampilan kode register.ts](image-7.png)

Setelah itu saya melakukan modifikasi pada kode `index.tsx` pada folder register,

![tampilan kode index.tsx didalam folder register setelah modifikasi](image-8.png)

Sehingga hasil tampilannya adalah sebagai berikut,

![tampilan gif halaman register](Screencast_20260403_201229.gif)

Terlihat jika pada saat ditekan masih tidak bisa mengarahkan ke halaman login walaupun tombol register sudah ditekan.

## Bagian 3 – Install bcrypt

Saya melakukan instalasi package `bcrypt` didalam project nextjs saya,

![tampilan konsole instalasi package bcrypt](image-9.png)

Lalu saya mencoba memodifikasi file `servicefirebase.ts` untuk menerapkan bcrypt pada password dan menambahkan field
baru yaitu role seperti berikut,

![tampilan kode setelah modifikasi servicefirebase.ts](image-10.png)

Setelah itu saya mencoba untuk menjalankan register seperti berikut,

![tampilan gif dari proses register di halaman register](Screencast_20260403_203706.gif)

![tampilan users yang sudah menambah di firestore database](image-11.png)

Telrihat jika pada saat setelah melakukan register saya sudah bisa diarahkan ke halaman login.

Lalu agar error terlihat pada saat kita melakukan register dengan menggunakan akun yang sama, maka saya memodifikasi
kode di `index.tsx` pada folder `views/auth/register` seperti berikut,

![tampilan kode yang sudah dimodifikasi untuk menampilkan error](image-12.png)

Sehingga tampilan halamannya pada saat memberikan akun email yang sama akan seperti berikut,

![tampilan halaman setelah error dimunculkan](image-13.png)

Terlihat jika tampilan errornya sekarang telah ditampilkan.

Setelah itu untuk memperbaiki UX yang bagus, saya tambahkan loading pada saat tombol submit register ditekan, dan
hasilnya seperti berikut,

![tampilan loading pada saat tombol register ditekan](Screencast_20260403_210510.gif)

Terlihat jika saya bisa menampilkan/mengimplementasikan loading state pada tombol register.
