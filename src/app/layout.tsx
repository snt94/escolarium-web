"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <html lang="en">
      <body className="flex">
        <Sidebar isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
        <main className="flex-1 p-6 bg-gray-100 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}