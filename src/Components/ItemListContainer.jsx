import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { traerProductos } from "../data/traerDatos";


const ItemListContainer = () => {
    const [productos, setProductos] = useState();
    const categoria = useParams().categoria;
    

    useEffect(() => {
      traerProductos()
        .then((data) => {
          if (categoria) {
            setProductos(data.filter(prod => prod.categoria === categoria))
          } else {
            setProductos(data)
          }
        }
         )  
    }, [categoria]);

      
    
    return (
        <div>
          <h1 className="titulo-principal text-center">{categoria ? categoria : "Todos los Productos"}</h1>
          <div className="listado">
         {productos && productos.map((item) => {
        return (
          <div key={item.id} className="item">
            <img src={item.img} className="img-prod" alt="prod" />
            <h3>{item.nombre}</h3>
            <p>${item.precio}</p>
            <div>
            <Link to={`/item/${item.id}`}><button className="boton-info">Info</button></Link>
            </div>
          </div>
        )
      })}
        </div>
        </div>
    )
}

export default ItemListContainer;