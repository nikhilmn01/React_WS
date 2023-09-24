import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCartBumpAnimated, setIsCartBumpAnimated] = useState(false);
  const numberOfItems = cartCtx.items.reduce((currentVal, item) => {
    return currentVal + item.amount;
  }, 0);
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    } else {
      setIsCartBumpAnimated(true);
      const timeout = setTimeout(() => {
        setIsCartBumpAnimated(false);
      }, 300);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [cartCtx.items]);
  const buttonCSS = `${classes.button} ${
    isCartBumpAnimated ? classes.bump : ""
  }`;
  return (
    <button className={buttonCSS} onClick={props.onShow}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
