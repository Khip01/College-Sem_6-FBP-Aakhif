# D. Langkah Praktikum

## 1. Routing Dasar (Static Routing)

Saya sudah menambahkan halaman about dengan cara menambahkan file `about.tsx` di folder `pages`

![halaman about dengan file about.tsx](image.png)

## 2. Routing Menggunakan Folder

Saya sudah membuat folder dengan file index.tsx didalamnya (yang berisi tampilan about yang sudah dipindah kedalam folder)

![halaman about didalam folder about](image-1.png)

![halaman about yang lebih rapi](image-2.png)

## 3. Nested Routing

### a. Membuat folder settings

Saya mencoba untuk membuat folder settingsdan mengisinya dengan file `user.tsx` dan `app.tsx`

![halaman app di folder setting](image-3.png)

![halaman user di folder setting](image-4.png)

Setelah itu saya modifikasi halaman user dengan cara memindahkan `user.tsx` kedalam folder baru bernama user, dan me-rename nya menjadi `index.tsx`

![folder user baru dengan file `index.ts` didalamnya](image-6.png)

Dan hasilnya menjadi seperti ini,

![halaman user didalam folder user](image-5.png)

### b. Nested Lebih Dalam

Lalu saya menambahkan folder baru bernama "password", lalu didalamnya ditambahkan file `index.tsx` seperti berikut,

![menambahkan folder password](image-7.png)

![halaman password didalam folder user](image-8.png)

## 4. Dynamic Routing

### a. Buat Halaman Produk

Saya membuat halaman produk baru,

![folder produk baru](image-9.png)

![halaman produk](image-10.png)

Lalu saya membuat file baru bernama `[id].tsx`,

![file id produk baru](image-11.png)

Lalu saya modifikasi kode nya dan mencoba memberikan segment sepatu

![segment sepatu ditambahkan di halaman produk](image-12.png)

Dan di console log hasilnya seperti berikut,

![console log produk dengan segmen sepatu](image-13.png)

Lalu saya memodifikasi `[id].tsx` agar dapat mengambil nilai dari id,

![kode hasil modifikasi [id].tsx](image-15.png)

![modifikasi [id].tsx agar dapat mengambil nilai id](image-14.png)

### b. Uji di Browser

Jadi saya mencoba memberikan parameter id: sepatu-baru

![halaman produk dengan parameter id sepatu-baru](image-16.png)

![halaman produk dengan parameter id baju](image-17.png)

## 5. Membuat Komponen Navbar

### a. Struktur Komponen

Saya membuat susunan folder baru didalam folder `src` menjadi seperti ini,

![struktur susunan folder komponen navbar](image-18.png)

lalu saya mencoba memodifikasi `index.tsx` yang berada didalam folder `components/layouts/navbar`

![modifikasi kode navbar](image-19.png)

Lalu saya melakukan modifikasi ke file `global.css`

![modifikasi global.css](image-20.png)

lalu saya memodifikasi `index.tsx` dalam folder `pages`

![modifikasi kode index.tsx](image-21.png)

Lalu saya cek browser saya dan mendapatkan hasil ini,

![halaman index, hasil navbar](image-22.png)

> Tetapi navbar hanya muncul di index page, tidak di page lainnya

Jadi saya melakukan modifikasi file `_app.tsx` dengan menamabhkan komponen Navbar yang sudah saya buat, dan menghapus komponen Navbar di file index.tsx, dan hasilnya seperti ini,

Di halaman index.tsx,

![halaman index.tsx awal](image-23.png)

Di halaman sepatu,

![halaman sepatu](image-24.png)

Di halaman app,

![halaman setting app](image-25.png)

Di halaman user,

![halaman user](image-26.png)
