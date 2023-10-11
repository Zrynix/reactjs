import ExitSvg from "./ExitSvg";
import Logo from "./logo";

const Chatbox = ({ isOpen, setOpen }) => {
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
          <div className="message out">Hallo</div>
          <div className="message in">Hallo</div> <div className="message out">Hallo</div>
          <div className="message in">Hallo</div> <div className="message out">Hallo</div>
          <div className="message in">Hallo</div> <div className="message out">Hallo</div>
          <div className="message in">Hallo</div> <div className="message out">Hallo</div>
          <div className="message in">Hallo</div> <div className="message out">Hallo</div>
          <div className="message in">Hallo</div> <div className="message out">Hallo</div>
          <div className="message in">Hallo</div> <div className="message out">Hallo</div>
          <div className="message in">Hallo</div> <div className="message out">Hallo</div>
          <div className="message in">Hallo</div> <div className="message out">Hallo</div>
          <div className="message in">Hallo</div> <div className="message out">Hallo</div>
          <div className="message in">Hallo</div>'
        </div>
        <div className="footer">
          <input className="input" />
          <button>
            >
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
