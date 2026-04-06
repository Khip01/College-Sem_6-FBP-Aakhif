# PRAKTIKUM 1 – Setup Jest di Next.js

Pertama-tama saya menginstall library seperti berikut untuk melakukan testing,

```bash
npm install jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom --save-dev --force
```

![tampilan konsole instalasi npm](image.png)

Lalu saya membuat file konfigurasi baru bernama `jest.config.mjs` untuk melakukan testing,

![tampilan config jest .mjs](image-1.png)

Lalu saya menambahkan test coverage nya di `package.json` bagian `scripts`,

![tampilan kode package.json](image-2.png)

# PRAKTIKUM 2 – Struktur Folder Testing

Lalu saya membuat folder bernama `__test__` didalam direktori `src/` seperti berikut,

![tampilan folder baru bernama __test__](image-3.png)
