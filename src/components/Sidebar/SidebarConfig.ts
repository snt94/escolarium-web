import { Home, Users, Info } from "lucide-react";

export interface SidebarLink {
  label: string;
  icon: React.ElementType;
  path: string;
}

export const sidebarLinks: SidebarLink[] = [
  {
    label: "Dashboard",
    icon: Home,
    path: "/dashboard",
  },
  {
    label: "Estudantes",
    icon: Users,
    path: "/students",
  },
  {
    label: "Informações",
    icon: Info,
    path: "/info",
  },
  {
    label: "Teste",
    icon: Info,
    path: "/test",
  },
];