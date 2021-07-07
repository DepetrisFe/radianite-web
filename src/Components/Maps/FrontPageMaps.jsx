import React, { useEffect, useState } from "react";
import "./frontPageMaps.css";

const FrontPageMaps = () => {
  //useState que rellena el array de weapons
  const [maps, setMaps] = useState([]);
  const baseUrl = "https://valorant-api.com/v1/maps";

  const getMaps = async () => {
    try {
      const result = await fetch(baseUrl);
      const finalResult = await result.json();
      setMaps(finalResult.data);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    getMaps();
  }, []);

  return (
    <div className="mapsMain">
      {maps.map((item) => (
        <div className="map" key={item.uuid}>
          <img src={item.splash} alt={item.displayName} />
          <p>{item.displayName}</p>
        </div>
      ))}
    </div>
  );
};

export default FrontPageMaps;
