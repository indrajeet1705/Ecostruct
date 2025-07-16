import React from "react";

const Footer = () => {
  return (
    <footer className="w-full relative bg-gray-900 text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-2">Ecostruct Trading LLC</h2>
          <p className="text-sm text-gray-300">
            Your trusted partner for premium construction supplies, tools, and
            materials across the UAE. Building stronger foundations for Dubai's
            construction industry.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/products" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <span className="font-semibold">Phone:</span> +971-XXX-XXXX
            </li>
            <li>
              <span className="font-semibold">Email:</span> info@ecostruct.ae
            </li>
            <li>
              <span className="font-semibold">Address:</span> Dubai, United Arab Emirates
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} ECOSTRUCT TRADING LLC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
