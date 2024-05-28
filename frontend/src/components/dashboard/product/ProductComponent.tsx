// ProductComponent.tsx
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export interface Product {
  id?: number;
  name: string;
  description?: string;
  price: number;
  quantity: number;
  categoryId: number;
  supplierId: number;
}

interface Props {
  product: Product;
  onSave: (product: Product) => void;
  onDelete?: () => void;
}

const ProductComponent: React.FC<Props> = ({ product, onSave, onDelete }) => {
  const [name, setName] = useState<string>(product.name);
  const [description, setDescription] = useState<string>(product.description || '');
  const [price, setPrice] = useState<number>(product.price);
  const [quantity, setQuantity] = useState<number>(product.quantity);
  const [categoryId, setCategoryId] = useState<number>(product.categoryId);
  const [supplierId, setSupplierId] = useState<number>(product.supplierId);

  useEffect(() => {
    setName(product.name);
    setDescription(product.description || '');
    setPrice(product.price);
    setQuantity(product.quantity);
    setCategoryId(product.categoryId);
    setSupplierId(product.supplierId);
  }, [product]);

  const handleSave = async () => {
    try {
      const updatedProduct: Product = {...product, name, description, price, quantity, categoryId, supplierId,};
      await onSave(updatedProduct);
      toast.success('Product saved successfully!');
    } catch (error) {
      console.error('Error saving product:', error);
      toast.error('Failed to save product!');
    }
  };

  const handleDelete = async () => {
    try {
      console.log('Deleting product:', product);
      await onDelete?.();
      toast.success('Product deleted successfully!');
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error('Failed to delete product!');
    }
  };

  return (
    <div style={styles.container}>
      <label style={styles.label}>Name:</label>
      <input style={styles.input} value={name} onChange={(e) => setName(e.target.value)} />

      <label style={styles.label}>Description:</label>
      <input style={styles.input} value={description} onChange={(e) => setDescription(e.target.value)} />

      <label style={styles.label}>Price:</label>
      <input
        style={styles.input}
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        type="number"
      />

      <label style={styles.label}>Quantity:</label>
      <input
        style={styles.input}
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        type="number"
      />

      <label style={styles.label}>Category ID:</label>
      <input
        style={styles.input}
        value={categoryId}
        onChange={(e) => setCategoryId(Number(e.target.value))}
        type="number"
      />

      <label style={styles.label}>Supplier ID:</label>
      <input
        style={styles.input}
        value={supplierId}
        onChange={(e) => setSupplierId(Number(e.target.value))}
        type="number"
      />

      <button style={styles.button} onClick={handleSave}>Save</button>
      {onDelete && <button style={styles.deleteButton} onClick={handleDelete}>Delete</button>}
    </div>
  );
};

export default ProductComponent;

// Styles
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  label: {
    marginBottom: '5px',
    display: 'block',
  },
  input: {
    marginBottom: '10px',
    padding: '5px',
    width: '100%',
    boxSizing: 'border-box',
    borderRadius: '3px',
  },
  button: {
    padding: '8px 12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  deleteButton: {
    padding: '8px 12px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
};
