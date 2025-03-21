
import { Check } from "lucide-react";
import { CustomButton } from "@/components/ui/CustomButton";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "49",
      description: "Perfect for beginners starting their fitness journey",
      features: [
        "Access to main gym floor",
        "Standard locker room access",
        "2 guest passes per month",
        "Access to basic classes",
        "Fitness assessment",
      ],
      isMostPopular: false,
    },
    {
      name: "Premium",
      price: "89",
      description: "Our most popular package for dedicated fitness enthusiasts",
      features: [
        "Full 24/7 gym access",
        "Access to all classes",
        "4 guest passes per month",
        "Free towel service",
        "Nutrition consultation",
        "Access to sauna & steam room",
        "Mobile app with personal training",
      ],
      isMostPopular: true,
    },
    {
      name: "Elite",
      price: "139",
      description: "The ultimate fitness experience with exclusive benefits",
      features: [
        "All Premium features",
        "Unlimited guest passes",
        "4 personal training sessions/month",
        "Exclusive access to VIP areas",
        "Priority class booking",
        "Complimentary smoothie bar",
        "Laundry service for gym clothes",
        "Recovery center access",
      ],
      isMostPopular: false,
    },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="pricing">
      {/* Background Elements */}
      <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full bg-gym-accent/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-gym-accent/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6 bg-gradient-to-r from-white to-gray-400 clip-text">
            Membership Plans
          </h2>
          <p className="text-gym-muted text-lg">
            Choose the perfect membership plan to kickstart your fitness journey with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden transition-all duration-500 group 
                ${plan.isMostPopular 
                  ? "border-2 border-gym-accent bg-gradient-to-b from-gym-dark to-black md:scale-105" 
                  : "border border-gym-muted/20 bg-gym-dark"}`}
            >
              {plan.isMostPopular && (
                <div className="absolute top-0 right-0 bg-gym-accent text-black font-medium py-1 px-4 text-sm">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gym-muted mb-6">{plan.description}</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  <span className="text-gym-muted">/month</span>
                </div>
                <CustomButton 
                  variant={plan.isMostPopular ? "primary" : "outline"} 
                  className="w-full mb-8"
                >
                  Get Started
                </CustomButton>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 bg-gym-accent/20 p-1 rounded-full">
                        <Check size={14} className="text-gym-accent" />
                      </span>
                      <span className="text-gym-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gym-muted mb-4">
            Need a custom plan for your specific requirements?
          </p>
          <CustomButton variant="ghost" className="mx-auto">
            Contact Us for Custom Plans
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
