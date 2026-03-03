# C. Langkah Praktikum

Saya sudah memnyesuaikan isi field database firestore saya menjadi seperti berikut,

![penyesuaian isi field dan document dari firestore database](image.png)

## Bagian 1 – Setup Data Produk

Saya sudah membuat file baru dengan nama `product.tsx` di direktori `pages/api/` yang memberikan response berupa:

- id
- name
- category
- price
- image

Dan hasilnya adalah seperti berikut,

![get products api](image-1.png)

## Bagian 2 – Implementasi CSR dengan useEffect

Saya membuat file baru bernama `index.tsx` di direktori `pages/views/product/` untuk tampilan halaman product yang baru seperti berikut,

![membuat tampilan product di folder pages/views/product/](image-2.png)

Lalu saya gunakan dan saya panggil views `product` yang saya buat di halaman produk, direktori `pages/produk/index.tsx`,

![tampilan kode produk yang sudah dimodifikasi](image-3.png)

Dan berikut adalah hasilnya,

![tampilan halaman produk](image-4.png)

Lalu saya mencoba untuk melakukan styling menggunakan scss dengan cara membuat modul scss baru di direktori `pages/views/products/` bernama `product.module.scss`

![tampilan kode views product](image-5.png)

![tampilan halaman produk](image-6.png)

## Bagian 3 – Implementasi Skeleton Loading

Saya mencoba menambahkan kode untuk menampilkan skeleton loading, dengan memodifikasi file `index.tsx` dan `product.module.scss` dari direktori `pages/views/product/` dan hasilnya adalah seperti berikut,

![tampilan skeleton dari halaman produk](image-7.png)

Karena disitu hanya skeletonnya saja yang ditampilkan, jadi sekarang saya memperbaiki lagi kode nya agar skeletonnya ditampilkan pada saat loading saja, dan hasilnya seperti ini,

![tampilan skeleton beserta dengan produknya](Screencast_20260303_161215.gif)

## Bagian 5 – Implementasi SWR

Saya melakukan install SWR (Stale-While-Revalidate) melewati terminal seperti berikut,

![tampilan terminal instalasi SWR](image-8.png)

Lalu saya mengimplementasikan SWR di kode index.tsx dari direktori `pages/product/` saya seperti berikut,

![tampilan kode menggunakan swr di pages/produk/index.tsx](image-9.png)

Lalu saya mencoba merapihkan pemanggilan swr dengan meletakkan fungsi `fetcher` di folder `pages/utils/swr/` seperti berikut,

![tampilan kode fetcher yang terpisah agar rapi](image-10.png)

Jadi perbandingan antara useEffect manual dengan SWR adalah,

Menurut saya, selain karena dari struktur kode, handling error, state isLoading, dan response `data` nya lebih rapi menggunakan SWR (Stale While Revalidate), walaupun sedikit tidak terlihat, tapi library SWR mempunyai kemampuan untuk melakukan caching pada saat melakukan request data, tidak seperti useEffect yang dimana setiap kali `fetch()` dipanggil akan melakukan fetch data dari endpoint tersebut dari nol.

# D. Tugas Praktikum

## Tugas Individu

### 1. Jelaskan perbedaan:

- Client Side Rendering
- Server Side Rendering
- Static Site Generation

#### **Jawab**

Beberapa yang disebutkan itu adalah teknik website dalam memuat konten nya sebelum disajikan ke pengguna.

Jika server-side rendering, teknik server-side ini akan melakukan render di sisi server, jadi kontennya akan siap setelah semuanya sudah di render di sisi server.

Jika client-side rendering, itu menggunakan teknik rendering di sisi client/pengguna nya, jadi dia akan memberikan halaman/konten kosong, dan akan di muat seiring pada saat pengguna mengaksesnya.

Jika static-site generation ini adalah teknik yang dimana seluruh konten dari website itu digenerate secara keseluruhan pada saat project web di build/release/deploy, jadi semua kontennya pada saat sampai ke pengguna akan statis (sama saja tidak berubah ubah), sehingga pada saat ada update harus mendeploy ulang.

### 2. Buat halaman produk dengan:

- Skeleton loading
- Animasi

Sudah, dan berikut adalah hasilnya,

![skeleton loading beserta kontennya](Screencast_20260303_161215.gif)

#### **Jawab**

### 3. Refactor kode dari useEffect menjadi SWR.

#### **Jawab**

Saya sudah melakukan refactor kode dari penggunaan useEffect menjadi SWR, kode nya seperti berikut,

![refactor kode menggunakan swr di pages/produk/index.tsx](image-9.png)
