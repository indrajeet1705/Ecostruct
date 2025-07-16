import React from 'react';

const ProductCard = ({ name, info, image }) => {
  return (
    <div className="w-[250px] h-[370px] hover:scale-105 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition duration-500 flex flex-col p-4 items-center text-center">
      
      {/* Product Image */}
      <div className="w-[200px] h-[200px] rounded-md overflow-hidden mb-3">
        <img
          src={image || '/images/placeholder.jpg'} // optional fallback
          alt={name}
          className="w-full h-full transition-all duration-700 hover:scale-110 object-cover"
        />
      </div>

      {/* Product Name */}
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{name || 'Unnamed Product'}</h3>

      {/* Product Info */}
      <p className="text-sm text-gray-500">{info || 'No description available.'}</p>
    </div>
  );
};

export default ProductCard;
