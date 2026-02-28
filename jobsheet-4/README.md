# D. Langkah Praktikum

## Langkah 1 – Menjalankan Project

Saya menjalankan project di jobsheet 3 sebelumnya,

![running next.js project](assets/image.png)

## Langkah 2 – Membuat Catch-All Route

Saya mencoba membuat rute baru bernama `...slug.tsx` sehingga pada saat saya akses seperti ini,

![mencoba mengakses url ...slug](assets/image-1.png)

Dan hasilnya di `console.log()` seperti ini,

![hasil console.log catch all route](assets/image-2.png)

Lalu saya memodifkasi file `...slug` untuk menampilkan nilai query nya dan hasilnya seperti berikut,

![hasil tampilan seluruh query](assets/image-3.png)

## Langkah 3 – Pengujian Catch-All Route

Saya menguji rute dengan jumlah slug yang bervariasi,

![percobaan 1 slug](assets/image-4.png)

![percobaan 2 slug](assets/image-5.png)

![percobaan 3 slug](assets/image-6.png)

Jadi karena hasil tampilannya kurang tepat, jadi saya memperbaiki file `...slug.tsx` saya,

![kode perbaikan file ...slug.tsx](assets/image-7.png)

dan hasilnya menjadi seperti berikut,

![hasil tampilan item setelah perbaikan](assets/image-8.png)

Tetapi untuk sementara saya menggunakan kode ini saja untuk menampilkan item,

![kode yang dipaka (kode sebelumnya)](assets/image-9.png)

## Langkah 4 – Optional Catch-All Route

Ketika saya mencoba mengakses rute `http://localhost:3000/shop` saya mendapatkan halaman notfound next.js

![notfound karena tidak ada slug yg diberikan](assets/image-10.png)

sehingga agar rute parameter slug berupa opsional, saya memberikan kurung siku tambahan seperti berikut,

![menamabhkan kurung siku tambahan di file bernama ...slug](assets/image-11.png)

Sehingga pada saat saya coba akses rutenya, hasilnya menampilkan seperti berikut

![hasil undefined karena nilai dari array tidak ada](assets/image-12.png)

## Langkah 5 – Validasi Parameter

Saya mencoba untuk menambahkan validasi agar tidak error saat slug kosong,

![validasi slug kosong](assets/image-13.png)

![tampilan jika slug kosong](assets/image-14.png)

## Langkah 6 – Membuat Halaman Login & Register

Saya membuat folder `pages/auth`, setelah itu didalamnya ada file login.tsx dan register.tsx,

![folder pages/auth](assets/image-15.png)

## Langkah 7 – Navigasi Imperatif (router.push)

Lalu saya menambahkan tombol Login didalam halaman login seperti berikut

![menambahkan button di halaman login](assets/image-16.png)

Dan hasilnya seperti ini,

![mencoba menekan tombol login](assets/Screencast_20260224_163432.gif)

## Langkah 8 – Simulasi Redirect (Belum Login)

Di halaman product (`index.tsx`), saya menamabhkan kode berikut untuk melakukan redirect,

![kode tambahan untuk melakukan redirect](assets/image-17.png)

Dan hasilnya pada saat saya coba mengakses rute `/product` adalah seperti ini,

![mencoba untuk login setelah kode redirect diberikan](assets/Screencast_20260224_164240.gif)

Tapi sayangnya kalo kita lihat disitu tombol login seperti tidak berfungsi, karena pada saat push() ke halaman `/produk`, di halaman product dia malah di redirect kembali ke halaman login. Mengapa? ya karena state dari variabel `isLogin` itu selalu `false`.

Maka dari itu tombol login ini terlihat seperti tidak melakukan apapun.

Jadi saya modifikasi kode nya agar state dari variabel `isLogin` itu berubah menjadi true.

Dan hasilnya adalah seperti berikut,

![fix login redirect](assets/Screencast_20260224_171922.gif)

Jadi disini yang saya tangkap adalah, kita berusaha menentukan redirect/tidaknya dari state variabel `isLogin`, di kode tombol logout ini di halaman produk,

![halaman index.tsx produk](assets/image-18.png)

disitu di fungsi `handlerLogout` saya hanya memanggil fungsi seIsLogin untuk mengubah state `isLogin` menjadi false, sehingga saya tidak perlu melakukan push ke halaman login (karena sudah ada redirect yang mengecek apakah state variabel `isLogin` adalah false) di sebelah sini,

![useEffect mendengarkan perubahan variabel isLogin](assets/image-19.png)

# E. Tugas Praktikum

## Tugas 1 (Wajib)

Saya sudah mencoba membuat catch-all route `/category/[...slug].tsx`, dan menampilkan seluruh parameternya sebagai list. Dan hasilnya adalah seperti berikut,

![catch-all route](assets/image-20.png)

## Tugas 2 (Wajib)

Saya sudah memodifikasi file `login.tsx` dan `register.tsx` agar bisa berpindah pindah dengan tag `<Link>`, dan juga saya bisa berpindah ke halaman `produk` dengan tombol login, berikut adalah hasilnya,

![tampilan berhasil melakukan perpindahan halaman sesuai dengan fungsinya](assets/Screencast_20260224_175459.gif)

## Tugas 3 (Pengayaan)

Saya juga sudah menerapkan ogiredirect jika user belum login, hasilnya adalah seperti berikut,

![berhasil menerapan redirect di halaman produk](assets/Screencast_20260224_175813.gif)

# F. Pertanyaan Evaluasi

### 1. Apa perbedaan [id].js dan [...slug].js?

#### **Jawab**

Jadi perbedaan nya yaitu, jika `[id].tsx` hanya bisa mengambil satu parameter dari rute, tetapi jika `[...slug].tsx` bisa mengambil banyak parameter dari rute.

### 2. Mengapa slug berbentuk array?

#### **Jawab**

Sebenarnya penamaan slug sendiri digunakan agar bertujuan untuk human readable, dan `slug` yang kita gunakan di praktikum selama ini dibuat bertujuan agar kita bisa mengirim multiple/lebih dari satu parameter didalam rute.

### 3. Kapan sebaiknya menggunakan Link dan router.push()?

#### **Jawab**

Kita menggunakan tag `<Link>` pada saat kita hendak berpindah halaman instan (untuk mengedepankan UX), karena karakternya sendiri yang tidak melakukan reload halaman.

Sedangkan `router.push()` digunakan pada saat kita sedang melakukan pemrosesan data didalam fungsi, seperti submit form, redirect user, dan sejenisnya.

### 4. Mengapa navigasi Next.js tidak me-refresh halaman?

#### **Jawab**

Tergantung, sebenarnya jika kita menggunakan router.push() halaman akan me-refresh. Jika kita menggunakan tag `<Link>` maka kita tidak melakukan refresh/reload halaman.

Karena karakter dari Next.js sendiri yang berupa Client Side rendering dan data sudah di `_prefetch_` sebelum user melakukan pergantian halaman. Seperti pada dokumentasi Next.js berikut:

> [!TIP]
> Prefetching is the process of loading a route in the background before the user navigates to it. This makes navigation between routes in your application feel instant, because by the time a user clicks on a link, the data to render the next route is already available client side.
