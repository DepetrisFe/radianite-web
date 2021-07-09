import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const [toggled, setToggled] = useState("active");

  const onClickHandler = () => {
    if (toggled === "active") {
      setToggled("inactive");
    } else {
      setToggled("active");
    }
  };

  return (
    <div className="leftSizer">
      <div id="leftMenu" className={toggled}>
        <div className="toggle-btn" onClick={() => onClickHandler()}>
          <span>&#9776;</span>
        </div>
        <Link to="/agents" className="individualOption">
          <p>Agents</p>
        </Link>
        <Link to="/maps" className="individualOption">
          <p>Maps</p>
        </Link>
        <Link to="/Sprays" className="individualOption">
          <p>Sprays</p>
        </Link>
        <Link to="/weapons" className="individualOption">
          <p>Weapons</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
