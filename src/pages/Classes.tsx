
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CustomButton } from "@/components/ui/CustomButton";
import { Card, CardContent } from "@/components/ui/card";

const Classes = () => {
  // Menu categories
  const menuCategories = [
    {
      id: "milkshakes",
      title: "Milkshakes",
      description: "Creamy and delicious milkshakes made with fresh ingredients",
      items: [
        { name: "Banana", price: "50", popular: false },
        { name: "Kharjura (Date)", price: "50", popular: false },
        { name: "Drakshe (Grape)", price: "50", popular: false },
        { name: "Boppayi (Papaya)", price: "50", popular: false },
        { name: "Mango", price: "50", popular: true },
        { name: "Pineapple", price: "60", popular: false },
        { name: "Sapota", price: "60", popular: false },
        { name: "Daanimma (Pomegranate)", price: "60", popular: false },
        { name: "Apple", price: "60", popular: true },
        { name: "Oreo Shake", price: "60", popular: true },
        { name: "Kit Kat", price: "70", popular: true },
        { name: "Strawberry", price: "70", popular: false },
        { name: "Chocolate", price: "70", popular: true },
        { name: "Sitaphalam (Custard Apple)", price: "80", popular: false },
        { name: "Kiwi", price: "80", popular: false },
        { name: "Dragon Fruit", price: "80", popular: false },
        { name: "Dry Fruit", price: "80", popular: false },
        { name: "Special Dry Fruit", price: "100", popular: true }
      ],
      image: "/lovable-uploads/09d107b1-d4d0-435b-98b9-8fce03342738.png"
    },
    {
      id: "juices",
      title: "Fresh Juices",
      description: "Refreshing juices squeezed from the freshest fruits",
      items: [
        { name: "Orange", price: "50", popular: true },
        { name: "Sweet Lime", price: "50", popular: false },
        { name: "Watermelon", price: "40", popular: false },
        { name: "Pineapple", price: "60", popular: false },
        { name: "Apple", price: "70", popular: true },
        { name: "Mixed Fruit", price: "80", popular: true }
      ],
      image: "/lovable-uploads/fa6aadfe-c388-4fdd-a3d8-5e1269ec8ca4.png"
    },
    {
      id: "specials",
      title: "Special Drinks",
      description: "Our signature beverages that will delight your taste buds",
      items: [
        { name: "Lemon Soda", price: "30", popular: false },
        { name: "Mint Mojito", price: "60", popular: true },
        { name: "Blue Lagoon", price: "70", popular: false },
        { name: "Fruit Punch", price: "80", popular: true },
        { name: "Berry Blast", price: "90", popular: false }
      ],
      image: "/lovable-uploads/5198dec3-e80d-4d21-b506-020bbe193934.png"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="heading-lg text-center mb-6 bg-gradient-to-r from-squeeze-primary to-squeeze-secondary clip-text">
              Our Menu
            </h1>
            <p className="text-center text-squeeze-muted max-w-2xl mx-auto mb-16">
              Discover our wide variety of refreshing juices and milkshakes made from premium ingredients. 
              Each drink is carefully crafted to provide the best taste and quality.
            </p>

            <div className="space-y-24">
              {menuCategories.map((category, index) => (
                <div key={category.id} className="relative">
                  {/* Category title */}
                  <div className="mb-10 flex flex-col items-center">
                    <h2 className="heading-md mb-4 text-squeeze-dark">{category.title}</h2>
                    <p className="text-squeeze-muted text-center max-w-2xl">{category.description}</p>
                  </div>

                  {/* Menu items grid with image */}
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Image section (left on even, right on odd) */}
                    <div className={`lg:col-span-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="relative rounded-2xl overflow-hidden h-full min-h-[300px]">
                        <img 
                          src={category.image} 
                          alt={category.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                          <div className="p-6">
                            <h3 className="text-2xl font-bold text-white mb-2">
                              Freshly Made
                            </h3>
                            <p className="text-white/80">
                              Made with 100% fresh ingredients
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Menu items */}
                    <div className={`lg:col-span-3 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                          {category.items.map((item, i) => (
                            <div key={i} className="menu-item group">
                              <div className="flex items-center gap-2">
                                <span className="font-medium group-hover:text-squeeze-primary transition-colors">
                                  {item.name}
                                </span>
                                {item.popular && (
                                  <span className="bg-squeeze-accent/10 text-squeeze-accent text-xs px-2 py-0.5 rounded-full">
                                    Popular
                                  </span>
                                )}
                              </div>
                              <span className="text-squeeze-secondary font-semibold">₹{item.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional section for special offers */}
            <div className="mt-20 bg-gradient-to-r from-squeeze-primary/10 to-squeeze-accent/10 rounded-2xl p-8 text-center">
              <h2 className="heading-md mb-4 text-squeeze-dark">Special Offers</h2>
              <p className="text-squeeze-muted mb-6 max-w-2xl mx-auto">
                Check out our special discounts and combo offers that change seasonally.
                Visit our store to learn more about current promotions!
              </p>
              <CustomButton variant="primary" className="bg-squeeze-primary hover:bg-squeeze-primary/90">
                Contact Us for Bulk Orders
              </CustomButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Classes;
