import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Escolarium",
  description: "Sistema de Gestão Escolar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="flex min-h-screen min-w-screen bg-gray-200">
        {children}
      </body>
    </html>
  );
}