import React, { useState } from 'react';
import toast from 'react-hot-toast';

export interface Supplier {
  id?: number;
  name: string;
  contactInformation: string;
  address: string;
}

interface Props {
  supplier: Supplier;
  onSave: (supplier: Supplier) => void;
  onDelete?: () => void;
}

const SupplierComponent: React.FC<Props> = ({ supplier, onSave, onDelete }) => {
  const [name, setName] = useState<string>(supplier?.name || '');
  const [contactInformation, setContactInformation] = useState<string>(supplier?.contactInformation || '');
  const [address, setAddress] = useState<string>(supplier?.address || '');

  const handleSave = async () => {
    try {
      await onSave({ ...supplier, name, contactInformation, address});
      toast.success('Supplier saved successfully!');
    } catch (error) {
      console.error('Error saving supplier:', error);
      toast.error('Failed to save supplier!');
    }
  };
  
  const handleDelete = async () => {
    try {
      console.log('Deleting supplier:', supplier);
      await onDelete?.();
      toast.success('Supplier deleted successfully!');
    } catch (error) {
      console.error('Error deleting supplier:', error);
      toast.error('Failed to delete supplier!');
    }
  };


  return (
    <div style={styles.container}>
      <label style={styles.label}>Name:</label>
      <input style={styles.input} value={name} onChange={(e) => setName(e.target.value)} />
      <label style={styles.label}>Contact Information:</label>
      <input style={styles.input} value={contactInformation} onChange={(e) => setContactInformation(e.target.value)} />
      <label style={styles.label}>Address:</label>
      <input style={styles.input} value={address} onChange={(e) => setAddress(e.target.value)} />
      <button style={styles.button} onClick={handleSave}>Save</button>
      {onDelete && <button style={styles.deleteButton} onClick={handleDelete}>Delete</button>}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  label: {
    marginBottom: '5px',
    display: 'block',
    fontWeight: 'bold',
  },
  input: {
    marginBottom: '10px',
    padding: '5px',
    width: '100%',
    boxSizing: 'border-box',
    borderRadius: '3px',
    border: '1px solid #ccc',
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

export default SupplierComponent;
