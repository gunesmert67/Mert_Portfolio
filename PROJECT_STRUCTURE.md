# Proje Dosya Yapısı ve Site Haritası

Bu belge, **Mert Güneş Portfolio** projesinin klasör yapısını, dosya işlevlerini, CI/CD test mekanizmalarını ve sayfa rotalarını açıklamaktadır.

## 📂 Klasör Yapısı

```text
Mert_Portfolio/
├── app/                    # Next.js App Router (Sayfalar ve API)
│   ├── (ana sayfalar)      # Ana rotalar (career, certifications, contact, projects, services, skills)
│   ├── api/                # Backend API uç noktaları (AI sohbet, iletişim formu)
│   ├── globals.css         # Global CSS ve Tailwind stilleri
│   ├── layout.tsx          # Ana uygulama düzeni (Providerlar, Navbar, Footer)
│   └── page.tsx            # Giriş/Hero sayfası
├── components/             # React Bileşenleri
│   ├── 3d/                 # Three.js / Canvas tabanlı görselleştirmeler
│   ├── main/               # Büyük sayfa bölümleri (Hero, Services, Experience)
│   ├── providers/          # Context Provider'lar (Tema, Dil)
│   └── ui/                 # Yeniden kullanılabilir atomik bileşenler (Butonlar, Kartlar)
├── context/                # Global State / Context API tanımları
├── data/                   # Statik içerik verileri (Projeler, Sertifikalar, Çeviriler)
├── lib/                    # Üçüncü taraf kütüphane yapılandırmaları
├── public/                 # Statik varlıklar (Görseller, Logolar, Videolar)
├── types/                  # TypeScript tip tanımları
├── utils/                  # Yardımcı fonksiyonlar ve bildirim araçları
├── .eslintrc.json          # ESLint kuralları
├── knip.json               # Unused dependency/export denetim ayarları
├── next.config.js          # Next.js yapılandırması
├── package.json            # Bağımlılıklar ve CI komutları
└── tsconfig.json           # TypeScript yapılandırması
```

## 🗺️ Sayfa Rotaları (Site Haritası)

- **`/` (Ana Sayfa / Hakkımda)**: Karşılama, kişisel hikaye, biyografi ve öne çıkan teknik arka plan.
- **`/services`**: Sunulan profesyonel hizmetler (AI, Otomasyon, Mühendislik).
- **`/career`**: İş deneyimi ve eğitim kronolojisi.
- **`/projects`**: Portfolyo çalışmaları ve detaylı teknik açıklamalar.
- **`/skills`**: Teknik yetkinlikler ve araçlar galerisi.
- **`/certifications`**: Alınan profesyonel sertifikalar (IBM, McKinsey vb.).
- **`/contact`**: İletişim bilgileri ve iletişim formu.

## ⚖️ Yasal ve Uyumluluk

- **`data/LegalContent.ts`**: Gizlilik politikası ve kullanım şartları verileri.
- **`components/ui/CookieConsent.tsx`**: GDPR uyumlu çerez bildirim bileşeni.

## 🧪 CI / CD & Kalite Kontrol (5 Test + Build)

Projede kod kalitesini ve mimari bütünlüğü korumak için 5 aşamalı CI testi + build süreci tanımlanmıştır (`npm run ci`):

1. **Type Check** (`npm run typecheck`): `tsc --noEmit` ile strict TypeScript tip denetimi.
2. **Lint** (`npm run lint`): `next lint` ile ESLint kod standartları kontrolü.
3. **Knip** (`npm run knip`): `knip` ile kullanılmayan bağımlılık, dosya ve export'ların tespiti.
4. **Madge** (`npm run madge`): `madge` ile modül bağımlılık grafiği üretimi.
5. **Architecture Check** (`npm run architecture-check`): `madge --circular` ile dairesel bağımlılık (circular dependency) denetimi.
6. **Production Build** (`npm run build`): Next.js statik ve dinamik sayfa derlemesi.

## 🛠️ Teknik Araçlar

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animasyon**: Framer Motion & Lottie
- **Backend/AI**: Resend (Email), Groq SDK (AI Chat)
- **Güvenlik/Yasal**: GDPR & KVKK Hazır (Gizlilik ve Çerez Politikası)
- **Kalite / CI**: Knip, Madge, ESLint, TypeScript
- **Deployment**: Vercel

---

### Son Güncelleme: 26 Temmuz 2026

