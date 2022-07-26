import React from 'react'
import styled from 'styled-components';

export const Seleccionar = () => {
  return (
    <ContenedorTotalSeleccionar>
      
     <p id='MensajeDeSeleccionarProyecto'>Por favor selecciona un Proyecto</p>
      
    </ContenedorTotalSeleccionar>
  )
}
const ContenedorTotalSeleccionar = styled.nav`

#MensajeDeSeleccionarProyecto{
  margin-top: 100px;
  margin-bottom:300px;
  padding: 3px;
  text-align:center;
 
  font-weight: bold;
  font-size: 40px;
  opacity: 0.2;
}

`