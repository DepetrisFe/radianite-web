import React from "react";

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
