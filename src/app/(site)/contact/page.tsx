'use client';

import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add form submission logic here (e.g., API request)
  };

  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[75vh] flex items-center justify-center text-center px-6 bg-blue-500 text-white">
        <div className="absolute inset-0">
          <Image
            src="/image1.jpg"
            alt="Contact Us"
            layout="fill"
            objectFit="cover"
            className="opacity-70"
          />
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl">We’d love to hear from you! Reach out with any questions, feedback, or support inquiries.</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">Contact Information</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <FaPhoneAlt className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="text-gray-700 mt-2">+1 234 567 890</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <FaEnvelope className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-gray-700 mt-2">support@helpicent.org</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <FaMapMarkerAlt className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Address</h3>
            <p className="text-gray-700 mt-2">123 Main St, Nairobi, Kenya</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <FaClock className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Working Hours</h3>
            <p className="text-gray-700 mt-2">Mon - Fri: 9 AM - 5 PM (EAT)</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">Send Us a Message</h2>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg font-semibold">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full mt-2 p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-24 bg-blue-500 text-white">
        <h2 className="text-4xl font-bold mb-6">We&apos;re Here to Help</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Whether you have questions about donations, campaigns, or partnerships, feel free to reach out!
        </p>
        <button className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-full shadow-md hover:bg-gray-200 transition">
          Contact Support
        </button>
      </section>
    </main>
  );
}
