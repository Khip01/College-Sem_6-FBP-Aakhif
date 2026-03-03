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
