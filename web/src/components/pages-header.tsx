import React from "react";
import Profile from "./profile";
import { Bell } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";

interface Props {
  pageTitle: string;
}

const PagesHeader = (props: Props) => {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-sm font-semibold">{props.pageTitle}</h1>

      <div className="flex items-center gap-3 text-slate-600">
        <Bell className="w-4 h-4" />

        <Avatar className="w-6 h-6">
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
      </div>
    </header>
  );
};

export default PagesHeader;
