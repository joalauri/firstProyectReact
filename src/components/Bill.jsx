import React from "react";

const Bill = ({ cart }) => {
  return (
    <section className="bill">
      {cart.map((product) => (
        <div key={product.id}>
          <div>
            <img src={product.img} alt="" />
          </div>
          <div>
            <h4>{product.title}</h4>
            <h5>Units: {product.quantity}</h5>
            <h5>Price per unit: ${product.price}</h5>
          </div>
          {/* <h5>Total: {product.quantity * product.price} </h5> */}
        </div>
      ))}
    </section>
  );
};
export default Bill;
