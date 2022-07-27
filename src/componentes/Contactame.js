import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "../css/Contactame.css";
// import "../pdf/cv.pdf"
import cv from "../pdf/CV-RicardoGonzalezRamirez-Frontend.pdf";

export const Contactame = () => {
  const [Copyright, setCopyright] = useState(
    "©Copyright 2022. Todos los derechos reservados, Términos y Condiciones | Políticas de  Privacidad, desarrollado por www.ricardogonzalezramirez.com"
  );

  const [estadoRedSocial, setEstadoRedSocial] = useState("");

  const linkedin = () => {
    setEstadoRedSocial(
      <a
        className="confiLogo"
        href="https://www.linkedin.com/in/ricardo-gonzalez-ramirez-desarrollador-front-end/"
      >
        https://www.linkedin.com/in/ricardo-gonzalez-ramirez-desarrollador-front-end/
      </a>,
      ``
    );
  };

  const facebook = () => {
    setEstadoRedSocial(
      <a
        className="confiLogo"
        href="https://www.facebook.com/ricardo.gonzalezramirez.562/"
      >
        https://www.facebook.com/ricardo.gonzalezramirez.562/
      </a>,
      ``
    );
  };

  const whatsap = () => {
    setEstadoRedSocial(
      <a
        className="confiLogo"
        href="https://api.whatsapp.com/send?phone=573016051977/"
      >
        3016051977
      </a>
    );
  };

  const correo = () => {
    setEstadoRedSocial(
      <a className="confiLogo">ricardogonzalezramirez@hotmail.com</a>
    );
  };

  return (
    <div>
      <p id="tituloContactame">Contactame</p>

      <div id="contenedorLogosContactame">
        <div className="divLogo">
          <FontAwesomeIcon
            id="linkedin"
            onClick={() => linkedin()}
            icon={faLinkedin}
          />{" "}
          <br></br>
        </div>
        <div className="divLogo">
          <FontAwesomeIcon
            id="facebook"
            onClick={() => facebook()}
            icon={faFacebook}
          />
        </div>
        <div className="divLogo">
          <FontAwesomeIcon
            id="whatsap"
            onClick={() => whatsap()}
            icon={faWhatsapp}
          />
        </div>
        <div className="divLogo">
          <FontAwesomeIcon
            id="correo"
            onClick={() => correo()}
            icon={faEnvelope}
          />
        </div>
      </div>

      <div id="contenedorCV">
        <a id="descargaCV" href={cv} download="Doc CV">
          DescargarCV
        </a>
      </div>

      <div id="contenendorContacto">
        <p> {estadoRedSocial}</p>
      </div>

      <p id="Copyright"> {Copyright}</p>

      <div id="salto"></div>
    </div>
  );
};
