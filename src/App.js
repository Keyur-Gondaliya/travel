import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/admin/Login';
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
import ForgotPass from './components/admin/ForgotPass';
function App() {
  return (
    <Switch>
      <Route path="/travel-app-admin" exact component={Login} />
      <Route path="/forgot-password" exact component={ForgotPass} />
      <Route path="/admin-profile" exact component={Profile} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/users" exact component={Restaurants} />
      <Route path="/restaurantDetails" exact component={RestoDetails} />

      <Route path="/orders" exact component={Orders} />
      <Route path="/ordersDetails" exact component={OrdersDetails} />

      <Route path="/banners" exact component={Banners} />
      <Route path="/restaurantItems" exact component={RestoItems} />
      <Route path="/restaurantModifier" exact component={RestoModifier} />

      <Route path="/category" exact component={Category} />
      <Route path="/customers" exact component={Customers} />
      <Redirect to="/travel-app-admin" />
    </Switch>
  );
}

export default App;
