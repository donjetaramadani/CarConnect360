import React, { useState } from 'react';
import toast from 'react-hot-toast';

export interface Invoice {
  id?: number;
  invoiceNumber: string;
  issueDate: Date;
  amount: number;
  isPaid: boolean;
}

interface Props {
  invoice: Invoice;
  onSave: (invoice: Invoice) => void;
  onDelete?: () => void;
}

const InvoiceComponent: React.FC<Props> = ({ invoice, onSave, onDelete }) => {
  const [invoiceNumber, setInvoiceNumber] = useState<string>(invoice?.invoiceNumber || '');
  const [issueDate, setIssueDate] = useState<Date>(invoice?.issueDate || new Date());
  const [amount, setAmount] = useState<number>(invoice?.amount || 0);
  const [isPaid, setIsPaid] = useState<boolean>(invoice?.isPaid || false);

  const handleSave = async () => {
    try {
      await onSave({ ...invoice, invoiceNumber, issueDate, amount, isPaid });
      toast.success('Invoice saved successfully!');
    } catch (error) {
      console.error('Error saving invoice:', error);
      toast.error('Failed to save invoice!');
    }
  };

  const handleDelete = async () => {
    try {
      console.log('Deleting invoice:', invoice);
      await onDelete?.();
      toast.success('Invoice deleted successfully!');
    } catch (error) {
      console.error('Error deleting invoice:', error);
      toast.error('Failed to delete invoice!');
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
      <label style={{ marginBottom: '5px', display: 'block' }}>Invoice Number:</label>
      <input
        style={{ marginBottom: '10px', padding: '5px', width: '100%', boxSizing: 'border-box', borderRadius: '3px' }}
        value={invoiceNumber}
        onChange={(e) => setInvoiceNumber(e.target.value)}
      />
      <label style={{ marginBottom: '5px', display: 'block' }}>Issue Date:</label>
      <input
        style={{ marginBottom: '10px', padding: '5px', width: '100%', boxSizing: 'border-box', borderRadius: '3px' }}
        type="date"
        value={issueDate.toISOString().split('T')[0]}
        onChange={(e) => setIssueDate(new Date(e.target.value))}
      />
      <label style={{ marginBottom: '5px', display: 'block' }}>Amount:</label>
      <input
        style={{ marginBottom: '10px', padding: '5px', width: '100%', boxSizing: 'border-box', borderRadius: '3px' }}
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
      />
      <label style={{ marginBottom: '5px', display: 'block' }}>Is Paid:</label>
      <input
        style={{ marginBottom: '10px', padding: '5px', width: '100%', boxSizing: 'border-box', borderRadius: '3px' }}
        type="checkbox"
        checked={isPaid}
        onChange={(e) => setIsPaid(e.target.checked)}
      />
      <button
        style={{ padding: '8px 12px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}
        onClick={handleSave}
      >
        Save
      </button>
      {onDelete && (
        <button
          style={{ marginLeft: '10px', padding: '8px 12px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}
          onClick={handleDelete}
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default InvoiceComponent;
