import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Switch } from '@/components/ui/switch';
import { useTheme } from '@/contexts/ThemeContext';

const SellrNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Solutions', href: '#features' },
    { name: 'Services', href: '#services' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/logo.svg"
              alt="Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}

          {/* Theme Toggle & Desktop CTA */}
          {!isMobile && (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Sun className={theme === 'light' ? 'text-yellow-500' : 'text-muted-foreground'} size={20} />
                <Switch
                  checked={theme === 'light'}
                  onCheckedChange={toggleTheme}
                  aria-label="Toggle theme"
                />
                <Moon className={theme === 'dark' ? 'text-blue-500' : 'text-muted-foreground'} size={20} />
              </div>
              <Button
                variant="default"
                onClick={() => scrollToSection('#contact')}
              >
                Get Started
              </Button>
            </div>
          )}

          {/* Mobile Menu Button & Theme Toggle */}
          {isMobile && (
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div className="flex items-center space-x-2">
                <Sun className={theme === 'light' ? 'text-yellow-500' : 'text-muted-foreground'} size={20} />
                <Switch
                  checked={theme === 'light'}
                  onCheckedChange={toggleTheme}
                  aria-label="Toggle theme"
                />
                <Moon className={theme === 'dark' ? 'text-blue-500' : 'text-muted-foreground'} size={20} />
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4">
                <Button
                  variant="default"
                  className="w-full"
                  onClick={() => scrollToSection('#contact')}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default SellrNavbar;