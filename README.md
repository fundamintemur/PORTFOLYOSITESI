# Funda Mintemur | Kişisel Portfolyo Sitesi

Bilgisayar Mühendisi & Frontend Developer **Funda Mintemur**'un kişisel portfolyo web sitesi. React, Tailwind CSS ve Three.js ile geliştirilmiş, tek sayfalık (single-page) modern bir tanıtım sitesidir.

**Canlı önizleme:** *(yayına alındığında linki buraya ekle)*

---

## Öne Çıkan Özellikler

- **Etkileşimli 3D arka plan** — Three.js ile oluşturulmuş, fare hareketine tepki veren parçacık ağı animasyonu
- **Scroll ile beliren bölümler** — sayfa kaydırıldıkça içerikler yumuşak geçişlerle görünür
- **Aktif menü vurgusu** — bulunduğun bölüm navigasyon menüsünde otomatik işaretlenir
- **Kaydırma ilerleme çubuğu** ve **yukarı çık** butonu
- **Kayan teknoloji şeridi** (marquee) ile öne çıkan yetenekler
- **Zaman çizelgeli iş deneyimi** bölümü
- Tamamen **responsive** tasarım (mobil, tablet, masaüstü)
- `prefers-reduced-motion` desteği ile erişilebilirlik

## Bölümler

1. **Hero** — Tanıtım, istatistikler, öne çıkan teknolojiler
2. **Hakkımda** — Kısa özgeçmiş ve öne çıkan yaklaşım
3. **Teknik Yetenekler** — Programlama dilleri, frontend/backend, veritabanı, araçlar, kişisel beceriler
4. **İş Deneyimi** — Kronolojik zaman çizelgesi
5. **Projeler** — Öne çıkan çalışmalar
6. **GitHub Projeleri** — GitHub profiline yönlendirme
7. **İletişim** — E-posta, konum ve sosyal medya bağlantıları

## Kullanılan Teknolojiler

| Katman | Teknoloji |
| --- | --- |
| Framework | React 19 |
| Build Tool | Vite 6 |
| Stil | Tailwind CSS 4 |
| 3D / Animasyon | Three.js |
| İkonlar | react-icons |

## Kurulum

Gerekli: **Node.js 20.19+**

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

Tarayıcıda `http://localhost:5173` adresini aç.

## Production Build

```bash
# Üretim için derle
npm run build

# Derlenen çıktıyı yerelde önizle
npm run preview
```

Derlenen dosyalar `dist/` klasöründe oluşur.

## Proje Yapısı

```
├── src/
│   ├── components/
│   │   └── ThreeBackground.jsx   # 3D parçacık arka planı
│   ├── App.jsx                   # Ana sayfa ve tüm bölümler
│   ├── main.jsx                  # React giriş noktası
│   └── index.css                 # Tüm site stilleri
├── index.html
├── vite.config.js
└── package.json
```

## İçeriği Güncelleme

Tüm metin içerikleri (`skills`, `experiences`, `projects`, `githubRepos`, `techMarquee` gibi diziler) `src/App.jsx` dosyasının en üstünde sade JavaScript nesneleri olarak tanımlıdır. Yeni bir proje, deneyim ya da yetenek eklemek için ilgili diziye yeni bir kayıt eklemen yeterli — tasarım otomatik olarak uyum sağlar.

## Dağıtım (Deploy)

Proje `vercel.json` dosyasıyla birlikte gelir; [Vercel](https://vercel.com) üzerinden doğrudan dağıtılabilir. Netlify, GitHub Pages veya herhangi bir statik barındırma servisiyle de `npm run build` çıktısındaki `dist/` klasörünü yayınlayarak kullanılabilir.

## İletişim

- **E-posta:** mintemurfunda3@gmail.com
- **GitHub:** [github.com/fundamintemur](https://github.com/fundamintemur)
- **LinkedIn:** [linkedin.com/in/funda-mintemur](https://www.linkedin.com/in/funda-mintemur-172036191/)

---

© 2026 Funda Mintemur. Tüm hakları saklıdır.

