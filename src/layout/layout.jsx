import React from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "../app-ui/SideMenu/SideMenu";

const Layout = () => {
  return (
    <div className="h-full flex flex-col overflow-hidden">
      <div className="flex flex-grow overflow-hidden">
        <div className="w-[275px] min-w-[275px]">
          <SideMenu />
        </div>
        <div className="h-full flex-grow flex flex-col overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
