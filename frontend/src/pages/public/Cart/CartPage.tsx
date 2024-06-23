import React, { useContext } from "react";
import './styleCart.css';
import { StoreContext } from "../../../context/StoreContext.tsx";
import { useNavigate } from "react-router-dom";
import { PATH_PUBLIC } from '../../../routes/paths';

const CartPage = () => {
    const { cartItems, foodList, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
    const navigate = useNavigate();

    // Handle loading state
    if (!cartItems || !foodList) {
        return <p>Loading cart items...</p>;
    }

    const handleRemoveFromCart = (itemName) => {
        removeFromCart(itemName);
    };

    return (
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Image</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr />
                {foodList.length > 0 ? (
                    foodList.map((item) => {
                        const quantityInCart = cartItems[item.name] || 0; // Default to 0 if not found

                        if (quantityInCart > 0) {
                            return (
                                <div key={item.name}>
                                    <div className="cart-items-item">
                                        <img src={`${url}/uploads/${item.image}`} alt="" />
                                        <p>{item.name}</p>
                                        <p>${item.price}</p>
                                        <p>{quantityInCart}</p>
                                        <p>${item.price * quantityInCart}</p>
                                        <p onClick={() => handleRemoveFromCart(item.name)} className="cross">x</p>
                                    </div>
                                    <hr />
                                </div>
                            );
                        } else {
                            return null; // Handle the case where item is not in cart
                        }
                    })
                ) : (
                    <p>No food items available</p>
                )}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p> {/* Example delivery fee logic */}
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b> {/* Example total calculation */}
                        </div>
                    </div>
                    <button onClick={() => navigate(PATH_PUBLIC.Place)}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cart-promocode">
                    <p>If you have a promo code, Enter it here!</p>
                    <div className="cart-promocode-input">
                        <input type="text" placeholder="promo code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
