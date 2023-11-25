"use client";
import {
  CalendarCheck2,
  CheckSquare,
  BookCopy,
  BookKey,
  BookType,
  ChevronRight,
  Blocks,
  LayoutGrid,
  Waypoints,
  Settings,
} from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    id: "1",
    icon: <LayoutGrid className="h-4 w-4" />,
    page: "Início",
    path: "/",
  },
  {
    id: "2",
    icon: <Waypoints className="w-4 h-4" />,
    page: "Serviços",
    path: "/frequencias",
  },
  {
    id: "3",
    icon: <BookCopy className="w-4 h-4" />,
    page: "Questionários",
    path: "/avaliacoes",
  },
  {
    id: "4",
    page: "Configurações",
    icon: <Settings className="w-4 h-4" />,
    path: "/conteudo",
  },
];

const Sidebar = () => {
  const currentPath = usePathname();

  return (
    <aside className="w-48 h-screen px-3 py-4 bg-zinc-50 flex flex-col gap-10 shadow">
      <div className="text-strong flex items-center gap-1 font-bold">
        <Blocks />
        qstn.ui
      </div>

      <ul className="flex flex-col gap-5 text-sm text-muted-foreground/50">
        {links.map((link) => {
          return (
            <li
              data-path={link.path === currentPath}
              key={link.id}
              className="rounded-md p-2 hover:bg-main hover:text-white transition-colors flex items-center justify-between data-[path=true]:bg-main data-[path=true]:text-white"
            >
              <div className="flex items-center gap-2">
                {link.icon}

                <a href={link.path}>{link.page}</a>
              </div>

              <ChevronRight className="w-4 h-4" />
            </li>
          );
        })}
      </ul>

      <div></div>
    </aside>
  );
};

export default Sidebar;
