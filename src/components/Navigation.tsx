
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * 导航组件 - 包含网站的主要导航链接
 * 具有响应式设计，在移动设备上显示汉堡菜单
 */
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // 切换菜单的开关状态
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // 关闭菜单
  const closeMenu = () => setIsMenuOpen(false);

  // 导航链接列表
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Lessons", path: "/lessons" },
    { name: "Contact", path: "/contact" },
    { name: "Client Portal", path: "/portal" },
  ];

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center" onClick={closeMenu}>
              <span className="text-xl font-serif font-bold text-[#5D2E46]">Lisa's Symphony</span>
            </Link>
          </div>
          
          {/* 桌面端导航链接 */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md hover:bg-[#F7F3E3] transition-colors",
                  location.pathname === item.path
                    ? "text-[#5D2E46] font-bold"
                    : "text-gray-600"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* 移动端菜单按钮 */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#5D2E46] hover:bg-[#F7F3E3] focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 移动端导航菜单 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium hover:bg-[#F7F3E3] transition-colors",
                  location.pathname === item.path
                    ? "text-[#5D2E46] font-bold"
                    : "text-gray-600"
                )}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
