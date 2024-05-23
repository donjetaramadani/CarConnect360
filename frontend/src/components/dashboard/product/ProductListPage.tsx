// ProductListPage.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductListPage: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://localhost:7023/api/Product');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>{product.name}</li>
 
        ))}
      </ul>
    </div>
  );
};

export default ProductListPage;
