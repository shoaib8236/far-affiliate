import React from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "../app-ui/SideMenu/SideMenu";

const Layout = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-grow">
        <div className="w-[275px] min-w-[275px]">
          <SideMenu />
        </div>
        <div className="h-full flex-grow flex flex-col overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
