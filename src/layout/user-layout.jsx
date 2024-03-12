import React from "react";
import { Link, Outlet } from "react-router-dom";

export const UserLayout = () => {
  return (
    <div>
      <div className="flex items-center gap-5 border border-black">
        <Link to="/users">Profile</Link>
        <Link to="/users/address">Addres</Link>
      </div>
      <Outlet />
    </div>
  );
};
