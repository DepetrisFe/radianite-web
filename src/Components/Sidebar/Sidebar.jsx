import React, { useState } from "react";
import { Link } from "react-router-dom";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import CasinoIcon from "@material-ui/icons/Casino";
import PhotoAlbumIcon from "@material-ui/icons/PhotoAlbum";
import MapIcon from "@material-ui/icons/Map";
import FormatPaintIcon from "@material-ui/icons/FormatPaint";
import AddIcon from "@material-ui/icons/Add";
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
          <PeopleOutlineIcon className="icon" />
          <p>Agents</p>
        </Link>
        <Link to="/Buddies" className="individualOption">
          <CasinoIcon className="icon" />
          <p>Buddies</p>
        </Link>
        <Link to="/Cards" className="individualOption">
          <PhotoAlbumIcon className="icon" />
          <p>Cards</p>
        </Link>
        <Link to="/maps" className="individualOption">
          <MapIcon className="icon" />
          <p>Maps</p>
        </Link>
        <Link to="/Sprays" className="individualOption">
          <FormatPaintIcon className="icon" />
          <p>Sprays</p>
        </Link>
        <Link to="/weapons" className="individualOption">
          <AddIcon className="icon" />
          <p>Weapons</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
