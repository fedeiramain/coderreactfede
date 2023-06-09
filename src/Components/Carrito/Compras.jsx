


import { Timestamp, addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

const Compras = () => {

  const { cart, setCart, setOrderId } = useContext(CartContext);
  const { register, handleSubmit } = useForm();
  const [user, setUser] = useState([]);

  const registro = (data) => {
    setUser(data);

  };

  console.log(user)

  const subTotal = cart.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
  const subCantidad = cart.reduce((acc, prod) => acc + prod.cantidad, 0);

  const order = {
    buyer: user,
    items: cart.map(p => ({ id: p.id, name: p.nombre, price: p.precio, quantity: p.cantidad })),
    total: subTotal,
    date: Timestamp.fromDate(new Date())
  }

  const handlePagar = () => {
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then(({ id }) => setOrderId(id));

    setCart([]);
    setUser([]);
  }

  return (
    <div className="container">
      <div>
        <div>
          <h1>Registre sus Datos</h1>
          <h3>Productos: {subCantidad}</h3>
          <h3>Total: $ {subTotal}</h3>
          <div>
          </div>
          <form className="form" id="formid" onSubmit={handleSubmit(registro)}>
            <div>
              <label className="form-datos" htmlFor="">Nombre:</label>
              <input type="text"
                pattern="[a-z]{4,12}"
                {...register("nombre")}
                placeholder='nombre' />
            </div>
            <div>
              <label className="form-datos" htmlFor="">Apellido:</label>
              <input type="text"
                pattern="[a-z]{4,12}"
                {...register("apellido")}
                placeholder='apellido' />
            </div>
            <div>
              <label className="form-datos" htmlFor="">E-mail:</label>
              <input type="mail"
                pattern="^[a-z0-9]+@[a-z]+\.[a-z]+$"
                {...register("mail")}
                placeholder='@gmail.com' />
            </div>
            <button className="btn btn-success registrar" type='submit'>Registrar</button>
          </form>
          {user.mail &&
            <Link to="/checkout">
              <button className="btn btn-success mt-3" id="pagar" onClick={handlePagar}>Pagar</button></Link>}
        </div>
      </div>
    </div>
  )
}

export default Compras;