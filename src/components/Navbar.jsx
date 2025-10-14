import { Search, Bell, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user } = useAuth();

  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-30">
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 hover:bg-accent rounded-lg transition-colors">
          <Bell size={20} className="text-gray-700" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
            {user?.name?.charAt(0) || 'U'}
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">{user?.name || 'User'}</p>
            <p className="text-xs text-gray-500 capitalize">{user?.role || 'Client'}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
