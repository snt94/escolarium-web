import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Escolarium",
  description: "Nova forma de gestão escolar!",
};

interface RootLayoutProps {
  children: React.ReactNode;
  isOpen: boolean;
}

export default function RootLayout({ children, isOpen }: RootLayoutProps) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main
          className={`flex-1 transition-all duration-300 ease-in-out ml-${
            isOpen ? "64" : "16"
          }`}
        >
          {children}
          <Sidebar />
        </main>
      </body>
    </html>
  );
}
