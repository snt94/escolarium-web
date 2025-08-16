import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

export default function Sidebar({ isOpen, toggle }: SidebarProps) {
  return (
    <aside
      className={`bg-gray-800 text-white transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      } min-h-screen flex flex-col`}
    >
      <div className={`flex ${isOpen ? "justify-end" : "justify-center"} p-2`}>
        <button
          onClick={toggle}
          className={`p-4 text-right hover:bg-gray-700 flex items-center justify-center gap-2 ${
            isOpen ? "justify-end" : "justify-center"
          }`}
        >
          ☰
        </button>
      </div>
      <nav className="flex flex-col gap-2 p-2">
        <Link
          href="/"
          className="hover:bg-gray-700 p-2 rounded flex items-center gap-2"
        >
          {isOpen && <span>Home</span>}
        </Link>
        <Link
          href="/dashboard"
          className="hover:bg-gray-700 p-2 rounded flex items-center gap-2"
        >
          {isOpen && <span>Dashboard</span>}
        </Link>
        <Link
          href="/students"
          className="hover:bg-gray-700 p-2 rounded flex items-center gap-2"
        >
          {isOpen && <span>Students</span>}
        </Link>
      </nav>
    </aside>
  );
}
