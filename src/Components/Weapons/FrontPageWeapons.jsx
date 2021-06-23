import React, { useEffect, useState } from "react";
import "./frontPageWeapons.css";

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
    <div className="weapons">
      {weapons.map((item) => (
        <div key={item.uuid} className="individualWeapon">
          <img src={item.displayIcon} alt={item.displayName} />
        </div>
      ))}
    </div>
  );
};

export default FrontPageWeapons;
