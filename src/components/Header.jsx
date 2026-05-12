import { useState } from "react";
import logo from "url:../../images/logo.png";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  console.log("header rendered")

  function toggleBtn() {
    setIsLoggedIn(!isLoggedIn)
  }

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
          <button onClick={toggleBtn}>{isLoggedIn ? "Logout" : "Login" }</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
