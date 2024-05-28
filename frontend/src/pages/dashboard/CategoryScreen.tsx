import React, { useEffect, useState } from 'react';
import { getAllCategories, addCategory, updateCategory, deleteCategory, Category, getCategoryHistory } from '../../api/categoryApi';
import CategoryComponent from '../../components/dashboard/category/CategoryComponent';

const CategoryScreen: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [categoryHistory, setCategoryHistory] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategories();
    fetchCategoryHistory();
  }, []);

  const fetchCategories = async () => {
    try {
      const data = await getAllCategories();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchCategoryHistory = async () => {
    try {
      const historyData = await getCategoryHistory();
      setCategoryHistory(historyData);
    } catch (error) {
      console.error('Error fetching category history:', error);
    }
  };

  const handleSave = async (category: Category) => {
    try {
      if (selectedCategory && selectedCategory.id) {
        await updateCategory(selectedCategory.id, category);
      } else {
        await addCategory(category);
      }
      setSelectedCategory(null);
      fetchCategories();
      fetchCategoryHistory();
    } catch (error) {
      console.error('Error saving category:', error);
    }
  };

  
  const handleDelete = async (id: number) => {
    try {
      await deleteCategory(id);
      fetchCategories();
      fetchCategoryHistory();
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  return (
    <div style={styles.container}>
      {/* Category CRUD Section */}
      <div style={styles.section}>
        <h2 style={styles.heading}>Category CRUD Section:</h2>
        <ul style={styles.list}>
          {categories.map((item) => (
            <li key={item.id!} style={styles.listItem}>
              <span style={styles.categoryName}>{item.name}</span>
              <button style={styles.button} onClick={() => setSelectedCategory(item)}>Edit</button>
              <button style={styles.deleteButton} onClick={() => handleDelete(item.id!)}>Delete</button>
            </li>
          ))}
        </ul>
        <CategoryComponent
          category={selectedCategory || { name: '', description: '' }}
          onSave={handleSave}
          onDelete={() => selectedCategory && handleDelete(selectedCategory.id!)}
        />
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  section: {
    marginBottom: '40px',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
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
  categoryName: {
    flexGrow: 1,
  },
  button: {
    marginRight: '10px',
    padding: '8px 12px',
    backgroundColor: '#007bff',
    color: '#fff',
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

export default CategoryScreen;
