import React from 'react';
import { IconType } from 'react-icons';

interface PageAccessTemplateProps {
  color: string;
  icon: IconType;
  role: string;
  children?: React.ReactNode;
}

const PageAccessTemplate: React.FC<PageAccessTemplateProps> = ({ color, icon: Icon, role, children }) => {
  return (
    <div style={{ border: `1px solid ${color}`, padding: '20px', borderRadius: '5px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <Icon style={{ color, marginRight: '10px' }} />
        <h2 style={{ margin: 0 }}>This Is {role} Page</h2>
      </div>
      <p style={{ margin: '0 0 20px' }}>You Must Have {role} Access To See This Page</p>
      <div style={{ marginBottom: '20px' }}>
        {children}
      </div>
    </div>
  );
};

export default PageAccessTemplate;
