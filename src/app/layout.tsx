import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

// 1. Configure the fonts
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat" 
});

export const metadata: Metadata = {
  title: "Alpha Transfer Rhodes | VIP Transit",
  description: "Premium chauffeur services in Rhodes, Greece.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* 2. Apply font variables to the body */}
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased bg-alpha-black text-alpha-warm`}>
        {children}
      </body>
    </html>
  );
}