import React, { useEffect, useState } from "react";
import "./frontPageWeapons.css";
import WeaponsList from "./WeaponsList";

const FrontPageWeapons = () => {
  //useState que rellena el array de weapons
  const [weapons, setWeapons] = useState([]);
  const baseUrl = "https://valorant-api.com/v1/weapons";

  const getWeapons = async () => {
    try {
      const result = await fetch(baseUrl);
      const finalResult = await result.json();
      setWeapons(finalResult.data);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    getWeapons();
  }, []);

  return (
    <div className="weaponsMain">
      {weapons.map((item) => (
        <WeaponsList key={item.uuid} datos={item} />
      ))}
    </div>
  );
};

export default FrontPageWeapons;
