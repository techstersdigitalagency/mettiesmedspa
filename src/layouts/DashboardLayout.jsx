import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-accent">
      <Sidebar />
      <div className="ml-64">
        <Navbar />
        <main className="mt-16 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
