import { Input } from "antd";
import PropTypes from "prop-types";
import React, { useCallback, useRef, useState } from "react";
import { RiAttachment2, RiSendPlaneLine } from "react-icons/ri";
import Button from "../Button/Button";

const SupportChatInput = (props) => {
  const { disabled = false, inputFor = "support", id = "", bodyRef } = props;
  const { TextArea } = Input;
  const inputRef = useRef(null);
  const [message, setMessage] = useState("");

  const onEnter = useCallback((e) => {
    if (e.shiftKey && e.key === "Enter") {
      return;
    } else if (e.key === "Enter") {
      e.preventDefault();
      setMessage("");
    }
  }, []);

  const onSendClick = useCallback(() => {
    setMessage("");
  }, []);

  const onChange = useCallback((e) => {
    setMessage(e.target.value);
  }, []);

  return (
    <div className="flex items-center space-x-2 pr-5 border bg-white shadow-input rounded-lg">
      <TextArea
        ref={inputRef}
        value={message}
        onChange={onChange}
        onKeyPress={onEnter}
        disabled={disabled}
        placeholder="Type your message here"
        autoSize={{ minRows: 1, maxRows: 4 }}
        bordered={false}
        className="flex-grow hover:bg-transparent hide-scrollbar"
      />
      <Button theme="light" rounded="rounded-full" iconStyle>
        <RiAttachment2 className="text-primary text-3xl" />
      </Button>
      <Button
        theme="light"
        onClick={onSendClick}
        rounded="rounded-full"
        iconStyle
      >
        <RiSendPlaneLine className="text-3xl" />
      </Button>
    </div>
  );
};

SupportChatInput.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  inputFor: PropTypes.string,
};

export default React.memo(SupportChatInput);
