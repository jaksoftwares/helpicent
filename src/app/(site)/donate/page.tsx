'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaDonate, FaSchool, FaLock, FaUserGraduate, FaGlobe, FaCreditCard } from 'react-icons/fa';

export default function DonatePage() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[75vh] flex items-center justify-center text-center px-6 bg-blue-500 text-white">
        <div className="absolute inset-0">
          <Image
            src="/image5.jpg"
            alt="Children in school"
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
          <h1 className="text-5xl font-bold mb-6">Make a Difference Today</h1>
          <p className="text-xl">Your donation helps underprivileged children in Kenya access quality education.</p>
        </motion.div>
      </section>

      {/* Why Donate */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-6">Why Donate?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Your contribution provides school fees, learning materials, and mentorship to children who need it most.
            Together, we can change lives and create a brighter future.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">How It Works</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8 bg-white rounded-lg shadow-md text-center">
            <FaDonate className="text-blue-600 text-6xl mx-auto mb-6" />
            <h3 className="text-2xl font-semibold">Make a Donation</h3>
            <p className="text-lg text-gray-700 mt-3">Choose an amount and donate through our secure system.</p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-md text-center">
            <FaSchool className="text-blue-600 text-6xl mx-auto mb-6" />
            <h3 className="text-2xl font-semibold">Funds Are Allocated</h3>
            <p className="text-lg text-gray-700 mt-3">Donations go directly to supporting children&apos;s education.</p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-md text-center">
            <FaUserGraduate className="text-blue-600 text-6xl mx-auto mb-6" />
            <h3 className="text-2xl font-semibold">Children Thrive</h3>
            <p className="text-lg text-gray-700 mt-3">Your support helps children complete school and build a future.</p>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-24 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">Ways to Donate</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 bg-gray-50 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold">One-Time Donation</h3>
            <p className="text-lg text-gray-700 mt-3">Give once to make an immediate impact.</p>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition">
              Donate Now
            </button>
          </div>
          <div className="p-8 bg-gray-50 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold">Monthly Giving</h3>
            <p className="text-lg text-gray-700 mt-3">Provide ongoing support with a recurring donation.</p>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition">
              Become a Monthly Donor
            </button>
          </div>
        </div>
      </section>

      {/* Secure Payment Methods */}
      <section className="py-24 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">Secure Payment Methods</h2>
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <FaCreditCard className="text-blue-600 text-4xl mx-auto mb-4" />
            <p className="text-lg text-gray-700">Credit/Debit Cards</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <FaGlobe className="text-blue-600 text-4xl mx-auto mb-4" />
            <p className="text-lg text-gray-700">International Bank Transfers</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <FaLock className="text-blue-600 text-4xl mx-auto mb-4" />
            <p className="text-lg text-gray-700">Secure Encrypted Transactions</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-24 bg-blue-500 text-white">
        <h2 className="text-4xl font-bold mb-6">Be a Part of the Change</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Your donation makes a real impact. **Donate today and help change a child&apos;s future.**
        </p>
        <button className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-full shadow-md hover:bg-gray-200 transition">
          Donate Now
        </button>
      </section>
    </main>
  );
}
