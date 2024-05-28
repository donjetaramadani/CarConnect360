import axios from 'axios';

const API_URL = 'https://localhost:7023/api/Category';

export interface Category {
  id?: number;
  name: string;
  description: string;
}

export const getAllCategories = async (): Promise<Category[]> => {
  const response = await axios.get<Category[]>(API_URL);
  return response.data;
};

export const getCategoryById = async (id: number): Promise<Category> => {
  const response = await axios.get<Category>(`${API_URL}/${id}`);
  return response.data;
};

export const addCategory = async (category: Category): Promise<Category> => {
  const response = await axios.post<Category>(API_URL, category);
  return response.data;
};

export const updateCategory = async (id: number, category: Category): Promise<Category> => {
  const response = await axios.put<Category>(`${API_URL}/${id}`, category);
  return response.data;
};

export const deleteCategory = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

export const getCategoryHistory = async (): Promise<Category[]> => {
  const response = await axios.get<Category[]>(`${API_URL}/Category/history`);
  return response.data;
};