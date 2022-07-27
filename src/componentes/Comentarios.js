import axios from "axios";
import React from "react";
import { useState } from "react";
import "../css/Comentarios.css";

export const Comentarios = () => {
  const [comentarios, setComentarios] = useState("");
  const [validandoMensaje, setValidandoMensaje] = useState("");

  const enviarFormulario = (e) => {
    e.preventDefault();

    const validadoMensaje = (tipo) => {
      setValidandoMensaje(`${tipo}`);
    };

    if (!comentarios.trim()) {
      validadoMensaje("Por favor digite mensaje");
    } else {
      let data = new FormData(e.target);
      axios
        .post(
          "https://formspree.io/f/mbjwnkna",
          {
            comentarios: comentarios,
          },
          {
            headers: { Accept: "application/json" },
          }
        )
        .then((response) => {
          console.log("response", response.data);
          if (response.data.ok) {
            validadoMensaje("Mensaje enviado con Exito");
          } else {
            validadoMensaje("Error al enviar mensaje");
          }
        });
      // .catch((error) => {
      //   alert("2 Invalido");
      // });
    }
    setComentarios("");
  };

  return (
    <div>
      <p id="tituloComentarios">Comentarios</p>
      <p id="textoIndicacionComentarios">
        Porfavor Escriba su cometario, que proyecto quiere que realice o que
        mejora puedo hacerle a la pagina
      </p>
      <form onSubmit={enviarFormulario}>
        <textarea
          id="comentarios"
          cols="100"
          rows="4"
          // maxlength="200"
          onChange={(e) => setComentarios(e.target.value)}
          name="comentarios"
          value={comentarios}
        />
        <br />
        <p id="advertenciaComentarios">Maximo 200 palabras</p>
        <button id="btnEnviarComentario">Enviar</button>
      </form>

      <p id="validador">{validandoMensaje}</p>
    </div>
  );
};
