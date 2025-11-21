import { useState, useEffect, useCallback } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const toggleMenu = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Allows scrolling if user expands window while mobile menu is open
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false); // width >= md
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      <button
        onClick={toggleMenu}
        className="text-3xl md:hidden cursor-pointer w-12 h-12 flex items-center justify-center"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label="Toggle Menu"
      >
        {/* hamburger lines */}
        <div
          className={`bg-gray-100 w-8 h-0.5 rounded relative
            transition-all duration-500
            before:content-[''] before:bg-gray-100 before:w-8 before:h-0.5 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500
            after:content-[''] after:bg-gray-100 after:w-8 after:h-0.5 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500
            
            ${
              open
                ? "bg-transparent rotate-180 before:transform-[translateY(12px)_rotate(45deg)] after:transform-[translateY(-12px)_rotate(-45deg)]"
                : ""
            }
          `}
        />
      </button>

      {/* desktop nav */}
      <nav className="hidden md:flex gap-8" aria-label="Main Navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      {/* mobile menu */}
      <nav
        aria-hidden={!open}
        aria-label="Mobile Navigation"
        id="mobile-nav"
        role="dialog"
        aria-modal={open ? "true" : undefined}
        inert={!open}
        className={`fixed left-0 w-full text-center h-[calc(100vh-4rem)] -z-10 bg-[#0a0a0a] transform transition-all duration-500 ${
          open
            ? "top-16 translate-y-0 opacity-100 pointer-events-auto"
            : "top-0 -translate-y-full opacity-0 pointer-events-none"
        } md:hidden`}
      >
        <ul className="flex flex-col justify-evenly h-full p-6 text-xl text-gray-100">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={toggleMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
