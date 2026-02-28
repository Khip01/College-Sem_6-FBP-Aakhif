# D. Langkah Praktikum

## 1. Global CSS

### a. File Global

Saya mempunyai file CSS global ini,

![globals css](image.png)

### b. Import Global CSS

Lalu saya juga mempunyai isi file `_app.tsx` yang sudah ada import `"@/styles/globals.css"` seperti berikut,

![globals css import](image-1.png)

## 2. CSS Module (Local Scope)

### a. Struktur Komponen Navbar

Saya mempunyai stuktur komponen navbar seperti ini,

![file navbar module css baru](image-2.png)

Lalu terlihat juga di gambar diatas jika saya juga sudah memindahkan style navbar dari global ke file baru `navbar.module.css`

### b. Pemanggilan di Komponen

Lalu saya memodifikasi kode `index.tsx` di folder navbar,

![isi modifikasi index.tsx](image-3.png)

![tampilan nya](image-4.png)

## 3. Styling untuk Pages (CSS Module)

### a. Contoh Login Page

Lalu saya mencoba menambahkan `login.module.css` (styling untuk halaman login) di folder auth,

![kode di file login.module.css baru dan penerapannya](image-5.png)

Terlihat juga saya sudah menerapkannya di kode `login.tsx`, dan hasilnya adalah seperti berikut,

![tampilan halaman login](image-6.png)

## 4. Conditional Rendering Navbar (Tanpa Navbar di Login)

Saya memodifikasi file `index.tsx` pada folder `AppShell` seperti berikut,

![modifikasi kode index.tsx](image-7.png)

Sehingga hasilnya halaman loginnya tidak ada navbar nya,

![tampilan halaman login setelah index.tsx di AppShell di perbarui](image-8.png)

## 5. Refactoring Struktur Project (Best Practice)

Lalu saya mencoba merapihkan struktur loginmenjadi seperti berikut,

![struktur views baru untuk auth](image-9.png)

Setelah itu saya mencoba menambahkan kode didalam `/views/auth/login/index.tsx`, dan memindahkan login.module.css ke dalam folder `views/auth/login/` dan hasilnya seperti berikut,

![hasil refactor kode views login baru yang lebih bersih](image-10.png)

Tampilannya sama saja seperti sebelumnya, karena kita hanya merubah/memodifikasi struktur file dan direktori nya saja,

![tampilan halaman login masih tetap](image-11.png)

## 6. Inline Styling (CSS-in-JS)

Saya melakukan inline styling di halaman login (views `index.tsx`) seperti berikut,

![kode modifikasi login menggunakan inline style](image-12.png)

![tampilan setelah modifikasi halaman login menggunakan inline style](image-13.png)

## 7. Kombinasi Global CSS + CSS Module

Saya mencoba menggabungkan styling module.css dengan styling global, seperti berikut (di tampilan navbar),

![gabungan styling global.css dan module.css untuk navbar](image-14.png)

dan hasilnya adalah seperti berikut (ukuran font dari navbarnya saya kecilkan),

![tampilan navbar menggunakan gabungan style](image-15.png)

## 8. SCSS (SASS)

### a. Install SASS

Saya menjalankan command berikut di project ini,

![install sass di konsole](image-16.png)

![muncul package baru di package.json](image-17.png)

### b. Global Variable

Saya mencoba menambahkan colors.scss pada folder styles

![menambahkan colors.scss](image-18.png)

### c. Gunakan di Module

Saya mencoba menambahkan style scss baru di views login, dan menggantikan style css biasa menggunakan scss, dan seperti berikut adalah kodenya,

![perubahan kode dari css biasa menjadi menggunakan scss](image-19.png)

Lalu berikut adalah tampilannya,

![tampilan halaman login sesudah menggunakan scss](image-20.png)

## 9. Tailwind CSS

### a. Install

Saya mencoba menginstall tailwind, dan package lainnya di project ini dengan command seperti berikut,

![install beberapa package termasuk tailwindcss](image-21.png)

Lalu saya init package tailwind nya,

![melakukan init tailwindcss nya](image-22.png)

### b. Konfigurasi tailwind.config.js

Lalu saya melakukan konfigurasi tailwind.config.js

![kode konfigurasi tailwind.config.js](image-23.png)

### c. Import di Global CSS

![kode import di global css](image-24.png)

### d. Contoh Penggunaan

Lalu saya mencoba mengimplementasikan tailwind tadi ke halaman login di bagian tag <h1> nya,

![kode perubahan style dari tag h1 dengan tailwind](image-25.png)

Dan berikut adalah tampilannya,

![tampilan tag h1 setelah menerapkan style tailwind](image-26.png)

# E. Tugas Praktikum

## Tugas 1

- Buat halaman Register
- Gunakan CSS Module

Karena sebelumnya halaman register masih berupa polosan seperti ini,

![halaman register polosan (sebelum)](image-27.png)

saya mencoba melaukan styling halaman register dengan menggunakan `module.css`, dan berikut adalah hasilnya,

![kode akhir halaman register](image-28.png)

Lalu tampilannya adalah sebagai berikut,

![tampilan akhir halaman register](image-29.png)


## Tugas 2

- Refactor halaman Produk ke folder views
- Pisahkan Hero Section dan Main Section

Jadi sebelumnya halaman produk itu tampilannya masih berada di route `pages/produk`, sekarang saya akan merapihkan tampilannya kedalam `pages/views/produk/`, dan berikut adalah hasilnya,

Berikut adalah halaman utama produk (rute `/produk/`),

![kode rute /produk/](image-30.png)

![tampilan rute /produk/](image-33.png)

Lalu berikut adalah rute `/produk/:id/`,

![kode rute /produk/:id/](image-31.png)

![tampilan rute /produk/:id/](image-32.png)

## Tugas 3

Jadi saya ingin membuat folder baru bernama `utility`, didalam folder `components` seperti berikut,

![folder baru bernama utility](image-34.png)

Setelah itu saya menambahkan 5 utility components seperti berikut,

![5 file components utility menggunakan tailwindcss](image-35.png)

- `body-text.tsx`
- `footer.tsx`
- `primary-button.tsx`
- `text-field.tsx`
- `title-text.tsx`

Dan berikut adalah sedikit isi kodenya,

![kode dari masing masing komponen](image-36.png)

# F. Pertanyaan Refleksi

### 1. Kapan sebaiknya menggunakan CSS Module dibanding Global CSS?

#### **Jawab**

Saat kita ingin melakukan styling untuk satu component/satu halaman/satu file saja, yang dimana tidak digunakan/dipanggil dalam seluruh basis kode.

### 2. Apa kelemahan inline styling?

#### **Jawab**

Kita tidak bisa memanggil style nya berulang ulang untuk digunakan di komponen lain, karena stylingnya hanya untuk tag yang bersangkutan saja.

### 3. Mengapa SCSS cocok untuk project skala besar?

#### **Jawab**

Karena kemampuannya yang bisa melakukan import lebih rapi dan performance, susunan kode styling yang lebih rapi dalam kemampuan nesting style, bisa menerapkan reusable logic seperti variable dan mixin.

### 4. Apa keunggulan Tailwind dibanding CSS tradisional?

#### **Jawab**

Mudah untuk diimplementasikan langsung ke dalam tag yang bersangkutan tanpa perlu menuliskan banyak kode styling terpisah diluar tag, ada beberapa style css yang sudah dibungkus oleh tailwind sehingga terlihat lebih praktis, tidak boros file/boros kode karena harus menuliskan kode css tersendiri.

