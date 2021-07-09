import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./individualMap.css";

const IndividualMap = () => {
  const { mapid } = useParams();

  const [individualMap, setIndividualMap] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const baseUrl = `https://valorant-api.com/v1/maps/${mapid}`;

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const result = await fetch(baseUrl);
        const finalResult = await result.json();
        const { data } = finalResult;
        setIndividualMap(data);
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
  if (individualMap === undefined || hasError) {
    return <div>Error al buscar Mapa</div>;
  }
  return (
    <div className="mainMaps">
      <img src={individualMap.displayIcon} alt={individualMap.displayName} />
    </div>
  );
};

export default IndividualMap;
