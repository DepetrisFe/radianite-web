import React from "react";
import { Link } from "react-router-dom";

const WeaponsList = (props) => {
  return (
    <div /* onClick={() => console.log("nombre: " + props.datos.displayName)} */
    >
      <div>
        <Link to={`/weapons/skins/${props.datos.uuid}`}>
          <img src={props.datos.killStreamIcon} alt={props.datos.displayName} />
        </Link>
      </div>
    </div>
  );
};

export default WeaponsList;
