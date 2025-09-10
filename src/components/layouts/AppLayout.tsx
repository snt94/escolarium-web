import Sidebar from "@/components/Sidebar/Sidebar";
import "@/app/globals.css";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="flex bg-gray-100">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  );
}
