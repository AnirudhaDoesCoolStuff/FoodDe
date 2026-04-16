import React from "react";
import ReactDOM from "react-dom/client";
import logo from "url:./images/logo.png";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

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

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="restaurant-container"></div>
    </div>
  );
};

const RestaurantCard = () => {};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
