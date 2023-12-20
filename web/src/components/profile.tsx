import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Profile = () => {
  return (
    <div className="flex items-center gap-3 text-left">
      <Avatar className="w-7 h-7">
        <AvatarFallback>MM</AvatarFallback>
        <AvatarImage src="https://github.com/shadcn.png" />
      </Avatar>
    </div>
  );
};

export default Profile;
