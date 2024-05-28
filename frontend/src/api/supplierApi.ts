import axios from 'axios';

const API_URL = 'https://localhost:7023/api/Supplier';

export interface Supplier {
  id?: number;
  name: string;
  contactInformation: string;
  address: string;
}

export const getAllSuppliers = async (): Promise<Supplier[]> => {
  const response = await axios.get<Supplier[]>(API_URL);
  return response.data;
};

export const getSupplierById = async (id: number): Promise<Supplier> => {
  const response = await axios.get<Supplier>(`${API_URL}/${id}`);
  return response.data;
};

export const addSupplier = async (supplier: Supplier): Promise<Supplier> => {
  const response = await axios.post<Supplier>(API_URL, supplier);
  return response.data;
};

export const updateSupplier = async (id: number, supplier: Supplier): Promise<Supplier> => {
  const response = await axios.put<Supplier>(`${API_URL}/${id}`, supplier);
  return response.data;
};

export const deleteSupplier = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

export const getSupplierHistory = async (): Promise<Supplier[]> => {
  try {
    const response = await axios.get<Supplier[]>(`${API_URL}/history`);
    return response.data;
  } catch (error) {
    console.error('Error fetching supplier history:', error);
    throw new Error('Failed to fetch supplier history');
  }
};
