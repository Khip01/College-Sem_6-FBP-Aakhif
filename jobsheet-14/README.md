# C. Langkah Praktikum

## Bagian 1 – Install NextAuth

Saya menginstall library `next-auth` seperti berikut,

![tampilan konsole menjalankan perintah npm install](image.png)

## Bagian 2 – Konfigurasi API Auth

Saya menambahkan konfigurasi untuk autentikasi menggunakan next-auth dengan cara membuat file baru bernama [...next-auth].ts di folder `/pages/api/auth/` seperti berikut,

![tampilan kode next auth options](image-1.png)

## Bagian 3 – Tambahkan Secret

Saya menambahkan variabel secret di `.env.local` untuk menjadi secret dari next auth seperti berikut,

![tampilan next auth secret dari env local](image-2.png)
