import { Drawer } from "antd";
import React from "react";
import Button from "../Button/Button";
import CloseIcon from "../../assets/icons/close.svg?react";
import PropTypes from "prop-types";

const SlideOut = (props) => {
  const {
    open = false,
    onClose = () => {},
    width = 540,
    height = "100%",
    title = "",
    placement = "right",
    className = "",
    headerClassName = "",
    titleChildren = null,
    header = true,
    titleProps = {
      size: "text-xl",
    },
    children = null,
    push = false,
    getContainer = null,
  } = props;

  return (
    <Drawer
      className={`styled-drawer ${className}`}
      open={open}
      onClose={onClose}
      width={width}
      height={height}
      push={push}
      placement={placement}
      getContainer={getContainer}
    >
      <div className="h-full flex flex-col overflow-hidden">
        {header && (
          <div className={`${headerClassName}`}>
            <div className="flex items-center justify-between far-gap-sm border-b border-gray-300 p-4">
              <div className="flex items-center">
                {titleChildren}{" "}
                <h1 className={`${titleProps?.size}`}>{title}</h1>
              </div>
              <Button size="md" iconStyle theme="light" onClick={onClose}>
                <CloseIcon />
              </Button>
            </div>
          </div>
        )}
        {children}
      </div>
    </Drawer>
  );
};

SlideOut.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string,
  placement: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  className: PropTypes.string,
  headerClassName: PropTypes.string,
  titleChildren: PropTypes.node,
  titleProps: PropTypes.shape({
    size: PropTypes.string,
  }),
  children: PropTypes.node,

  push: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  getContainer: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

export default SlideOut;
