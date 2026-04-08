# PRAKTIKUM 1 – Membuat Repository GitHub

Saya akan menggunakan github repo saat ini untuk melakukan deployment project nextjs.

# PRAKTIKUM 2 – Deployment ke Vercel

Saya sudah melakukan login ke vercel menggunakan akun github,

![tampilan dashbaord vercel](image.png)

Melakukan add new project,

![tampilan tombol add new project](image-1.png)

Melakukam import menggunakan github,

![tampilan import project menggunakan github](image-2.png)

Lalu saya melakukan install vercel ke akun github saya, tetapi hanya di spesifik repositori ini saja seperti berikut,

![tampilan instalasi vercel ke akun saya dan memilih repositori spesifik](image-3.png)

![tampilan tombol install untuk menginstall vercel ke repository ini](image-4.png)

Sehingga project repo saya akan tampil seperti berikut dan bisa di impor,

![tampilan halaman dashboard import git repo](image-5.png)

Tetapi sebelum melakukan import, saya akan mengkonfigurasi terlebih dahulu,

> **Melakukan comment pada file yang berhubungan dengan static-site generation dan beralih menggunakan server-side
> rendering di file `[id].tsx`**
> ![tampilan komentar pada kode static](image-6.png)
> ![tampilan pengaktifan pada kode ssg](image-7.png)

Lalu saya membuat .env.local untuk public URL dari project,

![tampilan .env.local untuk halaman](image-8.png)

Lalu saya gunakan di file `server.tsx` dan `[id].tsx` seperti berikut,

![tampilan 2 file yang URL nya perlu dimodifikasi](image-9.png)

![tampilan 2 file setelah dimodifikasi](image-10.png)

Setelah itu saya lakukan commit,

![tampilan commit konfigurasi sebelum import ke vercel](image-11.png)

Selanjutnya saya melakukan import project repo ini ke vercel,

![tampilan import new project vercel](image-12.png)

Setelah itu saya menekan tombol deploy dan hasilnya seperti berikut,

![tampilan deployment berhasil](image-13.png)

![tampilan halaman yang sudah dideploy ke vercel](image-14.png)

Terlihat jika saya sudah berhasil melakukan deploy ke vercel.

# PRAKTIKUM 3 – Menambahkan Environment Variable di Vercel

Lalu saya menambahkan environment variable dari project saya (_`env.local`_) ke project yang sudah di deploy di vercel.

Dengan cara menekan tombol `Settings` di sidebar dan menekan `Environment Variables`, setelah itu menekan
`Add Variables`,

![tampilan tomnbol settings](image-15.png)

![tampilan tombol environment variables](image-16.png)

![tampilan tombol add variables](image-17.png)

Lalu melakukan import .env dari lokal project dan memilih file `.env.local` seperti berikut,

![tampilan iport .env.local dari project nextjs local](image-18.png)

Lalu saya melakukan modifikasi ke salah satu variabel `NEXT_PUBLIC_API_URL` seperti berikut,

![tampilan perubahan NEXT_PUBLIC_API_URL](image-19.png)

Lalu sekarang saya melakukan redeploy project saya di vercel,

![tampilan tombol redeploy](image-20.png)

# PRAKTIKUM 4 – Konfigurasi Google OAuth Production

Sekarang saya mengkonfigurasi kembali Google OAuth yang pernah ditambahkan agar mengizinkan URL production dari vercel
seperti berikut,

![tampilan authorized origins URL](image-21.png)

Lalu saya juga memperbaiki beberapa kode tampilan tombol halaman login

![tampilan perbaikan tombol styling](image-22.png)

Setelah selesai, lalu saya melakukan redeploy.

# PRAKTIKUM 5 – Pengujian Setelah Deployment

Terlihat jika setelah re-deployment dari perubahan praktikum sebelumnya berhasil dijalankan,

![setelah deployment selesai dan berhasil dilakukan](image-23.png)

Saya mengecek url `/`:

![tampilan halaman beranda `/`](image-24.png)

url `/about`:

> **Langsung diarahkan ke halaman login,**
> ![tampilan halaman login setelah mengakses URL /about sebelum melakukan login](image-25.png)

> **Setelah melakukan login,**
> ![tampilan halaman /about](image-26.png)

url `/produk`

![tampilan halaman produk /produk](image-27.png)

url `/profile`

![tampilan halaman profile /profile](image-28.png)

Melakukan Login Google,

![tampilan login menggunakan google](image-29.png)

![tampilan setelah login](image-30.png)

Melakukan Login menggunakan Credential biasa,

![tampilan login menggunakan credential biasa](image-31.png)

![tampilan setelah login menggunakan credential biasa](image-32.png)

# Tugas Praktikum

### 1. Deploy project Next.js ke Vercel

#### **Jawab**

Saya sudah melakukan deploy project nextjs saya ke Vercel, seperti berikut,

![tampilan deployment berhasil](image-13.png)

![tampilan halaman yang sudah dideploy ke vercel](image-14.png)

### 2. Pastikan API tidak menggunakan localhost

#### **Jawab**

Saya sudah mengubah endpoint API dan mengaturnya menggunakan .env seperti berikut,

![tampilan perubahan NEXT_PUBLIC_API_URL](image-19.png)

![tampilan .env.local untuk halaman](image-8.png)

![tampilan 2 file yang URL nya perlu dimodifikasi](image-9.png)

![tampilan 2 file setelah dimodifikasi](image-10.png)

### 3. Konfigurasikan Google OAuth production

#### **Jawab**

Saya juga sudah mengkonfigurasi Google OAuth product

![tampilan authorized origins URL](image-21.png)

### 4. Lakukan minimal 1 redeploy

#### **Jawab**

Saya sudah pernah melakukan redeploy pada saat merubah .env untuk pengaturan API Endpoint seperti berikut,

![tampilan tombol redeploy](image-20.png)

Jika dilihat juga saya sudah melakukan redeploy berkali kali,

![tampilan redeploy berkali kali](image-33.png)

### 5. Dokumentasikan:

- Screenshot dashboard Vercel
- URL hasil deployment
- Screenshot login Google berhasil

#### **Jawab**

1. Berikut adalah screenshot dari dashboard Vercel saya,

![screenshot dashboard Vercel](image-34.png)

2. Lalu berikut juga screenshot URL hasil deployment nya,

![tampilan halaman yang sudah dideploy ke vercel](image-14.png)

3. Lalu berikut adalah screenshot login google yang berhasil,

Melakukan **Login Google**,

![tampilan login menggunakan google](image-29.png)

![tampilan setelah login](image-30.png)

Melakukan **Login menggunakan Credential biasa**,

![tampilan login menggunakan credential biasa](image-31.png)

![tampilan setelah login menggunakan credential biasa](image-32.png)