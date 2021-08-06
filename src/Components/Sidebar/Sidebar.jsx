import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import CasinoIcon from "@material-ui/icons/Casino";
import PhotoAlbumIcon from "@material-ui/icons/PhotoAlbum";
import MapIcon from "@material-ui/icons/Map";
import FormatPaintIcon from "@material-ui/icons/FormatPaint";
import AddIcon from "@material-ui/icons/Add";

const Sidebar = () => {
  const classes = useStyles();
  const [toggled, setToggled] = useState("active");

  const onClickHandler = () => {
    if (toggled === "active") {
      setToggled("inactive");
    } else {
      setToggled("active");
    }
  };

  return (
    <div className={classes.leftSizer}>
      <div id="leftMenu" className={toggled}>
        <div className={classes.toggleBtn} onClick={() => onClickHandler()}>
          <span>&#9776;</span>
        </div>
        <Link to="/agents" className={classes.individualOption}>
          <PeopleOutlineIcon className={classes.icon} />
          <p>Agents</p>
        </Link>
        <Link to="/Buddies" className={classes.individualOption}>
          <CasinoIcon className={classes.icon} />
          <p>Buddies</p>
        </Link>
        <Link to="/Cards" className={classes.individualOption}>
          <PhotoAlbumIcon className={classes.icon} />
          <p>Cards</p>
        </Link>
        <Link to="/maps" className={classes.individualOption}>
          <MapIcon className={classes.icon} />
          <p>Maps</p>
        </Link>
        <Link to="/Sprays" className={classes.individualOption}>
          <FormatPaintIcon className={classes.icon} />
          <p>Sprays</p>
        </Link>
        <Link to="/weapons" className={classes.individualOption}>
          <AddIcon className={classes.icon} />
          <p>Weapons</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
