import React, { useMemo } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({
  className = "",
  children,
  onClick = () => {},
  htmlType = "button",
  theme = "primary",
  size = "md",
  disabled = false,
  hoverType = "theme",
  fontWeight = "font-medium",
  rounded = "rounded-lg",
  textColor = "",
  loading = false,
  iconStyle = false,
  padding = "",
  align = "center",
  autoHeight = false,
}) => {
  // Adjust theme and hoverType based on disabled and loading state
  // if (disabled) theme = "disabled";
  if (loading || disabled) hoverType = "none";

  // Memoize class name computation
  const buttonClassNames = useMemo(() => {
    const renderTheme = () => {
      if (theme.includes("outlined")) {
        const color = theme.split("-")[1];
        return `border border-${color} ${textColor || `text-${color}`}`;
      }
      if (theme.includes("gray"))
        return `bg-gray-${theme.split("-")[1] ? theme.split("-")[1] : 200}`;

      switch (theme) {
        case "primary":
          return "bg-primary";
        case "secondary":
          return "bg-secondary";
        case "danger":
          return "bg-danger";
        case "light":
          return "bg-transparent";
        case "tertiary":
          return "bg-tertiary";
        case "gray":
          return "bg-gray-200";
        case "success":
          return "bg-success";

        case "disabled":
          return "";
        default:
          return "";
      }
    };

    const renderTextColor = () => {
      if (!textColor) {
        switch (theme) {
          case "primary":
          case "secondary":
          case "danger":
          case "disabled":
            return "text-white";
          case "light":
          case "tertiary":
            return "text-primary";
          case "success":
            return "text-white";
          case "gray":
            return "text-gray-600";

          default:
            return "";
        }
      }
      return textColor ? `${textColor}` : "";
    };

    const renderPadding = () => {
      if (iconStyle) return "";
      if (padding) return padding;
      switch (size) {
        case "lg":
          return "px-8";
        case "md":
          return "px-6";
        case "sm":
          return "px-3";
        case "xs":
          return "px-2";
        default:
          return "px-3 py-1";
      }
    };

    const renderHeight = () => {
      if (autoHeight) return "h-auto";
      switch (size) {
        case "lg":
          return iconStyle ? "min-w-12 w-12 h-12" : "h-[48px] min-w-max";
        case "md":
          return iconStyle
            ? "min-w-[34px] w-[34px] h-[34px]"
            : "h-[34px] min-w-max";
        case "sm":
          return iconStyle ? "min-w-8 w-8 h-8" : "h-[35px] text-sm min-w-max";
        case "xs":
          return iconStyle ? "min-w-6 w-6 h-6" : "h-[24px] text-xs";

        default:
          return "";
      }
    };

    const renderAlign = () => {
      switch (align) {
        case "left":
          return "justify-start";
        case "center":
          return "justify-center";
        case "right":
          return "justify-end";
        default:
          return "justify-center";
      }
    };

    const renderHoverType = () => {
      switch (hoverType) {
        case "theme":
          return "hover:opacity-60 active:opacity-100";
        case "light":
          return "hover:bg-gray-100 active:bg-gray-50";
        case "none":
          return "";
        default:
          return "hover:bg-secondary hover:text-white hover:border-secondary";
      }
    };

    return classNames(
      "overflow-hidden relative leading-none flex items-center",
      className,
      renderTheme(),
      renderPadding(),
      renderHeight(),
      renderHoverType(),
      renderTextColor(),
      renderAlign(),
      `${fontWeight}`,
      `${rounded}`,
      `${disabled ? "cursor-not-allowed opacity-40" : "cursor-pointer"}`,
      { "cursor-not-allowed opacity-50": loading }
    );
  }, [
    className,
    theme,
    size,
    hoverType,
    textColor,
    fontWeight,
    rounded,
    loading,
    iconStyle,
    padding,
    autoHeight,
  ]);

  return (
    <button
      onClick={onClick}
      type={htmlType}
      className={buttonClassNames}
      disabled={disabled || loading}
    >
      <span
        className={`${
          loading ? "opacity-0" : "opacity-100"
        } max-w-max text-sm flex items-center far-gap-xs leading-none`}
      >
        {children} {iconStyle}
      </span>
      {loading && (
        <span className="max-w-max m-auto absolute inset-0 flex-center">
          <LoadingOutlined className="text-xl" />
        </span>
      )}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  htmlType: PropTypes.string,
  theme: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  hoverType: PropTypes.string,
  fontWeight: PropTypes.string,
  rounded: PropTypes.string,
  textColor: PropTypes.string,
  loading: PropTypes.bool,
  iconStyle: PropTypes.bool,
  padding: PropTypes.string,
  autoHeight: PropTypes.bool,
};

export default Button;
