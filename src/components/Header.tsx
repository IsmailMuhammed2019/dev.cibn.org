import { FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaInstagram, FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gray-200 text-white w-full">
      {/* Top Bar */}
      <div className="bg-green-700 text-sm py-2">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          <div className="flex items-center space-x-4">
          <a href="mailto:example@example.com" className="flex items-center space-x-2 text-xs text-white hover:text-gray-400">
              <FaEnvelope className="text-xs" />
              <span>cibn@cibng.org</span>
            </a>
            <a href="tel:+1234567890" className="flex items-center space-x-2 text-xs text-white hover:text-gray-400">
              <FaPhone className="text-xs" />
              <span>0700-DIAL-CIBN</span>
            </a>
          </div>
          <div className="flex space-x-3">
          <a href="#" className="text-white hover:text-gray-300"><FaFacebookF className="text-xs" /></a>
            <a href="#" className="text-white hover:text-gray-300"><FaTwitter className="text-xs" /></a>
            <a href="#" className="text-white hover:text-gray-300"><FaInstagram className="text-xs" /></a>
            <a href="mailto:example@example.com" className="flex items-center space-x-2 text-xs hover:text-gray-400">
              <span>Signin</span>
            </a>
            <a href="tel:+1234567890" className="flex items-center space-x-2 text-xs hover:text-gray-400">
              <span>Join CIBN</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-t border-green-700 py-3">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-4">
          <div className="text-sm font-semibold">Logo</div>
          <nav className="flex space-x-6 mt-2 md:mt-0 text-sm md:text-base">
            <a href="#" className="text-gray-800 hover:text-gray-400">Home</a>
            <a href="#" className="text-gray-800 hover:text-gray-400">About</a>
            <a href="#" className="text-gray-800 hover:text-gray-400">Services</a>
            <a href="#" className="text-gray-800 hover:text-gray-400">Contact</a>
          </nav>
          <div className="relative mt-2 md:mt-0">
            <input 
              type="text" 
              placeholder="Search..." 
              className="p-2 pl-8 text-sm border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 w-full" 
            />
            <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

