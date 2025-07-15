import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SağlıkBu - Güvenilir Sağlık Bilgileri ve Uzman Doktor Tavsiyeleri",
  description: "Türkiye'nin en güvenilir sağlık platformu. Uzman doktorlardan sağlık tavsiyeleri, güncel tıp haberleri ve kapsamlı sağlık rehberleri için SağlıkBu'yu ziyaret edin.",
  keywords: ["sağlık", "doktor", "tıp", "sağlık rehberi", "hastalıklar", "tedavi", "sağlıklı yaşam"],
  authors: [{ name: "SağlıkBu Ekibi" }],
  creator: "SağlıkBu",
  publisher: "SağlıkBu",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://saglikbu.com",
    title: "SağlıkBu - Güvenilir Sağlık Bilgileri",
    description: "Türkiye'nin en güvenilir sağlık platformu. Uzman doktorlardan sağlık tavsiyeleri ve güncel tıp haberleri.",
    siteName: "SağlıkBu",
  },
  twitter: {
    card: "summary_large_image",
    title: "SağlıkBu - Güvenilir Sağlık Bilgileri",
    description: "Türkiye'nin en güvenilir sağlık platformu. Uzman doktorlardan sağlık tavsiyeleri ve güncel tıp haberleri.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
