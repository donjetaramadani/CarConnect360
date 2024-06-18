import React, { useState, ChangeEvent, FormEvent } from 'react';
import './Add.css';
import uploadAreaImage from '../../../../assets/assetsi/admin_assets/upload_area.png';
import axios from "axios";
import { toast } from 'react-hot-toast';

const Add = () => {
    const [image, setImage] = useState<File | null>(null); // Explicitly define image as File or null
    const [data, setData] = useState({
        name: '',
        description: '',
        price: '',
        category: 'Salad' // Default category
    });

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const onFileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setImage(e.target.files[0]);
        }
    };

    const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('description', data.description);
            formData.append('price', data.price);
            formData.append('category', data.category);
            if (image) {
                formData.append('image', image);
            }

            const response = await axios.post('http://localhost:5288/api/food/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.data.success) {
                toast.success(response.data.message);
                setData({
                    name: '',
                    description: '',
                    price: '',
                    category: 'Salad'
                });
                setImage(null);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error('Error adding food:', error);
            toast.error('Failed to add food item');
        }
    };

    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className='add-img-upload flex-col'>
                    <p>Upload Image (Optional)</p>
                    <label htmlFor="image">
                        <img src={image ? URL.createObjectURL(image) : uploadAreaImage} alt="Upload Area" />
                    </label>
                    <input onChange={onFileChangeHandler} type="file" id="image" hidden />
                </div>
                <div className="add-product-name flex-col">
                    <p>Product name</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' required />
                </div>
                <div className="add-product-description flex-col">
                    <p>Product description</p>
                    <textarea onChange={onChangeHandler} value={data.description} name="description" rows={6} placeholder='Write content here!' required></textarea>
                </div>
                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Product Category</p>
                        <select onChange={onChangeHandler} value={data.category} name="category">
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Desert">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>
                    </div>
                    <div className="add-price flex-col">
                        <p>Product Price</p>
                        <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='$20' required />
                    </div>
                </div>
                <button type='submit' className='add-btn'>ADD</button>
            </form>
        </div>
    );
};

export default Add;
