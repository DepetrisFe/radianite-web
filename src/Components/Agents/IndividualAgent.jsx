import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./individualAgent.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
    padding: "20px",
    overflowY: "scroll",
  },
  box1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#929296",
  },
  box2: {
    padding: "10px",
  },
});

const IndividualAgent = () => {
  const classes = styles();
  const { agtid } = useParams();

  //useState que rellena el array de agents
  const [individualAgent, setIndividualAgent] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const baseUrl = `https://valorant-api.com/v1/agents/${agtid}`;

  useEffect(() => {
    async function fetchData() {
      try {
        //primero cambiamos el estado del loading a "true"
        setIsLoading(true);
        //realizamos el pedido a la api
        const result = await fetch(baseUrl);
        const finalResult = await result.json();
        //como la api nos devuelve un objeto en lugar de un array lo desestructuramos a {data}
        //ahora data contiene nuestro objeto agent
        const { data } = finalResult;
        //actualizamos el useState de agent pasandole "data"
        setIndividualAgent(data);
        //cambiamos el estado de loading a false para que se deje de mostrar el spinner
        setIsLoading(false);
      } catch (e) {
        //en caso de que la api devuelva error, actualizamos el estado de Error a true para visualizar mensaje de error
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
  // if (individualAgent === null) {
  //   return <></>;
  // }
  if (individualAgent === undefined || hasError) {
    console.log(individualAgent);
    return <div>Error al buscar Agente</div>;
  }

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={6} className={classes.box1}>
        <h2>{individualAgent.displayName}</h2>
        <img
          src={individualAgent.fullPortrait}
          alt={individualAgent.displayName}
        />
      </Grid>
      <Grid item xs={12} md={6} className={classes.box2}>
        <p>{individualAgent.description}</p>
      </Grid>
    </Grid>
  );
};
export default IndividualAgent;
