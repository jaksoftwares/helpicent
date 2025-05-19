// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image with overlay */}
        <Image
          src="/image1.jpg"
          alt="Inspiring Education Background"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-70"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Empowering Futures Globally
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-200 max-w-2xl">
            Helpicent connects international donors with brilliant minds in Kenya, transforming education and lives.
          </p>
          <Link
          href="/donate"
          className="mt-10 inline-block bg-white text-primary font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition"
             >
              Make a Difference
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Our Mission</h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            At Helpicent, we believe in creating lasting change by funding quality education for underprivileged children in Kenya. Our transparent and secure platform ensures every donation builds a brighter future.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-primary mb-3">Secure Donations</h3>
              <p className="text-gray-600">
                Donate with confidence using our state-of-the-art secure payment system. Your support reaches those who need it.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-primary mb-3">Transparent Impact</h3>
              <p className="text-gray-600">
                See real-time updates and detailed reports on how your donation is changing lives. We ensure full accountability.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-primary mb-3">Direct Communication</h3>
              <p className="text-gray-600">
                Connect with the communities and children you support. Build relationships that matter and witness the change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border rounded-lg">
              <p className="text-5xl font-extrabold text-primary">500+</p>
              <p className="mt-4 text-xl text-gray-600">Children Sponsored</p>
            </div>
            <div className="p-8 border rounded-lg">
              <p className="text-5xl font-extrabold text-primary">$1M+</p>
              <p className="mt-4 text-xl text-gray-600">Donations Raised</p>
            </div>
            <div className="p-8 border rounded-lg">
              <p className="text-5xl font-extrabold text-primary">98%</p>
              <p className="mt-4 text-xl text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 border-l-4 border-primary shadow rounded-lg">
              <p className="text-xl text-gray-600 italic">
              &quot;Helpicent has transformed my child&quot;s future. The transparency and care they provide are unparalleled.&quot;
              </p>
              <p className="mt-4 font-semibold text-gray-800">- Amina, Parent</p>
            </div>
            <div className="p-8 border-l-4 border-primary shadow rounded-lg">
              <p className="text-xl text-gray-600 italic">
              &quot;I feel a deep sense of pride knowing that my donation is making a significant difference. Helpicent is truly a beacon of hope.&quot;
              </p>
              <p className="mt-4 font-semibold text-gray-800">- David, Donor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Join the Global Movement</h2>
          <p className="mt-6 text-xl text-gray-200 max-w-2xl mx-auto">
            Your contribution has the power to change lives. Be a part of our mission to empower education and transform futures.
          </p>
          <Link
          href="/donate"
          className="mt-10 inline-block bg-white text-primary font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition"
             >
              Donate Now
          </Link>
        </div>
      </section>
    </div>
  );
}
