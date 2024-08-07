import React from "react";
import Avatar from "../Avatar/Avatar";

const SupportChatMessageBox = (props) => {
  const { isSender = false, message = "" } = props;

  const renderWrapperClass = () => {
    switch (!isSender) {
      case true:
        return "flex-row-reverse";
      case false:
        return "flex-row";
    }
  };

  const renderMessageBoxClass = () => {
    switch (!isSender) {
      case true:
        return "mr-4 rounded-[15px] rounded-tr-[2px] text-right bg-primary text-white";
      case false:
        return "bg-gray-100 ml-4 rounded-[15px] rounded-tl-[2px]";
    }
  };

  return (
    <div className={`flex ${renderWrapperClass()}`}>
      <Avatar size={"w-[60px] h-[60px]"} />
      <div
        className={`${renderMessageBoxClass()} mt-[30px] mb-[20px] p-5 pl-2 relative`}
      >
        <p className="text-base mb-2">{message}</p>
        <span className="text-sm leading-none">Today 09:04 PM</span>
      </div>
    </div>
  );
};

export default SupportChatMessageBox;
