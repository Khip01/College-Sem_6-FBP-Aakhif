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
