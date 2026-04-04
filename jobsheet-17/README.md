# B. Konfigurasi Google OAuth

Sekarang saya mencoba untuk melakukan konfigurasi Google OAuth di website Google Cloud Console,

## Langkah 1 - Masuk ke Google Cloud Console Buka

![tampilan halaman website google cloud console](image.png)

## Langkah 2 – Buat Project Baru

Lalu sekarang saya mencoba untuk membuat project baru,

![tampilan tombol create new project](image-1.png)

Memberikan nama project,

![tampilan halaman create new project](image-2.png)

Lalu saya menuju ke halaman credentials dari project `MyAppNext`,

![tampilan halaman credentials dari project myappnext](image-3.png)

## Langkah 3 – Konfigurasi OAuth Consent Screen

Lalu saya melakukan konfigurasi OAuth Consent Screen,

![tampilan tombol OAuth Consent Screen](image-4.png)

![tampilan halmaannya](image-5.png)

Lalu saya menekan tombol `Get started`, dan saya mendapati halaman seperti berikut,

![tampilan halaman formulir pengisian](image-6.png)

![tampilan step 2](image-7.png)

![tampilan step 3](image-8.png)

![tampilan step 4](image-9.png)

## Langkah 4 – Buat OAuth Credentials

Lalu saya membuat OAuth Clients seperti berikut,

![tampilan formulir pengisian pembuatan Client Baru](image-10.png)

# C. Tambahkan Environment Variables

Saya melakukan copy paste Client ID yang sudah saya buat ke .env project seperti berikut,

![tampilan Client ID yang sudah dibuat](image-11.png)

![tampilan .env.local](image-12.png)

# D. Konfigurasi Google Provider di NextAuth dan Handle Callback JWT & Session

Lalu setelah saya mendapatkan Client ID dari OAuth, saya modifikasi fiel `[...nextauth].ts` pada direktori `api/auth/`
menjadi seperti berikut,

![tampilan kode [..nextauth].ts seletah modifkasi](image-13.png)

![tampilan kode [..nextauth].ts seletah modifkasi](image-14.png)

# E. Tambahkan Button Login Google

Lalu setelah mengkonfigurasi google client di api, saya mencoba memodifikasi halaman login saya di file `index.tsx` pada
direktori `views/auth/login` dengan tombol login menggunakan google seperti berikut,

![tampilan kode hasil modifikasi untuk menambahkan tombol login menggunakan google](image-15.png)

Dan hasil tampilannya adalah seperti berikut,

![tampilan halaman login setelah modifikasi tambahan tombol](image-16.png)

Lalu saya modifikasi lagi untuk halaman `index.tsx` dari navbar di direktori `components/layouts/navbar/` dengan
menampilkan gambar/profil picture seperti berikut,

![tampilan kode navbar setelah modifikasi picture profile](image-17.png)

![tampilan kode css styling setelah modifikasi picture profile](image-18.png)

![tampilan hasil profil di navbar](image-19.png)
