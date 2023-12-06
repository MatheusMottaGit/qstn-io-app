import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";

const Profile = () => {
  return (
    <div className="flex items-center gap-3 text-left">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
      </Avatar>
      <p className="max-w-[140px] text-sm leading-snug">
        Matheus
        <a
          href="/api/auth/logout"
          className="block text-red-400 hover:text-red-300"
        >
          Sair
        </a>
      </p>
    </div>
  );
};

export default Profile;
