import React, { useEffect, useState } from "react";
import Card from "./Card"
import { products } from "../assets/assets";
import Footer from './Footer'

const Product = () => {
  const [categorizedProducts, setCategorizedProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  const filterProductsByCategory = (category) => {
    if (category === null) {
      setCategorizedProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setCategorizedProducts(filtered);
    }
  };

  useEffect(() => {
    filterProductsByCategory(selectedCategory);
  }, [selectedCategory]); 

 
  useEffect(() => {
    setCategorizedProducts(products);
  }, []); 

  return (
    <div className="min-h-screen w-full bg-gray-50 font-sans">
      {/* Header Placeholder: Provides space at the top, adjust height as needed */}
      <div className="h-16 w-full bg-white shadow-sm flex items-center px-4 z-10 relative">
        <h1 className="text-xl font-bold text-gray-800">Our Products</h1>
      </div>

      {/* Main content area: Flex container for sidebar and product grid */}
      <div className="flex flex-col md:flex-row md:gap-8 p-4 md:p-6 lg:p-8">

        {/* Mobile Filter Button (Visible only on small screens) */}
        <div className="md:hidden mb-4 px-2">
          <button
            onClick={() => setToggleMobileMenu((prev) => !prev)}
            className="
              w-full flex items-center justify-center
              px-6 py-3 text-lg font-medium text-gray-700
              bg-blue-100 border border-blue-200 rounded-lg shadow-sm
              hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
              transition-colors duration-200
            "
          >
            Filter By Categories
            {/* Optional: Add an arrow icon to indicate toggle state */}
            <svg
              className={`ml-2 w-4 h-4 transform transition-transform duration-200 ${
                toggleMobileMenu ? 'rotate-180' : 'rotate-0'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Categories Sidebar (Conditionally rendered) */}
        {toggleMobileMenu && (
          <div className="
            md:hidden
            p-4 mb-4
            bg-white rounded-lg shadow-md
            w-full
            flex flex-col gap-3 text-base text-gray-700 font-medium
          ">
            <p
              onClick={() => {
                setSelectedCategory(null);
                setToggleMobileMenu(false); // Close menu on selection
              }}
              className={`
                pl-4 py-2 rounded-lg cursor-pointer transition-colors duration-200
                ${selectedCategory === null ? 'bg-blue-600 text-white shadow-md' : 'bg-blue-50 hover:bg-blue-100 text-blue-700'}
              `}
            >
              All Products
            </p>
            <p
              onClick={() => {
                setSelectedCategory("Fasteners");
                setToggleMobileMenu(false); // Close menu on selection
              }}
              className={`
                pl-4 py-2 rounded-lg cursor-pointer transition-colors duration-200
                ${selectedCategory === "Fasteners" ? 'bg-blue-600 text-white shadow-md' : 'bg-blue-50 hover:bg-blue-100 text-blue-700'}
              `}
            >
              Fasteners
            </p>
            <p
              onClick={() => {
                setSelectedCategory("Power Tools");
                setToggleMobileMenu(false); // Close menu on selection
              }}
              className={`
                pl-4 py-2 rounded-lg cursor-pointer transition-colors duration-200
                ${selectedCategory === "Power Tools" ? 'bg-blue-600 text-white shadow-md' : 'bg-blue-50 hover:bg-blue-100 text-blue-700'}
              `}
            >
              Power Tools
            </p>
            <p
              onClick={() => {
                setSelectedCategory("Building Materials");
                setToggleMobileMenu(false); // Close menu on selection
              }}
              className={`
                pl-4 py-2 rounded-lg cursor-pointer transition-colors duration-200
                ${selectedCategory === "Building Materials" ? 'bg-blue-600 text-white shadow-md' : 'bg-blue-50 hover:bg-blue-100 text-blue-700'}
              `}
            >
              Building Materials
            </p>
            <p
              onClick={() => {
                setSelectedCategory("Fitouts Materials");
                setToggleMobileMenu(false); // Close menu on selection
              }}
              className={`
                pl-4 py-2 rounded-lg cursor-pointer transition-colors duration-200
                ${selectedCategory === "Fitouts Materials" ? 'bg-blue-600 text-white shadow-md' : 'bg-blue-50 hover:bg-blue-100 text-blue-700'}
              `}
            >
              Fitouts Materials
            </p>
          </div>
        )}

        {/* Desktop Categories Sidebar (Visible only on medium screens and up) */}
        <div
          className="
            hidden md:flex flex-col gap-4 md:gap-6
            p-4 md:p-6 lg:p-8
            w-full md:w-64 lg:w-72
            bg-white rounded-lg shadow-md flex-shrink-0
            md:h-auto md:sticky md:top-4 lg:top-6
          "
        >
          <p className="text-center text-xl md:text-2xl font-semibold text-gray-800 border-b pb-3 mb-2">
            Categories
          </p>
          <div className="flex flex-col gap-3 md:gap-4 text-base md:text-lg text-gray-700 font-medium">
            {/* All Products option */}
            <p
              onClick={() => setSelectedCategory(null)}
              className={`
                pl-4 py-2 rounded-lg cursor-pointer transition-colors duration-200
                ${selectedCategory === null ? 'bg-blue-600 text-white shadow-md' : 'bg-blue-50 hover:bg-blue-100 text-blue-700'}
              `}
            >
              All Products
            </p>
            {/* Category: Fasteners */}
            <p
              onClick={() => setSelectedCategory("Fasteners")}
              className={`
                pl-4 py-2 rounded-lg cursor-pointer transition-colors duration-200
                ${selectedCategory === "Fasteners" ? 'bg-blue-600 text-white shadow-md' : 'bg-blue-50 hover:bg-blue-100 text-blue-700'}
              `}
            >
              Fasteners
            </p>
            {/* Category: Power Tools */}
            <p
              onClick={() => setSelectedCategory("Power Tools")}
              className={`
                pl-4 py-2 rounded-lg cursor-pointer transition-colors duration-200
                ${selectedCategory === "Power Tools" ? 'bg-blue-600 text-white shadow-md' : 'bg-blue-50 hover:bg-blue-100 text-blue-700'}
              `}
            >
              Power Tools
            </p>
            {/* Category: Building Materials */}
            <p
              onClick={() => setSelectedCategory("Building Materials")}
              className={`
                pl-4 py-2 rounded-lg cursor-pointer transition-colors duration-200
                ${selectedCategory === "Building Materials" ? 'bg-blue-600 text-white shadow-md' : 'bg-blue-50 hover:bg-blue-100 text-blue-700'}
              `}
            >
              Building Materials
            </p>
            {/* Category: Fitouts Materials */}
            <p
              onClick={() => setSelectedCategory("Fitouts Materials")}
              className={`
                pl-4 py-2 rounded-lg cursor-pointer transition-colors duration-200
                ${selectedCategory === "Fitouts Materials" ? 'bg-blue-600 text-white shadow-md' : 'bg-blue-50 hover:bg-blue-100 text-blue-700'}
              `}
            >
              Fitouts Materials
            </p>
          </div>
        </div>

        {/* Product Display Area */}
        <div
          className="
            flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 lg:gap-8
            w-full md:flex-grow
            md:overflow-y-auto md:max-h-[calc(100vh-100px)] lg:max-h-[calc(100vh-120px)]
            p-2 md:p-0
          "
        >
          {/* Display filtered products */}
          {categorizedProducts.length > 0 ? (
            categorizedProducts.map((item, index) => (
              <Card key={index} product={item} />
            ))
          ) : (
            <p className="text-gray-600 text-lg mt-10 w-full text-center">
              No products found for this category.
            </p>
          )}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Product;