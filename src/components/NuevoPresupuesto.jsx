/* eslint-disable react/prop-types */

import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

  const [mensaje, setMensaje] = useState('');

  const handlePresupuesto = (e) =>{
    e.preventDefault();

    if(!presupuesto || presupuesto < 0){
      setMensaje('No es un presupuesto válido');

      return; // Termina la ejecucion de la funcion y continua con las lineas fuera del if.
    }

    //Si el presupuesto es válido, se debe resetear el mensaje de error.
    setMensaje('');
    setIsValidPresupuesto(true); // Se cambia el state de setIsValidPresupuesto a "true".
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form className="formulario" onSubmit={handlePresupuesto}>
            <div className="campo">
                <label>Definir Presupuesto</label>
                <input
                    className="nuevo-presupuesto"
                    type="number" // Al convertir a Number en el evento onChange, tambien debe colocarse el tipo numero para evitar que truene la app con (NaN).
                    placeholder="Añade tu presupuesto"
                    value={presupuesto}
                    onChange={e => setPresupuesto(Number(e.target.value))} // Se convierte el presupuesto desde que se envía al evento onChange.
                />
            </div>

            <input type="submit" value="Añadir"/>

            {mensaje && <Mensaje tipo="error"> {mensaje} </Mensaje>}
        </form>
    </div>
  )
}

export default NuevoPresupuesto