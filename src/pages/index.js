import React from "react"
import "stylesheets/main.module.less"
import Nav from "components/Nav/Nav"
import WideForm from "components/WideForm/WideForm"
import MovingText from "components/MovingText/MovingText"
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
        <h2>
          La más alta <b>calidad</b> y <b>satisfacción</b> del mercado.
        </h2>
      </div>
      <div className={classes.servicios}>
        <div className={classes.service} id="refrigeracion">
          <div className={classes.text}>
            <h2>
              <b>Instalación</b>, <b>mantenimiento</b>, <b>reparación</b> y{" "}
              servicio técnico profesional para sistemas de <b>refrigeración</b>
            </h2>
            <div className={classes.options}>
              <span>Refrigeradores Inverter</span>
              <span>IceMaker</span>
              <span>Enfriadores de Agua</span>
              <span>Frigobares</span>
              <span>Duplex</span>
              <span>Congeladores</span>
              <span>Refrigeradores Comerciales</span>
              <span>Refresqueros</span>
              <span>Y más...</span>
            </div>
          </div>
          <Img fluid={data.fridge.childImageSharp.fluid} />
        </div>

        <div className={classes.serviceAlt} id="linea-blanca">
          <div className={classes.text}>
            <h2>
              <b>Reparación</b>, <b>mantenimiento</b> y servicio técnico
              profesional para <b>línea blanca</b>
            </h2>
            <div className={classes.options}>
              <span>Lava-Secadoras</span>
              <span>Lavadoras</span>
              <span>Centros de Lavado</span>
              <span>Secadoras</span>
              <span>Y más...</span>
            </div>
          </div>
          <Img fluid={data.machine.childImageSharp.fluid} />
        </div>
      </div>

      <div className={classes.types}>
        <h2>
          Nuestros <b>Servicios</b>
        </h2>
        <div className={classes.type}>
          <h3>Reparación</h3>
          <p>
            Su refrigerador tira agua, hace escarcha, no enciende o no enfría,
            nuestro servicio técnico especializado consta del{" "}
            <b>análisis y revisión</b> de la falla, brindándole un{" "}
            <b>presupuesto competitivo</b>, garantía por escrito y una{" "}
            <b>atención</b> personalizada, contamos con{" "}
            <b>refacciones originales</b> para garantizar el buen funcionamiento
            de su equipo.
          </p>
          <Link to="/#contacto">¡Lo Necesito!</Link>
        </div>
        <div className={classes.type}>
          <h3>Mantenimiento</h3>
          <p>
            El <b>mantenimiento</b> en todos los equipos de <b>refrigeración</b>{" "}
            es primordial y recomendablemente realizarlo una vez por año, de
            preferencia antes de la temporada de calor de esta manera aseguramos{" "}
            <b>larga vida</b> y <b>excelente funcionalidad</b>.
          </p>
          <Link to="/#contacto">¡Lo Necesito!</Link>
        </div>
        <div className={classes.type}>
          <h3>Instalación</h3>
          <p>
            <p>
              Contamos con <b>tecnico especializados</b> en refrigeracion,
              nuestro personal esta constantemente actualizando para brindarle
              el servicio en la <b>instalación</b> de sus equipos en base a los
              lineamientos establecidos por el fabricante, garantizando un{" "}
              <b>buen funcionamiento </b>de sus aparatos.
            </p>
          </p>
          <Link to="/#contacto">¡Lo Necesito!</Link>
        </div>
      </div>

      <WideForm options={["Linea Blanca", "Refrigeración"]} />
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
    fridge: file(relativePath: { eq: "refri-abierto.jpeg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    machine: file(relativePath: { eq: "lavadoras2.jpeg" }) {
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
