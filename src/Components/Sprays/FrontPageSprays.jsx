import React, { useState, useEffect } from "react";
import "./frontPageSprays.css";
import CircularProgress from "@material-ui/core/CircularProgress";

const FrontPageSprays = () => {
  const [sprays, setSprays] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const baseUrl = "https://valorant-api.com/v1/sprays";

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const result = await fetch(baseUrl);
        const finalResult = await result.json();
        setSprays(finalResult.data);
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
  if (sprays === undefined || hasError) {
    return <div>No se encontraron Sprays</div>;
  }
  return (
    <div className="spraysMain">
      {sprays.map((item) => (
        <div className="spray" key={item.uuid}>
          <img src={item.fullTransparentIcon} alt={item.displayName} />
          <p>{item.displayName}</p>
        </div>
      ))}
    </div>
  );
};

export default FrontPageSprays;
