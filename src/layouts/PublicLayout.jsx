import { Outlet, Link } from 'react-router-dom';

const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            Metties MedSpa
          </Link>
          <div className="flex items-center gap-8">
            <Link to="/login" className="btn-primary">
              Login
            </Link>
          </div>
        </div>
      </nav>
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;
