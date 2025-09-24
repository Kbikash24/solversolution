import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks1 = [
    { href: "#products", label: "Products" },
    { href: "#blasters", label: "Blasters" },
    { href: "#mobile-apps", label: "Mobile Apps" },
    { href: "#contact", label: "Contact" },
  ];
  const navLinks = [];

  return (
    <nav className="bg-[#2c6861] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo / Brand */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">Solver Solutions</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-gray-200 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-200"
            >
              {isMenuOpen ? (
                <LuX className="w-6 h-6" />
              ) : (
                <LuMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#2c6861]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-white hover:text-gray-200 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
