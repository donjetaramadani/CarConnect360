import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from './FoodItem';

const FoodItemList = () => {
    const { foodList } = useContext(StoreContext);
    const url = 'https://localhost:7023'; // Define the base URL

    return (
        <div>
            {foodList.map(item => {
                const imageUrl = `${url}/uploads/${item.image}`;
                return (
                    <FoodItem
                        key={item.name} // Use name as the key
                        name={item.name}
                        price={item.price}
                        description={item.description}
                        image={imageUrl} // Pass the constructed imageUrl
                    />
                );
            })}
        </div>
    );
};

export default FoodItemList;
