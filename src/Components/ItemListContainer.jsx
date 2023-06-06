import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    const [productos, setProductos] = useState();
    const categoria = useParams().categoria;
    

    useEffect(() => {
      const db = getFirestore();
      const queryCollection = collection(db, "productos");
      
      
          if (categoria) {
            const collectionFilter = query(queryCollection, where("categoria", "==", categoria))
            getDocs(collectionFilter)
              .then(res => setProductos(res.docs.map(p => ({ id: p.id, ...p.data()}))))
          } else {
            getDocs(queryCollection)
              .then(res => setProductos(res.docs.map(p => ({ id: p.id, ...p.data()}))))
          }
        }
          
    , [categoria]);

      
    
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