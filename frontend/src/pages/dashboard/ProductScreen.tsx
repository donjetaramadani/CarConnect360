import React, { useEffect, useState } from 'react';
import { getAllProducts, addProduct, updateProduct, deleteProduct, Product } from '../../api/productApi';
import ProductComponent from '../../components/dashboard/product/ProductComponent';

const ProductScreen: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try{
    const data = await getAllProducts();
    setProducts(data);
    }catch(error){
      console.error('Error fetching products:', error);
    }
  };

  const handleSave = async (product: Product) => {
    try {
      if (selectedProduct && selectedProduct.id) {
        await updateProduct(selectedProduct.id, product);
      } else {
        await addProduct(product);
      }
      setSelectedProduct(null);
      fetchProducts();
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteProduct(id);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.history}>
        <h2>Saved Products History</h2>
        <ul style={styles.productList}>
          {products.map((item) => (
            <li key={item.id!} style={styles.productItem}>
              <span>{item.name}</span>
              <div>
                <button style={styles.editButton} onClick={() => setSelectedProduct(item)}>Edit</button>
                <button style={styles.deleteButton} onClick={() => handleDelete(item.id!)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <ProductComponent
        product={selectedProduct || { name: '', description: '', price: 0, quantity: 0, categoryId: 0, supplierId: 0 }}
        onSave={handleSave}
        onDelete={selectedProduct ? () => handleDelete(selectedProduct.id!) : undefined}
      />
    </div>
  );
};

export default ProductScreen;

// Styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  history: {
    flex: '0 0 50%',
  },
  productList: {
    listStyle: 'none',
    padding: 0,
  },
  productItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ccc',
  },
  editButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    padding: '5px 10px',
    marginRight: '10px',
    cursor: 'pointer',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    padding: '5px 10px',
    cursor: 'pointer',
  },
};
