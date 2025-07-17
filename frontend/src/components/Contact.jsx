import React, { useState } from "react";
import Footer from "./Footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="w-full">
      <section className="container mx-auto flex pt-10  flex-col md:flex-row items-center justify-center  gap-8 md:gap-16 my-10 md:my-20 px-4">
        {/* Text Content */}
        <div className="flex flex-col gap-5 p-6 md:p-10 text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-600 leading-tight">
            Our Team
          </h1>
          <p className="text-base md:text-xl font-medium text-slate-700 leading-relaxed">
            We ensure top-quality products sourced from trusted manufacturers
            and backed by expert product knowledge to guide our customers
            effectively. Our offerings emphasize eco-friendly sustainability,
            competitive pricing, and a strong focus on customer satisfaction. We
            build lasting relationships grounded in trust and mutual growth.
            Recognizing Dubai's professional work culture, our team upholds
            values of punctuality, efficiency, and respect, delivering services
            that align with local expectations.
          </p>
          <button  className="w-fit px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 mx-auto md:mx-0">
            <a href="#getinTouch">Get in touch</a>
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-md md:max-w-lg overflow-hidden rounded-2xl shadow-xl shadow-blue-300/50">
          <img
            src="/images/team.png"
            className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
            alt="Building materials"
          />
        </div>
      </section>

      <div
        id="getinTouch"
        className="w-full min-h-screen flex flex-col lg:flex-row items-start justify-center gap-12 mt-10 px-4 py-8"
      >
        {/* Contact Form */}
        <div className="w-full max-w-2xl">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-blue-600 text-3xl md:text-4xl font-semibold text-center mb-8">
              Get in Touch
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Subject</label>
                <input
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  rows={6}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <button className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md">
                Send Message
              </button>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="w-full max-w-lg">
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Phone Numbers</h4>
                <p className="text-gray-600">+971 4 264 4987</p>
                <p className="text-gray-600">+971 55 8818 452</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Email</h4>
                <p className="text-gray-600">info@ecostruct.ae</p>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold text-gray-800 mb-3">Co-Founder & Partner</h4>
                <div className="space-y-2">
                  <p className="font-medium text-gray-700">Umaima Dalal</p>
                  <p className="text-gray-600">Email: info@ecostruct.ae</p>
                  <p className="text-gray-600">Phone: +971 4 264 4987</p>
                  <p className="text-gray-600">Mobile: +971 56 8000 152</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;