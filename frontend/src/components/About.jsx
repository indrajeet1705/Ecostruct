import React from 'react';
import Footer from './Footer';

// Main App component to render the About page
function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-inter antialiased">
      {/* About Section */}
      <About />
    </div>
  );
}

const About = () => {
  return (<>
    <div className="w-full flex flex-col items-center py-10 px-4 md:px-8 lg:px-16">
      {/* Hero/About Us Section */}
      <section className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 my-10 md:my-20">
        {/* Text Content */}
        <div className="flex flex-col gap-5 p-6 md:p-10 text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-600 leading-tight">
            About Us
          </h1>
          <p className="text-base md:text-xl font-medium text-slate-700 leading-relaxed text-balance">
            At Ecostruct, we prioritize your building project's success by
            offering a curated selection of premium materials and tools from
            trusted global manufacturers. Our comprehensive product range
            ensures you find everything you need in one place, saving time and
            effort. Whether it's new construction or renovation, we provide
            high-quality products, competitive pricing, and fast delivery making
            us your reliable partner.
          </p>
          <button className="w-fit px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 mx-auto md:mx-0">
            Know More
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-md md:max-w-lg overflow-hidden rounded-2xl shadow-xl shadow-blue-300">
          <img
            src="/images/building.png"
            className="w-full h-auto object-cover rounded-2xl"
            alt="Building materials"
           
          />
        </div>
      </section>

      {/* Services, Vision, Mission Section */}
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 my-10 md:my-20 p-4">
        {/* Our Services Card */}
        <div className="flex flex-col gap-4 p-8 border border-gray-200 rounded-xl shadow-md transition-all duration-300 hover:bg-purple-50 hover:shadow-lg transform hover:scale-105 text-center">
          <h2 className="text-3xl font-semibold text-purple-700">Our Services</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            We offer a wide range of building materials, plywood, interior
            fittings, fasteners, tools, and safety products at competitive
            prices. Our focus is on quality, reliability, and exceptional
            service. With strict quality control and a robust logistics network,
            we ensure timely delivery and dependable support to keep your
            construction projects on schedule.
          </p>
        </div>

        {/* Our Vision Card */}
        <div className="flex flex-col gap-4 p-8 border border-gray-200 rounded-xl shadow-md transition-all duration-300 hover:bg-purple-50 hover:shadow-lg transform hover:scale-105 text-center">
          <h2 className="text-3xl font-semibold text-purple-700">Our Vision</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            Our vision is to become a leading supplier in the construction industry,
            recognized for our commitment to quality, sustainability, and customer
            satisfaction. We aim to continually expand our product range, stay at
            the forefront of industry trends, and build long-lasting relationships
            with our customers, partners, and stakeholders.
          </p>
        </div>

        {/* Our Mission Card */}
        <div className="flex flex-col gap-4 p-8 border border-gray-200 rounded-xl shadow-md transition-all duration-300 hover:bg-purple-50 hover:shadow-lg transform hover:scale-105 text-center">
          <h2 className="text-3xl font-semibold text-purple-700">Our Mission</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            At Ecostruct Trading, our mission is to provide top-quality building
            materials, plywood, interior fittings, fasteners, tools, and safety
            products to our valued customers in Dubai. We strive to be a reliable
            partner in their construction and renovation projects by offering
            superior products, exceptional service, and innovative solutions.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 my-10 md:my-20 p-4">
        {/* Image Section */}
        <div className="w-full max-w-md md:max-w-lg overflow-hidden rounded-2xl shadow-xl shadow-gray-300 order-2 md:order-1">
          <img
            src="/images/choose.png"
            className="w-full h-auto object-cover rounded-2xl"
            alt="Why Choose Us"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-5 p-6 md:p-10 text-center md:text-left max-w-xl order-1 md:order-2">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Why Choose Us
          </h2>
          <ul className="text-base md:text-lg text-gray-700 space-y-3 list-none p-0">
            <li className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">&#10003;</span>
              <p className="flex-1">
                <strong className="text-gray-900">Quality Assurance:</strong> We source products from trusted manufacturers to ensure top-notch quality and reliability.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">&#10003;</span>
              <p className="flex-1">
                <strong className="text-gray-900">Expert Knowledge:</strong> Our team offers in-depth product knowledge and expert guidance tailored to your project needs.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">&#10003;</span>
              <p className="flex-1">
                <strong className="text-gray-900">Sustainable Solutions:</strong> We promote eco-friendly and sustainable practices through our product offerings.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">&#10003;</span>
              <p className="flex-1">
                <strong className="text-gray-900">Customer Satisfaction:</strong> Exceptional service and support are at the heart of our customer-first approach.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">&#10003;</span>
              <p className="flex-1">
                <strong className="text-gray-900">Competitive Pricing:</strong> We offer excellent value without compromising on quality.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">&#10003;</span>
              <p className="flex-1">
                <strong className="text-gray-900">Strong Relationships:</strong> We build lasting partnerships based on trust, reliability, and mutual growth.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">&#10003;</span>
              <p className="flex-1">
                <strong className="text-gray-900">Local Understanding:</strong> We embrace Dubai’s work culture of professionalism, punctuality, and efficiency, and are committed to delivering service that aligns with these values.
              </p>
            </li>
          </ul>
        </div>
      </section>
     
    </div>
    <Footer></Footer>
    </>
  );
};

export default App;
