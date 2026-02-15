# D. Langkah Kerja Praktikum

## Langkah 1 – Pengecekan Lingkungan

Dikarenakan saya belum menginstall node dan npm

![node and npm not found](assets/image.png)

Jadi saya mencoba untuk menginstall nya terlebih dahulu,

![nvm installation](assets/image-1.png)

![nvm version](assets/image-2.png)

![installing npm version 24](assets/image-3.png)

![git version](assets/image-4.png)

## Langkah 2 – Membuat Project Next.js

Saya sudah memuat project baru dengan menggunakan npx (node package execute),

![creating nextjs project](assets/image-5.png)

## Langkah 3 – Menjalankan Server Development

Saya menjalankan `npm run dev` dan hasilnya seperti ini,

![npm run dev command](assets/image-6.png)

![website serve](assets/image-7.png)

## Langkah 4 – Mengenal Struktur Folder

Saya sudah memahami sedikit struktur folder dari nextjs ini, dan saya sedikit bermain-main dengan kode di index.tsx, \
Before:

![before edit](assets/image-8.png)

After:

![after edit](assets/image-9.png)

## Langkah 5 – Modifikasi Halaman Utama

Saya mengubah lagi halaman utama nextjs menjadi seperti ini,

![modif code](assets/image-10.png)

dan hasilnya adalah seperti ini,

![display result](assets/image-11.png)

## Langkah 6 – Modifikasi API

Saya awalnya memiliki api dengan hasil seperti ini,

![api basic](assets/image-12.png)

Lalu saya mengubah kodenya menjadi seperti ini,

![modif api code](assets/image-13.png)

dan hasilnya seperti ini,

![modif api response](assets/image-14.png)

## Langkah 7 – Modifikasi Background

Saya sudah mengubah background nya jadi putih (itu karena kita tidak menggunakan style css bawaan dari nextjs, import style nya kita nonaktifkan), dan hasilnya adalah seperti berikut,

![disable style.css import- display](assets/image-15.png)

# E. Tugas Praktikum

## Tugas 1 (Wajib)

- Buat halaman baru about.js di folder pages.
- Tampilkan:
  - Nama Mahasiswa
  - NIM
  - Program Studi

### **Jawab**

Saya sudah membuat halaman baru di file about.js, dan inilah hasilnya,

![about screen display](assets/image-16.png)

## Tugas 2 (Pengayaan)

- Tambahkan minimal 1 link navigasi dari halaman utama ke halaman about.

### **Jawab**

Saya sudah menambahkan link navigasi (dengan menggunakan tag `<Link>`) dari halaman beranda ke halaman about, seperti ini lah hasilnya,

![navigation with spa gif](assets/gif-1.gif)
