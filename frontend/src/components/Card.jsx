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

  const { pname, pBrand, psize, pprice ,pCode} = product;

  return (
    <div className="
      bg-white   overflow-hidden
      flex flex-col
       w-[300px]  md:w-[300px] mt-2  rounded-xl
      transform transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-lg
      font-sans border shadow-blue-500
    ">
      {/* Product Image Section */}
      <div className="
        w-full h-32 p-5 md:h-36
        overflow-hidden border-b object-cover flex items-center justify-center border-gray-100
      ">
        <img
          src={`/images/productimage/${pCode}.png`}
          alt={pname}
          className="w-full object-cover block"
        />
      </div>

      {/* Product Details Section */}
      <div className="p-4 flex bg-slate-100 hover:bg-blue-600 hover:text-white transition-all duration-500 flex-col flex-grow">
        <h2 className="
          text-lg md:text-xl font-semibold 
          mb-2 text-center
        ">
          {pname}
        </h2>

        {/* Consolidated Details */}
        <div className="flex flex-col gap-2 text-sm ">
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