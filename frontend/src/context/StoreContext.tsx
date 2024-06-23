import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [foodList, setFoodList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const url = 'https://localhost:7023';

    const addToCart = async (itemName) => {
        try {
            const response = await axios.post(`${url}/api/Cart/add`, { itemName });

            if (response.data.success) {
                setCartItems((prevCartItems) => ({
                    ...prevCartItems,
                    [itemName]: (prevCartItems[itemName] || 0) + 1,
                }));
            } else {
                console.error('Failed to add item to cart:', response.data.message);
            }
        } catch (error) {
            console.error('Error adding item to cart:', error);
            if (error.response) {
                console.error('Server Error Details:', error.response.data);
            }
        }
    };

    const removeFromCart = async (itemName) => {
        try {
            const response = await axios.post(`${url}/api/Cart/remove`, { itemName });

            if (response.data.success) {
                setCartItems((prevCartItems) => {
                    const updatedCartItems = { ...prevCartItems };
                    if (updatedCartItems[itemName] > 0) {
                        updatedCartItems[itemName]--;
                    }
                    if (updatedCartItems[itemName] === 0) {
                        delete updatedCartItems[itemName];
                    }
                    return updatedCartItems;
                });
            } else {
                console.error('Failed to remove item from cart:', response.data.message);
            }
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };

    const fetchFoodList = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`${url}/api/Food/list`);
            if (response.data.success) {
                setFoodList(response.data.data);
            } else {
                console.error('Failed to fetch food list:', response.data.message);
            }
        } catch (error) {
            console.error('Error fetching food list:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const loadData = async () => {
            try {
                await fetchFoodList();
                // Implement other data loading functions if needed
            } catch (error) {
                console.error('Error loading initial data:', error);
            }
        };
        loadData();
    }, []);

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemName in cartItems) {
            if (cartItems[itemName] > 0) {
                const itemInfo = foodList.find((product) => product.name === itemName);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[itemName];
                }
            }
        }
        return totalAmount;
    };

    const contextValue = {
        foodList,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        isLoading,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
