import FrameComponent6 from "../components/FrameComponent6";
import CartItems from "../components/CartItems";
import FrameComponent2 from "../components/FrameComponent2";
import "./CartDetailsPage.css";

const CartDetailsPage = () => {
  return (
    <div className="cartdetailspage">
      <FrameComponent6 checkout="Your Cart" />
      <CartItems />
      <FrameComponent2 />
    </div>
  );
};

export default CartDetailsPage;
