import { NavLink } from 'react-router-dom';
import { 
  HomeIcon, 
  UserGroupIcon, 
  ChatBubbleLeftIcon, 
  ClockIcon, 
  FlagIcon, 
  Cog6ToothIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline';

const Navbar = () => {
  const navItems = [
    {  Icon: HomeIcon, path: '/', label: 'Home' },
    {  Icon: ClockIcon, path: '/Blog', label: 'Blogs' },
    {  Icon: UserGroupIcon, path: '/groups', label: 'Groups' },
    {  Icon: ChatBubbleLeftIcon, path: '/Xerox', label: 'Xerox' },
    {  Icon: FlagIcon, path: '/Admin_pannel', label: 'Admin pannel' },
    {  Icon: Cog6ToothIcon, path: '/settings', label: 'Settings' },
  ];

  return (
    <nav className="fixed top-0 h-[4rem] left-0 right-0 bg-white border-b z-50">
      <div className="w-full mx-auto px-4">
        <div className="flex items-center h-14">
          
         
          <div className="flex-shrink-0">
            <span className="text-xl font-semibold text-gray-800">Kl University</span>
          </div>

         
          <div className="hidden translate-x-5 md:flex flex-1 justify-center">
            {navItems.map(({ Icon, path, label },index) => (
              <NavLink
                key={index}
                to={path}
                className={({ isActive }) => `flex items-center mx-2 px-3 py-1.5 rounded-lg text-md transition-all ${
                  isActive
                    ? 'text-gray-900 bg-gray-100 font-medium'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-4 h-4 mr-1.5" />
                <span>{label}</span>
              </NavLink>
            ))}
          </div>

         
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">Vishnu</span>
            <div className="h-8 w-8 rounded-full bg-gray-100 p-1">
              <UserCircleIcon className="text-gray-600 hover:text-gray-800 transition-colors size-8" />
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
