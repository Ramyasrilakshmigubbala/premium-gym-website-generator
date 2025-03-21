
import { ArrowRight } from "lucide-react";
import { CustomButton } from "@/components/ui/CustomButton";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/fa6aadfe-c388-4fdd-a3d8-5e1269ec8ca4.png"
          alt="Juice Shop Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-squeeze-dark/80 via-squeeze-dark/60 to-squeeze-dark"></div>
      </div>

      {/* Animated Shapes */}
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-squeeze-accent/30 rounded-full blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-1/4 left-10 w-40 h-40 bg-squeeze-primary/20 rounded-full blur-3xl animate-pulse-subtle animation-delay-1000"></div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 rounded-full bg-squeeze-accent/20 border border-squeeze-accent/30 backdrop-blur-sm mb-5 fade-in-delay-1">
            <p className="text-sm font-medium text-white">
              Fresh Juices & Milkshakes • Since 2018
            </p>
          </div>
          <h1 className="heading-xl mb-6 fade-in-delay-2 font-bubble bg-gradient-to-r from-squeeze-primary to-squeeze-accent clip-text">
            SQUEEZE
            <span className="block text-white font-display">Fresh & Delicious Refreshments</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl fade-in-delay-3">
            Experience the ultimate refreshment with our handcrafted juices and milkshakes made from the freshest ingredients. 
            Taste the difference quality makes!
          </p>
          <div className="flex flex-wrap gap-4 fade-in-delay-3">
            <CustomButton size="lg" variant="primary" className="group bg-squeeze-primary hover:bg-squeeze-primary/90">
              View Our Menu
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </CustomButton>
            <CustomButton size="lg" variant="outline" className="border-squeeze-primary text-white hover:bg-squeeze-primary hover:text-white">
              Find Our Location
            </CustomButton>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-16 max-w-2xl fade-in-delay-3">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-squeeze-primary mb-1">100%</h3>
              <p className="text-gray-300 text-sm">Fresh Fruits</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-squeeze-primary mb-1">20+</h3>
              <p className="text-gray-300 text-sm">Unique Flavors</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-squeeze-primary mb-1">5K+</h3>
              <p className="text-gray-300 text-sm">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
