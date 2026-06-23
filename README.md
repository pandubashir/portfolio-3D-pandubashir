# Pandu Bashir Alamin — Portfolio (Next.js)

Konversi dari HTML statis ke Next.js (App Router), plus efek 3D di hero section
menggunakan React Three Fiber (kristal ungu mengambang + partikel).

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Build untuk production

```bash
npm run build
npm start
```

## Yang perlu kamu sesuaikan

1. **Foto profil** — sudah disertakan di `public/poto-pandu.jpg`. Kalau mau ganti, cukup timpa file itu (nama & path-nya harus tetap sama, atau ubah juga referensinya di `components/Hero.jsx`).
2. **Link & email** — sudah memakai data dari versi HTML sebelumnya
   (LinkedIn, email `pandubashir@gmail.com`, link project Streamlit). Ganti kalau ada yang berubah.
3. **Efek 3D** — ada di `components/HeroScene.jsx`. Untuk mengubah warna, ukuran,
   atau kecepatan rotasi, edit nilai `color`, `scale`, dan `speed` di komponen `FloatingCrystal`.

## Struktur folder

```
app/
  layout.js        -> root layout, font & meta
  page.js           -> merakit semua section
  globals.css       -> semua styling (port dari CSS asli + style 3D canvas)
components/
  Navbar.jsx
  Hero.jsx          -> teks hero + foto + scene 3D
  HeroScene.jsx      -> kristal 3D (react-three-fiber), client-only
  TypedText.jsx      -> efek mengetik
  FadeIn.jsx         -> wrapper scroll fade-in (IntersectionObserver)
  Skills.jsx         -> marquee skill/tools
  About.jsx
  Projects.jsx
  Footer.jsx
  MusicPlayer.jsx    -> widget musik (YouTube iframe API)
public/
  (letakkan foto profil di sini)
```

## Deploy ke Vercel

Karena domain kamu sudah di Vercel (`portfolio-pandubashir.vercel.app`), tinggal:

```bash
npm install -g vercel   # kalau belum ada
vercel
```

atau hubungkan folder ini ke repo GitHub lalu import ke project Vercel yang sudah ada.
