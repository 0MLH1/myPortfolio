
    import React, { useState, useEffect } from 'react';
    import { Link } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Menu, X, Code } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import { ThemeToggle } from '@/components/ThemeToggle';

    const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [scrolled, setScrolled] = useState(false);

      const navItems = [
        { name: 'Accueil', path: '#hero' },
        { name: 'Expériences', path: '#projects' },
        { name: 'Compétences', path: '#skills' },
        { name: 'Formation', path: '#education' },
        { name: 'Contact', path: '#contact' },
      ];

      const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      
      const scrollToSection = (id) => {
        const element = document.getElementById(id.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false); 
      };

      return (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled || isOpen ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link to="/" onClick={() => scrollToSection('#hero')} className="flex items-center space-x-2 text-2xl font-bold text-primary">
                <Code className="h-7 w-7" />
                <span>MLH</span>
              </Link>
              <div className="hidden md:flex items-center space-x-4">
                {navItems.map((item) => (
                  <Button key={item.name} variant="ghost" asChild>
                    <a href={item.path} onClick={() => scrollToSection(item.path)} className="hover:text-primary transition-colors">
                      {item.name}
                    </a>
                  </Button>
                ))}
                <ThemeToggle />
              </div>
              <div className="md:hidden flex items-center">
                <ThemeToggle />
                <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} className="ml-2">
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
          </div>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background/90 backdrop-blur-md pb-4"
            >
              <div className="flex flex-col items-center space-y-2 px-4">
                {navItems.map((item) => (
                   <Button key={item.name} variant="ghost" asChild className="w-full">
                    <a href={item.path} onClick={() => scrollToSection(item.path)} className="block py-2 text-center hover:text-primary transition-colors">
                      {item.name}
                    </a>
                  </Button>
                ))}
              </div>
            </motion.div>
          )}
        </motion.nav>
      );
    };

    export default Navbar;
  