import { Col, Form, Input, Row } from "antd";
import React from "react";
import { requiredRule } from "../../../utils/rules";
import Button from "../../../app-ui/Button/Button";
import { Link } from "react-router-dom";

const Step3 = () => {
  return (
    <Form
      autoComplete="off"
      layout="vertical"
      className="flex-grow flex flex-col far-gap-sm justify-between overflow-hidden"
    >
      <div className="flex-grow overflow-auto hide-scrollbar">
        <Row gutter={[20, 20]}>
          <Col span={24}>
            <Form.Item rules={requiredRule} label="Your business name">
              <Input
                className="styled-input"
                placeholder="Enter your registered business address as it appears on your government documents"
              />
            </Form.Item>
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            <Form.Item label="Unit / Building Number">
              <Input className="styled-input" placeholder="Optional" />
            </Form.Item>
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            <Form.Item label="Floor">
              <Input className="styled-input" placeholder="Optional" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Complete Address">
              <Input
                className="styled-input"
                placeholder="Click to find your address"
              />
            </Form.Item>
          </Col>
        </Row>
      </div>
      <div className="col-center mb-4">
        <Button padding="px-8">Next</Button>
        <Link className="mt-2 text-sm">
          Already have an account ? <span className="text-primary">Login</span>
        </Link>
      </div>
    </Form>
  );
};

export default Step3;
