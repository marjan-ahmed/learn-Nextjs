import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  icons: "https://www.governorsindh.com/_next/static/media/logo.9ff76f62.png",
  title: "Governor Initiative",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <Header />
      {children}
      
        </body>
      
    </html>
  );
}
