import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  label: string;
  path: string;
  aliases: string[];
}

const navItems: NavItem[] = [
  { label: 'Experience', path: '/experience', aliases: ['/clients'] },
  { label: 'Skills', path: '/skills', aliases: ['/research'] },
  { label: 'Portfolio', path: '/', aliases: ['/portfolio'] },
  { label: 'Projects', path: '/projects', aliases: ['/podcast'] },
];

export const VerticalNavigation: React.FC = () => {
  const location = useLocation();

  const isItemActive = (item: NavItem) => {
    if (item.path === '/') {
      return location.pathname === '/' || item.aliases.includes(location.pathname);
    }
    return location.pathname.startsWith(item.path) || item.aliases.some((a) => location.pathname.startsWith(a));
  };

  return (
    <nav
      aria-label="Sidebar Navigation"
      className="hidden md:flex flex-col justify-center items-center py-6 pr-2 select-none w-8 shrink-0"
    >
      <div className="flex flex-col items-center justify-center gap-9">
        {navItems.map((item) => {
          const active = isItemActive(item);
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

export const MobileNavigation: React.FC = () => {
  const location = useLocation();

  const isItemActive = (item: NavItem) => {
    if (item.path === '/') {
      return location.pathname === '/' || item.aliases.includes(location.pathname);
    }
    return location.pathname.startsWith(item.path) || item.aliases.some((a) => location.pathname.startsWith(a));
  };

  return (
    <nav
      aria-label="Mobile Navigation"
      className="flex md:hidden items-center justify-center gap-6 sm:gap-9 w-full pt-1 pb-3 px-2 select-none"
    >
      {navItems.map((item) => {
        const active = isItemActive(item);
        return (
          <Link
            key={item.label}
            to={item.path}
            className="group relative flex flex-col items-center justify-center py-1 cursor-pointer transition-all duration-200"
          >
            <span
              className={`text-[12px] sm:text-[13px] tracking-wide transition-colors duration-200 ${
                active
                  ? 'font-bold text-[#111111]'
                  : 'font-medium text-[#6B7280] group-hover:text-[#111111]'
              }`}
            >
              {item.label}
            </span>
            {/* Subtle active indicator dot identical to side nav */}
            {active && (
              <span
                className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-[#111111]"
                aria-hidden="true"
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
};
