import { useContext, useState } from "react";
import ItemsCount from "./ItemsCount";
import { CartContext } from "./CartContext/CartContext";



const Items = ({ item }) => {
    const [cantidad, setCantidad] = useState(0);
    const { cart, setCart } = useContext(CartContext);
  
    const aumentar = () => {
      if (cantidad < 5) {
        setCantidad(cantidad + 1)
      }
    };
  
    const disminuir = () => {
      if (cantidad > 0) {
        setCantidad(cantidad - 1)
      };
    }
  
    const agregar = () => {
      const agregado = { ...item, cantidad };
      const carrito = [...cart];
      const estaCarrito = carrito.find((producto) => producto.id === agregado.id);
      if (estaCarrito) {
        estaCarrito.cantidad += cantidad;
      } else {
        carrito.push(agregado);
      }
      setCart(carrito)
      console.log(cart);
    };
  
  
    return (
      
      <div className="listado-detalle">
                  <div className="item-detalle">
                    <img src={item.img} className="img-detalle" alt={item.nombre} />
                    <div className="detalle">
                      <h3>{item.nombre}</h3>
                      <p>${item.precio}</p>
                      <p>{item.description}</p> 
                      {<ItemsCount cantidad={cantidad} aumentar={aumentar} disminuir={disminuir} agregar={agregar} />}
                    </div>
                  </div>
      </div>
    )
  }
  
  export default Items;