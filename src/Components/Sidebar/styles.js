import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  leftSizer: {
    height: "100vh",
    "& #leftMenu": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "200px",
      height: "100%",
      backgroundColor: "#27272f",
      borderTop: "1px solid #929296",
      transition: "all 100ms linear",
    },
    "& #leftMenu.active": {
      position: "relative",
      marginRight: "50px",
      left: "0px",
    },
    "& #leftMenu.inactive": {
      position: "absolute",
      left: "-201px",
    },
    "& #leftMenu ul li": {
      width: "200px",
      color: "white",
      margin: "10px",
    },
  },
  toggleBtn: {
    position: "absolute",
    left: "210px",
    top: "30px",
    cursor: "pointer",
    color: "white",
    "& span": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "35px",
      height: "35px",
      fontSize: "20px",
      border: "2px solid #27272f",
      borderRadius: "4px",
    },
  },
  individualOption: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    textDecoration: "none",
    borderBottom: "1px solid #929296",
    cursor: "pointer",
    "& p": {
      color: "#929296",
      fontSize: "18px",
      margin: "10px 10px 10px 30px",
    },
    "&:hover": {
      backgroundColor: "#4d4d4d",
    },
  },
  icon: {
    color: "#cd495e",
    marginLeft: "25px",
  },
}));
