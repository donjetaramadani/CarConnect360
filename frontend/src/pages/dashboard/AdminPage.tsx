import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import PageAccessTemplate from '../../components/dashboard/page-access/PageAccessTemplate';
import { FaUserShield } from 'react-icons/fa';

const AdminPage = () => {
  return (


    <div className='admin-page'>
    <PageAccessTemplate color='#9333EA' icon={FaUserShield} role='Admin' />
   
    <div className="admin-content">
      <Outlet />
    </div>
  </div>
  );
};

export default AdminPage;
