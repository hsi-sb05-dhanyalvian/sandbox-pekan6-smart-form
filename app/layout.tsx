//- app/layout.tsx

import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "./provider";

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
  description: "A place to share and discover recipes",
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
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
