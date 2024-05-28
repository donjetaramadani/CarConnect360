import React, { useEffect, useState } from 'react';
import { getAllSuppliers, addSupplier, updateSupplier, deleteSupplier, Supplier, getSupplierHistory } from '../../api/supplierApi';
import SupplierComponent from '../../components/dashboard/supplier/SupplierComponent';

const SupplierScreen: React.FC = () => {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(null);
  const [supplierHistory, setSupplierHistory] = useState<Supplier[]>([]);

  useEffect(() => {
    fetchSuppliers();
    fetchSupplierHistory();
  }, []);

  const fetchSuppliers = async () => {
    try {
      const data = await getAllSuppliers();
      setSuppliers(data);
    } catch (error) {
      console.error('Error fetching suppliers:', error);
    }
  };

  const fetchSupplierHistory = async () => {
    try {
      const historyData = await getSupplierHistory();
      setSupplierHistory(historyData);
    } catch (error) {
      console.error('Error fetching supplier history:', error);
    }
  };

  const handleSave = async (supplier: Supplier) => {
    try {
      if (selectedSupplier && selectedSupplier.id) {
        await updateSupplier(selectedSupplier.id, supplier);
      } else {
        await addSupplier(supplier);
      }
      setSelectedSupplier(null);
      fetchSuppliers();
      fetchSupplierHistory(); // Also fetch history after saving
    } catch (error) {
      console.error('Error saving supplier:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteSupplier(id);
      fetchSuppliers();
      fetchSupplierHistory(); // Also fetch history after deleting
    } catch (error) {
      console.error('Error deleting supplier:', error);
    }
  };

  return (
    <div style={styles.container}>
      <ul>
        {suppliers.map((item) => (
          <li key={item.id!}>
            <button onClick={() => setSelectedSupplier(item)}>{item.name}</button>
            <button onClick={() => handleDelete(item.id!)}>Delete</button>
          </li>
        ))}
      </ul>
      <SupplierComponent
        supplier={selectedSupplier || { name: '', contactInformation: '', address: '' }}
        onSave={handleSave}
        onDelete={() => selectedSupplier && handleDelete(selectedSupplier.id!)}
      />

      <div style={styles.historySection}>
        <h2 style={styles.historyHeading}>Supplier History Section:</h2>
        <ul style={styles.historyList}>
          {supplierHistory.map((historyItem) => (
            <li key={historyItem.id!} style={styles.historyItem}>
              {historyItem.name} - {historyItem.contactInformation} - {historyItem.address}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  historySection: {
    marginTop: '20px',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  historyHeading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  historyList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  historyItem: {
    marginBottom: '10px',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#fff',
  },
};

export default SupplierScreen;
