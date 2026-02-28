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
