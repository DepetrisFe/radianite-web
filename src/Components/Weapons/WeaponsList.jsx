import React from "react";
import WeaponsSkins from "./WeaponsSkins";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const WeaponsList = (props) => {
  return (
    <div onClick={() => console.log("nombre: " + props.datos.displayName)}>
      <div>
        <img src={props.datos.killStreamIcon} alt={props.datos.displayName} />
      </div>
    </div>
  );
};

export default WeaponsList;
