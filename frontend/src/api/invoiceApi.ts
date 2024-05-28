import axios from 'axios';

const API_URL = 'https://localhost:7023/api/Invoices';

export interface Invoice {
  id?: number;
  invoiceNumber: string;
  issueDate: Date;
  amount: number;
  isPaid: boolean;
}

export const getAllInvoices = async (): Promise<Invoice[]> => {
  const response = await axios.get<Invoice[]>(API_URL);
  return response.data;
};

export const getInvoiceById = async (id: number): Promise<Invoice> => {
  const response = await axios.get<Invoice>(`${API_URL}/${id}`);
  return response.data;
};

export const addInvoice = async (invoice: Invoice): Promise<Invoice> => {
  const response = await axios.post<Invoice>(API_URL, invoice);
  return response.data;
};

export const updateInvoice = async (id: number, invoice: Invoice): Promise<Invoice> => {
  const response = await axios.put<Invoice>(`${API_URL}/${id}`, invoice);
  return response.data;
};

export const deleteInvoice = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
