import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section
      className="relative min-h-[70vh] flex items-center justify-center px-0 bg-gradient-to-br from-pink-100 via-violet-100 to-blue-100 overflow-hidden"
      id="hero"
      style={{ fontFamily: 'Poppins, Montserrat, Inter, sans-serif' }}
    >
      {/* Glassmorphic Background Card */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="w-[90vw] max-w-4xl h-[60vh] rounded-3xl bg-white/40 backdrop-blur-2xl border border-white/30 shadow-2xl" />
      </div>
      {/* Content */}
      <div className="relative z-20 w-full max-w-4xl mx-auto text-center flex flex-col items-center justify-center py-24 px-4">
        <div className="inline-block px-6 py-2 rounded-full bg-pink-100 text-pink-700 font-semibold text-sm mb-6 tracking-widest shadow-md">
          Launch Your Store Instantly
        </div>
        <h1 className={`font-extrabold mb-6 tracking-tight leading-tight ${isMobile ? 'text-4xl' : 'text-6xl lg:text-7xl'}`}
            style={{ fontFamily: 'Poppins, Montserrat, Inter, sans-serif', letterSpacing: '-0.03em' }}>
          Your Business.<br />Online. In Minutes.
        </h1>
        <p className={`mb-10 text-gray-700 max-w-2xl mx-auto ${isMobile ? 'text-base' : 'text-xl'}`}
           style={{ fontFamily: 'Poppins, Montserrat, Inter, sans-serif' }}>
          Create a modern e-commerce store with no code, no hassle. Sell anywhere, manage everything, and grow your brand—fast.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            variant="default"
            className="rounded-full px-8 py-4 text-lg font-bold shadow-lg transition-all duration-200"
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started Free
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-4 text-lg font-bold transition-all duration-200"
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
