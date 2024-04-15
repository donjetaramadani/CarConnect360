import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth.hook';
import Button from '../general/Button';
import { AiOutlineHome } from 'react-icons/ai';
import { FiLock, FiUnlock } from 'react-icons/fi';
import { useNavigate, useLocation } from 'react-router-dom';
import { PATH_DASHBOARD, PATH_PUBLIC } from '../../routes/paths';

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showAuthDetails, setShowAuthDetails] = useState(false);

  const userRolesLabelCreator = () => {
    if (user) {
      let result = '';
      user.roles.forEach((role, index) => {
        result += role;
        if (index < user.roles.length - 1) {
          result += ', ';
        }
      });
      return result;
    }
    return '--';
  };

  const toggleAuthDetails = () => {
    setShowAuthDetails(!showAuthDetails);
  };

  return (
    <div className='flex justify-between items-center bg-[#f0ecf7] h-12 px-4 relative'>
      <div className='flex items-center gap-4'>
        <AiOutlineHome
          className='w-8 h-8 text-purple-500 hover:text-purple-700 cursor-pointer'
          onClick={() => navigate('/')}
        />
      </div>
      <div className='flex items-center gap-2'>
        <Button
          label='Info'
          onClick={toggleAuthDetails}
          type='button'
          variant='light'
        />
        {isAuthenticated ? (
          <>
            <Button
              label='Dashboard'
              onClick={() => navigate(PATH_DASHBOARD.dashboard)}
              type='button'
              variant='light'
            />
            <Button label='Logout' onClick={logout} type='button' variant='light' />
          </>
        ) : (
          <>
            <Button label='Register' onClick={() => navigate(PATH_PUBLIC.register)} type='button' variant='light' />
            <Button label='Login' onClick={() => navigate(PATH_PUBLIC.login)} type='button' variant='light' />
          </>
        )}
      </div>
      {showAuthDetails && (
        <div className='absolute right-0 top-12 w-48 bg-white border border-gray-200 shadow-lg rounded'>
          <div className='p-2'>
            <p>Auth: {isAuthenticated ? 'Authenticated' : 'Not Authenticated'}</p>
            <p>UserName: {user ? user.userName : '--'}</p>
            <p>UserRoles: {userRolesLabelCreator()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
