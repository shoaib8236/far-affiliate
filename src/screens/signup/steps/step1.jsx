import { Form, Input, Upload } from "antd";
import React, { useState } from "react";
import AntImageCrop from "../../../app-ui/AntImageCrop/AntImageCrop";
import Button from "../../../app-ui/Button/Button";
import { Link } from "react-router-dom";

const Step1 = () => {
  const [profile, setProfile] = useState(null);

  const handleFileChange = (file) => {
    setProfile(file);
  };

  return (
    <Form
      autoComplete="off"
      layout="vertical"
      className="flex-grow flex flex-col far-gap-sm justify-between overflow-hidden"
    >
      <div className="flex-grow overflow-auto hide-scrollbar">
        <div className="flex far-gap-sm m-auto w-max items-start">
          <Form.Item className="mb-0" name={"profileImage"}>
            <AntImageCrop onChange={handleFileChange}>
              {profile?.previewUrl ? (
                <>
                  <div className="overflow-hidden w-[98px] h-[98px] rounded-lg cursor-pointer text-center">
                    <img src={profile?.previewUrl} />
                  </div>
                </>
              ) : (
                <div className="border w-[98px] h-[98px] py-1 px-2  rounded-lg cursor-pointer text-center">
                  <span className="text-[14px] leading-none">
                    {" "}
                    + Upload you profile image
                  </span>
                </div>
              )}
            </AntImageCrop>
          </Form.Item>
          <p className="max-w-[300px] text-sm">
            You can change it later, but this will be used on your outbound
            marketing channels from out Foodchoo Affiliate platform. Your
            Prospects and Customers will see the image <br />{" "}
            <span className="text-primary text-md">JPG, PNG, 1mb maximum</span>
          </p>
        </div>
        <Form.Item label="Your personal name">
          <Input placeholder="John smith" className="styled-input" />
        </Form.Item>
        <Form.Item label="Your business name">
          <Input className="styled-input" placeholder="No gmail, hotmail etc" />
        </Form.Item>
        <Form.Item label="phone">
          <Input className="styled-input" placeholder="Your mobile number" />
        </Form.Item>
        <Form.Item label="Password">
          <Input.Password
            className="styled-input"
            placeholder="At least 8 character"
          />
        </Form.Item>
        <Form.Item label="Confirm Password">
          <Input.Password
            className="styled-input"
            placeholder="At least 8 character"
          />
        </Form.Item>
      </div>
      <div className="col-center mb-6">
        <Button padding="px-8">Next</Button>
        <Link className="mt-2 text-sm">
          Already have an account ? <span className="text-primary">Login</span>
        </Link>
      </div>
    </Form>
  );
};

export default Step1;
