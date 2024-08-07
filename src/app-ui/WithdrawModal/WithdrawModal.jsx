import React from "react";
import StyledModal from "../StyledModal/StyledModal";

const WithdrawModal = (props) => {
  const { open, onClose = () => {} } = props;

  return (
    <StyledModal open={open} onClose={onClose} width={520}>
      <div>
        <h1 className="text-primary">Wallet withdrawal</h1>
        <div></div>
      </div>
    </StyledModal>
  );
};

export default WithdrawModal;
