
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-squeeze-dark pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 font-bubble">
              SQUEEZE<span className="text-squeeze-accent">.</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Premium juice and milkshake shop offering the freshest and most delicious refreshments. Made with 100% natural ingredients for the ultimate flavor experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-squeeze-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-squeeze-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-squeeze-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-squeeze-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-squeeze-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-squeeze-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/classes" className="text-gray-300 hover:text-squeeze-primary transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/membership" className="text-gray-300 hover:text-squeeze-primary transition-colors">
                  Specials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-squeeze-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Opening Hours</h4>
            <ul className="space-y-2">
              <li className="text-gray-300 flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 9:00 PM</span>
              </li>
              <li className="text-gray-300 flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 9:00 PM</span>
              </li>
              <li className="text-gray-300 flex justify-between">
                <span>Sunday</span>
                <span>10:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-squeeze-primary mt-1" size={18} />
                <span className="text-gray-300">
                  DOR NO 1, OPPO POLICE STATION, 1-1, Korangi - Boddu Venkatayapalem Rd, Korangi, Andhra Pradesh 533461
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-squeeze-primary" size={18} />
                <span className="text-gray-300">090630 69953</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-squeeze-primary" size={18} />
                <span className="text-gray-300">info@squeezejuices.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} SQUEEZE Juice & Milkshakes. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 text-sm hover:text-squeeze-primary">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-squeeze-primary">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
