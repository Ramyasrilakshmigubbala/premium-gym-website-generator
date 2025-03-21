
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gym-dark pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              ELITE<span className="text-gym-accent">FIT</span>
            </h3>
            <p className="text-gym-muted mb-6">
              Premium fitness experience tailored to transform your body and mind. Join our community of fitness enthusiasts today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gym-muted hover:text-gym-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gym-muted hover:text-gym-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gym-muted hover:text-gym-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gym-muted hover:text-gym-accent transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gym-muted hover:text-gym-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gym-muted hover:text-gym-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/classes" className="text-gym-muted hover:text-gym-accent transition-colors">
                  Classes
                </Link>
              </li>
              <li>
                <Link to="/membership" className="text-gym-muted hover:text-gym-accent transition-colors">
                  Membership
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gym-muted hover:text-gym-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Opening Hours</h4>
            <ul className="space-y-2">
              <li className="text-gym-muted flex justify-between">
                <span>Monday - Friday</span>
                <span>6:00 AM - 10:00 PM</span>
              </li>
              <li className="text-gym-muted flex justify-between">
                <span>Saturday</span>
                <span>7:00 AM - 8:00 PM</span>
              </li>
              <li className="text-gym-muted flex justify-between">
                <span>Sunday</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-gym-accent mt-1" size={18} />
                <span className="text-gym-muted">
                  123 Fitness Street, Exercise City, 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gym-accent" size={18} />
                <span className="text-gym-muted">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gym-accent" size={18} />
                <span className="text-gym-muted">info@elitefit.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gym-muted/20 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gym-muted text-sm">
            © {new Date().getFullYear()} EliteFit. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gym-muted text-sm hover:text-gym-accent">
              Privacy Policy
            </a>
            <a href="#" className="text-gym-muted text-sm hover:text-gym-accent">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
