
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
    <html lang="en" className="2xl:w-8/12 xl:w-10/12 bg-black m-auto min-h-screen">
      
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
