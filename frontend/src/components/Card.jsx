// ProductCard.jsx
import React from 'react';

const Card = ({ product }) => {
  if (!product) {
    return (
      <div className="p-4 text-center text-gray-500 italic text-sm">
        No product data available.
      </div>
    );
  }

  const { pname, pBrand, psize, pprice } = product;

  // Placeholder image - replace with your actual product image URL
  const productImage = 'https://via.placeholder.com/180x150?text=Product+Image';

  return (
    <div className="
      bg-white rounded-lg shadow-md overflow-hidden
      flex flex-col
      m-3 w-full max-w-xs md:max-w-sm lg:max-w-md
      transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
      font-sans
    ">
      {/* Product Image Section */}
      <div className="
        w-full h-36 md:h-40
        overflow-hidden border-b border-gray-100
      ">
        <img
          src={productImage}
          alt={pname}
          className="w-full h-full object-cover block"
        />
      </div>

      {/* Product Details Section */}
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="
          text-lg md:text-xl font-semibold text-gray-800
          mb-2 text-center
        ">
          {pname}
        </h2>

        {/* Consolidated Details */}
        <div className="flex flex-col gap-2 text-sm text-gray-600">
          <div>
            <span className="font-medium">Brands: </span>
            {pBrand && pBrand.join(', ')}
          </div>
          <div>
            <span className="font-medium">Sizes: </span>
            {psize && psize.join(', ')}
          </div>
          <div>
            <span className="font-medium">Prices (AED): </span>
            {pprice && pprice.map(p => p.toFixed(2)).join(', ')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;