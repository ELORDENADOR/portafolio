import React from "react";
import styled from "styled-components";
import muro from "../img/muro.png";
// import "../css/Manga.css";
import tarjeta1 from "../img/tarjetaImg1.png";
import tarjeta2 from "../img/tarjetaImg2.png";
import tarjeta3 from "../img/tarjetaImg3.png";
import corazon from "../img/corazon.png";
import bote from "../img/bote.png";

export const Tarjeta = () => {
  return (
    <ContenedorLibro>
      <div>
        <p id="textoIndisponibilidadTarjeta">
          No es posible Mostrar el proyecto por que el dispostivo no cumple con
          el tamaño apropiado
        </p>
      </div>

      <div id="contenedorPrincipalManga">
        <figure className="container">
          <img id="corazon" src={corazon}></img>
          <img id="bote" src={bote}></img>
          <img id="imgFrente" src={tarjeta2}></img>
          <div className="cover ">
            <figure className="front">
              <img id="imgFrente" src={tarjeta3}></img>
              <p id="textoFreto"></p>
            </figure>
            <figure className="back">
              <img id="imgFrente" src={tarjeta1}></img>
              <p></p>
            </figure>
          </div>
        </figure>
      </div>
    </ContenedorLibro>
  );
};
const ContenedorLibro = styled.nav`
  #imgFrente {
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  #textoFreto {
    z-index: 3;
  }

  #contenedorPrincipalManga {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 600px;
    margin: 0;
    padding: 0;
    background: $444;
    padding-top: 100px;
  }

  .container {
    width: 500px;
    // height: 380px;
    left: 240px;
    height: 400px;
    background-size: cover;
    position: relative;
    z-index: 1;
  }

  .cover {
    width: 500px;
    height: 100%;
    position: absolute;
    // left: 240px;
    top: 0px;
    background-color: #345b8c;
    transform: rotateY(0deg);
    transform-style: preserve-3d;
    transform-origin: left;
    transition: all 0.7s ease-in;

    background-image: url("../img/muro.png");

    /* filter: grayscale(90%); */
    background-size: cover;
  }

  .container:hover .cover {
    transform: rotateY(-180deg);
  }

  figure {
    margin: 0;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  figure.front {
    // background: red;
  }

  figure.back {
    // background: green;
    transform: rotateY(180deg);
  }

  #corazon {
    transition-duration: 2s;
    position: absolute;
    width: 50px;
    height: 50px;

    top: 200px;
    left: 300px;
  }

  #corazon:hover {
    transform: scale(2, 2);
    transition-duration: 2s;
  }

  #bote {
    position: absolute;
    width: 40px;
    height: 40px;

    top: 310px;
    left: 300px;

    animation-name: mover1;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
    transform: rotate(330deg);
  }

  #textoIndisponibilidadTarjeta {
    display: none;
  }

  @media (max-width: 1050px) {
    #contenedorPrincipalManga {
      display: none;
    }

    #textoIndisponibilidadTarjeta {
      display: block;
      color: white;
      text-align: center;
      font-family: "Abril Fatface", cursive;
      padding-top: 100px;
      padding-bottom: 100px;
      font-size: 20px;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
`;
