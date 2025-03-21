
import { 
  Dumbbell, 
  Users, 
  Heart, 
  Coffee, 
  ShoppingBag, 
  Shower, 
  Wifi, 
  Map, 
  Zap 
} from "lucide-react";

const Features = () => {
  const facilities = [
    {
      icon: <Dumbbell className="text-gym-accent" size={24} />,
      title: "State-of-the-art Equipment",
      description: "Latest high-end fitness equipment from top global brands updated regularly."
    },
    {
      icon: <Users className="text-gym-accent" size={24} />,
      title: "Expert Personal Trainers",
      description: "Certified professional trainers providing customized fitness plans and guidance."
    },
    {
      icon: <Heart className="text-gym-accent" size={24} />,
      title: "Group Fitness Classes",
      description: "Over 50 weekly classes including HIIT, yoga, spinning, and specialized training."
    },
    {
      icon: <Map className="text-gym-accent" size={24} />,
      title: "Functional Training Zone",
      description: "Dedicated area for CrossFit, calisthenics, and functional fitness activities."
    },
    {
      icon: <Coffee className="text-gym-accent" size={24} />,
      title: "Nutrition Bar",
      description: "Healthy smoothies, protein shakes, and nutritional supplements available."
    },
    {
      icon: <ShoppingBag className="text-gym-accent" size={24} />,
      title: "Pro Shop",
      description: "Premium workout gear, supplements, and accessories for purchase."
    },
    {
      icon: <Shower className="text-gym-accent" size={24} />,
      title: "Luxury Locker Rooms",
      description: "Spa-quality facilities with saunas, steam rooms, and premium amenities."
    },
    {
      icon: <Wifi className="text-gym-accent" size={24} />,
      title: "Member Lounge",
      description: "Comfortable relaxation area with complimentary high-speed WiFi and refreshments."
    },
    {
      icon: <Zap className="text-gym-accent" size={24} />,
      title: "Recovery Center",
      description: "Massage therapy, cryotherapy, and advanced recovery tools for optimal results."
    },
  ];

  return (
    <section className="py-24 bg-gym-dark relative overflow-hidden" id="facilities">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gym-primary to-transparent"></div>
      <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-gym-accent/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full bg-gym-accent/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6 bg-gradient-to-r from-white to-gray-400 clip-text">
            World-Class Facilities
          </h2>
          <p className="text-gym-muted text-lg">
            Experience premium amenities designed to maximize your fitness journey and provide unparalleled comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div 
              key={index} 
              className="bg-gym-dark border border-gym-muted/10 p-6 rounded-lg hover:border-gym-accent/50 transition-all duration-300 card-hover"
              style={{ 
                animationDelay: `${index * 100}ms`,
                opacity: 0,
                animation: 'fade-in-up 0.5s ease-out forwards',
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="mb-4 p-3 inline-block rounded-lg bg-gym-accent/10">
                {facility.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{facility.title}</h3>
              <p className="text-gym-muted">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
