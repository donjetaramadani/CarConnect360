import React, { useContext } from "react";
import { StoreContext } from "../../../context/StoreContext";
import './stylePlaceOrder.css';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input
            type="text"
            placeholder="First name"
            style={{ width: "48%", marginRight: "2%" }}
          />
          <input
            type="text"
            placeholder="Last name"
            style={{ width: "48%" }}
          />
        </div>
        <input type="text" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input
            type="text"
            placeholder="City"
            style={{ width: "48%", marginRight: "2%" }}
          />
          <input
            type="text"
            placeholder="State"
            style={{ width: "48%" }}
          />
        </div>
        <div className="multi-fields">
          <input
            type="text"
            placeholder="Zip Code"
            style={{ width: "48%", marginRight: "2%" }}
          />
          <input
            type="text"
            placeholder="Country"
            style={{ width: "48%" }}
          />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p style={{ textAlign: "right" }}>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p style={{ textAlign: "right" }}>${2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b style={{ textAlign: "right" }}>${getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "max(1vw, 12px)",
              fontWeight: "bold",
              border: "none",
              borderRadius: "10px",
              backgroundColor: "#333",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;