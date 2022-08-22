import CartWidget from "./CartWidget";
const NavBar = () => {
  return (
    <div className="navBarContainer">
      <CartWidget />
      <h1 className="h1NavBar"> Welcome! </h1>

      <ul className="ulNavBar">
        <li>
          <a href="https://example.com">Home</a>
        </li>
        <li>
          <a href="https://example.com">Products</a>
        </li>
        <li>
          <a href="https://example.com">AboutUs</a>
        </li>
        <li>
          <a href="https://example.com">Share</a>
        </li>
        <li>
          <a href="https://example.com">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
