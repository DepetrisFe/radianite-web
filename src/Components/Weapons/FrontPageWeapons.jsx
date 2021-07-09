import React, { useEffect, useState } from "react";
import "./frontPageWeapons.css";
import WeaponsList from "./WeaponsList";
import CircularProgress from "@material-ui/core/CircularProgress";

const FrontPageWeapons = () => {
  //useState que rellena el array de weapons
  const [weapons, setWeapons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const baseUrl = "https://valorant-api.com/v1/weapons";

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const result = await fetch(baseUrl);
        const finalResult = await result.json();
        setWeapons(finalResult.data);
        setIsLoading(false);
      } catch (e) {
        setHasError(true);
      }
    }
    fetchData();
  }, [baseUrl]);

  if (isLoading) {
    return (
      <div className="spinner">
        <CircularProgress color="secondary" />
      </div>
    );
  }
  if (weapons === undefined || hasError) {
    return <div>No se encontraron Armas</div>;
  }
  return (
    <div className="weaponsMain">
      {weapons.map((item) => (
        <WeaponsList key={item.uuid} datos={item} />
      ))}
    </div>
  );
};

export default FrontPageWeapons;
