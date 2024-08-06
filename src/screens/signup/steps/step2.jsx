import React from "react";

import DummyQr from "../../../assets/images/download.png";
import { Form, Input } from "antd";
import Button from "../../../app-ui/Button/Button";
import { Link } from "react-router-dom";

const Step2 = () => {
  return (
    <>
      <Form
        autoComplete="off"
        layout="vertical"
        className="flex-grow flex flex-col far-gap-sm justify-between overflow-hidden"
      >
        <div className="flex-grow overflow-auto hide-scrollbar">
          <div>
            <p className="text-sm">
              Please scan the QR Code with Google Authenticator app.
            </p>
            <div className="flex items-center">
              <img src={DummyQr} alt="" />{" "}
              <Button theme="light">Regenerate QR Code</Button>
            </div>
            <p className="text-sm">
              Please provide your verification codes below.
            </p>
          </div>
          <div className="mt-12">
            <Form.Item>
              <Input
                className="styled-input"
                placeholder="Your Google Authenticator code"
              />
            </Form.Item>
            <Form.Item>
              <Input
                className="styled-input"
                placeholder="Enter your code we just emailed you"
              />
            </Form.Item>
            <Form.Item>
              <div className="flex items-center justify-between">
                <Button theme="light">Resent email code</Button>
                <Button padding="px-8">Verify</Button>
              </div>
            </Form.Item>
          </div>
        </div>
        <div className="mb-4 text-center">
          <Link to="/login" className="mt-2 text-sm">
            Already have an account ?{" "}
            <span className="text-primary">Login</span>
          </Link>
        </div>
      </Form>
    </>
  );
};

export default Step2;
