import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  fondoPrincipal: {
    background: "linear-gradient(180deg, #8388FF 0%, #5A61FF 100%)",
    height: "100vh",
    [theme.breakpoints.up("md")]: {
      paddingLeft: "10%",
      paddingRight: "10%",
    },
  },
  fondoSegundo: {
    background: "linear-gradient(180deg, #E27D6B 0%, #E4713E 100%)",
    height: "100vh",
    display: "grid",
    placeItems: "center",
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "10%",
      paddingRight: "10%",
    },
    [theme.breakpoints.up("xl")]: {
      paddingLeft: "25%",
      paddingRight: "25%",
    },
  },
  presentacion: {
    color: "white",
    fontWeight: 700,
    fontSize: "2.5rem",
    marginRight: "20%",
  },
  contenedorNegro1: {
    magin: 0,
    backgroundColor: "#474555",
    padding: "1.5rem",
    borderRadius: 25,
    boxShadow: "-9px 10px 3px -2px rgba(0, 0, 0, 0.4)",
    marginBottom: "2rem",
  },
  contenedorNegro2: {
    margin: 0,
    backgroundColor: "#474555",
    borderRadius: 25,
    boxShadow: "-9px 10px 3px -2px rgba(0, 0, 0, 0.4)",
  },
  textoContenedores: {
    margin: 0,
    color: "white",
    fontSize: "1.4rem",
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.8rem",
    },
  },
  textoContenedores2: {
    margin: 0,
    color: "white",
    fontSize: "1.4rem",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    textAlign: "justify",
    paddingBottom: "1.5rem",
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.8rem",
    },
  },

  textoTitulo: {
    color: "#474555",
    fontSize: "1.8rem",
    textAlign: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 0,
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
    [theme.breakpoints.up("xl")]: {
      fontSize: "2.2rem",
    },
  },
}));
