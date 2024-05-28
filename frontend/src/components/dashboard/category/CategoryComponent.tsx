import { useState } from 'react';
import toast from 'react-hot-toast';

export interface Category {
  id?: number;
  name: string;
  description: string;
}

interface Props {
  category: Category;
  onSave: (category: Category) => void;
  onDelete?: () => void;
}

const CategoryComponent: React.FC<Props> = ({ category, onSave, onDelete }) => {
  const [name, setName] = useState<string>(category?.name || '');
  const [description, setDescription] = useState<string>(category?.description || '');

  const handleSave = async () => {
    try {
      await onSave({ ...category, name, description });
      toast.success('Category saved successfully!');
    } catch (error) {
      console.error('Error saving category:', error);
      toast.error('Failed to save category!');
    }
  };

  const handleDelete = async () => {
    try {
      console.log('Deleting category:', category);
      await onDelete?.();
      toast.success('Category deleted successfully!');
    } catch (error) {
      console.error('Error deleting category:', error);
      toast.error('Failed to delete category!');
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
      <label style={{ marginBottom: '5px', display: 'block' }}>Name:</label>
      <input
        style={{ marginBottom: '10px', padding: '5px', width: '100%', boxSizing: 'border-box', borderRadius: '3px' }}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label style={{ marginBottom: '5px', display: 'block' }}>Description:</label>
      <input
        style={{ marginBottom: '10px', padding: '5px', width: '100%', boxSizing: 'border-box', borderRadius: '3px' }}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
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

export default CategoryComponent;
