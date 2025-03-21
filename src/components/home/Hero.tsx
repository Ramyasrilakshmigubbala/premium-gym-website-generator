
import { ArrowRight } from "lucide-react";
import { CustomButton } from "@/components/ui/CustomButton";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/ad0f4876-9d0a-48be-857f-8f31d6c95599.png"
          alt="Gym Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gym-dark/80 via-gym-dark/60 to-gym-dark"></div>
      </div>

      {/* Animated Shape */}
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-gym-accent/30 rounded-full blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-1/4 left-10 w-40 h-40 bg-gym-accent/20 rounded-full blur-3xl animate-pulse-subtle animation-delay-1000"></div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 rounded-full bg-gym-accent/20 border border-gym-accent/30 backdrop-blur-sm mb-5 fade-in-delay-1">
            <p className="text-sm font-medium text-gym-accent">
              New Year Special Offer – 20% Off All Memberships
            </p>
          </div>
          <h1 className="heading-xl mb-6 fade-in-delay-2 bg-gradient-to-r from-white to-gray-400 clip-text">
            Transform Your Body, 
            <span className="block">Transform Your Life</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl fade-in-delay-3">
            Join the most premium fitness experience with state-of-the-art equipment, 
            expert trainers, and luxurious amenities designed to elevate your fitness journey.
          </p>
          <div className="flex flex-wrap gap-4 fade-in-delay-3">
            <CustomButton size="lg" variant="primary" className="group">
              Start Your Journey
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </CustomButton>
            <CustomButton size="lg" variant="outline">
              View Membership
            </CustomButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-16 max-w-2xl fade-in-delay-3">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gym-accent mb-1">10+</h3>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gym-accent mb-1">50+</h3>
              <p className="text-gray-400 text-sm">Fitness Trainers</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gym-accent mb-1">5K+</h3>
              <p className="text-gray-400 text-sm">Happy Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
