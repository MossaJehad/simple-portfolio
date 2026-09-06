import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Clients', path: '/clients' },
  { label: 'Research', path: '/research' },
  { label: 'Portfolio', path: '/' },
  { label: 'Podcast', path: '/podcast' },
];

export const VerticalNavigation: React.FC = () => {
  const location = useLocation();

  const isItemActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '/portfolio';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      aria-label="Sidebar Navigation"
      className="hidden md:flex flex-col justify-center items-center py-6 pr-2 select-none w-8 shrink-0"
    >
      <div className="flex flex-col items-center justify-center gap-9">
        {navItems.map((item) => {
          const active = isItemActive(item.path);
          return (
            <Link
              key={item.label}
              to={item.path}
              className="group relative flex items-center justify-center cursor-pointer transition-all duration-200"
            >
              <span
                className={`vertical-rl text-[12px] tracking-wide transition-colors duration-200 ${
                  active
                    ? 'font-bold text-[#111111]'
                    : 'font-medium text-[#6B7280] group-hover:text-[#111111]'
                }`}
              >
                {item.label}
              </span>
              {/* Subtle active indicator dot */}
              {active && (
                <span
                  className="absolute -right-3 w-1.5 h-1.5 rounded-full bg-[#111111]"
                  aria-hidden="true"
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
