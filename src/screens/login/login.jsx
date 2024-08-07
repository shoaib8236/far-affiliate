import { Form, Input } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../app-ui/Button/Button";
import Logo from "../../assets/app.svg?react";
import HandShakeImage from "../../assets/images/view-professional-handshake-business-people.jpg";
import { emailRule, requiredRule } from "../../utils/rules";
import DummyQr from "../../assets/images/download.png";

const Login = () => {
  const navigate = useNavigate();

  const [isVerification, setIsVerification] = useState(false);
  const [isQrCode, setIsQrCode] = useState(false);

  const onSignup = () => {
    navigate("/signup/step-1", {
      state: {
        formData: null,
        step: 1,
      },
    });
  };

  return (
    <div className="h-full flex fc-style-placeholder overflow-hidden">
      <div className="flex-1 relative">
        <div className="w-full h-full absolute inset-0 z-10 bg-primary opacity-50"></div>
        <img
          className="h-full w-full object-cover"
          src={HandShakeImage}
          alt=""
        />
      </div>
      <div className="flex-1 center h-full flex flex-col overflow-hidden">
        <div className="flex overflow-auto w-full">
          <div className="rounded-lg p-6 w-full max-w-[480px] mx-auto">
            <div className="col-center far-gap-md">
              <img className="w-[240px]" src={Logo} alt="logo" />
              <h2 className="my-10 font-medium">Affiliate Portal</h2>

              {isVerification && isQrCode ? (
                <div>
                  <p className="mb-20">
                    Please scan the QR Code with Google Authenticator app.
                  </p>
                  <img src={DummyQr} alt="" />
                </div>
              ) : (
                <></>
              )}

              {isVerification && (
                <p className="mb-20">
                  Please provide your verification codes below.
                </p>
              )}
            </div>
            {isVerification ? (
              <div className="">
                <Form layout="vertical" className="">
                  <Form.Item label="Email verification code">
                    <Input
                      className="styled-input"
                      placeholder="Your email verification code"
                      type="email"
                    />
                  </Form.Item>
                  <Form.Item label="Google authenticator code">
                    <Input
                      className="styled-input"
                      placeholder="Your google authenticator code"
                      type="email"
                    />
                  </Form.Item>

                  <Button className="ml-auto" padding="px-6">
                    Verify
                  </Button>
                </Form>
                <div className="flex justify-between py-8">
                  <Button theme="light">Generate QR Code</Button>
                  <Button theme="light">Resend Email Code</Button>
                </div>
              </div>
            ) : (
              <>
                <Form layout="vertical" className="label-semibold">
                  <Form.Item name="email">
                    <Input className="styled-input" placeholder="Email" />
                  </Form.Item>

                  <Form.Item name="password">
                    <Input.Password
                      className="styled-input"
                      placeholder="Password"
                    />
                  </Form.Item>
                </Form>
                <Button className="w-full">LOGIN</Button>
                <div className="my-6 text-primary">
                  <Button
                    onClick={onSignup}
                    theme="light"
                    fontWeight="font-normal"
                    to="/signup"
                  >
                    Signup as affiliate
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
