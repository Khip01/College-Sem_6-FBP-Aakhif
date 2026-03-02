# D. Langkah Kerja Praktikum

## Langkah 1 – Menjalankan Project

Saya mencoba menjalankan project sebelumnya,

![running localhost](image.png)

## Langkah 2 – Membuat API Produk

Saya membuat route api baru bernama `pages/api/produk`, dan hasilnya adalah seperti berikut,

![tampilan response get produk](image-1.png)

## Langkah 3 – Fetch Data API di Frontend

Lalu saya mencoba melakukan fetch data dari api ke halaman produk project nextjs ini, dan berikut adalah hasilnya,

![tampilan hasil fetching data produk](image-2.png)

# E. Integrasi Firebase

## Langkah 5 – Setup Firebase

Saya mencoba membuat project Firebase baru seperti berikut,

![project baru next js](image-3.png)

Dan saya juga sudah selesai membuat collection baru seperti berikut,

![tampilan collection firestore](image-4.png)

## Langkah 6 – Install Firebase

Lalu saya melakukan instalasi firebase di project nextjs saya dengan menggunakan `npm install firebase`, tujuannya agar saya bisa menghubungkan project nextjs saya dengan Backend Firebase,

![melakukan npm install firebase](image-5.png)

Dan saya juga sudah menambahkan firebase.ts ke dalam project saya di direktori `pages/utils/db/`

![tampilan file firebase.ts konfigurasi firebase](image-6.png)

## Langkah 7 – Konfigurasi Environment Variable

Lalu agar saya bisa dengan aman menyimpan isi konfigurasi firebase, saya membuat ile `.env.local` di root project nextjs saya,

![tampilan file baru .env.local](image-7.png)

## Langkah 8 – Konfigurasi Firebase

Lalu akhirnya setelah saya membuat file `.env.local` saya anggil variabel didalamnya untuk saya gunakan di file `/pages/utils/db/firebase.ts`, hasilnya seperti berikut,

![pemanggilan variabel .env.local](image-8.png)
