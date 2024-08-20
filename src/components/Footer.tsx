import { FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0 md:w-1/3">
            <img src="/logo.png" alt="Logo" className="h-12 mb-4" />
            <p className="text-sm">
              Welcome to CIBN. We are committed to providing the best services to our customers and members.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:w-1/3">
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li><FaEnvelope className="inline mr-2" /> cibn@cibng.org</li>
              <li><FaPhone className="inline mr-2" /> 0700-DIAL-CIBN</li>
              <li><FaMapMarkerAlt className="inline mr-2" /> 123 CIBN St, Lagos, Nigeria</li>
            </ul>
          </div>
        </div>

        {/* Social Media and Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Media */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white"><FaFacebookF /></a>
              <a href="#" className="hover:text-white"><FaTwitter /></a>
              <a href="#" className="hover:text-white"><FaInstagram /></a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:w-1/2">
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Subscribe to Our Newsletter</h3>
            <form className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-10 pt-4 text-left text-xs">
          <p>&copy; {new Date().getFullYear()} CIBN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
