import React, { useState } from "react";
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
    <div>
      <div id="leftMenu" className={toggled}>
        <div className="toggle-btn" onClick={() => onClickHandler()}>
          <span>&#9776;</span>
        </div>
        <ul></ul>
      </div>
    </div>
  );
};

export default Sidebar;
