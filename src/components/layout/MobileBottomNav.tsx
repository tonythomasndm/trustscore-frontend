
import { Home, LineChart, Bell, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { icon: Home, label: 'HOME', path: '/dashboard' },
  { icon: LineChart, label: 'INSIGHTS', path: '/insights' },
  { icon: Bell, label: 'ALERTS', path: '/alerts' },
  { icon: User, label: 'PROFILE', path: '/profile' },
];

export const MobileBottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#eaecf0] md:hidden z-40 pb-safe">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          // Defaulting HOME to active for the error page demo
          const isActive = item.label === 'HOME' || location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex flex-col items-center justify-center space-y-1 w-full h-full ${
                isActive ? 'text-[#295b8d]' : 'text-[#94a3b8]'
              }`}
            >
              <item.icon size={22} className={isActive ? 'text-[#295b8d]' : 'text-[#94a3b8]'} />
              <span className="text-[10px] font-semibold">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
