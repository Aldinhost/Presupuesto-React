/* eslint-disable react/prop-types */
import Gasto from "./Gasto";

const ListadoGastos = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  filtro,
  gastosFiltrados,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filtro ? (
        <>
          <h2>
            {gastosFiltrados.length
              ? "Gastos"
              : "No hay gastos en esta categoría"}
          </h2>
          {gastosFiltrados.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar} //Se pasa como prop a cada uno de los gastos
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{gastos.length ? "Gastos" : "No hay gastos aún"}</h2>
          {gastos.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar} //Se pasa como prop a cada uno de los gastos
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ListadoGastos;
