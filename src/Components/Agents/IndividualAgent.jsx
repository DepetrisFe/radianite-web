import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./individualAgent.css";

const IndividualAgent = () => {
  const { agtid } = useParams();

  //useState que rellena el array de agents
  const [individualAgent, setIndividualAgent] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const baseUrl = `https://valorant-api.com/v1/agents/${agtid}`;

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const result = await fetch(baseUrl);
        const finalResult = await result.json();
        const { data } = finalResult;
        setIndividualAgent(data);
        setIsLoading(false);
      } catch (e) {
        setHasError(true);
      }
    }
    fetchData();
  }, [baseUrl]);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  // if (individualAgent === null) {
  //   return <></>;
  // }
  if (individualAgent === undefined || hasError) {
    console.log(individualAgent);
    return <div>Error al buscar Agente</div>;
  }
  return (
    <div className="mainAgents">
      <img
        src={individualAgent.fullPortrait}
        alt={individualAgent.displayName}
      />
    </div>
  );
};
export default IndividualAgent;
