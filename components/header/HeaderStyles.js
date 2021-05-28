import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  cont: {
    display: "flex",
    justifyContent: "flex-end",
    height: "7rem",
  },
  contLink: {
    marginTop: "1rem",
  },
  link: {
    color: "#474555",
    textDecoration: "none",
    marginLeft: "2rem",
    fontSize: "1.4rem",
    fontWeight: 600,
  },
  linkSelect: {
    color: "white",
    textDecoration: "none",
    marginLeft: "2rem",
    fontSize: "1.4rem",
    fontWeight: 600,
    borderBottom: "0.3rem solid #FFA185",
  },
}));
