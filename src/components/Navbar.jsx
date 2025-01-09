import { NavLink } from 'react-router-dom';
import { 
  HomeIcon, 
  UserGroupIcon, 
  ChatBubbleLeftIcon, 
  ClockIcon, 
  FlagIcon, 
  Cog6ToothIcon 
} from '@heroicons/react/24/outline';

const Navbar = () => {
  const navItems = [
    { id: 'home', icon: HomeIcon, path: '/' },
    { id: 'groups', icon: UserGroupIcon, path: '/groups' },
    { id: 'messages', icon: ChatBubbleLeftIcon, path: '/messages' },
    { id: 'recent', icon: ClockIcon, path: '/recent' },
    { id: 'saved', icon: FlagIcon, path: '/saved' },
    { id: 'settings', icon: Cog6ToothIcon, path: '/settings' },
  ];

  return (
    <nav className="fixed px-5  py-2  top-4 left-1/2 -translate-x-1/2 bg-blue-50 rounded-lg  z-50">
      <div className="px-2 py-1">
        <div className="flex gap-6 items-center space-x-1">
          {navItems.map(({ id, icon: Icon, path }) => (
            <NavLink
              key={id}
              to={path}
              className={({ isActive }) => `group relative flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'text-blue-600  bg-blue-200 scale-105' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-6 h-6" />
              {/* <span className="absolute -bottom-12 scale-0 rounded-lg bg-blue-600 px-3 py-2 text-xs font-medium text-white shadow-lg group-hover:scale-100 transition-all duration-300 hover:bg-blue-500 before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 before:w-2 before:h-2 before:bg-blue-600">
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </span> */}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
