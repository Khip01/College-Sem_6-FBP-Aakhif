# C. Langkah Praktikum

## Bagian 1 – Membuat Dynamic Route

Saya menambahkan link pada masing masing item, sehingga item bisa ditekan,

![menambahkan link pada item produk](image.png)

![tampilan url pada saat item produk di hover](image-1.png)

![tampilan detail produk pada saat salah satu item produk ditekan](image-2.png)

## Bagian 2 – Implementasi CSR (Client Rendering)

Saya sudah memodifikasi halaman `detail product` agar bisa mengambil data produk dari database berdasarkan id yang diterima,

![tampilan halaman detail produk](image-3.png)

Melakukan rename file `produk.ts` -> [[...produk]].ts di folder api,

![rename file produk.ts](image-4.png)

Melakukan modifikasi `serviceirebase.ts`,

![modifikasi file servicefirebase.ts](image-5.png)

Melakukan modifikasi juga ke file `[[...produk]].ts`

![tampilan file produk.ts yang telah dimodifikasi](image-6.png)

Sehingga pada saat saya coba api nya, hasilnya seperti ini,

![tampilan endpoint api yang sudah berhasil menampilkan data detail produk](image-7.png)

![tampilan endpoint api dengan id yang tidak sesuai](image-8.png)

Setelah itu saya membuat file `detailProduk.module.scss` dan `index.tsx` baru beserta isinya,

![tampilan isi module scss dan index nya](image-9.png)

![tampilan isi halaman detail](image-10.png)

Dan hasilnya adalah seperti berikut,

![tampilan detail produk setelah perubahan](image-11.png)

## Bagian 3 – Implementasi SSR

Lalu saya mencoba untuk mengubah kode CSR yang ada di `/produk/[id].tsx dan menggantinya ke penggunaan SSR,

![tampilan kode CSR yang telah diubah ke SSR di halaman produk detail](image-12.png)

Dan tampilannya adalah sebagai berikut,

![tampilan gif perpundahan halaman produk menuju detail produk](Screencast_20260314_220520.gif)

Terlihat jika hasilnya memang tidak ada load image pada saat melihat detial image/load sudah dilakukan di sisi server sebelum tampil ke pengguna.

## Bagian 4 – Implementasi Static Site Generation (Dynamic SSG)

Sekarang saya memodifikasi lagi halaman detail produk untuk menggunakan SSG (Static Site Generation) dengan mengedit file

![tampilan kode dari detail produk setelah dimodifikasi](image-13.png)

Tak lupa juga untuk memodifikasi views dari halaman detail produk,

![tampilan kode dari views detail produk setelah modifikasi](image-14.png)

Setelah itu tak lupa saya untuk melakukan build halaman SSG yang sudah dimodifkasi tadi,

![tampilan konsole hasil build halaman SSG detail produk](image-15.png)

Setelah itu saya mencoba menjalankan browser di halaman produk dan mencoba melihat detail produknya hasil dari modifikasi menggunakan SSG,

![tampilan detail produk pada saat menggunakan renderer SSG](Screencast_20260315_232133.gif)

# D. Pengujian

### Uji 1 – CSR

- Refresh halaman detail
- Perhatikan loading
- Periksa Network → XHR → API request terlihat

#### Jawab

Saya mencoba mengunjungi halaman detail produk dan memperhatikan bagian API request seperti berikut,

![tampilan request pada saat mempraktekan metode rendering CSR](image-16.png)

Terlihat jika nextjs sempat melakukan request data produk terlebih dahulu.

### Uji 2 – SSR

- Refresh halaman detail
- Tidak ada loading
- Periksa Network → tidak terlihat fetch detail

#### Jawab

Saya mencoba untuk memuat kembali halaman dengan menggunakan metode rendering SSR dan hasilnya seperti berikut,

![tampilan inspect dengan menggunakan metode SSR](image-17.png)

Terlihat disini jika di sisi client, nextjs tidak terlihat melakukan request apapun.

### Uji 3 – SSG ( Lakukan seperti langkah sebelumya pada Jobsheet 10)

1. Jalankan:
   - npm run build
   - npm run start
2. Tambahkan produk baru di database.
3. Buka halaman detail produk baru:
   > Hasil: Tidak muncul.
4. Build ulang:
   - npm run build
   - npm run start
     > Hasil: Baru muncul.

#### Jawab

Saya sekarang mencoba untuk memuat halaman produk kembali dengan menggunakan metode SSG,

![tampilan 3 produk awal](image-18.png)

Terlihat awalnya hanya 3 produk saja, setelah itu saya mencoba menambahkan produk baru dari database firebase,

![penambahan record produk baru](image-19.png)

Dan pada saat saya cek di halaman `/produk` hasilnya seperti ini,

![tampilan produk sekarang ada 4 item](image-20.png)

Terlihat sudah ada 4 item, tetapi jika kita mencoba membuka item baru yang telah kita tambahkan barusan (belum melakukan build SSG kembali setelah melakukan penambahan) hasilnya seperti berikut,

![tampilan not found produk detail tidak ditemukan](image-21.png)

Telrihat jika produknya tidak ditemukan, karena kita belum melakukan build SSG ulang setelah melakukan penambahan data baru untuk halaman produk detail. Setelah itu saya melakukan build ulang (dengan `npm run dev` masih dijalankan) seperti berikut,

![tampilan build di konsole](image-22.png)

Dan hasilnya adalah seperti berikut,

![tampilan berhasil load produk yang telah ditambahkan (setelah dilakukan build SSG kembali)](image-23.png)

Terlihat jika kita berhasil menampilkan produk baru yang barusan ditambahkan, itu karena kita melakukan build ulang SSG dari nextjs.

# E. Tugas Praktikum

### 1. Implementasikan halaman detail dengan:

- CSR
- SSR
- SSG

Saya sudah mengimmplementasikan beberapa metode renderer diantaranya CSR, SSR, dan SSg di praktikum dan pengujian sebelumnya.

### 2.Buat tabel perbandingan:

| Aspek          | CSR | SSR | SSG |
| -------------- | --- | --- | --- |
| Loading        | ✅  | ❌  | ❌  |
| Build Required | ❌  | ❌  | ✅  |
| SEO            | ❌  | ✅  | ✅  |
| Perubahan Data | ✅  | ✅  | ❌  |

### 3. Dokumentasikan:

- Screenshot
- Network tab
- Build result

Saya sudah mencoba dan berikut adalah hasilnya,

#### CSR

![tampilan request pada saat mempraktekan metode rendering CSR](image-16.png)

#### SSR

![tampilan inspect dengan menggunakan metode SSR](image-17.png)

#### SSG

![tampilan build di konsole](image-22.png)

![tampilan berhasil load produk yang telah ditambahkan (setelah dilakukan build SSG kembali)](image-23.png)
