import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/user/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './components/common/ScrollToTop';
import PrivateRoute from './components/PrivateRoute';

// User pages
import Home from './pages/user/Home';
import Products from './pages/user/Products';
import ProductDetail from './pages/user/ProductDetail';
import NotFound from './pages/user/NotFound';
import UserProfile from './pages/user/UserProfile';

// Admin pages
import AdminLogin from './pages/admin/Login';
import AdminLayout from './components/admin/Layout';
import AdminDashbord from './pages/admin/Dashbord';
import ProductUpdate from './pages/admin/ProductUpdate';

const App: React.FC = () => {
  return (
    <>
      <ToastContainer 
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
        
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<PrivateRoute><Products /></PrivateRoute>} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="user-profile" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashbord />} />
          <Route path="product-update/:id" element={<ProductUpdate />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
