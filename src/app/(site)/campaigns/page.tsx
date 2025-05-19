'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaChartLine, FaDonate } from 'react-icons/fa';

const campaigns = [
  {
    id: 1,
    title: "Education for Every Child",
    description: "Providing school fees, books, and resources for underprivileged children.",
    goal: "$10,000",
    raised: "$6,500",
    image: "/image1.jpg",
  },
  {
    id: 2,
    title: "Tech for Schools",
    description: "Supplying computers and internet access to remote schools in Kenya.",
    goal: "$15,000",
    raised: "$9,200",
    image: "/image5.jpg",
  },
  {
    id: 3,
    title: "Food & Nutrition Program",
    description: "Ensuring children have daily nutritious meals at school.",
    goal: "$8,000",
    raised: "$4,500",
    image: "/image4.jpg",
  },
];

export default function CampaignsPage() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[75vh] flex items-center justify-center text-center px-6 bg-blue-500 text-white">
        <div className="absolute inset-0">
          <Image
            src="/image1.jpg"
            alt="Fundraising campaign"
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
          <h1 className="text-5xl font-bold mb-6">Support a Campaign</h1>
          <p className="text-xl">Make an impact by contributing to active fundraising campaigns for children&apos;s education.</p>
        </motion.div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-24 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">Featured Campaigns</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <Image src={campaign.image} alt={campaign.title} width={400} height={250} className="rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold">{campaign.title}</h3>
              <p className="text-gray-700 mt-3">{campaign.description}</p>
              <div className="mt-4 text-blue-700 font-semibold">
                <p>Goal: {campaign.goal}</p>
                <p>Raised: {campaign.raised}</p>
              </div>
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition">
                Donate Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">How It Works</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8 bg-white rounded-lg shadow-md text-center">
            <FaHandHoldingHeart className="text-blue-600 text-6xl mx-auto mb-6" />
            <h3 className="text-2xl font-semibold">Find a Campaign</h3>
            <p className="text-lg text-gray-700 mt-3">Explore active campaigns and choose one to support.</p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-md text-center">
            <FaDonate className="text-blue-600 text-6xl mx-auto mb-6" />
            <h3 className="text-2xl font-semibold">Make a Donation</h3>
            <p className="text-lg text-gray-700 mt-3">Contribute securely using your preferred payment method.</p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-md text-center">
            <FaChartLine className="text-blue-600 text-6xl mx-auto mb-6" />
            <h3 className="text-2xl font-semibold">See the Impact</h3>
            <p className="text-lg text-gray-700 mt-3">Track campaign progress and see how your donation helps.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-24 bg-blue-500 text-white">
        <h2 className="text-4xl font-bold mb-6">Start a Campaign or Donate Today</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Your generosity can change lives. Start a campaign or support an existing one.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <button className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-full shadow-md hover:bg-gray-200 transition">
            Donate to a Campaign
          </button>
          <button className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-full shadow-md hover:bg-gray-200 transition">
            Start a Campaign
          </button>
        </div>
      </section>
    </main>
  );
}
