import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from './components/admin/Login/Login';
import Dashboard from './components/admin/Dashboard';
import Profile from './components/admin/Profile';
import Restaurants from './components/admin/Restaurants';
import Banners from './components/admin/Banners';
import Category from './components/admin/Category';
import Customers from './components/admin/Customers';
import RestoDetails from './components/admin/RestoDetails';
import Orders from './components/admin/Orders';
import RestoItems from './components/admin/RestoItem';
import OrdersDetails from './components/admin/OrdersDetails';
import RestoModifier from './components/admin/RestoModifier';
import ForgotPass from './components/admin/Login/ForgotPass';
import { app } from './components/admin/firebase/firebase';
import Country from './components/admin/Country';
function App() {
  return (
    <Routes>
      <Route path="/travel-app-admin" exact element={<Login />} />
      <Route path="/forgot-password" exact element={<ForgotPass />} />
      <Route path="/admin-profile" exact element={<Profile />} />
      <Route path="/dashboard" exact element={<Dashboard />} />
      <Route path="/country" exact element={<Country />} />
      <Route path="/users" exact element={<Restaurants />} />
      <Route path="/restaurantDetails" exact element={<RestoDetails />} />
      <Route path="/orders" exact element={<Orders />} />
      <Route path="/ordersDetails" exact element={<OrdersDetails />} />
      <Route path="/banners" exact element={<Banners />} />
      <Route path="/restaurantItems" exact element={<RestoItems />} />
      <Route path="/restaurantModifier" exact element={<RestoModifier />} />
      <Route path="/category" exact element={<Category />} />
      <Route path="/customers" exact element={<Customers />} />
      <Route path="/" element={<Navigate to="/travel-app-admin" />} />
    </Routes>
  );
}

export default App;
