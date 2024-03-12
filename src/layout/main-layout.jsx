import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="flex justify-between flex-col ">
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};
