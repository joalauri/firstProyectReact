import imgLogo from "./assets/logoSmart.png";
import newLogo from "./assets/new.png";
import outletLogo from "./assets/outlet.png";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
  return (
    <div className="cartWidgetContainer">
      <NavLink to='products/top'>
        <img src={imgLogo} alt="" />
      </NavLink>
      <NavLink to='products/normal'>
        <img src={newLogo} alt="" />
      </NavLink>
      <NavLink to='cart/'>
        <img src={outletLogo} alt="" />
      </NavLink>
    </div>
  );
};
export default CartWidget;
