import { useState, useEffect, MouseEvent } from 'react';
import { NavLink } from '../types';

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (
    e: MouseEvent<HTMLAnchorElement>,
    href: string
  ): void => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: isScrolled ? '#121212' : 'transparent',
        padding: isScrolled ? '16px 0' : '24px 0',
      }}
      role="banner"
    >
      <nav
        className="max-w-6xl mx-auto px-6 flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        <a href="#home" className="text-xl font-bold text-white" aria-label="Go to home">
          yudnata
        </a>

        <ul className="hidden md:flex items-center gap-8" role="menubar">
          {navLinks.map((link) => (
            <li key={link.name} role="none">
              <a
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                role="menuitem"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => scrollToSection(e, '#contact')}
          className="hidden md:block px-5 py-2 bg-white text-black rounded-lg font-medium text-sm transition-colors hover:bg-gray-200"
        >
          Contact Me
        </a>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          type="button"
        >
          <span
            className={`w-5 h-0.5 bg-white transition-all ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
            aria-hidden="true"
          />
          <span
            className={`w-5 h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}
            aria-hidden="true"
          />
          <span
            className={`w-5 h-0.5 bg-white transition-all ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
            aria-hidden="true"
          />
        </button>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden mt-2 mx-4 rounded-lg"
          style={{ backgroundColor: '#1E1E1E' }}
          role="menu"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.name} role="none">
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block px-6 py-3 text-gray-400 hover:text-white transition-colors"
                  role="menuitem"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="px-4 pt-2" role="none">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="block text-center px-5 py-2 bg-white text-black rounded-lg font-medium"
                role="menuitem"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
