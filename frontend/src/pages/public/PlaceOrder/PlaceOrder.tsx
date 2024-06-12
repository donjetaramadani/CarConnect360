import React, { useContext } from "react";
import { StoreContext } from "../../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
  <div className="container">
    <form className="place-order" style={styles.placeOrder}>
      <div className="place-order-left" style={styles.placeOrderLeft}>
        <p className="title" style={styles.title}>Delivery Information</p>
        <div className="multi-fields" style={styles.multiFields}>
          <input
            type="text"
            placeholder="First name"
            style={{ ...styles.input, ...styles.halfWidth, marginRight: "2%" }}
          />
          <input
            type="text"
            placeholder="Last name"
            style={styles.halfWidth}
          />
        </div>
        <input type="text" placeholder="Email address" style={styles.input} />
        <input type="text" placeholder="Street" style={styles.input} />
        <div className="multi-fields" style={styles.multiFields}>
          <input
            type="text"
            placeholder="City"
            style={{ ...styles.input, ...styles.halfWidth, marginRight: "2%" }}
          />
          <input
            type="text"
            placeholder="State"
            style={styles.halfWidth}
          />
        </div>
        <div className="multi-fields" style={styles.multiFields}>
          <input
            type="text"
            placeholder="Zip Code"
            style={{ ...styles.input, ...styles.halfWidth, marginRight: "2%" }}
          />
          <input
            type="text"
            placeholder="Country"
            style={styles.halfWidth}
          />
        </div>
        <input type="text" placeholder="Phone" style={styles.input} />
      </div>
      <div className="place-order-right" style={styles.placeOrderRight}>
        <div className="cart-total" style={styles.cartTotal}>
          <h2 style={styles.cartTotalHeader}>Cart Totals</h2>
          <div>
            <div className="cart-total-details" style={styles.cartTotalDetails}>
              <p>Subtotal</p>
              <p style={{ textAlign: "right" }}>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details" style={styles.cartTotalDetails}>
              <p>Delivery Fee</p>
              <p style={{ textAlign: "right" }}>${2}</p>
            </div>
            <hr />
            <div className="cart-total-details" style={styles.cartTotalDetails}>
              <b>Total</b>
              <b style={{ textAlign: "right" }}>${getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button
            style={styles.button}
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
 </div>
  );
};

const styles = {
  placeOrder: {
    marginTop: "80px",
    display: "flex",
    justifyContent: "space-between",
    gap: "max(12vw, 20px)",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  container: {
    margin: "40px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "center",
  },
  placeOrderLeft: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "20px",
  },
  placeOrderRight: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "20px",
    borderLeft: "1px solid #ccc",
  },
  cartTotal: {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
  },
  cartTotalHeader: {
    marginTop: 0,
    fontWeight: "bold",
    fontSize: "max(1.2vw, 14px)",
    padding: "10px",
    borderBottom: "1px solid #ccc",
  },
  cartTotalDetails: {
    display: "flex",
    justifyContent: "space-between",
    color: "#555",
  },
  multiFields: {
    display: "flex",
    gap: "10px",
  },
  input: {
    padding: "10px",
    fontSize: "max(0.8vw, 10px)",
    border: "1px solid #ccc",
    borderRadius: "10px",
    width: "100%",
  },
  halfWidth: {
    width: "48%",
  },
  button: {
    width: "100%",
    padding: "10px",
    fontSize: "max(1vw, 12px)",
    fontWeight: "bold",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#333",
    color: "#fff",
    cursor: "pointer",
  },
  title: {
    fontWeight: "bold",
    fontSize: "18px",
    marginBottom: "10px",
  },
};

export default PlaceOrder;
