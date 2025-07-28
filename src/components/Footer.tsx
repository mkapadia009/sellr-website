
import { Heart, Instagram, Twitter, Facebook, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border text-foreground pt-16 pb-8 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Brand/About */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="mb-2">
            <img
              src="/logo.svg"
              alt="Logo"
              className="h-10 w-auto"
            />
          </div>
          <p className="text-muted-foreground max-w-md">
            Sellr empowers your business with a seamless, modern e-commerce platform. Effortlessly launch, scale, and automate your online store with beautiful design and powerful features.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4" style={{ color: '#e73650' }}>Quick Links</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
            <li><a href="#services" className="hover:text-foreground transition-colors">Services</a></li>
            <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4" style={{ color: '#e73650' }}>Customer Support</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>Email: <a href="mailto:itops@traversetec.co" className="hover:text-foreground transition-colors">itops@traversetec.co</a></li>
            <li>Phone: <a href="tel:+91 8928680300" className="hover:text-foreground transition-colors">+91 8928680300</a></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
      </div>

      <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
        <p className="text-sm flex items-center justify-center gap-1">
          &copy; {currentYear} Sellr. Made with <Heart className="inline w-4 h-4 text-[#e73650]" /> for modern commerce.
        </p>
        <p className="text-xs mt-2">
          All product names, logos, and brands are property of their respective owners.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
