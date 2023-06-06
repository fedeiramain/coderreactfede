import { useContext, useEffect } from "react";
import { CartContext } from "../CartContext/CartContext";



const Carrito = () => {

    const { cart, setCart } = useContext(CartContext);
  
    const subTotal = cart.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
  
    const eliminar = (id) => {
        const carrito = cart.filter((p) => p.id !== id)
        setCart(carrito);
    };

    const vaciar = () => {
      
      setCart([])
    };

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(cart))
    }, [cart]);
  
    return (
      <div className="compras">
        <h1 className="text-primary">Mi Compra</h1>
        <div className="productos-carrito">
          {
            cart && cart.map((prod) => {
              return (
                <div key={prod.id} className="prod-carrito">
                  <div className="nombre-prod">
                    <h3>Nombre</h3>
                    <p>{prod.nombre}</p>
                  </div>
                  <div className="cantidad-prod">
                    <h3>Cantidad</h3>
                    <p>{prod.cantidad}</p>
                  </div>
                  <div className="total-prod">
                    <h3>Total</h3>
                    <p>{prod.cantidad * prod.precio}</p>
                  </div>
                  <button className="btn-eliminar" onClick={() => eliminar(prod.id)}><i class="fa-solid fa-trash-can"></i></button>
                </div>
  
              )
            })
          }
        </div>
        {cart.length > 0 ? 
          <div className="totales">
            <h3>Cantidad: {subTotal}</h3>
            <div>
              <button type="button" class="btn btn-danger" onClick={vaciar}>Vaciar</button>
              <button type="button" class="btn btn-success">Ir a Pagar</button>
              </div>
          </div>  
             : <p className="text-warning">Seleccione sus Productos</p>}
      
  
      </div>
    )
  };
  
  export default Carrito;