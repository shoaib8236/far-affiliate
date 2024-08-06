import React from "react";

const Avatar = (props) => {
  const {
    size = "w-10 h-10",
    rounded = "rounded-full",
    imageUrl = "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
  } = props;

  return <img className={`${size} ${rounded} object-cover`} src={imageUrl} />;
};

export default Avatar;
