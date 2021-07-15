import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
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
