import React, { useParams, useEffect, useState } from "react";
import "./individualAgent.css";

const IndividualAgent = () => {
  const { agtid } = useParams();

  //useState que rellena el array de weapons
  const [individualAgent, setIndividualAgent] = useState([]);
  const baseUrl = `https://valorant-api.com/v1/agents/${agtid}`;

  const getAgentByID = async () => {
    try {
      const result = await fetch(baseUrl);
      const finalResult = await result.json();
      setIndividualAgent(finalResult.data.abilities);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    getAgentByID();
  }, []);
  return <div>hola</div>;
};

export default IndividualAgent;
