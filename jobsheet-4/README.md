# D. Langkah Praktikum

## Langkah 1 – Menjalankan Project

Saya menjalankan project di jobsheet 3 sebelumnya,

![running next.js project](image.png)

## Langkah 2 – Membuat Catch-All Route

Saya mencoba membuat rute baru bernama `...slug.tsx` sehingga pada saat saya akses seperti ini,

![mencoba mengakses url ...slug](image-1.png)

Dan hasilnya di `console.log()` seperti ini,

![hasil console.log catch all route](image-2.png)

Lalu saya memodifkasi file `...slug` untuk menampilkan nilai query nya dan hasilnya seperti berikut,

![hasil tampilan seluruh query](image-3.png)

## Langkah 3 – Pengujian Catch-All Route

Saya menguji rute dengan jumlah slug yang bervariasi,

![percobaan 1 slug](image-4.png)

![percobaan 2 slug](image-5.png)

![percobaan 3 slug](image-6.png)

Jadi karena hasil tampilannya kurang tepat, jadi saya memperbaiki file `...slug.tsx` saya,

![kode perbaikan file ...slug.tsx](image-7.png)

dan hasilnya menjadi seperti berikut,

![hasil tampilan item setelah perbaikan](image-8.png)

Tetapi untuk sementara saya menggunakan kode ini saja untuk menampilkan item,

![kode yang dipaka (kode sebelumnya)](image-9.png)
