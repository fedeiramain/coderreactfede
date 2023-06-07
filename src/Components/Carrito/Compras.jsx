


import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { CartContext } from "../CartContext/CartContext";

const Compras = () => {

    const { cart } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    const [ user, setUser] = useState([]);
    
    const registro = (data) => {
         setUser(data)
    };

    
    const subTotal = cart.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);

    const order = {
      buyer: user,
      items: cart.map(p =>({ id: p.id, name: p.nombre, price: p.precio, quantity: p.cantidad})),
      total: subTotal
    }

    const handlePagar = () => {
      const db = getFirestore()
      const orderCollection = collection(db, "orders");
      addDoc(orderCollection, order)
        .then(( {id} ) => console.log(id))
    }

  return (
    <div>
        <h3>Productos:</h3>
        <h3>Total: $</h3>
        <form onSubmit={handleSubmit(registro)}>
            <label htmlFor="">Nombre</label>
            <input type="text"
                  {...register("nombre")}
                  placeholder='nombre'/>
            <label htmlFor="">Apellido</label>
            <input type="text" 
                  {...register("apellido")} 
                  placeholder='apellido'/>
            <label htmlFor="">E-mail</label>
            <input type="mail" 
                   {...register("mail")}
                   placeholder='@gmail.com'/>
            <button type='submit'>Registrar</button>
        </form>
        <button onClick={handlePagar}>Pagar</button>
    </div>
  )
}

export default Compras;