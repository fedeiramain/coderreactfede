import { CartShop } from "./Components/CartContext/CartContext";
import ItemDetail from "./Components/ItemDetail";
import ItemListContainer from "./Components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import Carrito from "./Components/Carrito/Carrito";
import Compras from "./Components/Carrito/Compras";
import CheckOut from "./Components/Carrito/CheckOut";

function App() {
  return (
    <div>
      <BrowserRouter>
      <CartShop>
      <NavBar />
      <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/:categoria" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetail />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/pagar" element={<Compras />} />
      <Route path="/checkout" element={<CheckOut />} />
      </Routes>
      <Footer />
      </CartShop>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
