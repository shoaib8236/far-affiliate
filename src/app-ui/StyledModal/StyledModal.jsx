import React from "react";
import { Modal } from "antd";
import PropTypes from "prop-types";

const StyledModal = (props) => {
  const { open, onClose, children, width = 500 } = props;

  return (
    <Modal
      className="styled-modal"
      centered
      footer={false}
      width={width}
      open={open}
      onCancel={onClose}
    >
      {children}
    </Modal>
  );
};

StyledModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  width: PropTypes.number,
};

export default StyledModal;
