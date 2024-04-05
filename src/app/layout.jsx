
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Utilities/Navbar";
import Footer from "./components/Utilities/Footer"
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "rahmadianraihan || Web Portfolio",
  description: "Portfolio Website",
  icons: {
    icon: [
    '/favicon.ico?v=4',
  ],apple: [
    '/apple-touch-icon.png'
  ]
}, manifest: '/site.webmanifest'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="lg:w-10/12 w-full bg-black m-auto">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
        <div>
          
        </div>
        </body>
    </html>
  );
}
