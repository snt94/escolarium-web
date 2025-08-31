import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLink {
  label: string;
  href: string;
}

interface SidebarSectionProps {
  title: string;
  links: SidebarLink[];
}

// LÓGICA DE LINKS

export default function SidebarSection({ title, links }: SidebarSectionProps) {
  const pathname = usePathname();

  return (
    <div>
      <p className="text-gray-400 text-sm mb-2">{title}</p>
      <div className="flex flex-col gap-2">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-2 rounded transition ${
                isActive ? "bg-gray-700 font-semibold" : "hover:bg-gray-700"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
