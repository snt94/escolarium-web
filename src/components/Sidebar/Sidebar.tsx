"use client"
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { sidebarLinks } from "./SidebarConfig";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <div
        className={`
          fixed top-0 left-0 h-full 
          bg-gray-900 text-white
          transition-all duration-300 ease-in-out
          ${isOpen ? "w-64" : "w-16"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          <span className={`${isOpen ? "block" : "hidden"} font-bold`}>
            Escolarium
          </span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Links do menu */}
        <nav className="mt-4">
          <ul className="space-y-2">
            {sidebarLinks.map((link, i) => (
              <SidebarItem key={i} {...link} isOpen={isOpen} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
