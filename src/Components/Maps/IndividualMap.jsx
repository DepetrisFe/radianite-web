import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./individualMapStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Typography } from "@material-ui/core";

const IndividualMap = () => {
  const classes = useStyles();
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
    <>
      <Grid container justifyContent="center" className={classes.root}>
        <Grid
          item
          container
          xs={12}
          md={6}
          direction="column"
          alignItems="center"
          className={classes.box1}
        >
          <Typography variant="h4" align="center" gutterBottom>
            {individualMap.displayName}
          </Typography>
          <img
            src={individualMap.displayIcon}
            alt={individualMap.displayName}
          />
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={6}
          direction="column"
          justifyContent="center"
          className={classes.box2}
        >
          <Typography variant="h5" align="center" gutterBottom>
            Coordinates: {individualMap.coordinates}
          </Typography>
          <Typography variant="h5" align="center" gutterBottom>
            xMultiplier: {individualMap.xMultiplier}
          </Typography>
          <Typography variant="h5" align="center" gutterBottom>
            yMultiplier: {individualMap.yMultiplier}
          </Typography>
          <Typography variant="h5" align="center" gutterBottom>
            xScalarToAdd: {individualMap.xScalarToAdd}
          </Typography>
          <Typography variant="h5" align="center" gutterBottom>
            yScalarToAdd: {individualMap.yScalarToAdd}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default IndividualMap;
