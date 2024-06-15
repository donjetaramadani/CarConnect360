import CategoryScreen from "../pages/dashboard/CategoryScreen";
import AccessoriesPage from "../pages/public/AccessoriesPage";
import CarsPage from "../pages/public/CarsPage";
import LifeStylePage from "../pages/public/LifeStylePage";
import ServicesPage from "../pages/public/ServicesPage";

export const PATH_PUBLIC = {
  home: '/',
  register: '/register',
  login: '/login',
  temp: '/temp',
  presentation: '/presentation',
  author: '/author',
  contactus: '/contactus',
  Cars: '/cars',
  Accessories: '/accessories',
  Life: '/lifestyle',
  Services: '/services',
  Cart: '/cart',
  Place: '/placeorder',
  unauthorized: '/unauthorized',
  notFound: '/404',
};

export const PATH_DASHBOARD = {
  dashboard: '/dashboard',
  usersManagement: '/dashboard/users-management',
  updateRole: '/dashboard/update-role/:userName',
  sendMessage: '/dashboard/send-message',
  inbox: '/dashboard/inbox',
  allMessages: '/dashboard/all-messages',
  systemLogs: '/dashboard/system-logs',
  myLogs: '/dashboard/my-logs',
  accessories: '/dashboard/accessories',
  Appointment: '/dashboard/appointment',
  Product: '/dashboard/product',
  Supplier: '/dashboard/supplier',
  Category: '/dashboard/category',
  Invoice: '/dashboard/invoice',
  Add: '/dashboard/add',
  List: '/dashboard/list',
  Orders: '/dashboard/orders',
  owner: '/dashboard/owner',
  admin: '/dashboard/admin',
  manager: '/dashboard/manager',
  user: '/dashboard/user',

};
