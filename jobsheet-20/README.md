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
