import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth.hook';
import { AiOutlineHome } from 'react-icons/ai';
//import { FiLock, FiUnlock } from 'react-icons/fi';
import { useNavigate, useLocation } from 'react-router-dom';
import { PATH_DASHBOARD, PATH_PUBLIC } from '../../routes/paths';
import './styleheader.css';

interface IProps {
  label: string;
  onClick: () => void;
  type: "button";
  variant: "light" | "dark";
  className?: string;
}

const Button: React.FC<IProps> = ({ label, onClick, type, variant, className }) => {
  return (
    <button
      type={type}
      className={`btn ${variant} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

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
    <header className="flex justify-between items-center py-4 px-6 bg-gray-100 shadow-md shadow-up">
      <div className="flex items-center gap-4">
        <AiOutlineHome
          className="w-8 h-8 text-purple-500 hover:text-purple-700 cursor-pointer"
          onClick={() => navigate('/')}
        />
        <span className="text-lg font-bold">Logo</span>
      </div>
      <div className="flex items-center gap-2">
        <Button
          label="Info"
          onClick={toggleAuthDetails}
          type="button"
          variant="light"
          className="mr-2"
        />
        {isAuthenticated? (
          <>
            <Button
              label="Dashboard"
              onClick={() => navigate(PATH_DASHBOARD.dashboard)}
              type="button"
              variant="light"
              className="mr-2"
            />
            <Button label="Logout" onClick={logout} type="button" variant="light" />
          </>
        ) : (
          <>
            <Button
              label="Register"
              onClick={() => navigate(PATH_PUBLIC.register)}
              type="button"
              variant="light"
              className="mr-2"
            />
            <Button
              label="Login"
              onClick={() => navigate(PATH_PUBLIC.login)}
              type="button"
              variant="light"
              className="mr-2"
            />
            <Button
              label="temp"
              onClick={() => navigate(PATH_PUBLIC.temp)}
              type="button"
              variant="light"
              className="mr-2"
            />
            <Button
              label="Presentation"
              onClick={() => navigate(PATH_PUBLIC.presentation)}
              type="button"
              variant="light"
              className="mr-2"
            />
            <Button
              label="Author"
              onClick={() => navigate(PATH_PUBLIC.author)}
              type="button"
              variant="light"
            />

              <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className='navbar-right'>
                      <img src="../assets/img/search.png" alt="search icon" style={{ width: '20px', height: '20px', marginRight: '10px' }}/>
                    </div>
                    <div className='navbar-search-icon'>
                      <img src="../assets/img/shopping-bag.png" alt="basket icon" style={{ width: '25px', height: '25px', marginRight: '10px' }}/>
                      <div className='dot'></div>
                    </div>
              </div>
          </>
        )}
      </div>
      {showAuthDetails && (
        <div className="absolute right-0 top-12 w-48 bg-white border border-gray-200 shadow-lg rounded p-2">
          <h5 className="text-lg font-bold mb-2">Auth Details</h5>
          <p>Auth: {isAuthenticated? 'Authenticated' : 'Not Authenticated'}</p>
          <p>UserName: {user? user.userName : '--'}</p>
          <p>UserRoles: {userRolesLabelCreator()}</p>
        </div>
      )}
    </header>
  );
};

export default Header;