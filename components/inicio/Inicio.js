import Styles from "./InicioStyles";
import Header from "../header";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { useEffect } from "react";

const Body = () => {
  const classes = Styles({});
  const matches = useMediaQuery("(min-width:1400px)");

  useEffect(() => {
    console.log("aa", matches);
  }, [matches]);

  return (
    <div>
      <div className={classes.fondoPrincipal}>
        <Header />
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <h1 className={classes.presentacion}>
              Hola! Me llamo Joaquin y soy desarrollador web full stack
            </h1>
          </div>
          <div style={{ width: "50%" }}>
            <img src="/img/hero2.e4960f19.svg" />
          </div>
        </div>
      </div>
      <div className={classes.fondoSegundo}>
        <div>
          <div className={classes.contenedorNegro1}>
            <p className={classes.textoContenedores}>
              Mi nombre es Joaquin de los Reyes, tengo 22 años y soy un
              estudiante de Ingenieria en Sistemas de Informacion con muchas
              ganas de hacer lo que le gusta, diseñar y desarrollar todo tipo de
              paginas y aplicaciones web.
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <div
              className={classes.contenedorNegro2}
              style={{ marginRight: "0.5rem" }}
            >
              <h3 className={classes.textoTitulo}>Front end developer</h3>
              <p className={classes.textoContenedores2}>
                Me especializo en el desarrollo de interfaces de usuario,es
                decir, la parte visible de una pagina web. Es todo lo que una
                persona ve en la pantalla.
              </p>
            </div>
            <div
              className={classes.contenedorNegro2}
              style={{ marginLeft: "0.5rem" }}
            >
              <div>
                <h3 className={classes.textoTitulo}>Front end developer</h3>
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
