import React from "react"
import "stylesheets/main.module.less"
import Nav from "components/Nav/Nav"
import WideForm from "components/WideForm/WideForm"
import classes from "stylesheets/index.module.less"
import { Link } from "gatsby"
import Img from "gatsby-image"
import phone from "images/phone-b.svg"

export default ({ data }) => {
  return (
    <div className={classes.container}>
      <Nav
        white
        title="ServiTec Aguascalientes | Reparación y mantenimiento de línea blanca."
        description="Reparación y mantenimiento profesional de línea blanca, refrigeración y aire acondicionado."
        canonical=""
      />
      <div className={classes.intro}>
        <h1>
          <strong>Reparación de línea blanca y refrigeración</strong> en
          Aguascalientes.
          <div>
            <a rel="noopener noreferrer" href="tel:4493485719">
              <i>
                <img src={phone} alt="" />
                <b> 449 348 5719</b>
              </i>
            </a>
          </div>
        </h1>
        <Img fluid={data.banner.childImageSharp.fluid} />
      </div>
      <div className={classes.logos}>
        <div>
          <Img fluid={data.logo1.childImageSharp.fluid} />
          <Img fluid={data.logo2.childImageSharp.fluid} />
          <Img fluid={data.logo3.childImageSharp.fluid} />
          <Img fluid={data.logo4.childImageSharp.fluid} />
          <Img fluid={data.logo5.childImageSharp.fluid} />
          <Img fluid={data.logo6.childImageSharp.fluid} />
          <Img fluid={data.logo7.childImageSharp.fluid} />
          <Img fluid={data.logo8.childImageSharp.fluid} />
          <Img fluid={data.logo9.childImageSharp.fluid} />
          <Img fluid={data.logo10.childImageSharp.fluid} />
          <Img fluid={data.logo11.childImageSharp.fluid} />
          <Img fluid={data.logo12.childImageSharp.fluid} />
        </div>
      </div>

      <h2 className={classes.subtitle} id="refrigeracion">
        Equipos de <b>Refrigeración</b>
      </h2>

      <div className={classes.servicios}>
        <div className={classes.service}>
          <div className={classes.text}>
            <h2>
              <b>Reparación</b> y servicio técnico profesional para
            </h2>
            <div className={classes.options}>
              <span>Refrigeradores</span>
              <span>Enfriadores de Agua</span>
              <span>Frigobares</span>
              <span>Duplex</span>
              <span>Congeladores</span>
            </div>
          </div>
          <Img fluid={data.fridge.childImageSharp.fluid} />
        </div>
      </div>

      <div className={classes.types}>
        <div className={classes.type}>
          <h3>Reparación</h3>
          <p>
            ¿Su refrigerador no enfría, no enciende o hace escarcha? Nuestro
            servicio le ofrece el <b>análisis y revisión</b> de su aparato,
            brindándole una <b>garantía por escrito</b> ya que contamos con{" "}
            <b>refacciones originales</b> para ofrecerle un excelente
            funcionamiento de su equipo.
          </p>
          <Link to="/#contacto">¡Lo Necesito!</Link>
        </div>
        <div className={classes.type}>
          <h3>Mantenimiento</h3>
          <p>
            El mantenimiento para todos los equipos de refrigeración es
            recomendable realizarlo <b>una vez por año</b>, de esta manera
            aseguramos un <b>excelente funcionamiento</b>.
          </p>
          <Link to="/#contacto">¡Lo Necesito!</Link>
        </div>
      </div>

      <h2 className={classes.subtitle} id="linea-blanca">
        Línea <b>Blanca</b>
      </h2>

      <div className={classes.servicios}>
        <div className={classes.serviceAlt}>
          <div className={classes.text}>
            <h2>
              <b>Reparación,</b> <b>Mantenimiento</b> y servicio técnico
              profesional para <b>línea blanca</b>
            </h2>
            <div className={classes.options}>
              <span>Lavadoras</span>
              <span>Lava-Secadoras</span>
              <span>Centros de Lavado</span>
              <span>Secadoras</span>
            </div>
          </div>
          <Img fluid={data.machine.childImageSharp.fluid} />
        </div>
      </div>

      <div className={classes.types}>
        <div className={classes.type}>
          <h3>Reparación</h3>
          <p>
            Nuestro <b>servicio técnico</b> realiza reparaciones{" "}
            <b>rápidas y urgentes</b> dandole solución a cualquier tipo de
            problema que se presente, ofreciendole <b>garantía por escrito</b> y
            una atención de calidad. Contamos con <b>refacciones originales</b>.
          </p>
          <Link to="/#contacto">¡Lo Necesito!</Link>
        </div>
        <div className={classes.type}>
          <h3>Mantenimiento</h3>
          <p>
            Realizamos mantenimientos que ayudan a <b>prevenir fallas</b> y de
            esta manera aseguramos la <b>larga vida</b> de su aparato y
            excelente funcionalidad.
          </p>
          <Link to="/#contacto">¡Lo Necesito!</Link>
        </div>
        <div className={classes.type}>
          <h3>Instalación</h3>
          <p>
            <p>
              Contamos con personal <b>totalmente capacitado</b> en línea
              blanca. Nuestro servicio en la instalación de sus equipos se rige
              en base a las <b>normas</b> establecidas por el fabricante.
            </p>
          </p>
          <Link to="/#contacto">¡Lo Necesito!</Link>
        </div>
      </div>
      <br />
      <br />
      <br />
      <WideForm options={["Linea Blanca", "Refrigeración"]} />
    </div>
  )
}
export const query = graphql`
  fragment CompanyLogo on File {
    childImageSharp {
      fluid(quality: 100, maxWidth: 120) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  query {
    banner: file(relativePath: { eq: "machine-dark.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    fridge: file(relativePath: { eq: "fridge_open.webp" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    machine: file(relativePath: { eq: "washing_open.webp" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    logo1: file(relativePath: { eq: "logos/samsung.png" }) {
      ...CompanyLogo
    }
    logo2: file(relativePath: { eq: "logos/lg.png" }) {
      ...CompanyLogo
    }
    logo3: file(relativePath: { eq: "logos/bosch.png" }) {
      ...CompanyLogo
    }
    logo4: file(relativePath: { eq: "logos/electrolux.png" }) {
      ...CompanyLogo
    }
    logo5: file(relativePath: { eq: "logos/frigidaire.png" }) {
      ...CompanyLogo
    }
    logo6: file(relativePath: { eq: "logos/supermatic.png" }) {
      ...CompanyLogo
    }
    logo7: file(relativePath: { eq: "logos/mabe.png" }) {
      ...CompanyLogo
    }
    logo8: file(relativePath: { eq: "logos/whirpool.png" }) {
      ...CompanyLogo
    }
    logo9: file(relativePath: { eq: "logos/ge.png" }) {
      ...CompanyLogo
    }
    logo10: file(relativePath: { eq: "other_logos/torrey.png" }) {
      ...CompanyLogo
    }
    logo11: file(relativePath: { eq: "other_logos/daewoo.png" }) {
      ...CompanyLogo
    }
    logo12: file(relativePath: { eq: "other_logos/hoover.png" }) {
      ...CompanyLogo
    }
    logo13: file(relativePath: { eq: "other_logos/maytag.jpg" }) {
      ...CompanyLogo
    }
    logo14: file(relativePath: { eq: "other_logos/ojeda.png" }) {
      ...CompanyLogo
    }
  }
`
