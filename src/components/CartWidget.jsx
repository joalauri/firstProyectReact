import imgLogo from "./assets/logoSmart.png";
import newLogo from "./assets/new.png";
import outletLogo from "./assets/outlet.png";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export const CartWidget = () => {
  const {totalProducts} = useCartContext();
  return (
    <div className="cartWidgetContainer">
      <NavLink to='products/top'>
        <img src={imgLogo} alt="" />
      </NavLink>
      <NavLink to='products/normal'>
        <img src={newLogo} alt="" />
      </NavLink>
      <NavLink to='cart/'>
      <div className="cartlogoNumber">
      <img src={outletLogo} alt="" />
      <p>{totalProducts() || ''}</p>
        </div>
      </NavLink>

    </div>
  );
};
export default CartWidget;
