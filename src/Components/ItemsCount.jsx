

const ItemsCount = ( {cantidad, aumentar, disminuir, agregar} ) => {

   
    return (
      <div className="cantidad">
          <h4 className="titulo-cantidad">Cantidad:</h4>
          <button className="sumar" onClick={aumentar}>+</button>
          <p className="numero">{cantidad}</p>
          <button className="restar" onClick={disminuir}>-</button>
          {cantidad > 0 && <button className="agregar-prod" onClick={agregar}>Agregar</button>}
      </div>
    )
  }
  
  export default ItemsCount;