# PRAKTIKUM 1 – Setup Jest di Next.js

Pertama-tama saya menginstall library seperti berikut untuk melakukan testing,

```bash
npm install jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom --save-dev --force
```

![tampilan konsole instalasi npm](assets/image.png)

Lalu saya membuat file konfigurasi baru bernama `jest.config.mjs` untuk melakukan testing,

![tampilan config jest .mjs](assets/image-1.png)

Lalu saya menambahkan test coverage nya di `package.json` bagian `scripts`,

![tampilan kode package.json](assets/image-2.png)

# PRAKTIKUM 2 – Struktur Folder Testing

Lalu saya membuat folder bernama `__test__` didalam direktori `src/` seperti berikut,

![tampilan folder baru bernama __test__](assets/image-3.png)

# PRAKTIKUM 3 – Testing Halaman About

Lalu saya mencoba membuat file testing didalam direktori `src/__test__/pages/about.spec.tsx` seperti berikut,

> [!IMPORTANT]
> Karena saya sempat mendapatkan error mengenai type definition dari fungsi milik `jest` seperti berikut, \
> ![tampilan error type definition jest](assets/image-4.png)
>
> Saya menyelesaikannya dengan cara menginstall package `@types/jest` \
> ![tampilan konsole instalasi types/jest](assets/image-5.png)
>
> Sehingga tampilannya sudah tidak error seperti berikut, \
> ![tampilan kode setelah instalasi library types/jest](assets/image-6.png)

Setelah itu saya coba menjalankan testing dengan menggunakan `npm run test` di konsole/terminal saya seperti berikut,

![tampilan konsole hasil testing](assets/image-7.png)

# PRAKTIKUM 4 – Coverage Report

Setelah itu saya mencoba untuk menjalankan test coverage dengan menggunakan perintah `npm run test:coverage` seperti
berikut,

![tampilan hasil test:coverage konsole](assets/image-8.png)

Dan hasil nya saya mendapatkan folder baru bernama `coverage` dan isinya adalah sebagai berikut,

![tampilan direktori `coverage` dan isinya](assets/image-9.png)

Dan tampilan report versi webnya adalah seperti berikut,

![tampilan hasil report versi web](assets/image-10.png)

# PRAKTIKUM 5 – Konfigurasi Coverage Lengkap

Lalu saya melakukan modifikasi kode di `jest.config.mjs` untuk melakukan test coverage ke seluruh isi dari direktori
`/<rootDir>/src/` seperti berikut,

![tampilan modifikasi kode config .mjs](assets/image-11.png)

Dan setelah itu saya jalankan `npm run test:coverage` lagi di konsole/terminal saya dan hasilnya seperti berikut,

![tampilan hasil run coverage pt1](assets/image-12.png)
![tampilan hasil run coverage pt2](assets/image-13.png)

Untuk tampilan dari `index.html` nya adalah seperti berikut,

![tampilan report test coverage versi web](assets/image-14.png)

# PRAKTIKUM 6 – Testing dengan getByTestId

Saya mencoba untuk menambahkan atribut `data-testid` pada kode html `about/index.tsx` seperti berikut,

![tampilan modifikasi kode html penambahan atribut data-testid](assets/image-15.png)

Lalu saya update kode testing `about.spec.tsx` nya untuk melakukan test atribut `data-testid` seperti berikut,

![tampilan kode testing setelah modifikasi](assets/image-16.png)

Setelah itu saya run kembali `test:coverage` nya seperti berikut,

![tampilan hasil test:coverage berhasil](assets/image-17.png)

Coba misal saya salahkan expected value nya menjadi seperti berikut,

![tampilan modifikasi kode testing jika disalahkan](assets/image-18.png)

Lalu saya coba jalankan lagi `test:coverage` nya,

![tampilan error testing](assets/image-19.png)

![tampilan error testing](assets/image-20.png)

Terlihat jika hasil testing nya ada yang gagal/tidak sesuai ekspektasi.

# PRAKTIKUM 7 – Testing Page dengan Router (Mocking)

Lalu saya mencoba untuk melakukan testing halaman produk,

![tampilan direktori testing](assets/image-21.png)

![tampilan kode testing untuk halaman produk](assets/image-22.png)

Tapi hasilnya error karena undefined data,

![tampilan error data undefined](assets/image-23.png)

# PRAKTIKUM 8 – Menangani Undefined Data

Untuk menyelesaikan masalah error **undefined data** tersebut, saya melakukan beberapa modifikasi seperti berikut,

> **kode `/pages/produk/index.tsx`**
> ![tampilan perubahan kode](assets/image-24.png)

> **kode `/views/product/index.tsx`**
> ![tampilan perubahan kode di views/product/index.tsx](assets/image-25.png)

> **kode `about.spec.tsx` dan `product.spec.tsx`**
> ![tampilan komentar pada masing masing kode testing](assets/image-26.png)

Setelah itu saya coba jalankan lagi untuk `test:coverage` nya, dan hasilnya adalah seperti berikut,

![tampilan report test:coverage pt1](assets/image-27.png)
![tampilan report test:coverage pt2](assets/image-28.png)

![tampilan report test:coverage versi web](assets/image-29.png)

# Tugas Praktikum

### 1. Buat unit test untuk:

    - Halaman Product
    - 1 Komponen

#### **Jawab**

Saya sudah membuat unit test di halaman produk seperti berikut,

![tampilan kode testing untuk halaman produk](assets/image-22.png)

![tampilan report test:coverage pt1](assets/image-27.png)
![tampilan report test:coverage pt2](assets/image-28.png)

![tampilan report test:coverage versi web](assets/image-29.png)

### 2. Gunakan minimal:

    - 1 Snapshot test
    - 1 toBe()
    - 1 getByTestId()

#### **Jawab**

Saya sudah mencoba untuk menggunakan beberapa test tersebut seperti ini,

![tampilan modifikasi kode html penambahan atribut data-testid](assets/image-15.png)

![tampilan modifikasi kode testing jika disalahkan](assets/image-18.png)

![tampilan error testing](assets/image-19.png)

![tampilan error testing](assets/image-20.png)

### 3. Buat coverage minimal 50%

#### **Jawab**

Untuk itu saya sudah mencoba melakukan test coverage pada beberapa tampilan berikut saja,

- login
- register
- navbar
- produk
- produk/id
- appshell

![tampilan file testing](assets/image-30.png)

Dan hasilnya adalah seperti berikut,

![tampilan konsole hasil testing report](assets/image-31.png)

![tampilan hasil testing report tampilan web](assets/image-32.png)

### 4. Lakukan mocking untuk router

#### **Jawab**

Saya sudah mencoba untuk mocking `next/router` seperti berikut,

![tampilan kode mocking router](assets/image-33.png)

![tampilan test case pengunaan mocking router](assets/image-34.png)

### 5. Dokumentasikan hasil coverage

#### **Jawab**

Hasil akhir test:coverage adalah seperti berikut,

![tampilan hasil akhir test:coverage](assets/image-35.png) \
![tampilan hasil akhir test:coverage](assets/image-36.png) \
![tampilan hasil akhir test:coverage](assets/image-37.png)

![tampilan hasil akhir test:coverage web](assets/image-38.png)

# Diskusi & Refleksi

### 1. Mengapa unit testing penting sebelum production?

#### **Jawab**

Karena bisa membantu untuk membuat hasil perubahan dari tahap development menjadi tetap konsisten dan dapat
dipantau/tracking apabila ada kesalahan/perbedaan yang terjadi setelah tahap development perangkat lunak dilakukan.

### 2. Mengapa branch coverage sulit mencapai 100%?

#### **Jawab**

Jika logika, proses yang dilakukan oleh program yang akan di test terlalu dalam, maka bisa saja kita sulit untuk
mengcover seluruh kemungkinan yang ada sehingga bisa saja mengakibatkan kemungkinan testing terlompati.

Misal dalam kasus nullable data yang terus beruntun, pengkondisian yang mendalam, callback function didalam sebuah
proses, dan sejenisnya yang memiliki kemungkinan yang banyak dan bercabang.

### 3. Apa itu mocking?

#### **Jawab**

Jika dari sudut pandang saya, mocking adalah sebuah pemberian data palsu/data uji pada saat melakukan testing di sebuah
test case. Sehingga pada saat test case dijalankan, data yang digunakan untuk menguji hanyalah data buatan yang dibuat
seolah-olah data tersebut data asli.

### 4. Kapan snapshot test digunakan?

#### **Jawab**

Snapshot Test ini digunakan ketika tampilannya sudah dianggap konsisten, jadi snapshot test ini akan digunakan sebagai
patokan tampilan/proses/fungsi halaman yang sudah stabil.

### 5. Apakah semua file harus dites?

#### **Jawab**

Menurut saya tidak semua, mungkin paling saya rekomendasikan adalah tes halaman-halaman dengan data dinamis, halaman
dengan adanya beberapa hasil kemungkinan yang berbeda, halaman dengan masukan yang bermacam-macam, intinya halaman
dengan isi data/masukan yang bisa berubah-ubah.

Jadi saya pribadi kurang merekomendasikan untuk tes halaman yang tampilannya berupa tampilan statis tanpa ada perubahan
sedikitpun baik dalam tahap pengembangan ataupun tahap deployment.