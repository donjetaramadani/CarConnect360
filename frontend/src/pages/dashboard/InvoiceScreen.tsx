import React, { useEffect, useState } from 'react';
import { getAllInvoices, addInvoice, updateInvoice, deleteInvoice, Invoice } from '../../api/invoiceApi';
import InvoiceComponent from '../../components/dashboard/invoice/InvoiceComponent';

const InvoiceScreen: React.FC = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    try {
      const data = await getAllInvoices();
      setInvoices(data);
    } catch (error) {
      console.error('Error fetching invoices:', error);
    }
  };

  const handleSave = async (invoice: Invoice) => {
    try {
      if (selectedInvoice && selectedInvoice.id) {
        await updateInvoice(selectedInvoice.id, invoice);
      } else {
        await addInvoice(invoice);
      }
      setSelectedInvoice(null);
      fetchInvoices();
    } catch (error) {
      console.error('Error saving invoice:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteInvoice(id);
      fetchInvoices();
    } catch (error) {
      console.error('Error deleting invoice:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Invoice List:</h2>
      <ul style={styles.list}>
        {invoices.map((item) => (
          <li key={item.id!} style={styles.listItem}>
            <button style={styles.invoiceButton} onClick={() => setSelectedInvoice(item)}>
              {item.invoiceNumber}
            </button>
            <button style={styles.deleteButton} onClick={() => handleDelete(item.id!)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <InvoiceComponent
        invoice={selectedInvoice || { invoiceNumber: '', issueDate: new Date(), amount: 0, isPaid: false }}
        onSave={handleSave}
        onDelete={() => selectedInvoice && handleDelete(selectedInvoice.id!)}
      />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    marginBottom: '20px',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ccc',
  },
  invoiceButton: {
    marginRight: '10px',
    padding: '8px 12px',
    color: '#333', // Updated color to remove blue
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
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

export default InvoiceScreen;
