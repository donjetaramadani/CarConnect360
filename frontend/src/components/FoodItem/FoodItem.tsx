import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './FoodItem.css';
import rating_stars from '../../../assets/assetsi/frontend_assets/rating_starts.png';
import add_icon_white from '../../../assets/assetsi/frontend_assets/add_icon_white.png';
import remove_icon_red from '../../../assets/assetsi/frontend_assets/remove_icon_red.png';
import add_icon_green from '../../../assets/assetsi/frontend_assets/add_icon_green.png';
import axios from 'axios';

const FoodItem = ({ name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    const handleAddToCart = async () => {
        try {
            await axios.post('https://localhost:7023/api/Cart/add', { itemName: name });
            addToCart(name);
            console.log('Item added to cart');
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    const handleRemoveFromCart = async () => {
        try {
            await axios.post('https://localhost:7023/api/Cart/remove', { itemName: name });
            removeFromCart(name);
            console.log('Item removed from cart');
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };

    return (
        <div className="food-item">
            <div className="food-item-img-container">
                <img className="food-item-image" src={image} alt={name} />
                {!cartItems[name] ? (
                    <img className="add" onClick={handleAddToCart} src={add_icon_white} alt="add icon" />
                ) : (
                    <div className="food-item-counter">
                        <img onClick={handleRemoveFromCart} src={remove_icon_red} alt="remove icon" />
                        <p>{cartItems[name]}</p>
                        <img onClick={handleAddToCart} src={add_icon_green} alt="add icon" />
                    </div>
                )}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={rating_stars} alt="Rating stars" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    );
};

export default FoodItem;
