import { Button } from "@mui/material";
import ItemRows from "./ItemRows";
import PropTypes from "prop-types";
import "./CartItems.css";

const CartItems = ({ className = "" }) => {
  return (
    <section className={`cart-items ${className}`}>
      <div className="items-list">
        <div className="items-container">
          <div className="header8">
            <div className="header-child" />
            <div className="product-header">
              <b className="product">Product</b>
            </div>
            <div className="price-quantity-header">
              <b className="price">Price</b>
              <b className="quantity">Quantity</b>
            </div>
            <b className="total">Total</b>
          </div>
          <ItemRows
            fentyBeauty50OFFGiftCard="Fenty Beauty 50% OFF Gift Card"
            discount20OFF="Discount: 20% OFF"
          />
          <ItemRows
            fentyBeauty50OFFGiftCard="Shopping Spree Gift Card"
            discount20OFF="Worth USD $400"
            propLineHeight="120%"
          />
          <ItemRows
            fentyBeauty50OFFGiftCard="Travel GiftCard"
            discount20OFF="Worth USD $400"
            propLineHeight="22px"
          />
          <div className="action-buttons">
            <Button
              className="button7"
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "18",
                borderColor: "#000",
                borderRadius: "10px",
                "&:hover": { borderColor: "#000" },
                width: 134,
                height: 54,
              }}
            >
              Go Back
            </Button>
            <Button
              className="button8"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#000",
                borderRadius: "10px",
                "&:hover": { background: "#000" },
                width: 143,
                height: 54,
              }}
            >
              Checkout
            </Button>
          </div>
        </div>
        <div className="checkout-details4">
          <div className="checkout-header">
            <div className="header9">
              <b className="checkout-details5">Checkout Details</b>
            </div>
          </div>
          <div className="subtotal-total">
            <div className="price-labels">
              <b className="cart-subtotal1">Cart Subtotal</b>
              <b className="price-values">$360.00</b>
            </div>
          </div>
          <div className="checkout-breakdown">
            <div className="breakdown-list">
              <div className="fee-labels">
                <b className="shipping-handling1">{`Shipping & Handling`}</b>
                <b className="other-taxes1">Other Taxes</b>
              </div>
              <div className="fee-labels1">
                <b className="b3">$0.00</b>
                <b className="b4">$0.00</b>
              </div>
            </div>
          </div>
          <div className="checkout-details-inner">
            <div className="frame-item" />
          </div>
          <div className="subtotal-total1">
            <div className="grand-total-parent">
              <b className="grand-total1">Grand Total</b>
              <b className="b5">$360.00</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CartItems.propTypes = {
  className: PropTypes.string,
};

export default CartItems;
