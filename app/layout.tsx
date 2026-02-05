import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "FCY HOMES - Professional Construction & Building Services in Auckland, NZ",
    template: "%s | FCY HOMES"
  },
  description: "FCY HOMES provides professional residential construction, design & build, house construction, and subdivision services in Auckland, New Zealand. Licensed builders with 15+ years of experience.",
  keywords: [
    "construction Auckland",
    "house builders Auckland",
    "residential construction New Zealand",
    "design and build Auckland",
    "subdivision Auckland",
    "home builders NZ",
    "new home construction",
    "building company Auckland",
    "licensed builders Auckland",
    "FCY HOMES"
  ],
  authors: [{ name: "FCY HOMES Limited" }],
  creator: "FCY HOMES Limited",
  publisher: "FCY HOMES Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fcyhomes.co.nz'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "FCY HOMES - Professional Construction Services in Auckland",
    description: "Professional residential construction, design & build, and subdivision services in Auckland, New Zealand. Licensed builders with 15+ years of experience.",
    url: 'https://fcyhomes.co.nz',
    siteName: 'FCY HOMES',
    locale: 'en_NZ',
    type: 'website',
    images: [
      {
        url: '/fcy-homes-logo.jpg',
        width: 1200,
        height: 630,
        alt: 'FCY HOMES - Professional Construction Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "FCY HOMES - Professional Construction Services",
    description: "Professional residential construction, design & build, and subdivision services in Auckland, New Zealand.",
    images: ['/fcy-homes-logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
