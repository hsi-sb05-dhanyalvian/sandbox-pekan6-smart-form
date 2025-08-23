//- app/layout.tsx

import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "./provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BackToTopButton from "@/components/back-to-top";
import { Analytics } from "@vercel/analytics/next"

const fontSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Our Kitchen",
  description: "Place to share and discover recipes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} ${fontMono.variable} antialiase`}>
        <ReactQueryProvider>
          <Header />

          <div className="bg-main pt-20">
            <main className="container mx-auto px-4 py-4">
              {children}
            </main>
          </div>

          <BackToTopButton />
          <Footer />
        </ReactQueryProvider>
        <Analytics />
      </body>
    </html>
  );
}
