import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./frontPageAgents.css";

const FrontPageAgents = () => {
  //useState que rellena el array de weapons
  const [agents, setAgents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const baseUrl = "https://valorant-api.com/v1/agents";

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const result = await fetch(baseUrl);
        const finalResult = await result.json();
        setAgents(finalResult.data);
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
  if (agents === undefined || hasError) {
    return <div>No se encontraron Agentes</div>;
  }
  return (
    <div className="agentsMain">
      {agents.map((item) => (
        <div key={item.uuid}>
          <Link className="agent" to={`/agents/${item.uuid}`}>
            <img src={item.displayIcon} alt={item.displayName} />
            <p>{item.displayName}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FrontPageAgents;
