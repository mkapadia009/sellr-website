
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Add smooth scrolling to all anchor links only on the homepage
    if (isHomePage) {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href')?.substring(1);
          if (!targetId) return;
          
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            // Special handling for the "vorteile" section to position the heading at the top
            if (targetId === 'vorteile') {
              // Find the main Vorteile heading
              const mainHeading = document.querySelector('#vorteile h2.main-vorteile-heading');
              if (mainHeading && mainHeading instanceof HTMLElement) {
                const headingPosition = mainHeading.getBoundingClientRect().top;
                const offsetPosition = headingPosition + window.scrollY - 100; // Small offset from the top
                
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              } else {
                // Fallback if heading not found
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - 600; // Larger offset to try to position the heading
                
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            } else {
              // Normal scrolling for other sections
              const scrollOffset = 100;
              window.scrollTo({
                top: targetElement.getBoundingClientRect().top + window.scrollY - scrollOffset,
                behavior: 'smooth'
              });
            }
          }
          
          // Close mobile menu if open
          if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
          }
        });
      });
    }
  }, [isMobileMenuOpen, isHomePage]);

  const handleNavigation = (id: string) => {
    if (isHomePage) {
      // On homepage, use smooth scrolling
      scrollToSection(id);
    } else {
      // On other pages, navigate to homepage with hash
      navigate(`/#${id}`);
    }
    
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Special handling for the "vorteile" section to position the heading at the top
      if (id === 'vorteile') {
        // Find the main Vorteile heading
        const mainHeading = document.querySelector('#vorteile h2.main-vorteile-heading');
        if (mainHeading && mainHeading instanceof HTMLElement) {
          const headingPosition = mainHeading.getBoundingClientRect().top;
          const offsetPosition = headingPosition + window.scrollY - 100; // Small offset from the top
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        } else {
          // Fallback if heading not found
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - 600; // Larger offset to try to position the heading
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      } else {
        // Normal scrolling for other sections
        const scrollOffset = 100;
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - scrollOffset,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4',
        isScrolled ? 'glass-effect shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/212af9c6-6d38-40f2-89e2-d669d9c615a9.png" 
                alt="CCDS Logo" 
                className="h-8" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <button 
              onClick={() => handleNavigation('vorteile')} 
              className={cn(
                "button-transition",
                isScrolled ? "text-gray-dark hover:text-black" : "text-white hover:text-black"
              )}
            >
              Vorteile
            </button>
            <button 
              onClick={() => handleNavigation('anwendungsfaelle')} 
              className={cn(
                "button-transition",
                isScrolled ? "text-gray-dark hover:text-black" : "text-white hover:text-black"
              )}
            >
              Anwendungsfälle
            </button>
            <button 
              onClick={() => handleNavigation('faq')} 
              className={cn(
                "button-transition",
                isScrolled ? "text-gray-dark hover:text-black" : "text-white hover:text-black"
              )}
            >
              Häufig gestellte Fragen
            </button>
            <button 
              onClick={() => handleNavigation('pricing')} 
              className={cn(
                "button-transition",
                isScrolled ? "text-gray-dark hover:text-black" : "text-white hover:text-black"
              )}
            >
              Preismodell
            </button>
            <Button
              variant="default"
              className="bg-blue hover:bg-blue-dark text-white rounded-full px-6"
              onClick={() => handleNavigation('demo')}
            >
              Demo anfragen
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-dark" />
              ) : (
                <Menu className="h-6 w-6 text-gray-dark" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden menu-slide-in">
            <div className="px-2 pt-4 pb-3 space-y-4 bg-white rounded-lg mt-2 shadow-lg">
              <button
                onClick={() => handleNavigation('vorteile')}
                className="block w-full text-left text-gray-dark hover:text-black px-3 py-2 rounded-md text-base font-medium"
              >
                Vorteile
              </button>
              <button
                onClick={() => handleNavigation('anwendungsfaelle')}
                className="block w-full text-left text-gray-dark hover:text-black px-3 py-2 rounded-md text-base font-medium"
              >
                Anwendungsfälle
              </button>
              <button
                onClick={() => handleNavigation('faq')}
                className="block w-full text-left text-gray-dark hover:text-black px-3 py-2 rounded-md text-base font-medium"
              >
                Häufig gestellte Fragen
              </button>
              <button
                onClick={() => handleNavigation('pricing')}
                className="block w-full text-left text-gray-dark hover:text-black px-3 py-2 rounded-md text-base font-medium"
              >
                Preismodell
              </button>
              <Button
                variant="default"
                className="w-full bg-blue hover:bg-blue-dark text-white rounded-full px-6 mt-2"
                onClick={() => handleNavigation('demo')}
              >
                Demo anfragen
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
