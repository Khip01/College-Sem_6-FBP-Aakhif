# C. Langkah Praktikum

## Bagian 1 – Membuat Middleware

Saya akan mengubah redirect otomatis (autentikasi) menggunakan middleware, jadi yang pertama saya lakukan adalah membuat file baru bernama `middleware.ts` sejajar dengan folder pages seperti berikut,

![penambahan file baru bernama middleware.ts](image.png)

## Bagian 2 – Struktur Dasar Middleware

Jadi saya mencoba mengisi file `middleware.ts` yang sudah dibuat tadi dengan kode seperti berikut,

![kode middleware dasar](image-1.png)

## Bagian 3 – Redirect Sederhana

Jadi sekarang saya mencoba untuk menambahkan eksperimen ke middleware, yaitu dengan melakukan redirect ke home `/` seperti berikut,

![tampilan kode middleware sederhana](image-2.png)

Sehingga pada saat saya jalankan di browser hasilnya seperti ini,

![tampilan redirected you too many times](image-3.png)

Terlihat jika alasan not workingnya karena "...redirected you too many times.", itu artinya kita terus terusan diredirect tanpa henti.

## Bagian 4 – Batasi Route Tertentu

Lalu untuk mengatasi masalah ini, saya melakukan konfigurasi route, dengan membatasi rute tertentu saja yang dapat menerapkan middleware ini. Disini middleware akan saya terapkan di rute `/produk` dan `/about` saja,

![tampilan kode konfigurasi di middleware](image-4.png)

## Bagian 5 – Simulasi Sistem Login

Setelah itu baru kita coba terapkan logika middleware kedalam sistem login, dengan cara saya menambahkan beberapa pengkondisian sederhana seperti berikut,

![tampilan kode middleware dengan pengkondisian login sederhana](image-5.png)

Dengan kode tersebut maka kita tidak akan bisa masuk ke halaman produk (karena variabel isLogin akan terus `false`).

## D. Pengujian

### Uji 1 – isLogin = false

Akses: `/produk`

**Hasil:**

> Redirect ke /login

![tampilan redirect jika isLogin = false](Screencast_20260319_211151.gif)

### Uji 2 – isLogin = true

Ubah: `const isLogin = true`

**Hasil:**

> Bisa mengakses /produk

![tampilan redirect jika isLogin = true](Screencast_20260319_211413.gif)

### Uji 3 – Tambahkan Multiple Route

```ts
export const config = {
  matcher: ["/products", "/about"],
};
```

**Sekarang:**

- /products dan /about butuh login
- Halaman lain bebas

![tampilan redirect dari halaman /produk dan /about ketika isLogin = false](Screencast_20260319_211814.gif)

# E. Perbandingan Middleware vs useEffect

| Aspek           | useEffect          | Middleware           |
| --------------- | ------------------ | -------------------- |
| Redirect timing | Setelah render     | Sebelum render       |
| Glitch          | Ada                | Tidak                |
| Security        | Lemah              | Lebih aman           |
| Skalabilitas    | Harus tiap halaman | Sekali di middleware |
