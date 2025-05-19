import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Branding & Mission */}
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/helpicent1.png" alt="Helpicent Logo" width={40} height={40} className="w-12 h-12" />
              <span className="text-2xl font-bold text-white">Helpicent</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Empowering children&apos;s education in Kenya through secure and transparent fundraising. Join us in making a lasting impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/donate" className="hover:text-white transition">Donate</Link></li>
              <li><Link href="/campaigns" className="hover:text-white transition">Campaigns</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-lg font-semibold text-white">Get Involved</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/volunteer" className="hover:text-white transition">Volunteer</Link></li>
              <li><Link href="/partnerships" className="hover:text-white transition">Partnerships</Link></li>
              <li><Link href="/sponsorships" className="hover:text-white transition">Sponsor a Child</Link></li>
              <li><Link href="/events" className="hover:text-white transition">Fundraising Events</Link></li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Email: <a href="mailto:support@helpicent.org" className="hover:text-white transition">support@helpicent.org</a></li>
              <li>Phone: <a href="tel:+1234567890" className="hover:text-white transition">+1 234 567 890</a></li>
              <li>Locations: Kenya & USA</li>
            </ul>

            {/* Social Media Links */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white">Follow Us</h3>
              <div className="mt-4 flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" aria-label="Facebook">
                  <FaFacebookF size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" aria-label="Twitter">
                  <FaTwitter size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" aria-label="Instagram">
                  <FaInstagram size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" aria-label="LinkedIn">
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm">
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition">Terms of Service</Link>
            <Link href="/faq" className="hover:text-white transition">FAQs</Link>
          </div>
          <p className="mt-4 text-xs">
            © {new Date().getFullYear()} Helpicent. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
