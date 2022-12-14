import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardListContainer from "./components/CardListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import CartProvider from './context/CartContext'
import Cart from "./components/Cart";
// import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <CartProvider>
    <NavBar />
      <Routes>
      <Route path="/" element={<CardListContainer /> }/>
      {/* <Route path="/contacto" element={<h1>pagina de contacto</h1>}/> */}
      <Route path="/products/:oldNewlist" element={<CardListContainer/>}/>
      <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
      <Route  path="/cart/" element={<Cart/>} />
      </Routes>
      <Footer />
    </CartProvider>
    </BrowserRouter>
  );
}
export default App;
