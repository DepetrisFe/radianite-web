import React, { useEffect, useState } from "react";
import "./frontPageMaps.css";
import CircularProgress from "@material-ui/core/CircularProgress";

const FrontPageMaps = () => {
  //useState que rellena el array de weapons
  const [maps, setMaps] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const baseUrl = "https://valorant-api.com/v1/maps";

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const result = await fetch(baseUrl);
        const finalResult = await result.json();
        setMaps(finalResult.data);
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
  if (maps === undefined || hasError) {
    return <div>No se encontraron Mapas</div>;
  }
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
