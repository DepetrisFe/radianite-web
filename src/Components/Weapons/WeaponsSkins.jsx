import React from "react";
import { useParams } from "react-router-dom";

const WeaponsSkins = () => {
  const { weapname } = useParams();
  console.log(weapname);
  return <div>todo ok!</div>;
};

export default WeaponsSkins;
