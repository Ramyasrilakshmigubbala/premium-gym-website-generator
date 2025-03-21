
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-20 bg-gym-dark">
          <div className="container mx-auto px-4">
            <h1 className="heading-lg text-center mb-16 bg-gradient-to-r from-white to-gray-400 clip-text">
              About EliteFit
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-gym-muted text-lg mb-6">
                Our about page will contain information about the gym's history, mission, and values.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
