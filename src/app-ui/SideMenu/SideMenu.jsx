import React from "react";
import Logo from "../../assets/app.svg";
import Avatar from "../Avatar/Avatar";
import { FaAngleDown } from "react-icons/fa";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import { Dropdown } from "antd";

const SideMenu = () => {
  return (
    <div className="h-full px-2 bg-[#212121] bg-opacity-5 shadow flex flex-col">
      <div className="border-b border-gray-200 flex items-center h-[77px] mb-4">
        <img className="m-auto" src={Logo} alt="logo" />
      </div>
      <Dropdown
        dropdownRender={() => (
          <div className="dropdown-wrapper">
            <Button
              theme="gray-100"
              className="w-full"
              align="left"
              rounded="rounded-none"
            >
              Logout
            </Button>
          </div>
        )}
      >
        <div className="flex px-4 items-center far-gap-sm cursor-pointer">
          <Avatar />{" "}
          <div>
            <h3 className="text-sm font-medium leading-none mb-0">
              Shoaib raza
            </h3>
            <p className="text-xs font-medium">shoaib.raza.dev@gmail.com</p>
          </div>
          <div className="w-max- ml-auto">
            <Button
              className="ml-auto"
              theme="light"
              textColor="text-black"
              size="sm"
            >
              <FaAngleDown />
            </Button>
          </div>
        </div>
      </Dropdown>
      <div className="flex-grow flex flex-col py-2">
        <NavLink to={"/dashboard"} className={"menu-link-style"}>
          Dashboard
        </NavLink>
        <NavLink to={"/chat-establishment"} className={"menu-link-style"}>
          Chat Establishment
        </NavLink>
        <NavLink to={"/manage-establishment"} className={"menu-link-style"}>
          Mange Establishment
        </NavLink>
        <NavLink to={"/payments"} className={"menu-link-style"}>
          Payments
        </NavLink>
        <NavLink to={"/invite"} className={"menu-link-style"}>
          Invite
        </NavLink>
        <NavLink to={"/support-chat"} className={"menu-link-style"}>
          Support Chat
        </NavLink>
        <NavLink to={"/setting"} className={"menu-link-style"}>
          Setting
        </NavLink>
      </div>
    </div>
  );
};

export default SideMenu;
