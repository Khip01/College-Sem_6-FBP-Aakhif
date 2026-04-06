# PRAKTIKUM 1 – Image Optimization

## A. Optimasi Gambar Lokal (Public Folder)

Sekarang saya ingin mengganti gambar notfound 404 di file `404.tsx` dengan menggunakan tag `<Image>` bawaan `next/image`
seperti berikut,

![tampilan kode setelah mengganti ke tag <Image>](image.png)

![tampilan halaman 404 notfound setelah diganti dengan tag <Image>](image-1.png)

## B. Optimasi Gambar Remote (External URL)

Setelah itu saya melakukan optimasi gambar dari eksternal, contohnya di halaman `/produk`, maka saya melakukan
modifikasi di file `/views/product/index.tsx` seperti berikut,

![tampilan halaman index dari produk](image-2.png)

Setelah itu dikarenakan gambar-gambarnya diambil dari url tertentu, maka konfigurasi nya berbeda di file
`next.config.js` nya seperti berikut,

![tampilan modifikasi file next.config.js](image-3.png)

![tampilan halaman /produk](image-4.png)

# PRAKTIKUM 2 – Font Optimization

## A. Menggunakan next/font

Lalu sekarang saya melakukan font optimization di sisi parent (yaitu via `Appshell`), sehingga seluruh font dari konten
akan berubah. Jadi saya akan memodifikasi file `/components/layouts/Appshell/index.tsx` seperti berikut,

![tampilan kode hasil modifikasi optimisasi font](image-5.png)

![tampilan halaman setelah perubahan font](image-6.png)
