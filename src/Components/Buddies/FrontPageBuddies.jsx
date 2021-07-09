import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./frontPageBuddies.css";

const FrontPageBuddies = () => {
  const [buddies, setBuddies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const baseUrl = "https://valorant-api.com/v1/buddies";

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const result = await fetch(baseUrl);
        const finalResult = await result.json();
        setBuddies(finalResult.data);
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
  if (buddies === undefined || hasError) {
    return <div>No se encontraron Buddies</div>;
  }
  return (
    <div className="buddiesMain">
      {buddies.map((item) => (
        <div className="buddy" key={item.uuid}>
          <img src={item.displayIcon} alt={item.displayName} />
          <p>{item.displayName}</p>
        </div>
      ))}
    </div>
  );
};

export default FrontPageBuddies;
