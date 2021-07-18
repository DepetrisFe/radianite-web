import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      <p>Prueba 01 notebook</p>
<<<<<<< HEAD
      <p>Primer push desktop</p>
=======
      <p>Primer push notebook</p>
>>>>>>> notebook
      {maps.map((item) => (
        <div key={item.uuid}>
          <Link className="map" to={`/maps/${item.uuid}`}>
            <img src={item.splash} alt={item.displayName} />
            <p>{item.displayName}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FrontPageMaps;
