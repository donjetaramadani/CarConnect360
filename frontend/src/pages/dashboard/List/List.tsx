import React, { useState, useEffect } from 'react';
import './List.css';
import axios from 'axios';
import { toast } from 'react-hot-toast';

interface FoodItem {
    _id: string;
    image: string;
    name: string;
    category: string;
    price: number;
}

const List: React.FC = () => {
    const url = 'https://localhost:7023';
    const [list, setList] = useState<FoodItem[]>([]);

    // Fetch list of foods
    const fetchList = async () => {
        try {
            const response = await axios.get(`${url}/api/Food/list`);
            if (response.data.success) {
                setList(response.data.data);
            } else {
                toast.error('Error fetching the list');
            }
        } catch (error) {
            console.error('Error fetching food list:', error);
            toast.error('Error fetching the list');
        }
    };

    // Remove a food item
    const removeFood = async (foodName: string) => {
        try {
            const response = await axios.post(`${url}/api/Food/removeByName`, { name: foodName });
            if (response.data.success) {
                toast.success(response.data.message);
                await fetchList(); // Refresh the list after removal
            } else {
                toast.error('Error removing the item');
            }
        } catch (error) {
            console.error('Error removing food:', error);
            toast.error('Error removing the item');
        }
    };

    useEffect(() => {
        fetchList();
    }, []); // Fetch list on initial load

    return (
        <div className="list add flex-col">
            <p>All Foods List</p>
            <div className="list-table">
                <div className="list-table-format title">
                    <b>Image</b>
                    <b>Name</b>
                    <b>Category</b>
                    <b>Price</b>
                    <b>Action</b>
                </div>
                {list.map((item: FoodItem, index) => (
                    <div key={index} className="list-table-format">
                        <img src={`${url}/uploads/${item.image}`} alt="Food" />
                        <p>{item.name}</p>
                        <p>{item.category}</p>
                        <p>{item.price}</p>
                        <p onClick={() => removeFood(item.name)} className="cursor">
                            X
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;
