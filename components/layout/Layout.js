import React, { Fragment } from "react";
import Head from "next/head";
// import Header from "../header";
const Layout = (props) => {
  return (
    <Fragment>
      <Head>
        <html lang="es" />
        <title>Joaquin de los Reyes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      {/* <Header /> */}
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
