import React, { useState } from "react";
import Header from "../../app-ui/Header/Header";
import Button from "../../app-ui/Button/Button";
import { Form, Input } from "antd";
import PersonaModal from "../../app-ui/PersonaModal/PersonaModal";

const Setting = () => {
  const [personaModal, setPersonaModal] = useState(false);

  const togglePersonaModal = () => {
    setPersonaModal(!personaModal);
  };

  return (
    <div className="w-full">
      <Header title={"Setting"}></Header>
      <div className="p-4">
        {/* persona section */}
        <div className="pb-8 border-b mb-8">
          <h3 className="mb-3">Persona</h3>
          <div className="flex items-center">
            <p className="mb-0">Persona verified :</p>
            <div className="ml-6 flex far-gap-md items-center">
              <span className="text-danger font-semibold">Not Verified</span>{" "}
              <Button
                onClick={togglePersonaModal}
                autoHeight
                padding="px-4 py-2"
              >
                Verify Persona
              </Button>
            </div>
          </div>
        </div>

        {/* reset password section */}
        <div className="">
          <h3 className="mb-3">Reset Password</h3>
          <Form layout="vertical">
            <div className="flex far-gap-md">
              <Form.Item label="Current Password" className="flex-1">
                <Input
                  className="styled-input"
                  placeholder="Current Password"
                />
              </Form.Item>
              <Form.Item label="New Password" className="flex-1">
                <Input className="styled-input" placeholder="New Password" />
              </Form.Item>
              <Form.Item label="Confirm Password" className="flex-1">
                <Input
                  className="styled-input"
                  placeholder="Confirm Password"
                />
              </Form.Item>
            </div>
            <Button className="ml-auto">Update</Button>
          </Form>
        </div>
      </div>
      <PersonaModal open={personaModal} onClose={togglePersonaModal} />
    </div>
  );
};

export default Setting;
