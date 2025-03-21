
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Member for 2 years",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      quote: "EliteFit has completely transformed my life. The trainers are exceptional, the facilities are pristine, and the community is supportive. I've lost 30 pounds and gained so much confidence!",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Member for 1 year",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      quote: "As someone who travels frequently for work, I appreciate that EliteFit is open 24/7. The equipment is top-notch and always well-maintained. Definitely worth every penny.",
      rating: 5,
    },
    {
      id: 3,
      name: "Rebecca Torres",
      role: "Member for 3 years",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      quote: "The personal trainers at EliteFit are knowledgeable and motivating. They've helped me achieve fitness goals I never thought possible. The recovery center is also amazing for post-workout therapy.",
      rating: 5,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);
  
  const goToNext = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const goToPrev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-gym-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6 bg-gradient-to-r from-white to-gray-400 clip-text">
            What Our Members Say
          </h2>
          <p className="text-gym-muted text-lg">
            Real stories from real members who have transformed their lives with EliteFit
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative h-[420px] md:h-[320px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute top-0 left-0 w-full transition-all duration-700 transform 
                  ${index === current 
                    ? "opacity-100 translate-x-0" 
                    : index < current 
                      ? "opacity-0 -translate-x-full" 
                      : "opacity-0 translate-x-full"}`}
              >
                <div className="bg-gym-dark border border-gym-muted/10 rounded-xl p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-20 h-20 rounded-full object-cover border-2 border-gym-accent"
                      />
                    </div>
                    <div>
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < testimonial.rating ? "text-gym-accent" : "text-gray-400"}`} 
                            fill={i < testimonial.rating ? "currentColor" : "none"}
                          />
                        ))}
                      </div>
                      <blockquote className="text-lg text-gray-300 italic mb-4">"{testimonial.quote}"</blockquote>
                      <div>
                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                        <p className="text-gym-muted text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button 
              onClick={goToPrev}
              className="p-2 rounded-full border border-gym-muted/20 text-gym-muted hover:text-white hover:border-gym-accent mr-2 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setCurrent(index);
                }}
                className={`mx-1 w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current ? "bg-gym-accent" : "bg-gym-muted/20"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            <button 
              onClick={goToNext}
              className="p-2 rounded-full border border-gym-muted/20 text-gym-muted hover:text-white hover:border-gym-accent ml-2 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
