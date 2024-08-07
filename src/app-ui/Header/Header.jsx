import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  const { title, children } = props;

  // back button missing

  return (
    <div className="min-h-[77px] bg-[#212121] bg-opacity-5 flex justify-between items-center px-6 shadow w-full">
      <h3 className="mb-0 leading-none text-2xl font-semibold">{title}</h3>
      {children}
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
