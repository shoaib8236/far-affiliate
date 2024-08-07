import React from "react";
import StyledModal from "../StyledModal/StyledModal";
import Button from "../Button/Button";

const WithdrawAlertModal = (props) => {
  const { open, onClose = () => {} } = props;

  return (
    <StyledModal width={520} open={open} onClose={onClose}>
      <div className="p-4">
        <p className="mb-6 text-[16px] text-center font-medium">
          Your wallet contents of <span className="text-primary">$0.00</span>{" "}
          will be returned to your Stripe a count, where you can then withdraw
          to whichever bank you connected to that Stripe account. This withdraw
          from us to your account can take up to 24 hours to complete
        </p>
        <div className="center">
          <Button onClick={onClose}>
            I understand + complete withdraw process
          </Button>
        </div>
      </div>
    </StyledModal>
  );
};

export default WithdrawAlertModal;
