
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Github, Linkedin, Mail } from 'lucide-react';

    const Footer = () => {
      const currentYear = new Date().getFullYear();
      const socialLinks = [
        { icon: <Github className="h-5 w-5" />, href: 'https://github.com/lahmam1',_label: 'GitHub Profile of Mohamed Lahmam' },
        { icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/in/mohamed-lahmam-911708242/', label: 'LinkedIn Profile of Mohamed Lahmam' },
        { icon: <Mail className="h-5 w-5" />, href: 'mailto:lh186261@gmail.com', label: 'Email Mohamed Lahmam' },
      ];

      const footerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
      };

      const iconVariants = {
        hover: { scale: 1.2, rotate: 5, transition: { type: 'spring', stiffness: 300 } },
      };

      return (
        <motion.footer
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-secondary/50 text-secondary-foreground py-8 mt-16"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center space-x-6 mb-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-foreground hover:text-primary transition-colors"
                  variants={iconVariants}
                  whileHover="hover"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-sm">
              Copyright © {currentYear} Mohamed Lahmam. Tous droits réservés.
            </p>
            <div className="mt-2 text-xs">
              <span className="mx-2 hover:text-primary transition-colors cursor-pointer" onClick={() => document.getElementById('hero')?.scrollIntoView({behavior: 'smooth'})}>Accueil</span> |
              <span className="mx-2 hover:text-primary transition-colors cursor-pointer" onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}>Projets</span> |
              <span className="mx-2 hover:text-primary transition-colors cursor-pointer" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>Contact</span>
            </div>
          </div>
        </motion.footer>
      );
    };

    export default Footer;
  