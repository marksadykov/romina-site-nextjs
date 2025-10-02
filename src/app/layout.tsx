import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Дизайн интерьера и мягкая мебель",
  description: "Создаем уникальные интерьеры и мягкую мебель на заказ. Учитываем все ваши пожелания, даже самые необычные.",
  keywords: "дизайн интерьера, мягкая мебель, мебель на заказ, интерьер, дизайн",
  openGraph: {
    title: "Дизайн интерьера и мягкая мебель",
    description: "Создаем уникальные интерьеры и мягкую мебель на заказ. Учитываем все ваши пожелания, даже самые необычные.",
    type: "website",
    locale: "ru_RU",
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
    <html lang="ru">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
