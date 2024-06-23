import React, { useContext, useEffect } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import axios from 'axios';

const FoodDisplay = ({ category }) => {
    const { foodList, isLoading, setFoodList } = useContext(StoreContext);
    const url = 'https://localhost:7023'; // Define the base URL

    useEffect(() => {
        async function fetchFoodItems() {
            try {
                const response = await axios.get(`${url}/api/Food/list`);
                setFoodList(response.data);
            } catch (error) {
                console.error('Error fetching food items:', error);
            }
        }

        fetchFoodItems();
    }, [url, setFoodList]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (!foodList || foodList.length === 0) {
        return <p>No food items available</p>;
    }

    return (
        <div className='food-display' id='food-display'>
            <h2>Top here</h2>
            <div className='food-display-list'>
                {foodList.map((item) => {
                    if (category === "All" || category === item.category) {
                        const imageUrl = `${url}/uploads/${item.image}`;

                        return (
                            <FoodItem
                                key={item.name} // Use name as the key
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                image={imageUrl} // Pass the constructed imageUrl
                            />
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default FoodDisplay;
