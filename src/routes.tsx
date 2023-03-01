import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';
import { RouteProtecd } from './components/routeProtecd';

const Router = () => (
  <Routes>
    <Route path='/register' element={<RegisterPage />} />
    <Route path='/' element={<LoginPage />} />
    <Route path='/shop' element={<RouteProtecd />}>
      <Route index element={<ShopPage />} />
    </Route>
  </Routes>
);

export default Router;
