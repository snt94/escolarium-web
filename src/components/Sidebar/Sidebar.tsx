"use client";

import { sidebarLinks } from "@/lib/sidebarLinks";
import SidebarSection from "./SidebarSection";

// PRINCIPAL COMPONENTE

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4">
      <div>
        {/* <img></img> Escolarium Logo */}
      <h2 className="flex text-xl font-bold mb-6 justify-center">Escolarium</h2>
      </div>
      <nav className="flex flex-col gap-6">
        {sidebarLinks.map((section) => (
          <SidebarSection
            key={section.section}
            title={section.section}
            links={section.links}
          />
        ))}
      </nav>
    </aside>
  );
}
