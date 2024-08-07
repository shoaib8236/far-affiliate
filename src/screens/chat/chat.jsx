import React from "react";
import Header from "../../app-ui/Header/Header";
import SupportChatInput from "../../app-ui/SupportChatInput/SupportChatInput";
import SupportChatMessageBox from "../../app-ui/SupportChatMessageBox/SupportChatMessageBox";

const Chat = () => {
  const fakeChat = [
    {
      id: 1,
      isSender: false,
      message: "Hello, how can I help you?",
    },
    {
      id: 2,
      isSender: true,
      message: "I have a few questions regarding my order.",
    },
    {
      id: 3,
      isSender: false,
      message: "Sure, I would be happy to assist you with that.",
    },
    {
      id: 4,
      isSender: true,
      message: "Firstly, when will my order be shipped?",
    },
    {
      id: 5,
      isSender: false,
      message: "Your order is scheduled to be shipped by tomorrow.",
    },
    {
      id: 6,
      isSender: true,
      message: "Great, thank you! Can I change my delivery address?",
    },
    {
      id: 7,
      isSender: false,
      message: "Yes, you can change it before the order is shipped.",
    },
    {
      id: 8,
      isSender: true,
      message: "Awesome, I would like to change it to my office address.",
    },
    {
      id: 9,
      isSender: false,
      message:
        "I have updated your delivery address to the provided office address.",
    },
    {
      id: 10,
      isSender: true,
      message: "Thank you for your help!",
    },
    {
      id: 11,
      isSender: false,
      message:
        "You're welcome! If you have any other questions, feel free to ask.",
    },
    {
      id: 12,
      isSender: true,
      message: "That's all for now. Have a great day!",
    },
    {
      id: 13,
      isSender: false,
      message: "You too! Take care.",
    },
  ];

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <Header title={"Support Chat"}></Header>
      <div className="flex-grow flex flex-col overflow-hidden">
        <div className="flex-grow overflow-auto p-4">
          {fakeChat?.map((item) => (
            <SupportChatMessageBox key={item.id} {...item} />
          ))}
        </div>
        <div className="p-4">
          <SupportChatInput />
        </div>
      </div>
    </div>
  );
};

export default Chat;
