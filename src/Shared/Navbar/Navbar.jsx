import React, { useState, useCallback } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import logoGA from "../../assets/image/GALogos.png";
import "./Navbar.css";

const navLinks = [
  { path: "/", display: "Home" },
  { path: "/about", display: "About" },
  { path: "/services", display: "Services" },
  { path: "/study", display: "Study Abroad" },
  { path: "/scholarship", display: "Scholarship" },
  { path: "/contact", display: "Contact" },
];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Simple handler to close sidebar
  const handleLinkClick = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-black z-50 h-[70px] shadow-lg">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo - Optimized with priority image */}
            <Link
              to="/"
              onClick={scrollToTop}
              className="flex items-center gap-3"
              aria-label="Global Academia Home"
            >
              <img
                className="w-16 h-12 cursor-pointer"
                src={logoGA}
                alt="Global Academia Logo"
              />
              <div className="hidden sm:block">
                <h1 className="text-xl text-[#09adfe] font-bold leading-tight">
                  Global Academia
                </h1>
                <p className="text-yellow-400 text-sm leading-tight">
                  Education Consultants Firm
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center"
              aria-label="Main navigation"
            >
              <ul className="flex items-center space-x-6">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={scrollToTop}
                      className={`text-sm md:text-[15px] font-semibold transition-colors duration-150 ${
                        location.pathname === link.path
                          ? "text-[#09adfe]"
                          : "text-white hover:text-[#09adfe]"
                      }`}
                      aria-current={
                        location.pathname === link.path ? "page" : undefined
                      }
                    >
                      {link.display}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/contact"
                    onClick={scrollToTop}
                    className="bg-[#09adfe] text-white text-sm font-semibold py-2 px-5 rounded-lg hover:bg-[#0898e6] transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#09adfe]"
                  >
                    Admission Open
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleSidebar}
              className="lg:hidden text-[#09adfe] p-2 hover:bg-gray-800 rounded-lg transition-colors duration-150"
              aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
              aria-expanded={isSidebarOpen}
              aria-controls="mobile-sidebar"
            >
              {isSidebarOpen ? (
                <AiOutlineClose size={24} aria-hidden="true" />
              ) : (
                <AiOutlineMenu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar - Optimized with conditional rendering */}
      {isSidebarOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/60 lg:hidden"
            onClick={handleLinkClick}
            aria-hidden="true"
          />

          {/* Sidebar */}
          <aside
            id="mobile-sidebar"
            className="fixed top-0 right-0 z-50 h-full w-64 bg-black shadow-xl lg:hidden"
            aria-label="Mobile navigation"
            role="dialog"
            aria-modal="true"
          >
            <div className="p-5 h-full flex flex-col">
              <div className="flex items-center justify-end pr-3 mb-6">
                <button
                  onClick={handleLinkClick}
                  className="text-white hover:text-[#09adfe] p-1"
                  aria-label="Close menu"
                >
                  <AiOutlineClose size={22} aria-hidden="true" />
                </button>
              </div>

              <nav className="flex-1">
                <ul className="space-y-3">
                  {navLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        onClick={() => {
                          handleLinkClick();
                          scrollToTop();
                        }}
                        className={`block py-2.5 px-3 rounded transition-colors duration-150 ${
                          location.pathname === link.path
                            ? "bg-[#09adfe] text-white"
                            : "text-white hover:bg-gray-800 hover:text-[#09adfe]"
                        }`}
                        aria-current={
                          location.pathname === link.path ? "page" : undefined
                        }
                      >
                        {link.display}
                      </Link>
                    </li>
                  ))}
                  <li className="pt-4">
                    <Link
                      to="/contact"
                      onClick={() => {
                        handleLinkClick();
                        scrollToTop();
                      }}
                      className="block bg-[#09adfe] text-white text-center font-semibold py-2.5 px-3 rounded hover:bg-[#0898e6] transition-colors duration-150"
                    >
                      Admission Open
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="mt-6 pt-6 border-t border-gray-800">
                <h3 className="text-[#09adfe] font-bold text-sm mb-1">
                  Global Academia
                </h3>
                <p className="text-yellow-400 text-xs">
                  Education Consultants Firm
                </p>
              </div>
            </div>
          </aside>
        </>
      )}

      {/* Spacer - Fixed height for better CLS */}
      <div className="h-[70px]" />
    </>
  );
};

export default Navbar;
