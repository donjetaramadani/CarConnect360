import React, { useState, useEffect } from 'react';
import './List.css';
import axios from "axios";
import { toast } from "react-hot-toast";

const List = () => {
    const url = "http://localhost:3000";
    const [list, setList] = useState([]);

    const fetchList = async () => {
        try {
            const response = await axios.get(`${url}/api/food/list`);
            if (response.data.success) {
                setList(response.data.data);
            } else {
                toast.error("Error fetching the list");
            }
        } catch (error) {
            toast.error("Error fetching the list");
        }
    };

    const removeFood = async (foodId: string) => {
        try {
            const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
            await fetchList();
            if (response.data.success) {
                toast.success(response.data.message);
            } else {
                toast.error("Error removing the item");
            }
        } catch (error) {
            toast.error("Error removing the item");
        }
    };

    useEffect(() => {
        fetchList();
    }, []);

    return (
        <div className='list add flex-col'>
            <p>All Foods List</p>
            <div className="list-table">
                <div className="list-table-format title">
                    <b>Image</b>
                    <b>Name</b>
                    <b>Category</b>
                    <b>Price</b>
                    <b>Action</b>
                </div>
                {list.map((item, index) => (
                    <div key={index} className='list-table-format'>
                        <img src={`${url}/images/${item.image}`} alt="" />
                        <p>{item.name}</p>
                        <p>{item.category}</p>
                        <p>{item.price}</p>
                        <p onClick={() => removeFood(item._id)} className='cursor'>X</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;