import Link from "next/link";

interface SidebarItemProps {
  label: string;
  icon: React.ElementType;
  path: string;
  isOpen: boolean;
}

export default function SidebarItem({
  label,
  icon: Icon,
  path,
  isOpen,
}: SidebarItemProps) {
  return (
    <li>
      <Link
        href={path}
        className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md cursor-pointer"
      >
        <Icon size={20} />
        <span
          className={`${
            isOpen ? "inline" : "hidden"
          } transition-opacity duration-200`}
        >
          {label}
        </span>
      </Link>
    </li>
  );
}
