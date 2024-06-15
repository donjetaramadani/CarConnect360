import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import PageAccessTemplate from '../../components/dashboard/page-access/PageAccessTemplate';
import { FaUserShield } from 'react-icons/fa';

const AdminPage = () => {
  return (


    <div className='admin-page'>
    <PageAccessTemplate color='#9333EA' icon={FaUserShield} role='Admin' />
    <div className="admin-sidebar">
      <NavLink to="add">Add Food</NavLink>
      <NavLink to="list">Food List</NavLink>
      <NavLink to="orders">Orders</NavLink>
    </div>
    <div className="admin-content">
      <Outlet />
    </div>
  </div>
  );
};

export default AdminPage;
