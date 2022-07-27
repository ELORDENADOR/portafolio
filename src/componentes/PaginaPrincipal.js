import React, { useState } from "react";
import "../css/PaginaPrincipal.css";
import { Aside } from "./Aside";
import Header from "./Header";
import "../css/BotonTema.css";
import "../css/Header.css";
import "../css/Seccion2.css";
import "../css/Seccion3.css";
import "../css/Seccion5.css";
import "../css/Seccion1.css";
import "../css/Seccion6.css";
import "../css/Seccion4.css";
import "../css/Seccion7.css";
import "../css/Seccion8.css";
import { Presentacion } from "./Presentacion";
import { Tecnologias } from "./Tecnologias";
import { Experiencia } from "./Experiencia";
import { Contactame } from "./Contactame";
import { Comentarios } from "./Comentarios";
import { SobreMi } from "./SobreMi";
import { Menu } from "./Menu";
import { ProyectosNew } from "./ProyectosNew";
import { Api } from "./Api";
// import { Manga } from "./Manga";
import { Tarjeta } from "./Tarjeta";
// import { CursoDeIngles } from "./CursoDeIngles";
import { CursoDeIdiomas } from "./CursoDeIdiomas";

function PaginaPrincipal() {
  return (
    <div id="contenedorPrincipal">
      <div id="contenedorsecundario">
        <section id="seccion1" className="colorNeonSeccion1">
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
          <span id="span4"></span>

          <a name="sobremi"></a>

          <SobreMi />
        </section>

        <section id="seccion2" className="colorNeonSeccion2">
          <a name="header"></a>
          <Menu />
          <Header />
        </section>

        <section id="seccion3" className="colorNeonSeccion3">
          <a name="comentarios"></a>

          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
          <span id="span4"></span>
          <Comentarios />
        </section>

        <section id="seccion4" className="colorNeonSeccion4">
          <a name="presentacion"></a>
          <Presentacion />
        </section>

        <section id="seccion5" className="colorNeonSeccion5">
          <a name="tecnologia"></a>

          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
          <span id="span4"></span>

          <Tecnologias />
        </section>

        <section id="seccion6" className="colorNeonSeccion6">
          <a name="experiencia"></a>
          <Experiencia />
        </section>

        <section id="seccion7" className="colorNeonSeccion7">
          <a name="proyectos"></a>

          <ProyectosNew />
        </section>

        <section id="seccion8" className="colorNeonSeccion8">
          <a name="contactame"></a>
          <Contactame />
        </section>
      </div>
    </div>
  );
}

export default PaginaPrincipal;
