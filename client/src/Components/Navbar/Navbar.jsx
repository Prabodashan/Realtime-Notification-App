import "./Navbar.css";
import { useState, useEffect } from "react";

const Navbar = ({ socket }) => {
  const [notification, setNotification] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    socket.on("getNotification", (data) => {
      setNotification((prev) => [...prev, data]);
    });
  }, [socket]);

  console.log(notification);

  const displayNotification = ({ senderName, type, index }) => {
    let action;
    if (type === 1) {
      action = "liked";
    } else if (type === 2) {
      action = "commented";
    } else {
      action = "shared";
    }
    return (
      <span className="notification" key={index}>
        {`${senderName} ${action} your post`}
      </span>
    );
  };

  const handleRead = () => {
    setNotification([]);
    setOpen(false);
  };

  return (
    <div className="navbar">
      <span className="logo">PMS</span>
      <div className="icons">
        <div className="icon" onClick={() => setOpen(!open)}>
          <img src="/img/notification.svg" alt="" className="iconImg" />

          {notification.length > 0 && (
            <div className="counter">{notification.length}</div>
          )}
        </div>
        <div className="icon">
          <img src="/img/message.svg" alt="" className="iconImg" />
        </div>
        <div className="icon">
          <img src="/img/settings.svg" alt="" className="iconImg" />
        </div>
      </div>
      {open && (
        <div className="notifications">
          {notification.map((n, index) => displayNotification(n, index))}
          <button className="btn" onClick={handleRead}>
            Mark as read
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
