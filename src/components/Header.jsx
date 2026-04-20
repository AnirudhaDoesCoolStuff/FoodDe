import logo from "url:../../images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={logo} className="logo" alt="Logo" width="220" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
