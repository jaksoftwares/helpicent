'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaBook, FaHandsHelping, FaUsers, FaGlobe, FaGraduationCap, FaHeart } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <main className="bg-gray-50 text-gray-900">
            {/* Hero Section */}
        <section className="relative bg-blue-500 text-white h-[75vh] flex items-center justify-center text-center px-6">
          <div className="absolute inset-0">
            <Image
              src="/image1.jpg"
              alt="Children learning"
              layout="fill"
              objectFit="cover"
              className="opacity-70"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-4xl"
          >
            <h1 className="text-5xl font-bold mb-6">About Helpicent</h1>
            <p className="text-xl">
              A global movement dedicated to empowering underprivileged children in Kenya through education, mentorship, and support.
            </p>
          </motion.div>
        </section>


      {/* Our Mission & Vision */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-blue-700">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Helpicent is committed to transforming lives by providing children in Kenya with the education they deserve.
              We believe that **every child deserves an opportunity**, and our platform connects them with compassionate
              donors worldwide.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image src="/image4.jpg" alt="Mission" width={600} height={450} className="rounded-lg shadow-lg object-cover" />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image src="/image5.jpg" alt="Our Story" width={600} height={450} className="rounded-lg shadow-lg object-cover" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-blue-700">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Helpicent started as a small initiative with a big dream: to change the lives of children through education.
              Over the years, we have grown into an international movement, impacting thousands of young minds.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 px-6 bg-white">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-700">What We Do</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8 bg-gray-50 rounded-lg shadow-md text-center">
            <FaBook className="text-blue-600 text-6xl mx-auto mb-6" />
            <h3 className="text-2xl font-semibold">Education Support</h3>
            <p className="text-lg text-gray-700 mt-3">We fund school fees, books, and essential learning resources for underprivileged children.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-lg shadow-md text-center">
            <FaHandsHelping className="text-blue-600 text-6xl mx-auto mb-6" />
            <h3 className="text-2xl font-semibold">Mentorship Programs</h3>
            <p className="text-lg text-gray-700 mt-3">We connect children with mentors who guide them through education and personal growth.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-lg shadow-md text-center">
            <FaUsers className="text-blue-600 text-6xl mx-auto mb-6" />
            <h3 className="text-2xl font-semibold">Community Building</h3>
            <p className="text-lg text-gray-700 mt-3">Creating a strong network of donors, children, and educators for long-term support.</p>
          </div>
        </div>
      </section>

      {/* Our Global Impact */}
      <section className="py-24 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-700">Our Global Impact</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8 bg-white rounded-lg shadow-md text-center">
            <FaGlobe className="text-blue-600 text-6xl mx-auto mb-6" />
            <h3 className="text-2xl font-semibold">International Donors</h3>
            <p className="text-lg text-gray-700 mt-3">We receive support from compassionate donors across the world.</p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-md text-center">
            <FaGraduationCap className="text-blue-600 text-6xl mx-auto mb-6" />
            <h3 className="text-2xl font-semibold">Thousands of Students</h3>
            <p className="text-lg text-gray-700 mt-3">Over **5,000 children** have benefited from our programs.</p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-md text-center">
            <FaHeart className="text-blue-600 text-6xl mx-auto mb-6" />
            <h3 className="text-2xl font-semibold">Changing Lives</h3>
            <p className="text-lg text-gray-700 mt-3">With your support, we continue to create brighter futures every day.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-24 bg-blue-700 text-white">
        <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Your support transforms lives. **Donate today** and help children in Kenya achieve their dreams.
        </p>
        <a
          href="/donate"
          className="px-8 py-4 bg-blu text-white font-semibold rounded-full shadow-md hover:bg-gray-200 transition"
        >
          Donate Now
        </a>
      </section>
    </main>
  );
}
