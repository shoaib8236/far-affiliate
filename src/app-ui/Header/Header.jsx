import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const { title, children, backPath = null } = props;

  const navigate = useNavigate();

  const onBack = () => {
    if (backPath) {
      navigate(backPath);
      return;
    }

    navigate(-1);
  };

  return (
    <div className="min-h-[77px] bg-[#212121] bg-opacity-5 flex justify-between items-center px-6 shadow w-full">
      <div className="flex items-center">
        <Button onClick={onBack} theme="light" iconStyle>
          <LeftOutlined className="text-xl text-gray-600" />
        </Button>
        <h3 className="mb-[1px] text-[22px] font-semibold">{title}</h3>
      </div>
      {children}
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  backPath: PropTypes.string,
};

export default Header;
