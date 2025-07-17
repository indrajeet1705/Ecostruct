import React from "react";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import {productCatagory }from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <img
        src="/images/home.jpg"
        className="h-screen w-full object-cover fixed top-0 left-0 z-0"
        alt=""
      />

      <div className="w-full h-screen top-0 left-0 bg-black opacity-50 fixed z-10"></div>

      <div className="relative z-20 w-full h-screen flex items-center justify-center px-4">
        <div className="text-white text-center flex flex-col gap-6 max-w-3xl">
          <p className="text-3xl sm:text-4xl md:text-6xl font-bold">
            Building Dubai's Future
          </p>
          <p className="text-base sm:text-xl md:text-2xl font-medium">
            Your trusted partner for premium construction supplies, tools{" "}
            <br className="hidden sm:block" />
            and materials across the UAE
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-500 px-5 py-3 rounded-lg text-sm sm:text-base hover:scale-105 transition">
              Browse Products
            </button>
            <button className="bg-green-500 px-5 py-3 rounded-lg text-sm sm:text-base hover:scale-105 transition">
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-white px-4 py-12 relative z-30">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <p className="text-3xl md:text-5xl font-bold text-center text-black">
            Our Product Categories
          </p>
          <p className="text-lg md:text-2xl font-semibold text-center text-gray-800">
            Comprehensive construction supplies for all your project needs
          </p>
          <div className="flex flex-wrap gap-8 justify-center mt-6">
            {productCatagory.map((item, index) => (
              <ProductCard
              
                key={index}
                name={item.name}
                image={item.image}
                info={item.info}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative w-full py-12 px-4 flex flex-col lg:flex-row items-center justify-evenly bg-gray-100 gap-10 z-30">
        <div className="max-w-md flex flex-col gap-5 text-center lg:text-left">
          <p className="text-2xl md:text-3xl font-semibold text-black">
            About ECOSTRUCT TRADING <br className="hidden md:block" /> LLC
          </p>
          <p className="text-gray-700 text-sm md:text-base">
            At Ecostruct, we prioritize your building project's success by offering a curated selection of premium materials and tools from trusted global manufacturers. Our comprehensive product range ensures you find everything you need in one place, saving time and effort. Whether it's new construction or renovation, we provide high-quality products, competitive pricing, and fast delivery—making us your reliable partner.
          </p>
          <div className="flex justify-center lg:justify-start gap-8">
            <div className="flex flex-col text-blue-500 text-2xl font-semibold">
              500+ <p className="text-sm text-gray-800">Projects Completed</p>
            </div>
            <div className="flex flex-col text-blue-500 text-2xl font-semibold">
              50+ <p className="text-sm text-gray-800">Trusted Partners</p>
            </div>
          </div>
          <button
            onClick={() => navigate("/about")}
            className="bg-blue-600 px-5 py-2 rounded-2xl text-white font-medium hover:scale-105 transition w-fit mx-auto lg:mx-0"
          >
            Learn more about us
          </button>
        </div>

        <div className="max-w-sm w-full rounded-2xl overflow-hidden shadow-lg shadow-gray-400">
          <img
            src="/images/city.avif"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
