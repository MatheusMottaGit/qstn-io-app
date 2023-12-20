"use client";
import { DraftingCompass, Globe2 } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";
import Profile from "./profile";

const links = [
  {
    page: "Home",
    path: "/roles",
  },
  {
    page: "Quizzes",
    path: "/roles/quizzes",
  },
  {
    page: "Settings",
    path: "/roles/settings",
  },
];

const Menubar = () => {
  const currentPath = usePathname();

  return (
    <header className="w-screen h-12 px-3 py-4 bg-zinc-50 flex items-center justify-between gap-10 shadow">
      <div className="flex items-center gap-8">
        <div></div>

        <ul className="flex items-center gap-4">
          {links.map((link) => {
            return (
              <a
                key={link.path}
                data-path={
                  currentPath === link.path ||
                  currentPath.startsWith(`roles/${link.path}/`)
                }
                className="text-xs text-slate-400 font-medium data-[path=true]:underline data-[path=true]:underline-offset-2"
                href={`${link.path}`}
              >
                {link.page}
              </a>
            );
          })}
        </ul>
      </div>

      <Profile />
    </header>
  );
};

export default Menubar;
