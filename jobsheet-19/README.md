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
