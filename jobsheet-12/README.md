# C. Implementasi ISR Otomatis

## Bagian 1 – Tambahkan revalidate

Di bagian tampilan halaman rute `/produk/static` saya menambahkan kode relaidate seperti berikut,

![tampilan kode revalidate](assets/image.png)

Yang fungsinya untuk melakukan pengecekan cache setiap 10 detik.

## Bagian 2 – Pengujian ISR

Lalu setelah menambahkan kode revalidate tersebut, saya melakukan build SSG project nextjs ini seperti berikut,

![tampilan konsole dalam melakukan build](assets/image-1.png)

Setelah itu saya mengecek tampilan halaman statis nya, awalnya seperti berikut,

![tampilan halaman produk static](assets/image-2.png)

Lalu saya mencoba menambahkan data baru di database firebase seperti berikut,

![tampilan tambah document baru](assets/image-3.png)

Lalu saya coba lihat tampilannya di web, setelah dilakukan penambahan data tampilannya seperti berikut,

![tampilan halaman static setelah perubahan data di database](assets/image-4.png)

Terlihat jika data baru berhasil ditampilkan walaupun ini menggunakan Site Generation.

# D. On-Demand Revalidation

## Bagian 1 – Buat API Revalidate

Sekarang saya ingin membuat ISR manual dengan trigger, jadi ada sesuatu yang di trigger terlebih dahulu maka data di website akan diperbarui.Untuk langkah pertama ini saya coba membuat file baru di `pages/api/` bernama `revalidate.ts` seperti berikut,

![tampilan kode revalidate di api](assets/image-5.png)

Sehingga untuk melakukan revalidate/merefresh data produk di halaman static, kita bisa tinggal mengakses rute url `/api/revalidate`

> [!NOTE]
> UNtuk mengenguji nya, pastikan kita menjalankan `npm start` alih-alih menggunakan `npm run dev`

Misalnya jika kita hapus salah satu item produk seperti berikut (Nama Produk: Sepatu Adidas Merah),

![tampilan penghapusan salah satu document produk](assets/image-6.png)

Tampilan awalnya sebelum dilakukan revalidate adalah seperti ini,

![tampilan awal sebelum revalidate](assets/image-7.png)

Setelah itu saya akses endpoint `api/revalidate`

![tampilan akses endpoint revalidate](assets/image-8.png)

Sehingga pada saat halaman direfresh, produknya sudah hilang seperti berikut,

![tampilan produk adidas merah yang hilang](assets/image-9.png)

## Bagian 2 – Tambahkan Parameter Data

Setelah itu saya juga bisa menambahkan kondisi haklaman apa yang ingin di revalidate menggunakan query parameter, sehingga saya ubah kode nya menjadi seperti berikut,

![tampilan kode saya untuk melakukan pengecekan query parameter](assets/image-10.png)

Sehingga pada saat dicoba, hasilnya akan seperti berikut,

tampilan tanpa query data:

![tampilan tanpa query data](assets/image-11.png)

tampilan dengan query data:

![tampilan dengan query data](assets/image-12.png)

## Bagian 3 – Tambahkan Token Security

Sekarang saya ingin menambahkan token security di query parameter revalidate sebagai pengaman agar tidak sembarang user bsal melakukan revalidate. Pertama-tama saya memperbarui file `.env.local` dengan menambahkan variabel env baru bernama `REVALIDATE_TOKEN` seperti berikut,

![tampilan kode .env.local](assets/image-13.png)

Setelah itu saya modifikasi lagi file `revalidate.ts` dengan menambahkan pengkondisian token seperti berikut,

![tampilan kode pengkondisian dengan token](assets/image-14.png)

# E. Pengujian Manual Revalidation

Sekarang saya mencoba mengakses endpoint revalidate dengan menggunakan token yang benar,

![tampilan response revalidate dengan menggunakan token yang benar](assets/image-15.png)

sekarang dengan menggunakan token yang salah,

![tampilan response endpoint revalidate dengan menggunkaan token yang salah](assets/image-16.png)

# F. Perbandingan SSG vs ISR

| Aspek       | SSG               | ISR                 |
| ----------- | ----------------- | ------------------- |
| Update Data | Harus build ulang | Otomatis / Trigger  |
| Cache       | Static permanen   | Static + Refresh    |
| Cocok untuk | Konten tetap      | Konten semi-dinamis |

# G. Tugas Praktikum

Tugas Individu

### 1. Tambahkan lagi produk pada firebase

#### **Jawab**

Saya sudah melakukannya di praktikum sebelumnya, seperti berikut,

![tampilan tambah document baru](assets/image-3.png)

![tampilan halaman static setelah perubahan data di database](assets/image-4.png)

### 2. Implementasikan ISR dengan revalidate: 10.

#### **Jawab**

Saya sudah mengimplementasikannya sebelumnnya, seperti berikut,

![tampilan kode revalidate](assets/image.png)

### 3. Tambahkan endpoint On-Demand Revalidation.

#### **Jawab**

Seperti berikut adalah kode on demand revalidation yang ada di endpoint `/api/revalidate`

![tampilan kode revalidate di api](assets/image-5.png)

### 4. Tambahkan validasi token.

#### **Jawab**

Saya sudah mencoba untuk menambahkan validasi dengan menggunakan token,

![tampilan response revalidate dengan menggunakan token yang benar](assets/image-15.png)

### 5. Uji dengan:

    - Token benar
    - Token salah
    - Tanpa token

#### **Jawab**

sudah dan seperti ini hasilnya,

mengakses endpoint revalidate dengan menggunakan token yang benar,

![tampilan response revalidate dengan menggunakan token yang benar](assets/image-15.png)

sekarang dengan menggunakan token yang salah,

![tampilan response endpoint revalidate dengan menggunkaan token yang salah](assets/image-16.png)

akses revalidate endpoint tanpa menggunakan token,

![tampilan response endpoint revalidate tanpa menggunakan token](assets/image-17.png)

# H. Pertanyaan Analisis

### 1. Mengapa ISR lebih fleksibel dibanding SSG?

#### **Jawab**

Karena kemampuannya yang bisa melakukan update data, yang dimana bisa melalui update otomatis ataupun via trigger.

### 2. Apa perbedaan revalidate waktu dan on-demand?

#### **Jawab**

Jika **revalidate waktu** maka revalidate akan dilakukan di halaman tersebut pada rentang waktu yang ditentukan, sehingga website akan terus mengecek revalidate dengan jeda waktu yang ditentukan.

Jika on-demand, artinya revalidate akan dilakukan hanya ketika ada sesuatu yang mentrigger. Jika trigger tidak dijalankan maka data akan tetap alias tidak berubah (tidak dilakukan revalidate).

### 3. Mengapa endpoint revalidation harus diamankan?

#### **Jawab**

Agar tidak sembarang orang bisa melakukan revalidate, untuk menjaga event data revalidate hanya dilakukan di waktu-waktu/di trigger trigger tertentu.

### 4. Apa risiko jika token tidak digunakan?

#### **Jawab**

Maka orang lain yang mungkin sudah mengetahui endpoint trigger bisa melakukan trigger sesuka hati, sehingga bisa membebani request yang tidak perlu dilakukan ke cloud/server apabila dilakukan semena-mena.

### 5. Kapan ISR lebih cocok dibanding SSR?

#### **Jawab**

ISR lebih cocok digunakan pada saat data yang ditampilkan bisa berupa data/konten dinamis, bisa berubah kapan saja. SSR hanya digunakna ketika ingin membuat halaman statis tanpa perubahan data/konten didalam website.
