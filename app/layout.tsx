//- app/layout.tsx

import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "./provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
        <ReactQueryProvider>
          <Header />
          
          <main className="container mx-auto px-4 py-4 mt-20">
            {children}
          </main>
          
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
