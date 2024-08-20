import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <img src="/logo.png" alt="Logo" className="h-12 mb-4" />
            <p className="text-sm">
              At CIBN, we strive to provide the best services and resources to our members. Join us to stay updated and connected with the banking industry.
            </p>
          </div>

          {/* Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-100">Home</a></li>
              <li><a href="#" className="hover:text-gray-100">About Us</a></li>
              <li><a href="#" className="hover:text-gray-100">Services</a></li>
              <li><a href="#" className="hover:text-gray-100">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>123 Banking Street, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2" />
                <a href="tel:+2341234567890" className="hover:text-gray-100">+234 123 456 7890</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a href="mailto:info@cibn.org" className="hover:text-gray-100">info@cibn.org</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-300 hover:text-gray-100"><FaFacebookF /></a>
            <a href="#" className="text-gray-300 hover:text-gray-100"><FaTwitter /></a>
            <a href="#" className="text-gray-300 hover:text-gray-100"><FaInstagram /></a>
            <a href="#" className="text-gray-300 hover:text-gray-100"><FaLinkedin /></a>
          </div>

          {/* Copyright Text */}
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} CIBN. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
