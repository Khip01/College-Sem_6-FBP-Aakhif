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
