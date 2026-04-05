# B. Konfigurasi Google OAuth

Sekarang saya mencoba untuk melakukan konfigurasi Google OAuth di website Google Cloud Console,

## Langkah 1 - Masuk ke Google Cloud Console Buka

![tampilan halaman website google cloud console](assets/image.png)

## Langkah 2 – Buat Project Baru

Lalu sekarang saya mencoba untuk membuat project baru,

![tampilan tombol create new project](assets/image-1.png)

Memberikan nama project,

![tampilan halaman create new project](assets/image-2.png)

Lalu saya menuju ke halaman credentials dari project `MyAppNext`,

![tampilan halaman credentials dari project myappnext](assets/image-3.png)

## Langkah 3 – Konfigurasi OAuth Consent Screen

Lalu saya melakukan konfigurasi OAuth Consent Screen,

![tampilan tombol OAuth Consent Screen](assets/image-4.png)

![tampilan halmaannya](assets/image-5.png)

Lalu saya menekan tombol `Get started`, dan saya mendapati halaman seperti berikut,

![tampilan halaman formulir pengisian](assets/image-6.png)

![tampilan step 2](assets/image-7.png)

![tampilan step 3](assets/image-8.png)

![tampilan step 4](assets/image-9.png)

## Langkah 4 – Buat OAuth Credentials

Lalu saya membuat OAuth Clients seperti berikut,

![tampilan formulir pengisian pembuatan Client Baru](assets/image-10.png)

# C. Tambahkan Environment Variables

Saya melakukan copy paste Client ID yang sudah saya buat ke .env project seperti berikut,

![tampilan Client ID yang sudah dibuat](assets/image-11.png)

![tampilan .env.local](assets/image-12.png)

# D. Konfigurasi Google Provider di NextAuth dan Handle Callback JWT & Session

Lalu setelah saya mendapatkan Client ID dari OAuth, saya modifikasi fiel `[...nextauth].ts` pada direktori `api/auth/`
menjadi seperti berikut,

![tampilan kode [..nextauth].ts seletah modifkasi](assets/image-13.png)

![tampilan kode [..nextauth].ts seletah modifkasi](assets/image-14.png)

# E. Tambahkan Button Login Google

Lalu setelah mengkonfigurasi google client di api, saya mencoba memodifikasi halaman login saya di file `index.tsx` pada
direktori `views/auth/login` dengan tombol login menggunakan google seperti berikut,

![tampilan kode hasil modifikasi untuk menambahkan tombol login menggunakan google](assets/image-15.png)

Dan hasil tampilannya adalah seperti berikut,

![tampilan halaman login setelah modifikasi tambahan tombol](assets/image-16.png)

Lalu saya modifikasi lagi untuk halaman `index.tsx` dari navbar di direktori `components/layouts/navbar/` dengan
menampilkan gambar/profil picture seperti berikut,

![tampilan kode navbar setelah modifikasi picture profile](assets/image-17.png)

![tampilan kode css styling setelah modifikasi picture profile](assets/image-18.png)

![tampilan hasil profil di navbar](assets/image-19.png)

# G. Simpan Data Google ke Database

Setelah itu saya ingin menambahkan proses untuk menyimpan data akun google ke firestore database pada saat pengguna
login menggunakan provider google (bukan login biasa), jadi tidak hanya sekadar di state jwt saja.

Pertama-tama saya mememperbarui kode `servicefirebase.ts` untuk membuat fungsi baru untuk menyimpan ke database,

![tampilan kode servicefirebase.ts](assets/image-20.png)

Lalu saya memanggilnya di file `[...nextauth].ts` seperti berikut,

![tampilan kode [...nextauth].ts](assets/image-21.png)

Setelah itu saya mencoba menjalankan browser dengan sign-in menggunakan provider google, tetapi sebelumnya data saya di
firebase adalah seperti ini (sebelum login menggunakan akun google),

![tampilan data users akun saya sebelum login menggunakan provider google](assets/image-22.png)

Lalu saya coba login menggunakan akun google,

![tampilan setelah login menggunakan provider google](assets/image-23.png)

![tampilan firebase setelah login menggunakan provider google](assets/image-24.png)

# H. Pengujian

| Skenario                     | Hasil yang Diharapkan       | Bukti Screenshot                                                             |
|:-----------------------------|:----------------------------|:-----------------------------------------------------------------------------|
| Login Google pertama kali    | Data tersimpan di Firestore | <img src="image-22.png" width="400" alt="Login Pertama">                     |
| Login Google kedua kali      | Data diupdate               | <img src="image-24.png" width="400" alt="Update Data">                       |
| User role user akses /admin  | Redirect                    | <img src="Screencast_20260404_000414.gif" width="400" alt="Redirect Member"> |
| User role admin akses /admin | Bisa masuk                  | <img src="Screencast_20260404_000848.gif" width="400" alt="Akses Admin">     |
| Avatar tampil                | Ya                          | <img src="image-19.png" width="100" alt="Avatar Tampil">                     |

# Analisis & Diskusi

### 1. Apa perbedaan login credential dan login Google?

#### **Jawab**

Jika login credentials maka kita dibebaskan untuk login menggunakan akun email selain akun google `@gmail.com`. Tetapi
jika login menggunakan provider google, maka kita hanya bisa login menggunakan akun google `@gmail.com`.

### 2. Mengapa data Google tetap perlu disimpan ke database?

#### **Jawab**

Karena tetap berguna digunakan untuk mendata perubahan informasi dari pengguna.

### 3. Apa fungsi JWT callback?

#### **Jawab**

Fungsi "Callback JWT" dalam auth ini (di kasus ini) bertujuan untuk melakukan pembaruan state JWT dan penyimpanan
kredensial hasil autentikasi ke database.

### 4. Mengapa perlu multi-role?

#### **Jawab**

Karena untuk membatasi hak akses yang ada pada website kita untuk masing-masing user.

### 5. Apa risiko jika tidak menyimpan user ke database?

#### **Jawab**

Maka nantinya kita akan kesulitan pada saat ingin menampilkan profil pengguna ataupun melakukan validasi
role/kredensial.

# Tugas Mandiri

### 1. Tambahkan role editor

#### **Jawab**

Sekarang saya menambahkan role baru yaitu role editor,

![tampilan pengguna dengan role baru yaitu editor](assets/image-25.png)

### 2. Buat halaman khusus editor

#### **Jawab**

Lalu sekarang setelah itu saya menambahkan halaman baru yang nantinya bisa diakses khusus hanya untuk editor,

![tampilan kode untuk view halaman pengguna](assets/image-26.png)

Lalu agar halaman editor saya hanya bisa diakses oleh role editor, saya perlu melakukan guard ke url `/editor` saya
seperti berikut,

> **guard middleware** \
> ![tampilan perubahan guard middleware](assets/image-27.png)

> **logika pengkondisian path `/editor`** \
> ![tampilan perubahan logika pengkondisian path /editor](assets/image-28.png)

> **percobaan login menggunakan akun editor** \
> ![tampilan halaman pada saat percobaan login menggunakan akun editor](assets/image-29.png)

> **berhasil login sebagai editor dan bisa mengakses halaman editor** \
> ![tampilan halaman berhasil login sebagai editor dan bisa mengakses halaman editor](assets/image-30.png)

### 3. Tambahkan provider GitHub

#### **Jawab**

> Jadi pertama-tama kita harus login ke website [github.com](github.com), \
> ![tampilan halaman github](assets/image-31.png)

> Lalu kita akan **membuat OAuth dari github**, dengan cara:
>
> 1. Kita ke halaman settings
     >    ![tampilan tombol sign in](assets/image-32.png)
> 2. Scroll paling bawah ada tombol `"Developer settings"`,
     >    ![tampilan tombol developer settings](assets/image-33.png)
> 3. Lalu kita tekan tombol **`OAuth Apps`**, lalu tekan tombol hijau **`New OAuth app`**
     >    ![tampilan tombol OAuth Apps](assets/image-34.png)
     >    ![tampilan tombol hijau](assets/image-35.png)
> 4. Lalu saya mengisikan formulir pembuatan OAuth Apps nya seperti berikut,
     >    ![tampilan pengisian formulir](assets/image-36.png)
> 5. Setelah itu pencet tombol `Register application`
     >    ![tampilan tombol Register application](assets/image-37.png)
> 6. Lalu setelah itu tampilannya akan seperti berikut, dan tekan tombol `Generate a new client secret`
     >    ![tampilan tombol Generate a new client secret](assets/image-38.png)
> 7. Setelah itu maka Client Secret baru akan terbentuk,
     >    ![tampilan client secret baru](assets/image-39.png)

Lalu karena kita sudah mendapatkan `Client ID` dan `Client Secret` dari Github OAuth, maka kita bisa simpan kredensial
tersebut ke `.env.local` seperti berikut,

![tampilan .env.local setelah mendapatkan kredensial OAuth dari github](assets/image-40.png)

Setelah itu kita hanya perlu memodifikasi kode untuk implementasi login menggunakan provider Github yang sudah saya
buat,

> **kode modifikasi file `/views/auth/login/index.tsx`** untuk menambahkan tombol login menggunakan github \
> ![tampilan modifikasi kode view login](assets/image-41.png)

> **kode modifikasi file `/pages/api/auth/[...nextauth].ts`** untuk autentikasi menggunakan Github \
> ![tampilan modifikasi kode [...nextauth].ts](assets/image-42.png)
> ![tampilan modifikasi kode [...nextauth].ts](assets/image-43.png)

Sehingga hasilnya adalah seperti berikut,

![tampilan halaman login](assets/image-44.png)

![tampilan halaman authorize github](assets/image-45.png)

![tampilan halaman setelah login menggunakan provider github](assets/image-46.png)

Tetapi terlihat jika nama di profil navbar nya tidak muncul **dikarenakan struktur response json dari provider
Github tidak tertangkap di file `[...nextauth].ts`**,

![tampilan struktur response jwt yg tidak tertangkap oleh file [...nextauth].ts](assets/image-47.png)

sehingga saya perlu untuk memperbaikinya seperti berikut,

> kode modifikasi file `/pages/api/auth/[...nextauth].ts` untuk memperbaiki penangkapan struktur Response JSON dari
> provider github \
> ![tampilan modifikasi kode [...nextauth].ts](assets/image-48.png)

> [!NOTE]
> Terlihat juga saya disitu membuat fungsi baru bernama `signInWithGithub` untuk menyimpan/update data kredensial login
> pengguna dari provider **Github** (walaupun jujur ini terasa lebih boros kode, sehingga ini akan kita **refactor** di
> step selanjutnya)

> kode modifikasi file `/src/utils/db/servicefirebase.ts` untuk fungsi khusus Github,
> ![tampilan modifikasi kode servicefirebase.ts](assets/image-49.png)

> [!NOTE]
> Kode fungsi ini lah yang menurut saya boros, padahal isinya serupa dengan fungsi sebelumnya `signInWithGoogle`. Nanti
> akan kita **refactor**.

Setelah itu hasil dari tampilan profil di navbar nya setelah selesai diperbarui adalah seperti berikut,

![tampilan navbar hasil modifikasi](assets/image-50.png)

Dan juga, setelah **login menggunakan Github**, data kredensial di firestore database kita juga akan diperbarui,

![tampilan perubahan data kredensial firestore database dari login menggunakan github](assets/image-54.png)

### 4. Refactor service agar reusable

#### **Jawab**

Karena ada fungsi fungsi yang berulang, saya akan melakukan refactor beberapa fungsi terasebut agar tidak boros baris
kode (reusable) mengikuti DRY (Don't Repeat Yourself),

> Isi dari kode `servicefirebase.ts`
> **Sebelum** \
> ![tampilan before](assets/image-51.png)
> **Sesudah**
> ![tampilan after](assets/image-52.png)
> **Implementasi**
> ![tampilan implementasi](assets/image-53.png)

> isi dari kode `[...nextauth].ts`
> **Sebelum** \
> ![tampilan before](assets/image-53.png)
> **Sesudah**
> ![tampilan after](assets/image-55.png)

### 5. Gunakan next/image untuk optimasi avatar

Setelah itu karena sebelumnya profile picture di navbar menggunakan tag `<img>` biasa,

![tampilan kode untuk menampilkan profile picture di navbar](assets/image-56.png)

sehingga saya lakukan optimasi pada profile picture/avatar tersebut dengan menggunakan tag `<Image>` bawaan nextjs di
library `next/image` seperti berikut,

![tampilan kode navbar untuk menampilkan avatar](assets/image-57.png)

Lalu saya juga memodifikasi kode `next.config.js` berikut untuk mendaftarkan domain asal provider avatar seperti
berikut,

(hal ini wajib dilakukan, jika kita menggunakan tag `<Image>` bawaan nextjs, **jika tidak, maka halaman web akan
mengalami error**),

![tampilan kode next.config.js](assets/image-58.png)

Jadi hasil akhir avatar pada navbar setelah login menggunakan provider github nya akan seperti berikut,

![tampilan akhir avatar pada navbar setelah login menggunakan provider github](assets/image-59.png)
