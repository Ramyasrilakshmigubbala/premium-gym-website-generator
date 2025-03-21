
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Check } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="heading-lg text-center mb-16 bg-gradient-to-r from-squeeze-primary to-squeeze-secondary clip-text">
              About SQUEEZE
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="heading-md mb-6 text-squeeze-dark">Our Story</h2>
                <p className="text-squeeze-muted mb-6">
                  SQUEEZE was founded in 2018 with a simple mission: to provide the most delicious and refreshing juices and milkshakes made from the freshest ingredients available. What started as a small juice stand has now grown into a beloved local establishment in Korangi.
                </p>
                <p className="text-squeeze-muted mb-6">
                  Our founder, passionate about healthy and delicious beverages, wanted to create a place where customers could enjoy premium drinks that not only taste amazing but also provide nutritional benefits. That vision continues to drive everything we do at SQUEEZE today.
                </p>
                <p className="text-squeeze-muted">
                  We take pride in sourcing the highest quality fruits and ingredients, ensuring that every drink we serve exceeds our customers' expectations. Our commitment to quality and customer satisfaction has made us a favorite destination for refreshment seekers in the area.
                </p>
              </div>
              <div className="relative">
                <img src="/lovable-uploads/fa6aadfe-c388-4fdd-a3d8-5e1269ec8ca4.png" alt="Juice Shop" className="rounded-lg shadow-xl" />
                <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-lg shadow-lg w-40 hidden md:block">
                  <p className="text-squeeze-primary font-bold text-center">Since 2018</p>
                </div>
              </div>
            </div>
            
            <div className="mb-20">
              <h2 className="heading-md text-center mb-10 text-squeeze-dark">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <div className="w-16 h-16 bg-squeeze-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-squeeze-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-squeeze-dark">Quality</h3>
                  <p className="text-squeeze-muted">
                    We use only the freshest, highest-quality ingredients in all our beverages, ensuring an exceptional taste experience every time.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <div className="w-16 h-16 bg-squeeze-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-squeeze-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-squeeze-dark">Customer Service</h3>
                  <p className="text-squeeze-muted">
                    We believe in treating every customer like family, providing friendly service and a welcoming atmosphere.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <div className="w-16 h-16 bg-squeeze-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-squeeze-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-squeeze-dark">Passion</h3>
                  <p className="text-squeeze-muted">
                    We are passionate about what we do, constantly innovating and striving to create the most delicious beverages possible.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="heading-md text-center mb-10 text-squeeze-dark">Why Choose Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-6 text-squeeze-dark">Our Guarantee</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Check className="text-squeeze-primary mt-1" size={20} />
                      <span className="text-squeeze-muted">100% fresh fruits used in all our beverages</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-squeeze-primary mt-1" size={20} />
                      <span className="text-squeeze-muted">No artificial flavors, colors, or preservatives</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-squeeze-primary mt-1" size={20} />
                      <span className="text-squeeze-muted">Made fresh to order, every time</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-squeeze-primary mt-1" size={20} />
                      <span className="text-squeeze-muted">Clean and hygienic preparation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-squeeze-primary mt-1" size={20} />
                      <span className="text-squeeze-muted">Customization options available for most drinks</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-squeeze-primary/10 to-squeeze-accent/10 p-8 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-6 text-squeeze-dark">Testimonials</h3>
                  <div className="space-y-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-squeeze-muted mb-3 italic">
                        "The best milkshakes I've ever had! Fresh ingredients and amazing taste. I love the mango milkshake!"
                      </p>
                      <p className="text-squeeze-dark font-semibold">- Rahul K.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-squeeze-muted mb-3 italic">
                        "SQUEEZE has become my go-to place for refreshing juices. The mixed fruit juice is simply outstanding!"
                      </p>
                      <p className="text-squeeze-dark font-semibold">- Priya M.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-squeeze-muted mb-3 italic">
                        "I love that they use fresh fruits and no artificial additives. Healthy and delicious!"
                      </p>
                      <p className="text-squeeze-dark font-semibold">- Arun S.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
