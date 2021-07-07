import React, { useState, useEffect } from "react";
import "./frontPageAgents.css";

const FrontPageAgents = () => {
  //useState que rellena el array de weapons
  const [agents, setAgents] = useState([]);
  const baseUrl = "https://valorant-api.com/v1/agents";

  const getAgents = async () => {
    try {
      const result = await fetch(baseUrl);
      const finalResult = await result.json();
      setAgents(finalResult.data);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    getAgents();
  }, []);

  return (
    <div className="agentsMain">
      {agents.map((item) => (
        <div className="agent" key={item.uuid}>
          <img src={item.displayIcon} alt={item.displayName} />
          <p>{item.displayName}</p>
        </div>
      ))}
    </div>
  );
};

export default FrontPageAgents;
