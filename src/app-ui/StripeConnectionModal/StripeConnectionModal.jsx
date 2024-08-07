import React from "react";
import StyledModal from "../StyledModal/StyledModal";
import { Form, Input } from "antd";
import { emailRule } from "../../utils/rules";
import Button from "../Button/Button";

const StripeConnectionModal = (props) => {
  const { open, onClose = () => {} } = props;

  return (
    <StyledModal width={600} open={open} onClose={onClose}>
      <div>
        <h1 className="text-center mb-6 font-medium">
          We use Stripe to pay your commissions
        </h1>
        <p className="text-sm mb-4">
          If you already have a Stripe account set up in the same country where
          you will be working, you can enter your email below. But, if your
          account is in a different currency from the country where you'll be
          working and getting paid, you may have to pay extra fees and taxes
          when Stripe converts the money. This could affect how much money you
          actually receive from us.
        </p>
        <Form layout="vertical" className="fc-style-placeholder">
          <Form.Item name="email" label="Email" rules={emailRule}>
            <Input
              className="styled-input"
              placeholder="Please enter your valid email"
            />
          </Form.Item>
          <div className="flex justify-between items-center">
            <a href="#" className="text-primary">
              I don't have a stripe account
            </a>
            <Button>Connect</Button>
          </div>
        </Form>
      </div>
    </StyledModal>
  );
};

export default StripeConnectionModal;
