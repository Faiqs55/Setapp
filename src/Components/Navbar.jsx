import React, { useState, useEffect } from "react";
import Container from "./Container";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full h-14 sm:h-16 flex items-center z-50 bg-[#26262B]">
        <Container className="flex items-center text-white justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              className="h-6 sm:h-7 md:h-8 w-auto transition-transform duration-300 hover:scale-105"
              src="/logo.png"
              alt="Logo"
            />
          </div>

          {/* Hamburger Menu Button - Only visible below 1024px */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex flex-col gap-1.5 cursor-pointer p-2 rounded-md hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/20"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>

          {/* Desktop Menu - Only visible above 1024px */}
          <div className="hidden lg:flex gap-4 xl:gap-6 items-center">
            <ul className="text-xs xl:text-sm font-medium flex gap-0.5 xl:gap-1 items-center border-r border-white pr-4 xl:pr-6">
              <li>
                <a
                  href="#"
                  className="px-2 xl:px-3 py-2 rounded-md text-white/90 hover:text-white transition-all duration-200 relative group"
                >
                  How it works
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-200"></span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-2 xl:px-3 py-2 rounded-md text-white/90 hover:text-white transition-all duration-200 relative group"
                >
                  All apps
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-200"></span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-2 xl:px-3 py-2 rounded-md text-white/90 hover:text-white transition-all duration-200 relative group"
                >
                  Pricing
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-200"></span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-2 xl:px-3 py-2 rounded-md text-white/90 hover:text-white transition-all duration-200 relative group"
                >
                  For Teams
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-200"></span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-2 xl:px-3 py-2 rounded-md text-white/90 hover:text-white transition-all duration-200 relative group"
                >
                  Blog
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-200"></span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-2 xl:px-3 py-2 rounded-md text-white/90 hover:text-white transition-all duration-200 relative group"
                >
                  Podcast
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-200"></span>
                </a>
              </li>
            </ul>

            {/* Desktop Buttons */}
            <div className="flex gap-2 xl:gap-3 items-center text-xs xl:text-sm">
              <button className="p-1.5 xl:p-2 rounded-md hover:bg-white/10 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/20">
                <img
                  className="h-4 xl:h-5 w-auto cursor-pointer"
                  src="/flag.png"
                  alt="Language selector"
                />
              </button>
              <a
                href="#"
                className="px-3 xl:px-4 py-1.5 xl:py-2 rounded-md text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
              >
                Sign In
              </a>
              <a
                href="#"
                className="px-4 xl:px-5 py-2 xl:py-2.5 border border-white/30 rounded-md cursor-pointer text-white hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-200 font-medium shadow-sm hover:shadow-md whitespace-nowrap"
              >
                Try For Free
              </a>
            </div>
          </div>
        </Container>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={toggleMenu}
            aria-hidden="true"
          ></div>

          {/* Mobile Menu */}
          <div className="lg:hidden fixed top-14 sm:top-16 left-0 w-full bg-[#26262B]/98 backdrop-blur-xl text-white z-50 border-b border-white/10 shadow-2xl animate-slideDown">
            <Container className="py-6 px-4">
              <ul className="flex flex-col gap-1 mb-6">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-3 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
                    onClick={toggleMenu}
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-3 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
                    onClick={toggleMenu}
                  >
                    All apps
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-3 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
                    onClick={toggleMenu}
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-3 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
                    onClick={toggleMenu}
                  >
                    For Teams
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-3 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
                    onClick={toggleMenu}
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-3 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
                    onClick={toggleMenu}
                  >
                    Podcast
                  </a>
                </li>
              </ul>

              {/* Mobile Buttons */}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <div className="flex items-center gap-4 px-4">
                  <button className="p-2 rounded-md hover:bg-white/10 transition-all duration-200">
                    <img
                      className="h-5 w-auto cursor-pointer"
                      src="/flag.png"
                      alt="Language selector"
                    />
                  </button>
                  <span className="text-sm text-white/70">Language</span>
                </div>
                <a
                  href="#"
                  className="block px-4 py-3 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium text-center"
                  onClick={toggleMenu}
                >
                  Sign In
                </a>
                <a
                  href="#"
                  className="block px-4 py-3.5 border border-white/30 rounded-lg cursor-pointer text-white hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-200 font-medium text-center shadow-sm"
                  onClick={toggleMenu}
                >
                  Try For Free
                </a>
              </div>
            </Container>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
