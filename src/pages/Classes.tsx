
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Classes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-20 bg-gym-dark">
          <div className="container mx-auto px-4">
            <h1 className="heading-lg text-center mb-16 bg-gradient-to-r from-white to-gray-400 clip-text">
              Our Classes
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-gym-muted text-lg mb-6">
                This page will showcase the various fitness classes offered at EliteFit.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Classes;
