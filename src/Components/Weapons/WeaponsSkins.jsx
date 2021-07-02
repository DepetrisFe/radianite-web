import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const WeaponsSkins = () => {
  const { weapid } = useParams();
  console.log(weapid);

  //useState que rellena el array de weapons
  const [weaponById, setWeaponById] = useState([]);
  const baseUrl = `https://valorant-api.com/v1/weapons/${weapid}`;

  const getWeaponsByID = async () => {
    try {
      const result = await fetch(baseUrl);
      const finalResult = await result.json();
      setWeaponById(finalResult.data);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    getWeaponsByID();
  }, []);

  return <>{/* <div>{weaponById.map((item) => console.log(item))}</div> */}</>;
};

export default WeaponsSkins;
