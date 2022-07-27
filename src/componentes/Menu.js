import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBorderNone } from "@fortawesome/free-solid-svg-icons";

export const Menu = () => {
  const [estado, setEstado] = useState(false);
  const [estado2, setEstado2] = useState(false);

  const click = () => {
    setEstado(true);
  };
  const click2 = () => {
    setEstado(false);
  };

  const header = () => {
    setEstado(true);
  };
  const presentacion = () => {
    setEstado(true);
  };
  const tecnologia = () => {
    setEstado(true);
  };
  const experiencia = () => {
    setEstado(true);
  };
  const sobremi = () => {
    setEstado(true);
  };
  const proyectos = () => {
    setEstado(true);
  };
  const comentarios = () => {
    setEstado(true);
  };
  const contactame = () => {
    setEstado(true);
  };

  return (
    <>
      <Menus>
        <div id="contenedorPrincipalMenu">
          {estado === true ? (
            <div>
              <div id="botonMenu">
                <FontAwesomeIcon
                  onClick={() => click2()}
                  className="confiBoton"
                  icon={faBars}
                />
              </div>
            </div>
          ) : (
            <div>
              <div id="botonMenu">
                <FontAwesomeIcon
                  onClick={() => click()}
                  className="confiBoton"
                  icon={faBars}
                />
              </div>
              <div id="links">
                <a
                  onClick={() => header()}
                  href="#header"
                  className="confTituloMenu"
                >
                  Inicio
                </a>
                <a
                  onClick={() => presentacion()}
                  href="#presentacion"
                  className="confTituloMenu"
                >
                  Presentacion
                </a>
                <a
                  onClick={() => tecnologia()}
                  href="#tecnologia"
                  className="confTituloMenu"
                >
                  Tecnologia
                </a>
                <a
                  onClick={() => experiencia()}
                  href="#experiencia"
                  className="confTituloMenu"
                >
                  Experiencia
                </a>
                <a
                  onClick={() => sobremi()}
                  href="#sobremi"
                  className="confTituloMenu"
                >
                  Sobremi
                </a>
                <a
                  onClick={() => proyectos()}
                  href="#proyectos"
                  className="confTituloMenu"
                >
                  Proyectos
                </a>
                <a
                  onClick={() => comentarios()}
                  href="#comentarios"
                  className="confTituloMenu"
                >
                  Comentarios
                </a>
                <a
                  onClick={() => contactame()}
                  href="#contactame"
                  className="confTituloMenu"
                >
                  Contactame
                </a>
              </div>
            </div>
          )}

          {estado2 === true ? (
            <div>
              <div id="botonMenu">
                <FontAwesomeIcon
                  onClick={() => click2()}
                  className="confiBoton"
                  icon={faBars}
                />
              </div>
            </div>
          ) : (
            <div>
              <div id="links2">
                <a
                  onClick={() => header()}
                  href="#header"
                  className="confTituloMenu"
                >
                  Inicio
                </a>
                <a
                  onClick={() => presentacion()}
                  href="#presentacion"
                  className="confTituloMenu"
                >
                  Presentacion
                </a>
                <a
                  onClick={() => tecnologia()}
                  href="#tecnologia"
                  className="confTituloMenu"
                >
                  Tecnologias
                </a>
                <a
                  onClick={() => experiencia()}
                  href="#experiencia"
                  className="confTituloMenu"
                >
                  Experiencia
                </a>
                <a
                  onClick={() => sobremi()}
                  href="#sobremi"
                  className="confTituloMenu"
                >
                  Sobremi
                </a>
                <a
                  onClick={() => proyectos()}
                  href="#proyectos"
                  className="confTituloMenu"
                >
                  Proyectos
                </a>
                <a
                  onClick={() => comentarios()}
                  href="#comentarios"
                  className="confTituloMenu"
                >
                  Comentarios
                </a>
                <a
                  onClick={() => contactame()}
                  href="#contactame"
                  className="confTituloMenu"
                >
                  Contactame
                </a>
              </div>
            </div>
          )}
        </div>
      </Menus>
    </>
  );
};
const Menus = styled.nav`
  #contenedorPrincipalMenu {
    transition-duration: 2s;
    font-family: "Abril Fatface", cursive;
    border-radius: 30px;
    -radius: 10% / 50%;

    position: fixed;
    z-index: 3;
    top: 8%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.3;

    a {
      transition-duration: 2s;
      text-decoration: none;
      color: white;
      // font-size: 18px;
      padding-left: 10px;

      font-size: 20px;
      text-shadow: 0 0 15px rgb(38, 0, 255), 0 0 15px rgb(8, 0, 255),
        0 0 15px rgb(4, 0, 255), 0 0 15px rgb(34, 0, 255);
      font-family: "Dancing Script", cursive;
      font-weight: bold;
    }
    #botonMenu {
      display: none;
      color: aqua;
    }
    #links {
      display: none;
    }
    .confTituloMenu:hover {
      opacity: 1;
      color: white;
    }
    @media (max-width: 868px) {
      top: 35%;
      left: 10%;
      // border-radius: 30px 300px / 50px;
      padding: 10px;
      a {
        display: block;
      }
      #botonMenu {
        display: block;
      }
      #links {
        display: block;
      }
      #links2 {
        display: none;
      }
      .confTituloMenu:hover {
        opacity: 1;
        color: white;
      }
    }
  }
  #contenedorPrincipalMenu:hover {
    transition-duration: 2s;
    box-shadow: 0 0 15px rgb(244, 204, 7), 0 0 15px rgb(244, 204, 7),
      0 0 15px rgb(244, 204, 7), 0 0 15px rgb(244, 204, 7);

    background: #444;
    text-shadow: 0 0 15px rgb(38, 0, 255), 0 0 15px rgb(8, 0, 255),
      0 0 15px rgb(4, 0, 255), 0 0 15px rgb(34, 0, 255);

    padding: 14px;
    opacity: 5;

    a {
      // font-family: 'Abril Fatface', cursive;
      // word-spacing: 0.5em;
      // font-size: 20px;
      // opacity: 0.6;
      // transition-duration: 2s;

      color: white;
      transition-duration: 2s;
      font-size: 25px;
      text-shadow: 0 0 15px rgb(85, 255, 0), 0 0 15px rgb(85, 255, 0),
        0 0 15px rgb(85, 255, 0), 0 0 15px rgb(85, 255, 0);
      font-family: "Dancing Script", cursive;
      font-weight: bold;
    }
  }

  // @media(max-width: 900px){
  //     #contenedorPrincipalMenu{
  //         top:  9%;
  //         left: 5%;
  //         transform: translate(-10%,-10%);
  //     }

  // }

  @media (max-width: 800px) {
    #contenedorPrincipalMenu {
      top: 9%;
      left: 5%;
      transform: translate(-10%, -10%);
    }
  }

  @media (max-width: 700px) {
    #contenedorPrincipalMenu {
      top: 9%;
      left: 10%;
      transform: translate(-10%, -10%);
    }
  }

  @media (max-width: 600px) {
    #contenedorPrincipalMenu {
      left: 12%;
    }
    #contenedorPrincipalMenu {
      top: 9%;
      left: 10%;
      transform: translate(-10%, -10%);
    }
  }

  @media (max-width: 500px) {
    #contenedorPrincipalMenu {
      left: 15%;
    }
    #contenedorPrincipalMenu {
      top: 9%;
      left: 10%;
      transform: translate(-10%, -10%);
    }
  }

  @media (max-width: 400px) {
    #contenedorPrincipalMenu {
      left: 20%;
    }
    #contenedorPrincipalMenu {
      top: 9%;
      left: 10%;
      transform: translate(-10%, -10%);
    }
  }

  @media (max-width: 300px) {
    #contenedorPrincipalMenu {
      left: 25%;
    }

    #contenedorPrincipalMenu {
      top: 9%;
      left: 10%;
      transform: translate(-10%, -10%);
    }
  }
`;
