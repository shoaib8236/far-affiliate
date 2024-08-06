import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";

const AntImageCrop = ({
  defaultImageUrl = "",
  loading = false,
  onChange = () => {},
  className = "flex far-gap-sm items-center",
  type = "profile",
  children = null,
}) => {
  const uploadRef = useRef();

  const [fileData, setFileData] = useState({
    file: null,
    previewUrl: null,
  });

  useEffect(() => {
    setFileData({
      file: null,
      previewUrl: defaultImageUrl,
    });
  }, [defaultImageUrl]);

  const handleFileChange = (file) => {
    const fileData = {
      file: file,
      previewUrl: URL.createObjectURL(file),
    };
    setFileData(fileData);
    onChange(fileData);

    uploadRef.current.clearFileList();
  };

  const beforeUpload = (file) => {
    handleFileChange(file);
    return false;
  };

  const aspectRatio = type === "profile" ? 1 : 520 / 150;

  return (
    <div className={`${className}`}>
      <ImgCrop
        showGrid
        cropShape={type === "profile" ? "round" : "rect"}
        modalClassName="styled-crop-modal"
        aspect={aspectRatio}
      >
        <Upload
          ref={uploadRef}
          maxCount={1}
          beforeUpload={beforeUpload}
          showUploadList={false}
          accept="image/*"
        >
          {children}
        </Upload>
      </ImgCrop>
    </div>
  );
};

AntImageCrop.propTypes = {
  defaultImageUrl: PropTypes.string,
  loading: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default AntImageCrop;
