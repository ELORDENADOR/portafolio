import { Formik, Form, Field } from "formik";
import React, { useState } from "react";
import styled from "styled-components";

export const Api = () => {
  const [mas, setMas] = useState(10);

  const [estado, setEstado] = useState(false);

  const masImagenes = () => {
    setMas(mas + 10);
    if (mas >= 30) alert("Ya no hay mas imagenes");
  };

  const activarBuscarMasImagenes = () => {
    // if(!.trim()){
    //     alert("Que Imagenes desea Buscar")
    //     return
    // }
    setEstado(true);
    setMas(10);
  };

  const [fotos, setFotos] = useState([]);
  const open = (url) => window.open(url);

  console.log({ fotos });
  return (
    <div>
      <ContenedorImagenesApi>
        <p id="tituloApi">Buscador de Imagenes</p>

        <div id="contenedroPrincipal">
          <div id="configuracinImagenTexto">
            {fotos.map((fotos) => (
              <article key={fotos.id} onClick={() => open(fotos.links.html)}>
                <div>
                  <img id="imgProyectoApi" src={fotos.urls.regular} />
                </div>
              </article>
            ))}
          </div>

          <Formik
            initialValues={{ search: "" }}
            onSubmit={async (values) => {
              const response = await fetch(
                `https://api.unsplash.com/search/photos?per_page=${mas}&query=${values.search}`,
                {
                  headers: {
                    Authorization:
                      "Client-ID RY68GpT6qCvAbSSuIJS1n8POvBIzml0iz_PWZK8atzY",
                  },
                }
              );
              const data = await response.json();
              setFotos(data.results);
            }}
          >
            <Form>
              <Field name="search" />

              {estado ? (
                <div>
                  <button
                    id="botonBuscarApi1"
                    onClick={() => activarBuscarMasImagenes()}
                  >
                    Buscar
                  </button>
                  <button id="botonActivarImg1" onClick={() => masImagenes()}>
                    Mas
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    id="botonBuscarApi1"
                    onClick={() => activarBuscarMasImagenes()}
                  >
                    Buscar
                  </button>
                </div>
              )}
            </Form>
          </Formik>
        </div>

        <div id="contenedorTextoIamgesApi">
          {/* <div id='configuracinImagenTexto'>
                        {fotos.map(fotos =>
                            <article key={fotos.id} onClick={()=> open(fotos.links.html)} >
                    
                            <div>
                                <img id='imgProyectoApi' src={fotos.urls.regular} />

                            </div>                                                
                    
                        </article>)}
                      
            </div> */}
        </div>
      </ContenedorImagenesApi>
    </div>
  );
};
const ContenedorImagenesApi = styled.nav`
  #tituloApi {
    padding-top: 40px;
    padding-bottom: 20px;
    text-align: center;
    /* background-color: rgba(128, 128, 128, 0.123);   */
    color: rgb(214, 234, 234);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  #contenedroPrincipal {
    text-align: center;
    padding-bottom: 50px;
  }

  #configuracinImagenTexto {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  #imgProyectoApi {
    width: 200px;
    height: 200px;
    margin: 5px;
  }

  #botonBuscarApi1,
  #botonBuscarApi2 {
    background: tomato;
  }

  #botonActivarImg1 {
    background: #d3d3d3;
  }

  #botonActivarImg1:active {
    background: tomato;
  }

  #botonMasAbajo {
    // position: absolute;
    left: 50%;
  }
`
