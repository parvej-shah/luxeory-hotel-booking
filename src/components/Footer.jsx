const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
          <h2 className="text-3xl mb-6 font-black mr-1">
            <span className="text-primary">Lux</span>eory
          </h2>
            <p className="text-gray-400">
              Experience the best luxury and comfort at Luxeory.
            </p>
          </div>
  
          {/* Column 2: Quick Links */}
          <div>
            <h1 className="text-xl font-semibold mb-4">Quick Links</h1>
            <ul className="space-y-1 text-gray-400">
              <li>
                <a href="" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white transition">
                  Rooms & Suites
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white transition">
                  Our Services
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
  
          {/* Column 3: Contact */}
          <div>
            <h1 className="text-xl font-semibold mb-4">Contact Info</h1>
            <ul className="space-y-1 text-gray-400">
              <li>
                <span className="font-medium">Address:</span> 4578 Marmora Road,
                Glasgow, D04 89GR.
              </li>
              <li>
                <span className="font-medium">Phone:</span>{" "}
                <a href="tel:+1234567890" className="hover:text-white transition">
                  +1 234 567 890
                </a>
              </li>
              <li>
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:info@hotera.com"
                  className="hover:text-white transition"
                >
                  info@luxeory.com
                </a>
              </li>
            </ul>
          </div>
  
          {/* Column 4: Newsletter */}
          <div>
            <h1 className="text-xl font-semibold mb-4">Newsletter</h1>
            <p className="text-gray-400 mb-4">
              Subscribe to receive exclusive offers and the latest updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 rounded-l-lg focus:outline-none text-white placeholder-gray-500"
              />
              <button
                type="submit"
                className="px-4 bg-primary text-white font-semibold rounded-r-lg hover:bg-primary-focus transition"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="mt-12 text-center text-gray-500 border-t border-gray-700 pt-6">
        <p className="mb-2 text-gray-400">© 2024 Luxeory. All Rights Reserved.</p>
          <p>Designed and Developed by Parvej Shah | Powered by Programming Hero</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  