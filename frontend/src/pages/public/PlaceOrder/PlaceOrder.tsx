import React, { useContext, useState } from "react";
import { Elements, ElementsConsumer, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import { StoreContext } from "../../../context/StoreContext";
import stripePromise from "../../../utils/stripeConfig"; 

const PlaceOrder = () => {
    const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    };

    const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        setLoading(true);

        try {
            const cardElement = elements.getElement(CardElement);
            const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
            });

            if (stripeError) {
                console.error('Stripe createPaymentMethod error:', stripeError);
                setError(stripeError.message);
                setLoading(false);
                return;
            }

            let orderItems = [];
            if (food_list) {
                food_list.forEach((foodItem) => {
                    if (cartItems[foodItem.Name] > 0) {
                        let itemInfo = { ...foodItem, quantity: cartItems[foodItem.Name] };
                        orderItems.push(itemInfo);
                    }
                });
            } else {
                console.error('Food list is undefined');
            }

            let orderData = {
                address: data,
                items: orderItems,
                amount: getTotalCartAmount() * 100 + 200, // Stripe expects amount in cents
                paymentMethodId: paymentMethod.id,
            };


             // Make sure token is correctly defined and included in headers
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
      };

            let response = await axios.post("https://localhost:7023/api/Order/place", orderData, { headers });

            if (response.data.success) {
                const { sessionUrl } = response.data;
                window.location.replace(sessionUrl);
            } else {
                alert("Error");
            }
        } catch (error) {
            console.error('Error placing order:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({ elements, stripe }) => (
                        <form className="place-order" style={styles.placeOrder} onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                            <div className="place-order-left" style={styles.placeOrderLeft}>
                                <p className="title" style={styles.title}>Delivery Information</p>
                                <div className="multi-fields" style={styles.multiFields}>
                                    <input
                                        required
                                        name="firstName"
                                        onChange={onChangeHandler}
                                        value={data.firstName}
                                        type="text"
                                        placeholder="First name"
                                        style={{ ...styles.input, ...styles.halfWidth, marginRight: "2%" }}
                                    />
                                    <input
                                        required
                                        name="lastName"
                                        onChange={onChangeHandler}
                                        value={data.lastName}
                                        type="text"
                                        placeholder="Last name"
                                        style={styles.halfWidth}
                                    />
                                </div>
                                <input
                                    required
                                    name="email"
                                    onChange={onChangeHandler}
                                    value={data.email}
                                    type="text"
                                    placeholder="Email address"
                                    style={styles.input}
                                />
                                <input
                                    required
                                    name="street"
                                    onChange={onChangeHandler}
                                    value={data.street}
                                    type="text"
                                    placeholder="Street"
                                    style={styles.input}
                                />
                                <div className="multi-fields" style={styles.multiFields}>
                                    <input
                                        required
                                        name="city"
                                        onChange={onChangeHandler}
                                        value={data.city}
                                        type="text"
                                        placeholder="City"
                                        style={{ ...styles.input, ...styles.halfWidth, marginRight: "2%" }}
                                    />
                                    <input
                                        required
                                        name="state"
                                        onChange={onChangeHandler}
                                        value={data.state}
                                        type="text"
                                        placeholder="State"
                                        style={styles.halfWidth}
                                    />
                                </div>
                                <div className="multi-fields" style={styles.multiFields}>
                                    <input
                                        required
                                        name="zipcode"
                                        onChange={onChangeHandler}
                                        value={data.zipcode}
                                        type="text"
                                        placeholder="Zip Code"
                                        style={{ ...styles.input, ...styles.halfWidth, marginRight: "2%" }}
                                    />
                                    <input
                                        required
                                        name="country"
                                        onChange={onChangeHandler}
                                        value={data.country}
                                        type="text"
                                        placeholder="Country"
                                        style={styles.halfWidth}
                                    />
                                </div>
                                <input
                                    required
                                    name="phone"
                                    onChange={onChangeHandler}
                                    value={data.phone}
                                    type="text"
                                    placeholder="Phone"
                                    style={styles.input}
                                />
                                <CardElement className="card-element" options={cardElementOptions} />
                                {error && <p className="error-message">{error}</p>}
                            </div>
                            <div className="place-order-right" style={styles.placeOrderRight}>
                                <div className="cart-total" style={styles.cartTotal}>
                                    <h2 style={styles.cartTotalHeader}>Cart Totals</h2>
                                    <div>
                                        <div className="cart-total-details">
                                            <p>Subtotal</p>
                                            <p>${getTotalCartAmount()}</p>
                                        </div>
                                        <hr />
                                        <div className="cart-total-details">
                                            <p>Delivery Fee</p>
                                            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                                        </div>
                                        <hr />
                                        <div className="cart-total-details">
                                            <b>Total</b>
                                            <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        style={styles.button}
                                        disabled={loading}
                                    >
                                        {loading ? 'Processing...' : 'PROCEED TO PAYMENT'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
        </div>
    );
};

const cardElementOptions = {
    style: {
        base: {
            fontSize: '16px',
            color: '#424770',
            '::placeholder': {
                color: '#aab7c4',
            },
        },
        invalid: {
            color: '#9e2146',
        },
    },
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
    errorMessage: {
        color: 'red',
        fontSize: '14px',
        marginTop: '10px',
    }
};

export default PlaceOrder;
