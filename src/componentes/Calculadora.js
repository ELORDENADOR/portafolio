import React from "react";
import "../css/Calculadora.css";
import { useState } from "react";

function Calculadora() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [operacion, setOperacion] = useState("");
  const [resultado, setResultado] = useState("");
  const [dirigir, setDirigir] = useState(false);

  function seleccion(val) {
    if (dirigir === false) {
      if (operacion === "") {
        setNumero1(numero1 + val);
      } else {
        setNumero2(numero2 + val);
      }
    } else {
      alert("Borre o Limpie Pantalla");
    }
  }

  function operador(val) {
    setResultado("");
    if (numero1 === "") {
      alert("Debe Ingresar primero un numero");
    } else {
      setOperacion(val);
    }
  }

  function result() {
    if (numero1 !== "" && numero2 !== "") {
      setDirigir(true);
      switch (operacion) {
        case "+":
          setResultado(Number(numero1) + Number(numero2));
          break;
        case "-":
          setResultado(Number(numero1) - Number(numero2));
          break;
        case "*":
          setResultado(Number(numero1) * Number(numero2));
          break;
        case "/":
          setResultado(Number(numero1) / Number(numero2));
          break;
      }
    } else {
      alert("Debe ingresar los dos valores");
    }
  }

  function limpiar() {
    setNumero1("");
    setNumero2("");
    setOperacion("");
    setResultado("");
    setDirigir(false);
  }

  function borrar() {
    if (numero2 === "") {
      setNumero1("");
      setOperacion("");
      setDirigir(false);
    } else if (numero1 !== "") {
      setNumero2("");
      setResultado("");
      setDirigir(false);
    }
  }

  return (
    <>
      <h1 className="titulo-calculadora">Calculadora</h1>

      <div className="contenedor">
        <div className="pantalla">
          <div>{numero1 + operacion + numero2}</div>
          <div className="sigresul">{resultado !== "" ? resultado : ""}</div>
        </div>

        <button className="cero" onClick={() => seleccion(0)}>
          0
        </button>
        <button className="uno" onClick={() => seleccion(1)}>
          1
        </button>
        <button className="dos" onClick={() => seleccion(2)}>
          2
        </button>
        <button className="tres" onClick={() => seleccion(3)}>
          3
        </button>
        <button className="cuatro" onClick={() => seleccion(4)}>
          4
        </button>
        <button className="cinco" onClick={() => seleccion(5)}>
          5
        </button>
        <button className="seis" onClick={() => seleccion(6)}>
          6
        </button>
        <button className="siete" onClick={() => seleccion(7)}>
          7
        </button>
        <button className="ocho" onClick={() => seleccion(8)}>
          8
        </button>
        <button className="nueve" onClick={() => seleccion(9)}>
          9
        </button>

        <button className="sumar" onClick={() => operador("+")}>
          +
        </button>
        <button className="restar" onClick={() => operador("-")}>
          -
        </button>
        <button className="dividir" onClick={() => operador("/")}>
          /
        </button>
        <button className="multiplicar" onClick={() => operador("*")}>
          *
        </button>
        <button className="resultado" onClick={result}>
          =
        </button>

        <button className="limpiar" onClick={limpiar}>
          Limpiar
        </button>
        <button className="borrar" onClick={borrar}>
          Borrar
        </button>
      </div>
    </>
  );
}

export default Calculadora;
