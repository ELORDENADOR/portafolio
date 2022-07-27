import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import {
  faCss3,
  faHtml5,
  faReact,
  faPhp,
  faJs,
  faBootstrap,
  faSass,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "../css/Tecnologias.css";

export const Tecnologias = () => {
  const [nombreTecnologia, setNombreTecnologia] = useState("");

  const tecnologia = (x) => {
    setNombreTecnologia(x);
  };

  return (
    <div>
      <h1 id="tituloTecnologia">Tecnologias</h1>

      <div id="contenedorPricipalTecnologias">
        <div className="contenedorLogosConocimientos">
          <div className="divLogo">
            <FontAwesomeIcon
              className="caracteristicasLogo"
              onClick={() => tecnologia("CSS")}
              icon={faCss3}
            />
          </div>

          <div>
            <FontAwesomeIcon
              className="caracteristicasLogo"
              onClick={() => tecnologia("HTML")}
              icon={faHtml5}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="caracteristicasLogo"
              onClick={() => tecnologia("Javascript")}
              icon={faJs}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="caracteristicasLogo"
              onClick={() => tecnologia("React")}
              icon={faReact}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="caracteristicasLogo"
              onClick={() => tecnologia("Booststrap")}
              icon={faBootstrap}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="caracteristicasLogo"
              onClick={() => tecnologia("SASS")}
              icon={faSass}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="caracteristicasLogo"
              onClick={() => tecnologia("PHP")}
              icon={faPhp}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="caracteristicasLogo"
              onClick={() => tecnologia("Github")}
              icon={faGithub}
            />
          </div>
        </div>

        <div>
          {/* {
                estado ? 
                (           
                    <p className='nombreTec'>{nombreTecnologia} </p>
                )
                : 
                (
                  <p>{nombreTecnologia} </p>

                )
              }   */}
          <p className="nombreTecnologia">{nombreTecnologia} </p>
        </div>
      </div>
    </div>
  );
};
