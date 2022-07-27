import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import AdministradorDeTareas from "./AdministradorDeTareas";
import Calculadora from "./Calculadora";
import JuegoPPT from "./JuegoPPT.js";
import { Api } from "./Api";
import { Tarjeta } from "./Tarjeta";
import { CursoDeIdiomas } from "./CursoDeIdiomas";
import { Seleccionar } from "./Seleccionar";

export const ProyectosNew = () => {
  const [estado, setEstado] = useState(false);

  const click = () => {
    setEstado(true);
  };

  const click2 = () => {
    setEstado(false);
  };

  const [vista, setVista] = useState(7);

  const opcion = (x) => {
    setVista(x);
    setEstado(false);
  };

  return (
    <>
      <ProContainer>
        <p id="tituloProyectos">Proyectos</p>
        <div id="contenedorPrincipalProyectosNew">
          <div id="despliegue">
            <div>
              {estado ? (
                <div>
                  <div id="nombreProyectos">
                    Proyectos
                    <FontAwesomeIcon
                      id="imgFlechaDespliegueProyectos"
                      onClick={() => click2()}
                      icon={faArrowUp}
                    />
                  </div>

                  <div className="confProyectos" onClick={() => opcion(1)}>
                    Calculadora
                  </div>
                  <p className="confProyectos" onClick={() => opcion(2)}>
                    Admin Tareas
                  </p>
                  <p className="confProyectos" onClick={() => opcion(3)}>
                    Juego PPT
                  </p>
                  <p className="confProyectos" onClick={() => opcion(4)}>
                    Buscador de Imagenes
                  </p>
                  <p className="confProyectos" onClick={() => opcion(5)}>
                    Tarjeta
                  </p>
                  <p className="confProyectos" onClick={() => opcion(6)}>
                    Curso de Idiomas
                  </p>
                  <p className="confProyectos" onClick={() => opcion(7)}>
                    Salir
                  </p>
                </div>
              ) : (
                <div id="nombreProyectos">
                  Proyectos
                  <FontAwesomeIcon
                    id="imgFlechaDespliegueProyectos"
                    onClick={() => click()}
                    icon={faArrowDown}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          {vista === 1 ? (
            <Calculadora />
          ) : vista === 2 ? (
            <AdministradorDeTareas />
          ) : vista === 3 ? (
            <JuegoPPT />
          ) : vista === 4 ? (
            <Api />
          ) : vista === 5 ? (
            <Tarjeta />
          ) : vista === 6 ? (
            <CursoDeIdiomas />
          ) : vista === 7 ? (
            <Seleccionar />
          ) : (
            ""
          )}
        </div>

        {/* <p id='salir'>{mensaje}</p> */}
      </ProContainer>
    </>
  );
};

const ProContainer = styled.nav`
  #contenedorPrincipalProyectosNew {
    display: flex;
    justify-content: center;
  }

  #nombreProyectos {
    border: 4px solid rgb(97, 59, 128);
    margin-top: 20px;

    padding: 5px;
    height: 20px;
    width: 120px;
    color: white;
    font-family: "Dancing Script", cursive;
    font-size: 20px;
  }

  #imgFlechaDespliegueProyectos {
    margin-left: 30px;
    font-size: 20px;
  }

  .confProyectos {
    padding: 5px;
    cursor: pointer;
    // font-family: 'Lato', sans-serif;
    font-size: 15px;

    // transition-duration: 2s;
    font-size: 15px;
    // text-shadow: 0 0 15px rgb(38, 0, 255), 0 0 15px rgb(8, 0, 255), 0 0 15px rgb(4, 0, 255), 0 0 15px rgb(34, 0, 255);
    font-family: "Dancing Script", cursive;
    font-weight: bold;
    color: white;
    background: rgba(163, 113, 187, 0.76);
  }

  .confProyectos:hover {
    text-shadow: 0 0 5px rgb(47, 0, 255), 0 0 15px rgb(63, 60, 236),
      0 0 30px rgb(50, 50, 205), 0 0 50px rgb(34, 0, 255);

    // text-shadow: 0 0 15px rgb(38, 0, 255), 0 0 15px rgb(8, 0, 255), 0 0 15px rgb(4, 0, 255), 0 0 15px rgb(34, 0, 255);
    color: white;
  }

  #salir {
    // margin: 0px;
    // padding-top: 10px;
    // padding-bottom: 300px;
    text-align: center;
    font-weight: bold;
    font-size: 40px;
    opacity: 0.2;
  }

  #tituloProyectos {
    padding-top: 30px;
    padding-bottom: 30px;
    text-align: center;
    font-family: "Dancing Script", cursive;
    font-size: 60px;
    text-shadow: 0 0 5px rgb(47, 0, 255), 0 0 15px rgb(63, 60, 236),
      0 0 30px rgb(50, 50, 205), 0 0 50px rgb(34, 0, 255);
    color: white;
  }

  @media (max-width: 700px) {
    #salir {
      padding: 15px;
    }
  }

  @media (max-width: 300px) {
    #tituloProyectos {
      font-size: 40px;
    }

    #salir {
      padding: 15px;
    }
  }
`;
