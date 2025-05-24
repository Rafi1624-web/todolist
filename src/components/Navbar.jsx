import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const navItems = [
    { label: "Home", href: "home" },
    { label: "About", href: "about" },
    { label: "Services", href: "services" },
    { label: "Portfolio", href: "portfolio" },
    { label: "Custom Solutions", href: "solutions" },
    { label: "Contact", href: "contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      ref={menuRef}
      className="sticky top-0 z-50 bg-lime-700 h-20 text-white md:px-52 py-4 shadow-md "
    >
      <div className="flex justify-between items-center">
        <div className="text-4xl font-bold">PPT</div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-x-10 text-lg h-full">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="group relative cursor-pointer flex items-center h-full px-3"
            >
              <a
                href={item.href}
                className="transition-colors duration-300 group-hover:text-white  h-full flex items-center px-3 py-2 rounded-md mb-6"
              >
                {item.label}
              </a>
              {/* Underline with 4px gap */}
              <span className="absolute left-3 bottom-1 w-[calc(100%-1.5rem)] h-[2px] bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-2 text-base bg-lime-700">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="group relative cursor-pointer  hover:text-white transition-colors duration-300 px-4 py-3 w-full group-hover:bg-lime-600"
            >
              <a
                href={item.href}
                className="block w-full"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
              <span className="absolute left-4 bottom-1 w-[calc(100%-2rem)] h-[2px] bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
