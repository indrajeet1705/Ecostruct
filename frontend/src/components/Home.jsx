import React from "react";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import product from "../assets/assets";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate= useNavigate()
  return (
    <div className="w-full  h-screen ">
      <img
        src="/images/home.jpg"
        className=" h-full w-full object-cover fixed overflow-hidden "
        alt=""
      />
      <div className=" w-full h-full top-0 lef-0 bg-black opacity-50 "></div>
      <div className=" w-full h-full flex items-center   absolute top-0 left-0 justify-center ">
        <div className="p-4 text-white  flex flex-col gap-6">
          <p className=" text-center text-6xl font-bold ">
            Building Dubai's Future
          </p>
          <p className=" text-center text-3xl font-semibold">
            Your trusted partner for premium construction supplies, tools
            <br /> and materials across the UAE
          </p>
          <div className=" p-4 flex gap-5 items-center  mx-auto   ">
            <button className=" bg-blue-500 px-5 py-3 rounded-lg">
              Browse Products
            </button>
            <button className=" bg-green-500 px-5 py-3 rounded-lg">
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>
      <div className=" h-screen w-full bg-white p-6 itme  top-0 left-0 relative">
        <div className=" p-10 gap-10 flex flex-col ">
          {" "}
          <p className=" text-6xl font-bold text-center text-black">
            Our Product Categories
          </p>
          <p className=" text-4xl font-semibold text-center text-gray-800">
            Comprehensive construction supplies for all your project needs
          </p>
          <div className=" mt-5  w-full h-[400px] flex items-center  justify-evenly">
            {product.map((item, index) => {
              return (
                <div key={index}>
                  <ProductCard
                    name={item.name}
                    image={item.image}
                    info={item.info}
                  ></ProductCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" relative w-full h-[70vh] flex flex-wrap items-center p-10 justify-evenly  bg-gray-100">
        <div className=" w-[500px] flex flex-col  p-5 gap-5 h-[400px] ">
          <p className=" text-black text-3xl flex-wrap font-semibold">
            About ECOSTRUCT TRADING <br />
            LLC
          </p>
          <p className=" text-gray-700 ">
            Based in Dubai, we are a leading construction supply company serving
            contracting firms and facilities management companies across the
            UAE. Our commitment to quality and reliability has made us a trusted
            partner in the construction industry.
          </p>
          <div className=" mx-auto gap-8 flex ">
            <div className=" w-[200px] h-[100px] p-3 flex flex-col gap-1 text-center text-3xl font-semibold text-blue-500">
              {" "}
              500+ <p className="text-sm text-gray-800">
                {" "}
                project Completed
              </p>{" "}
            </div>
            <div className=" w-[200px] h-[100px] p-3 flex flex-col gap-1 text-center text-3xl font-semibold text-blue-500">
              {" "}
              50+ <p className="text-sm text-gray-800">
                {" "}
                Trusted Parteners
              </p>{" "}
            </div>
          </div>
          <button onClick={()=>navigate('/about')} className=" px-5 py-2 bg-blue-600 text-semibold text-white rounded-2xl">
            Learn more about us{" "}
          </button>
        </div>
        <div className=" w-[500px] flex flex-col  shadow-xl shadow-gray-400  gap-5 h-[400px]  overflow-hidden rounded-2xl">
          {" "}
          <img
            className=" w-full h-full object-cover "
            src="/images/city.avif"
            alt=""
          />
        </div>
      </div>
     
      <Footer></Footer>
    </div>
  );
};

export default Home;
