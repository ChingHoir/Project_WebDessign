import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, ShoppingBag, User, Search, BookOpen, Sparkles } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const contactInfo = [
    {
      icon: <Phone className="w-4 h-4" />,
      text: "+855 92 994 789",
      href: "/call",
    },
    
    {
      icon: <User className="w-4 h-4" />,
      text: "គណនីខ្ញុំ",
      href: "/account",
    },
  ];

  const navigationItems = [
    { name: "ទំព័រដើម", href: "/", icon: "🏠" },
    { name: "ហាង", href: "/shop", icon: "📚" },
    { name: "អំពីយើង", href: "/about", icon: "ℹ️" },
    { name: "ទំនាក់ទំនង", href: "/contact", icon: "📞" },
  ];

  return (
    <div className="w-full bg-white shadow-xl sticky top-0 z-50 border-b border-gray-100">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white text-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center gap-2 animate-slideInLeft">
              <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
              <p className="hidden md:block font-medium">
                🎉 សូមស្វារគម៍មកកាន់​ គេហទំព័រលក់សៀវភៅ IT
              </p>
            </div>
            <div className="flex items-center gap-6">
              {contactInfo.map((item) => (
                <Link
                  key={item.text}
                  to={item.href}
                  className="group flex items-center gap-2 hover:text-yellow-300 transition-all duration-300 hover:scale-105"
                >
                  <span className="group-hover:rotate-12 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="hidden sm:inline font-medium">{item.text}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <BookOpen className="w-8 h-8 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                ETEC Premium Collection
              </h1>
              <p className="text-xs text-gray-500 -mt-1">IT BOOK SHOP</p>
            </div>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
              <input
                type="text"
                placeholder="ស្វែងរកសៀវភៅ IT..."
                
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-full focus:border-blue-500 focus:bg-white focus:shadow-lg transition-all duration-300 outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                      : "text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                  {isActive && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse -z-10"></div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            <input
              type="text"
              placeholder="ស្វែងរកសៀវភៅ IT..."
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-full focus:border-blue-500 focus:bg-white focus:shadow-lg transition-all duration-300 outline-none text-gray-700"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden border-t border-gray-100 bg-white transition-all duration-300 ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <nav className="flex flex-col space-y-2">
            {navigationItems.map((item, index) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-4 px-6 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-102 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                      : "text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-lg">{item.name}</span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500"></div>

      <style jsx>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slideInLeft { animation: slideInLeft 0.6s ease-out; }
        .hover\\:scale-102:hover { transform: scale(1.02); }
      `}</style>
    </div>
  );
};

export default Navigation;
