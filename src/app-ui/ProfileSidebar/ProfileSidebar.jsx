import React from "react";
import PropTypes from "prop-types";
import Avatar from "../Avatar/Avatar";
import { FaCheck } from "react-icons/fa";
import CheckIcon from "../../assets/icons/tick.svg";
import { BsCheck } from "react-icons/bs";

const ProfileSidebar = (props) => {
  const {
    verified = false,
    avatarProps = {
      size: "w-[50px] h-[50px]",
      rounded: "rounded-full",
    },
    textProps: {
      text = "John Doe",
      textSize = "text-[20px]",
      textWeight = "font-medium",
      textColor = "text-primary",
      titleMargin = "mb-0",
    },
    subtext = "",
  } = props;

  return (
    <div className="flex items-center far-gap-md">
      <div className="relative">
        {verified && (
          <div className="bg-success h-[20px] w-[20px] center rounded-full absolute right-0 top-[6px] translate-x-[50%] -translate-y-[50%]">
            <BsCheck className="text-white text-lg" />
          </div>
        )}
        <Avatar {...avatarProps} />
      </div>
      <div>
        <h3 className={`${titleMargin} ${textSize} ${textWeight} ${textColor}`}>
          {text}
        </h3>
        {subtext && <p>{subtext}</p>}
      </div>
    </div>
  );
};

ProfileSidebar.propTypes = {
  verified: PropTypes.bool,
  avatarProps: PropTypes.shape({
    size: PropTypes.string,
    rounded: PropTypes.string,
  }),

  textProps: PropTypes.shape({
    text: PropTypes.string,
    textSize: PropTypes.string,
    textWeight: PropTypes.string,
    textColor: PropTypes.string,
    titleMargin: PropTypes.string,
  }),
  subtext: PropTypes.string,
};

ProfileSidebar.defaultProps = {
  verified: false,
  avatarProps: {
    size: "w-[50px] h-[50px]",
    rounded: "rounded-full",
  },
  textProps: {
    text: "John Doe",
    textSize: "text-[20px]",
    textWeight: "font-medium",
    textColor: "text-primary",
    titleMargin: "mb-0",
  },
  subtext: "",
};

export default ProfileSidebar;
