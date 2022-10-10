import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBarContainer">
      <CartWidget />
      <h1 className="h1NavBar"> Art Gallery </h1>

      <ul className="ulNavBar">
        <li>
          <NavLink to="/" >Home</NavLink>
        </li>
        <li>
          <NavLink to="/" >Products</NavLink>
        </li>
        <li>
          <NavLink to="aboutUs" >AboutUs</NavLink>
        </li>
        <li>
          <NavLink to="share" >Share</NavLink>
        </li>
        <li>
          <NavLink to="contact" >Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
