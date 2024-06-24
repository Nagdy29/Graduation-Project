import { useState } from "react";
import { Chatbot } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { IoLogoWechat } from "react-icons/io5";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import config from "./config";

const Chatbott = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const handleToggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div>
      <div>
        {showChatbot && (
          <div className="chatbot-popup">
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>
        )}
        <button className="chatbot-toggle-button" onClick={handleToggleChatbot}>
          <IoLogoWechat size={38} />
        </button>
      </div>
    </div>
  );
};

export default Chatbott;
