import { useState } from "react";
import ExitSvg from "./ExitSvg";
import Logo from "./logo";

const Chatbox = ({ isOpen, setOpen }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if(message === "") return;
    setMessages(currentMessages => [...currentMessages,message]);
    setMessage("");
  }
  return (
    <div className={`chatbox ${isOpen ? "open" : "closed"}`}>
      <div className="frame">
        <Logo />
        <ExitSvg onClick={() => setOpen(false)} />
      </div>

      <div className="chatbox-body">
        <div className="messages">
          <div className="message out">Hallo</div>
          <div className="message in">Hallo</div>'
          {messages.map((message) => (
            <div className="message out">{message}</div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="footer">
          <input
            className="input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button>{">"}</button>
        </form>
      </div>
    </div>
  );
};

export default Chatbox;
