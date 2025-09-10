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
      <body className="bg-gray-100">
        {children}
      </body>
    </html>
  );
}