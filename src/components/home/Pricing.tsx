
import { Check } from "lucide-react";
import { CustomButton } from "@/components/ui/CustomButton";

const Pricing = () => {
  const menuCategories = [
    {
      name: "Milkshakes",
      description: "Creamy and delicious milkshakes made with fresh ingredients",
      items: [
        { name: "Banana", price: "50" },
        { name: "Kharjura (Date)", price: "50" },
        { name: "Drakshe (Grape)", price: "50" },
        { name: "Boppayi (Papaya)", price: "50" },
        { name: "Mango", price: "50" },
        { name: "Pineapple", price: "60" },
        { name: "Sapota", price: "60" },
        { name: "Daanimma (Pomegranate)", price: "60" },
        { name: "Apple", price: "60" },
        { name: "Oreo Shake", price: "60" },
        { name: "Kit Kat", price: "70" },
        { name: "Strawberry", price: "70" },
        { name: "Chocolate", price: "70" },
        { name: "Sitaphalam (Custard Apple)", price: "80" },
        { name: "Kiwi", price: "80" },
        { name: "Dragon Fruit", price: "80" },
        { name: "Dry Fruit", price: "80" },
        { name: "Special Dry Fruit", price: "100" }
      ],
      bgColor: "bg-gradient-to-b from-squeeze-red/10 to-transparent",
      borderColor: "border-squeeze-red",
    },
    {
      name: "Fresh Juices",
      description: "Refreshing juices squeezed from the freshest fruits",
      items: [
        { name: "Orange", price: "50" },
        { name: "Sweet Lime", price: "50" },
        { name: "Watermelon", price: "40" },
        { name: "Pineapple", price: "60" },
        { name: "Apple", price: "70" },
        { name: "Mixed Fruit", price: "80" }
      ],
      bgColor: "bg-gradient-to-b from-squeeze-primary/10 to-transparent",
      borderColor: "border-squeeze-primary",
    },
    {
      name: "Special Drinks",
      description: "Our signature beverages that will delight your taste buds",
      items: [
        { name: "Lemon Soda", price: "30" },
        { name: "Mint Mojito", price: "60" },
        { name: "Blue Lagoon", price: "70" },
        { name: "Fruit Punch", price: "80" },
        { name: "Berry Blast", price: "90" }
      ],
      bgColor: "bg-gradient-to-b from-squeeze-accent/10 to-transparent",
      borderColor: "border-squeeze-accent",
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="menu">
      {/* Background Elements */}
      <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full bg-squeeze-primary/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-squeeze-accent/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6 bg-gradient-to-r from-squeeze-primary to-squeeze-secondary clip-text">
            Our Menu
          </h2>
          <p className="text-squeeze-muted text-lg">
            Discover our wide variety of refreshing drinks made from premium ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuCategories.map((category, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden transition-all duration-500 group 
                border ${category.borderColor} ${category.bgColor}`}
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-squeeze-dark mb-2">{category.name}</h3>
                <p className="text-squeeze-muted mb-6">{category.description}</p>
                
                <div className="space-y-2">
                  {category.items.map((item, i) => (
                    <div key={i} className="menu-item">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-squeeze-secondary font-semibold">₹{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-squeeze-muted mb-4">
            Custom orders available upon request
          </p>
          <CustomButton variant="primary" className="mx-auto bg-squeeze-primary hover:bg-squeeze-primary/90">
            View Full Menu
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
