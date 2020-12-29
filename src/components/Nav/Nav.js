import React from "react"
import { Helmet } from "react-helmet"
import classes from "./Nav.module.less"
import NavContent from "../NavContent/NavContent"

const NETLIFY_URL = "https://servitecaguas.netlify.app"
const REAL_URL = "https://www.servitecaguas.com"

export default ({ title, canonical, description, white }) => {
  return (
    <>
      <Helmet>
        <html lang="es" />
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link
          rel="canonical"
          href={"https://www.servitecaguas.com" + canonical}
        />
        <meta name="description" content={description} />
        <script></script>
      </Helmet>
      <Helmet
        script={[
          {
            innerHTML: `console.log("hola")`,
          },
        ]}
      />
      <div className={[classes.container, white ? classes.blue : ""].join(" ")}>
        <div className={classes.content}>
          <NavContent />
        </div>
      </div>
    </>
  )
}
