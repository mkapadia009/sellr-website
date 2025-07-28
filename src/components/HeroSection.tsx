import { useState, useEffect, useCallback, memo } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  const handleScrollToFeatures = useCallback(() => {
    const element = document.getElementById("features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-background overflow-hidden" id="hero">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      {/* Floating elements with modern styling */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-3xl blur-2xl animate-float" />
      <div className="absolute bottom-32 right-16 w-40 h-40 bg-accent/10 rounded-3xl blur-2xl animate-float" style={{animationDelay: '2s'}} />
      <div className="absolute top-1/2 left-4 w-24 h-24 bg-primary/8 rounded-3xl blur-xl animate-float" style={{animationDelay: '1s'}} />
      
      <div className="relative z-10 text-center max-w-7xl mx-auto">
        {/* Modern badge */}
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-secondary/50 border border-border backdrop-blur-sm text-foreground text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4 mr-2 text-primary" />
          The Future of Digital Commerce
        </div>
        
        {/* Bold, product-focused headline */}
        <h1 className={`${isMobile ? 'text-5xl' : 'text-6xl lg:text-8xl'} font-bold text-foreground mb-8 tracking-tight leading-none`}>
          Want to Traverse the
          <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            New Age of Commerce?
          </span>
        </h1>
        
        {/* Clear, conversion-focused copy */}
        <p className={`${isMobile ? 'text-lg' : 'text-xl lg:text-2xl'} text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-light`}>
          <span className="block text-foreground font-semibold text-3xl mb-4">We've Got You Covered</span>
          Sellr aims to simplify the complex world of Digital Commerce allowing you to focus on 
          what truly matters - Your Business.
        </p>
        
        {/* Modern CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <Button 
            size="lg" 
            className="group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started Today
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={handleScrollToFeatures}
          >
            Explore Features
          </Button>
        </div>
        
        {/* Modern feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/50 rounded-2xl mb-4 group-hover:bg-secondary/70 transition-all duration-300 backdrop-blur-sm border border-border">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Launch Fast</h3>
            <p className="text-muted-foreground">Get your store live in days</p>
          </div>
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/50 rounded-2xl mb-4 group-hover:bg-secondary/70 transition-all duration-300 backdrop-blur-sm border border-border">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Scale Smart</h3>
            <p className="text-muted-foreground">Grow your business efficiently</p>
          </div>
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/50 rounded-2xl mb-4 group-hover:bg-secondary/70 transition-all duration-300 backdrop-blur-sm border border-border">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Automate Everything</h3>
            <p className="text-muted-foreground">Focus on what matters most</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
