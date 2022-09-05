import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">PMS</span>
      <div className="icons">
        <div className="icon">
          <img src="/img/notification.svg" alt="" className="iconImg" />
          <div className="counter">2</div>
        </div>
        <div className="icon">
          <img src="/img/message.svg" alt="" className="iconImg" />
          <div className="counter">2</div>
        </div>
        <div className="icon">
          <img src="/img/settings.svg" alt="" className="iconImg" />
          <div className="counter">2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
