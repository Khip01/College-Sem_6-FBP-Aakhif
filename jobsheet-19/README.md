# PRAKTIKUM 1 – Setup Jest di Next.js

Pertama-tama saya menginstall library seperti berikut untuk melakukan testing,

```bash
npm install jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom --save-dev --force
```

![tampilan konsole instalasi npm](image.png)

Lalu saya membuat file konfigurasi baru bernama `jest.config.mjs` untuk melakukan testing,

![tampilan config jest .mjs](image-1.png)

Lalu saya menambahkan test coverage nya di `package.json` bagian `scripts`,

![tampilan kode package.json](image-2.png)

# PRAKTIKUM 2 – Struktur Folder Testing

Lalu saya membuat folder bernama `__test__` didalam direktori `src/` seperti berikut,

![tampilan folder baru bernama __test__](image-3.png)

# PRAKTIKUM 3 – Testing Halaman About

Lalu saya mencoba membuat file testing didalam direktori `src/__test__/pages/about.spec.tsx` seperti berikut,

> [!IMPORTANT]
> Karena saya sempat mendapatkan error mengenai type definition dari fungsi milik `jest` seperti berikut, \
> ![tampilan error type definition jest](image-4.png)
>
> Saya menyelesaikannya dengan cara menginstall package `@types/jest` \
> ![tampilan konsole instalasi types/jest](image-5.png)
>
> Sehingga tampilannya sudah tidak error seperti berikut, \
> ![tampilan kode setelah instalasi library types/jest](image-6.png)

Setelah itu saya coba menjalankan testing dengan menggunakan `npm run test` di konsole/terminal saya seperti berikut,

![tampilan konsole hasil testing](image-7.png)

# PRAKTIKUM 4 – Coverage Report

Setelah itu saya mencoba untuk menjalankan test coverage dengan menggunakan perintah `npm run test:coverage` seperti
berikut,

![tampilan hasil test:coverage konsole](image-8.png)

Dan hasil nya saya mendapatkan folder baru bernama `coverage` dan isinya adalah sebagai berikut,

![tampilan direktori `coverage` dan isinya](image-9.png)

Dan tampilan report versi webnya adalah seperti berikut,

![tampilan hasil report versi web](image-10.png)

# PRAKTIKUM 5 – Konfigurasi Coverage Lengkap

Lalu saya melakukan modifikasi kode di `jest.config.mjs` untuk melakukan test coverage ke seluruh isi dari direktori
`/<rootDir>/src/` seperti berikut,

![tampilan modifikasi kode config .mjs](image-11.png)

Dan setelah itu saya jalankan `npm run test:coverage` lagi di konsole/terminal saya dan hasilnya seperti berikut,

![tampilan hasil run coverage pt1](image-12.png)
![tampilan hasil run coverage pt2](image-13.png)

Untuk tampilan dari `index.html` nya adalah seperti berikut,

![tampilan report test coverage versi web](image-14.png)

# PRAKTIKUM 6 – Testing dengan getByTestId

Saya mencoba untuk menambahkan atribut `data-testid` pada kode html `about/index.tsx` seperti berikut,

![tampilan modifikasi kode html penambahan atribut data-testid](image-15.png)

Lalu saya update kode testing `about.spec.tsx` nya untuk melakukan test atribut `data-testid` seperti berikut,

![tampilan kode testing setelah modifikasi](image-16.png)

Setelah itu saya run kembali `test:coverage` nya seperti berikut,

![tampilan hasil test:coverage berhasil](image-17.png)

Coba misal saya salahkan expected value nya menjadi seperti berikut,

![tampilan modifikasi kode testing jika disalahkan](image-18.png)

Lalu saya coba jalankan lagi `test:coverage` nya,

![tampilan error testing](image-19.png)

![tampilan error testing](image-20.png)

Terlihat jika hasil testing nya ada yang gagal/tidak sesuai ekspektasi.

# PRAKTIKUM 7 – Testing Page dengan Router (Mocking)

Lalu saya mencoba untuk melakukan testing halaman produk,

![tampilan direktori testing](image-21.png)

![tampilan kode testing untuk halaman produk](image-22.png)

Tapi hasilnya error karena undefined data,

![tampilan error data undefined](image-23.png)

# PRAKTIKUM 8 – Menangani Undefined Data

Untuk menyelesaikan masalah error **undefined data** tersebut, saya melakukan beberapa modifikasi seperti berikut,

> **kode `/pages/produk/index.tsx`**
> ![tampilan perubahan kode](image-24.png)

> **kode `/views/product/index.tsx`**
> ![tampilan perubahan kode di views/product/index.tsx](image-25.png)

> **kode `about.spec.tsx` dan `product.spec.tsx`**
> ![tampilan komentar pada masing masing kode testing](image-26.png)

Setelah itu saya coba jalankan lagi untuk `test:coverage` nya, dan hasilnya adalah seperti berikut,

![tampilan report test:coverage pt1](image-27.png)
![tampilan report test:coverage pt2](image-28.png)

![tampilan report test:coverage versi web](image-29.png)
