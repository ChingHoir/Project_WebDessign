import { Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section: Logo and Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-6 space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold">ETEC PRIMIUM COLLECTION</h2>
            <p className="text-sm text-gray-400 mt-1">
              Made with ❤️ in Cambodia
            </p>
          </div>

          {/* Contact & Socials */}
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-6">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Phone size={16} />
              <span>+855 92 994 789</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Mail size={16} />
              <span>ETECPrimiumCollection@itbookstore.com</span>
            </div>
            <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section: Copyright */}
        <div className="border-t border-gray-800 pt-4 text-center text-gray-500 text-sm">
          © 2025 IT Book Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
