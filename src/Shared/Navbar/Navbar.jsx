import { useState } from "react";
import {
  FaHome,
  FaPlane,
  FaHotel,
  FaUmbrellaBeach,
  FaPassport,
  FaComments,
} from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: <FaHome className="text-lg" />,
    },
    {
      name: "Flight",
      path: "/flights",
      icon: <FaPlane className="text-lg" />,
    },
    {
      name: "Hotel",
      path: "/hotels",
      icon: <FaHotel className="text-lg" />,
    },
    {
      name: "Tour",
      path: "/tours",
      icon: <FaUmbrellaBeach className="text-lg" />,
    },
    {
      name: "Visa",
      path: "/visa",
      icon: <FaPassport className="text-lg" />,
    },

  ];

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="h-[76px] flex items-center justify-between">
          
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="relative">
              <div className="w-8 h-8 bg-[#122B8F] rotate-45 rounded-tl-[18px] rounded-br-[18px]" />
            </div>

            <h1 className="text-xl font-bold text-[#122B8F]">
              Travel Guru
            </h1>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center h-full">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="flex flex-col items-center justify-center px-8 h-full text-[#122B8F] hover:bg-slate-50 transition-all duration-200"
              >
                {item.icon}

                <span className="mt-1 text-[15px] font-semibold">
                  {item.name}
                </span>
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            
            {/* Sign In */}
            <a
              href="/login"
              className="hidden lg:flex btn bg-[#122B8F] hover:bg-[#0f2377] border-none text-white px-7"
            >
              Sign In
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-[#122B8F] text-white flex items-center justify-center"
            >
              {menuOpen ? (
                <HiX className="text-xl" />
              ) : (
                <HiMenuAlt3 className="text-xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="py-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-4 px-5 py-4 text-[#122B8F] hover:bg-gray-100 transition"
                >
                  {item.icon}

                  <span className="font-medium">
                    {item.name}
                  </span>
                </a>
              ))}

              <div className="border-t mt-2 pt-2">
                <a
                  href="/chat"
                  className="flex items-center gap-4 px-5 py-4 text-[#122B8F] hover:bg-gray-100"
                >
                  <FaComments />
                  <span>Chat</span>
                </a>

                <div className="px-5 py-3">
                  <a
                    href="/login"
                    className="btn w-full bg-[#122B8F] hover:bg-[#0f2377] border-none text-white"
                  >
                    Sign In
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;