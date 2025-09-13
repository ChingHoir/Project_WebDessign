// src/components/AboutUs.jsx
import React from "react"
import ImageSrc from '../img/image.png';
import ImageSrc1 from '../img/image1.png';
import ImageSrc2 from '../img/img2.png';

function AboutUs() {
  return (
    <div className="font-sans bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-700 opacity-30 blur-3xl"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-100/90">
            Passionate about delivering exceptional products and experiences
            for every customer.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={ImageSrc}
            alt="Our Story"
            className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500 w-100 object-cover"
          />
          <div>
            <h2 className="text-4xl font-bold mb-6 text-indigo-400">
              Our Story
            </h2>
            <p className="mb-4 text-gray-300">
              Founded in 2020, <span className="font-semibold text-indigo-300">MyShop</span> started
              with a mission to make high-quality products accessible to
              everyone. From a small online store, we’ve grown into a trusted
              brand serving thousands of happy customers.
            </p>
            <p className="text-gray-300">
              We believe in <span className="font-semibold text-pink-400">innovation</span>, <span className="font-semibold text-purple-400">customer trust</span>, and <span className="font-semibold text-indigo-400">affordable luxury</span>.
              Every product is handpicked to bring value and joy to your life.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 text-center text-white">
          <div className="bg-white/10 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-5xl font-extrabold text-indigo-300">+5</h3>
            <p className="mt-2 text-gray-200">Years of Experience</p>
          </div>
          <div className="bg-white/10 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-5xl font-extrabold text-pink-300">10k+</h3>
            <p className="mt-2 text-gray-200">Happy Customers</p>
          </div>
          <div className="bg-white/10 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-5xl font-extrabold text-purple-300">500+</h3>
            <p className="mt-2 text-gray-200">Products Available</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-400">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { name: "Mrr Hoir", role: "CEO", img: ImageSrc1 },
            { name: "John Smith", role: "CTO", img: "https://via.placeholder.com/200" },
            { name: "Alice Brown", role: "Marketing", img: ImageSrc2 },
            { name: "Michael Lee", role: "Designer", img: "https://via.placeholder.com/200" },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-purple-700 via-indigo-700 to-pink-700 rounded-3xl p-6 text-center shadow-xl hover:scale-105 transform transition cursor-pointer"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-100 h-100 mx-auto rounded-full object-cover mb-4 border-4 border-white/20"
              />
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-gray-200">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
