import { Routes, Route, Navigate } from 'react-router-dom';
import { PATH_DASHBOARD, PATH_PUBLIC } from './paths';
import AuthGuard from '../auth/AuthGuard';
import { allAccessRoles, managerAccessRoles, adminAccessRoles, ownerAccessRoles } from '../auth/auth.utils';
import Layout from '../components/layout';
import AdminPage from '../pages/dashboard/AdminPage';
import AllMessagesPage from '../pages/dashboard/AllMessagesPage';
import DashboardPage from '../pages/dashboard/DashboardPage';
import InboxPage from '../pages/dashboard/InboxPage';
import ManagerPage from '../pages/dashboard/ManagerPage';
import MyLogsPage from '../pages/dashboard/MyLogsPage';
import OwnerPage from '../pages/dashboard/OwnerPage';
import SendMessagePage from '../pages/dashboard/SendMessagePage';
import SystemLogsPage from '../pages/dashboard/SystemLogsPage';
import UpdateRolePage from '../pages/dashboard/UpdateRolePage';
import UserPage from '../pages/dashboard/UserPage';
import UsersManagementPage from '../pages/dashboard/UsersManagementPage';
import HomePage from '../pages/public/HomePage';
import LoginPage from '../pages/public/LoginPage';
import NotFoundPage from '../pages/public/NotFoundPage';
import RegisterPage from '../pages/public/RegisterPage';
import UnauthorizedPage from '../pages/public/UnauthorizedPage';
import AccessoriesListPage from '../pages/dashboard/AccessoriesListPage';
import AppointmentListPage from '../pages/dashboard/AppointmentListPage';
import ProductScreen from '../pages/dashboard/ProductScreen';
import SupplierScreen from '../pages/dashboard/SupplierScreen';
import CategoryScreen from '../pages/dashboard/CategoryScreen';
import InvoiceScreen from '../pages/dashboard/InvoiceScreen';
import TempPage from '../pages/public/tempPage';
import PresentationPage from '../pages/public/PresentationPage';
import AuthorPage from '../pages/public/AuthorPage';
import AccessoriesPage from '../pages/public/AccessoriesPage';
import CarsPage from '../pages/public/CarsPage';
import LifeStylePage from '../pages/public/LifeStylePage';
import ServicesPage from '../pages/public/ServicesPage';
import CartPage from '../pages/public/Cart/CartPage';
import PlaceOrderPage from '../pages/public/PlaceOrder/PlaceOrder';
import Add from '../pages/dashboard/Add/Add';
import List from '../pages/dashboard/List/List';
import Orders from '../pages/dashboard/Order/Orders';


const GlobalRouter = () => {
  return (
    <Routes>
      
      <Route element={<Layout />}>
        
        
        <Route index element={<HomePage />} />
        <Route path={PATH_PUBLIC.register} element={<RegisterPage />} />
        <Route path={PATH_PUBLIC.login} element={<LoginPage />} />
        <Route path={PATH_PUBLIC.temp} element={<TempPage />}/>
        <Route path={PATH_PUBLIC.presentation} element={<PresentationPage />}/>
        <Route path={PATH_PUBLIC.author} element={<AuthorPage/>}/>
        <Route path={PATH_PUBLIC.Cars} element={<CarsPage/>}/>
        <Route path={PATH_PUBLIC.Accessories} element={<AccessoriesPage/>}/>
        <Route path={PATH_PUBLIC.Life} element={<LifeStylePage/>}/>
        <Route path={PATH_PUBLIC.Services} element={<ServicesPage/>}/>
        <Route path={PATH_PUBLIC.Cart} element={<CartPage/>}/>
        <Route path={PATH_PUBLIC.Place} element={<PlaceOrderPage/>}/>

       
        <Route path={PATH_PUBLIC.unauthorized} element={<UnauthorizedPage />} />

       
        <Route element={<AuthGuard roles={allAccessRoles} />}>
          <Route path={PATH_DASHBOARD.dashboard} element={<DashboardPage />} />
          <Route path={PATH_DASHBOARD.sendMessage} element={<SendMessagePage />} />
          <Route path={PATH_DASHBOARD.inbox} element={<InboxPage />} />
          <Route path={PATH_DASHBOARD.myLogs} element={<MyLogsPage />} />
          <Route path={PATH_DASHBOARD.user} element={<UserPage />} />
          <Route path={PATH_DASHBOARD.Appointment} element={<AppointmentListPage/>} />
          <Route path={PATH_DASHBOARD.accessories} element={<AccessoriesListPage/>} />
          <Route path={PATH_DASHBOARD.Product} element={<ProductScreen/>} />
          <Route path={PATH_DASHBOARD.Category} element={<CategoryScreen/>} />
          <Route path={PATH_DASHBOARD.Supplier} element={<SupplierScreen/>} />
          <Route path={PATH_DASHBOARD.Invoice} element={<InvoiceScreen/>} />
        </Route>
        <Route element={<AuthGuard roles={managerAccessRoles} />}>
          <Route path={PATH_DASHBOARD.manager} element={<ManagerPage />} />
        </Route>
        <Route element={<AuthGuard roles={adminAccessRoles} />}>
          <Route path={PATH_DASHBOARD.usersManagement} element={<UsersManagementPage />} />
          <Route path={PATH_DASHBOARD.updateRole} element={<UpdateRolePage />} />
          <Route path={PATH_DASHBOARD.allMessages} element={<AllMessagesPage />} />
          <Route path={PATH_DASHBOARD.systemLogs} element={<SystemLogsPage />} />
          <Route path={PATH_DASHBOARD.admin} element={<AdminPage />} />
          <Route path={PATH_DASHBOARD.Add} element={<Add/>} />
          <Route path={PATH_DASHBOARD.List} element={<List/>} />
          <Route path={PATH_DASHBOARD.Orders} element={<Orders/>} />
        </Route>
        <Route element={<AuthGuard roles={ownerAccessRoles} />}>
          <Route path={PATH_DASHBOARD.owner} element={<OwnerPage />} />
        </Route>
        {/* Protected routes -------------------------------------------------- */}

        {/* Catch all (404) */}
        <Route path={PATH_PUBLIC.notFound} element={<NotFoundPage />} />
        <Route path='*' element={<Navigate to={PATH_PUBLIC.notFound} replace />} />
      </Route>
    </Routes>
  );
};

export default GlobalRouter;
