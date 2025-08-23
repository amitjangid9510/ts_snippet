import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  const hideFooter = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="min-h-screen flex flex-col bg-secondary-DEFAULT">
      <Header />
        <Outlet />
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;


// import { Outlet } from 'react-router-dom';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import { useState } from 'react';

// const AdminLayout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
//       <div className="flex-1 flex flex-col overflow-hidden">
//         <Header toggleSidebar={toggleSidebar} />
//         <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminLayout;
