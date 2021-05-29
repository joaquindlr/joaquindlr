import Styles from "./InicioStyles";
import Header from "../header";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Link from "next/link";

import { useEffect } from "react";

const Body = () => {
  const classes = Styles({});
  const matches = useMediaQuery("(min-width:768px)");

  useEffect(() => {
    console.log("aa", matches);
  }, [matches]);

  return (
    <div>
      <div className={classes.fondoPrincipal}>
        <Header />
        <div style={matches ? { display: "flex" } : null}>
          <div
            style={
              matches
                ? {
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    justifyItems: "center",
                  }
                : { textAlign: "center" }
            }
          >
            <h1
              className={
                matches ? classes.presentacion : classes.presentacionPhone
              }
            >
              Hola! Me llamo Joaquin y soy desarrollador web front end
            </h1>
          </div>
          <div
            style={
              matches
                ? { width: "50%" }
                : {
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }
            }
          >
            <img
              style={!matches ? { width: "80%" } : null}
              src="/img/hero2.e4960f19.svg"
            />
          </div>
        </div>
      </div>
      <div id="AboutMe" className={classes.fondoSegundo}>
        <div>
          <div
            className={classes.contenedorNegro1}
            style={
              !matches
                ? { marginTop: "2rem", marginLeft: "1rem", marginRight: "1rem" }
                : null
            }
          >
            <p className={classes.textoContenedores}>
              Mi nombre es Joaquin de los Reyes, tengo 22 años y soy un
              estudiante de Ingenieria en Sistemas de Informacion con muchas
              ganas de hacer lo que le gusta, diseñar y desarrollar todo tipo de
              paginas y aplicaciones web.
            </p>
          </div>
          <div style={matches ? { display: "flex" } : null}>
            <div
              className={
                matches
                  ? classes.contenedorNegro2
                  : classes.contenedorNegro2Phone
              }
              style={matches ? { marginRight: "0.5rem" } : null}
            >
              <h3 className={classes.textoTitulo}>Front end developer</h3>
              <p className={classes.textoContenedores2}>
                Me especializo en el desarrollo de interfaces de usuario,es
                decir, la parte visible de una pagina web. Es todo lo que una
                persona ve en la pantalla.
              </p>
            </div>
            <div
              className={
                matches
                  ? classes.contenedorNegro2
                  : classes.contenedorNegro2Phone
              }
              style={matches ? { marginLeft: "0.5rem" } : null}
            >
              <div>
                <h3 className={classes.textoTitulo}>UI Designer</h3>
              </div>
              <p className={classes.textoContenedores2}>
                Ademas de realizar la programacion de la pagina, tambien me
                encargo de realizar los diseños de esta (colores, fuentes,
                forma, funcion, estructura, etc)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Body;
