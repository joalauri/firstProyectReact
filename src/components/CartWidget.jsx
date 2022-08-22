import imgLogo from "./assets/logoSmart.png";
import newLogo from "./assets/new.png";
import outletLogo from "./assets/outlet.png";
const CartWidget = () => {
  return (
    <div className="cartWidgetContainer">
      <a href="https://example.com">
        <img src={imgLogo} alt="" />
      </a>
      <a href="https://example.com">
        <img src={newLogo} alt="" />
      </a>
      <a href="https://example.com">
        <img src={outletLogo} alt="" />
      </a>
    </div>
  );
};
export default CartWidget;
