# Proje Dosya Yapısı ve Site Haritası

Bu belge, **Mert Güneş Portfolio** projesinin klasör yapısını, dosya işlevlerini ve sayfa rotalarını açıklamaktadır.

## 📂 Klasör Yapısı

```text
Mert_Portfolio/
├── app/                    # Next.js App Router (Sayfalar ve API)
│   ├── (ana sayfalar)      # Ana rotalar (about, career, contact vb.)
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
└── utils/                  # Yardımcı fonksiyonlar ve animasyon sabitleri
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

## 🛠️ Teknik Araçlar

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animasyon**: Framer Motion & Lottie
- **Backend/AI**: Resend (Email), Groq SDK (AI Chat)
- **Güvenlik/Yasal**: GDPR & KVKK Hazır (Gizlilik ve Çerez Politikası)
- **Deployment**: Vercel

---

### Son Güncelleme: 23 Şubat 2026
