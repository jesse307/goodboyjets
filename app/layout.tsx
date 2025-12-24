import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Good Boy Jets - Your Tail-Wagging Private Jet Service",
  description: "Private jet charter with a playful twist! Fast, friendly, and always ready to fly. Book your flight today and travel in tail-wagging style.",
  icons: {
    icon: '/logo.svg',
  },
  openGraph: {
    title: "Good Boy Jets - Your Tail-Wagging Private Jet Service",
    description: "Private jet charter with a playful twist! Fast, friendly, and always ready to fly.",
    images: ['/logo.svg'],
    type: 'website',
    url: 'https://goodboyjets.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
