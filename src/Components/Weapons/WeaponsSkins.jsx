import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./weaponsSkins.css";

const WeaponsSkins = () => {
  const { weapid } = useParams();

  //useState que rellena el array de weapons
  const [individualWeapon, setIndividualWeapon] = useState([]);
  const baseUrl = `https://valorant-api.com/v1/weapons/${weapid}`;

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetch(baseUrl);
        const finalResult = await result.json();
        setIndividualWeapon(finalResult.data.skins);
      } catch (e) {
        console.log("error", e);
      }
    }
    fetchData();
  }, [baseUrl]);

  return (
    <div className="mainSkins">
      {individualWeapon.map((item) => (
        <div className="skinImage" key={item.uuid}>
          <img src={item.displayIcon} alt={item.displayName} />
          <p>{item.displayName}</p>
        </div>
      ))}
    </div>
  );
};

export default WeaponsSkins;
