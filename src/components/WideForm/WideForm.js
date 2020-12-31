import React, { useState } from "react"
import classes from "./WideForm.module.less"
import whatsapp from "images/whatsapp-g.svg"
import phone_icon from "images/phone-b.svg"

export default ({ options }) => {
  return (
    <div className={classes.container} id="contacto">
      <div className={classes.content}>
        <h2>Contacto</h2>
        <h3>
          Contáctanos y solicita la visita de un técnico a tu domicilio.{" "}
          <b>Aceptamos pago con tarjeta.</b>
        </h3>
        <form className={classes.form} name="forma-contacto" data-netlify="true" method="post" action="/mensaje-enviado">
          <div className={classes.inputs}>
            <div>
              <label htmlFor="nombre">NOMBRE</label>
              <input
                id="nombre"
                name="nombre"
                required
                type="text"
                placeholder="Nombre"
              />
            </div>
            <div>
              <label htmlFor="correo">CORREO</label>
              <input
                id="correo"
                name="correo"
                required
                type="email"
                placeholder="Correo"
              />
            </div>
            <div>
              <label htmlFor="telefono">TELÉFONO</label>
              <input
                id="telefono"
                name="telefono"
                required
                type="number"
                placeholder="Teléfono"
              />
            </div>
            <div>
              <label htmlFor="servicio">SERVICIO</label>
              <select
                id="servicio"
                name="servicio"
                placeholder="Servicio"
                defaultValue="Ninguna Opcion Seleccionada"
              >
                <option value="Ninguna Opcion Seleccionada" disabled>
                  Selecciona una opción
                </option>
                {options.map((it, index) => (
                  <option value={it} key={index}>
                    {it}
                  </option>
                ))}
              </select>{" "}
            </div>
          </div>
          <div className={classes.hidden}>
            <input type="hidden" name="form-name" value="forma-contacto" />
          </div>
          <div className={classes.buttons}>
            <button type="submit">Enviar</button>
            <a
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/send?phone=+5214493485719&text=Estoy%20interesado%20en%20sus%20servicios."
              className={classes.wpButton}
              target="_blank"
            >
              <img src={whatsapp} alt="" />
              WhatsApp
            </a>
            <a
              rel="noopener noreferrer"
              href="tel:4493485719"
              className={classes.phoneButton}
              target="_blank"
            >
              <img src={phone_icon} alt="" />
              449 348 5719
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
