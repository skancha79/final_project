import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["about", "projects", "education", "skills", "contact"];

  return (
    <header className="bg-gray-800 p-4 sticky top-0 z-50 shadow-md text-white">
      <div className="max-w-6xl mx-auto flex justify-center md:justify-between items-center">
        {" "}
        {/* Changed justify-between to justify-center on smaller screens */}
        {/* Mobile Hamburger on the Left */}
        <div className="md:hidden relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl focus:outline-none"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {menuOpen && (
            <div className="absolute left-0 top-10 bg-gray-800 rounded shadow-md w-44 py-2 z-50">
              {navItems.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 text-white hover:text-cyan-400"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>
          )}
        </div>
        {/* Site Title */}
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        {/* Desktop Nav on Right */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="hover:text-cyan-400"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
