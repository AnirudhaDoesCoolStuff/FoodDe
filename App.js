import React from "react";
import ReactDOM from "react-dom/client";

const elem = <p>I am paragraph tag </p>;
const Title = (
  <div>
    {elem}
    <h1> Zwiggyyyyyy </h1>
  </div>
);

const Menu = () => {
  return (
    <div>
      {Title}
      <ul>
        <li> Dosa </li>
        <li> Idli </li>
        <li> Poori </li>
      </ul>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Menu />);
