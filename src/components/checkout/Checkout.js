import React, { forwardRef } from "react";
import Subtotal from "../subtotal";
import { useStateValue } from "../../StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./checkoutProduct/CheckoutProduct";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  const FunctionalArticle = forwardRef((props, ref) => (
    <div ref={ref}>
      <CheckoutProduct
        key={props.index}
        id={props.id}
        title={props.title}
        image={props.image}
        price={props.price}
        rating={props.rating}
      />
    </div>
  ));

  const renderCart = basket => {
    {
      return (
        <FlipMove>
          {basket.map((b, index) => (
            <FunctionalArticle key={index} {...b} />
          ))}
        </FlipMove>
      );
    }
  };
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />
        <div className="">
          {user && <h3>Hello, {user?.email}</h3>}
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {renderCart(basket)}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
