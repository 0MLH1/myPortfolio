
    import React, { useState, useEffect } from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import { motion, AnimatePresence } from 'framer-motion';
    import { Toaster } from '@/components/ui/toaster';
    import { ThemeProvider, useTheme } from '@/components/theme-provider';
    import Navbar from '@/components/Navbar';
    import Footer from '@/components/Footer';
    import HomePage from '@/pages/HomePage';
    import ScrollToTop from '@/components/ScrollToTop';

    function AppContent() {
      const { theme } = useTheme();
      const [isLoading, setIsLoading] = useState(true);

      useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 1500); 
        return () => clearTimeout(timer);
      }, []);

      if (isLoading) {
        return (
          <div className="fixed inset-0 flex flex-col items-center justify-center bg-background z-[9999]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-4xl font-bold text-primary"
            >
              ML
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
              className="h-1 bg-primary mt-4 rounded-full"
            />
          </div>
        );
      }
      
      return (
        <div className={`min-h-screen flex flex-col ${theme}`}>
          <Navbar />
          <main className="flex-grow pt-16">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<HomePage />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
          <Toaster />
        </div>
      );
    }

    function App() {
      return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <Router>
            <ScrollToTop />
            <AppContent />
          </Router>
        </ThemeProvider>
      );
    }

    export default App;
  