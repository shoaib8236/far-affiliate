import { Input } from "antd";
import React from "react";
import { FiSearch } from "react-icons/fi";

const RoundedSearchInput = (props) => {
  const { onChange, placeholder = "Search" } = props;

  return (
    <div className="flex h-[44px] border shadow-input bg-white w-full rounded-lg px-[15px] items-center">
      <FiSearch className=" text-2xl text-primary" />
      <div className="h-[30px] bg-gray-200 ml-3 mr-1 w-[1px]"></div>
      <Input placeholder={placeholder} onChange={onChange} bordered={false} />
    </div>
  );
};

export default RoundedSearchInput;
