# PRAKTIKUM 1 – Image Optimization

## A. Optimasi Gambar Lokal (Public Folder)

Sekarang saya ingin mengganti gambar notfound 404 di file `404.tsx` dengan menggunakan tag `<Image>` bawaan `next/image`
seperti berikut,

![tampilan kode setelah mengganti ke tag <Image>](image.png)

![tampilan halaman 404 notfound setelah diganti dengan tag <Image>](image-1.png)

## B. Optimasi Gambar Remote (External URL)

Setelah itu saya melakukan optimasi gambar dari eksternal, contohnya di halaman `/produk`, maka saya melakukan
modifikasi di file `/views/product/index.tsx` seperti berikut,

![tampilan halaman index dari produk](image-2.png)

Setelah itu dikarenakan gambar-gambarnya diambil dari url tertentu, maka konfigurasi nya berbeda di file
`next.config.js` nya seperti berikut,

![tampilan modifikasi file next.config.js](image-3.png)

![tampilan halaman /produk](image-4.png)

# PRAKTIKUM 2 – Font Optimization

## A. Menggunakan next/font

Lalu sekarang saya melakukan font optimization di sisi parent (yaitu via `Appshell`), sehingga seluruh font dari konten
akan berubah. Jadi saya akan memodifikasi file `/components/layouts/Appshell/index.tsx` seperti berikut,

![tampilan kode hasil modifikasi optimisasi font](image-5.png)

![tampilan halaman setelah perubahan font](image-6.png)

# PRAKTIKUM 3 – Script Optimization

## B. Menggunakan next/script

Lalu saya melakukan optimisasi lagi di bagian loading sebuah teks `"MyApp"` yang awalnya ditulis langsung didalam tag
`<div>`, dengan cara menuliskan strategy `lazyOnload` didalam tag `<Script>` bawaan `next/script`, sehingga teks
`"MyApp"` akan di load setelah semua sumber daya utama dari konten website selesai (alias terakhir),

![tampilan kode penggunaan script sebagai sarana 'lazyOnload'](image-7.png)

Jadi itu adalah salah satu implementasi tag `<Script>` bawaan `next/script` sebagai sarana lazyOnload pada sebuah
konten.

# PRAKTIKUM 4 – Optimasi Avatar dengan next/image

Saya sudah melakukan optimisasi avatar yang ada pada navbar seperti berikut,

![tampilan kode navbar untuk menampilkan avatar](assets/image-57.png)

![tampilan kode next.config.js](assets/image-58.png)

![tampilan akhir avatar pada navbar setelah login menggunakan provider github](assets/image-59.png)

# Tugas Praktikum

### 1. Optimasi semua image di project menggunakan next/image

#### **Jawab**

Saya sudah melakukan optimasi semua image di project menggunakan next/image,

> **halaman 404 notfound** \
> ![tampilan halaman 404 notfound setelah diganti dengan tag <Image>](image-1.png)

> **tampilan preview image pada `/produk`** \
> ![tampilan halaman /produk](image-4.png)

> **tampilan avatar pada navbar**
> ![tampilan akhir avatar pada navbar setelah login menggunakan provider github](assets/image-59.png)

### 2. Gunakan minimal 1 font dari next/font

#### **Jawab**

Disini saya sudah menggunakan font yaitu `roboto`,

![tampilan kode hasil modifikasi optimisasi font](image-5.png)

![tampilan halaman setelah perubahan font](image-6.png)

### 3. Tambahkan script Google Analytics menggunakan next/script

#### **Jawab**

Jadi saya mencoba memasang Google Analytics ini di file `_app.tsx` seperti berikut,

![tampilan kode _app.tsx setelah diberi GA](image-8.png)

### 4. Terapkan dynamic import pada minimal 1 komponen

#### **Jawab**

Karena disini terdapat komponen yang kurang begitu banyak berinteraksi dengan pengguna yaitu komponen `footer`, sehingga
saya memilih footer sebagai komponen dinamis, sehingga saya modifikasi kode di file `Appshell/index.tsx` seperti
berikut,

> **Sebelum menggunakan footer dynamic component**
> ![tampilan kode footer sebelum menggunakan dynamic component](image-9.png)

> **Sesudah menggunakan footer dynamic component**
> ![tampilan kode footer sesudah menggunakan dynamic component](image-10.png)

Jadi setelah menambahkan dynamic import di komponen footer, maka import untuk **komponen footer tidak perlu langsung
dimuat** ketika halaman pertama kali dimuat.

### 5. Dokumentasikan perubahan performa (screenshot Lighthouse)

#### **Jawab**

Lalu saya melakukan testing performa dari beberapa halaman dari website,

> **Tampilan hasil testing performa halaman utama `/`** \
> ![tampilan halamannya](image-12.png)

> **Tampilan hasil testing performa halaman `/produk/static`** \
> ![tampilan halamannya](image-11.png)

> **Tampilan hasil testing performa halaman `/produk`** \
> ![tampilan halamannya](image-13.png)

> **Tampilan hasil testing performa halaman notfound `(error 404)`** \
> ![tampilan halamannya](image-14.png)

> **Tampilan hasil testing performa halaman `/about`** \
> ![tampilan halamannya](image-15.png)

> **Tampilan hasil testing performa halaman `/admin` (dengan proses rintangan validasi di middleware nya)** \
> ![tampilan halamannya](image-16.png)

# Refleksi & Diskusi

### 1. Mengapa `<img>` biasa tidak optimal?

#### **Jawab**

Karena tag `<img>` biasa akan **mengunduh gambar dengan ukuran aslinya**. Misal jika Anda punya gambar 3mb, browser akan
mengunduh 3MB meskipun hanya ditampilkan kecil di layar HP.

`<Image>` Next.js: Secara **otomatis melakukan Resizing**. Next.js akan **mengirimkan gambar dengan dimensi yang pas**
sesuai perangkat pengguna (Mobile vs Desktop).

### 2. Apa perbedaan font CDN dan next/font?

#### **Jawab**

Menurut saya, jika font dari CDN (Content Delivery Network) maka kita akan **mengunduh font style dari luar** project
kita, sehingga bisa **berdampak pada Performance**.

Jika `next/font`, maka kita menggunakan **font lokal dari project yang sudah disediakan oleh nextjs** sendiri, bahasa
lainnya yaitu kita **sudah punya assets font nya tanpa download dari luar**.

### 3. Mengapa script bisa membuat website lambat?

#### **Jawab**

Karena pada saat browser merender website HTML yang ada script nya, maka render tersebut tidak dilanjutkan alias
terhenti untuk menunggu browser untuk mengunduh script dan mengeksekusinya. Ini akan berpengaruh pada performa, jadi
kita berusaha untuk menuliskan sesuatu dalam bentuk static.

### 4. Kapan harus menggunakan dynamic import?

#### **Jawab**

Pada saat kita tahu ada suatu komponen yang **jarang diperlihatkan ke pengguna/jarang dilakukan interaksi**, sehingga
kita
tidak memprioritaskan import yang kurang berguna tadi **untuk memangkas performa pada saat halaman pertama kali dimuat
**.

### 5. Apa dampak bundle size terhadap UX?

#### **Jawab**

Dampaknya bisa membuat **pengguna menunggu terlalu lama untuk mengunduh** file yang sangat besar. Sehingga performa website
menurun. Dan pengguna menjadi **malas untuk mengakses website kita lagi**/bahkan kegiatan pengguna di dalam website akan
terganggu karena **pemrosesan website yang sangat lambat dan kurang responsif**.