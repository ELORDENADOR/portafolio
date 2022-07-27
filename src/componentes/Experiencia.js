import React from "react";
import "../css/Experiencia.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";

export const Experiencia = () => {
  return (
    <div>
      <p id="tituloExperiencia"> Experiencia</p>

      <div id="contenedorExperiencias">
        <div id="fonrecar" className="config">
          <span id="tituloFonrecar">FONRECAR</span>
          <br></br>
          <p className="configuracionFonrecar">
            <span className="colorAparte">
              Diciembre 01 del 2011-Marzo 15 del 2015
            </span>
            <br></br>En los 4 sños que labore en esta empresa, brinde Soporte y
            desarrolle soluciones con tecnologias como drupal, php y mysql
            server.{" "}
          </p>
          <p className="configuracionFonrecar">
            <a id="linkFonrecar" href="https://www.fonrecar.com/">
              Link
            </a>
          </p>
        </div>

        <div id="comfenalco" className="config">
          <span id="tituloComfenalco">COMFENALCO</span>
          <br></br>
          <p className="configuracionComfenalco">
            <span className="colorAparte">
              Abril 23 del 2015 - Junio 16 del 2021
            </span>
            <br></br>6 Años formandome en esta empresa, brindando soporte,
            desarrollando he implemetando proyectos con tecnologias como java,
            php, React, mysql server y oracle.{" "}
          </p>
          <p className="configuracionComfenalco">
            <a id="linkComfenalco" href="https://www.comfenalco.com/">
              Link
            </a>
          </p>
        </div>
        <div id="stefanini" className="config">
          <span id="tituloStefanini">STEFANINI</span>
          <br></br>
          <p className="configuracionStefanini">
            <span className="colorAparte">Junio 17 del 2021 - Actualemnte</span>
            <br></br>Multinacional que me ha permitido trabajar en grandes
            empresas, como seguros Alfa y actualmente Bancodeoocidente,
            brindando soporte he implementando soluciones tecnologicas, con
            tecnologias como java y oracle.{" "}
          </p>
          <p className="configuracionStefanini">
            <a id="linkStefanini" href="https://stefanini.com/en">
              Link
            </a>
          </p>
        </div>
        <div id="freelance" className="config">
          <span id="tituloFreelance">FREELANCE</span>
          <br></br>
          <p className="configuracionFreelance">
            <span className="colorAparte">2018 - Actualemnte</span>
            <br></br>Mas de 3 años desarrollando soluciones web a diferentes
            empresas y clientes, con tecnologias como React, javascript, php,
            css, html, sqlserver.{" "}
          </p>
          <p className="configuracionFreelance">
            <a className="links" href="https://https://www.reddescubre.com/">
              reddescubre
            </a>
            <br></br>
            <a className="links" href="https://www.decoramos.com/">
              decoramos
            </a>
            <br></br>
            <a className="links" href="#">
              colegio
            </a>
            <br></br>
          </p>
        </div>
      </div>
    </div>
  );
};
