import axios from 'axios';

const API_URL = 'https://localhost:7023/api/Product';

export interface Product {
  id?: number;
  name: string;
  description?: string;
  price: number;
  quantity: number;
  categoryId: number;
  supplierId: number;
}

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(API_URL);
  return response.data;
};

export const getProductById = async (id: number): Promise<Product> => {
  const response = await axios.get<Product>(`${API_URL}/${id}`);
  return response.data;
};

export const addProduct = async (product: Product): Promise<Product> => {
    const response = await axios.post<Product>(API_URL, product);
    return response.data;
};

export const updateProduct = async (id: number, product: Product): Promise<Product> => {
    const response = await axios.put<Product>(`${API_URL}/${id}`, product);
    return response.data;
};

export const deleteProduct = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
