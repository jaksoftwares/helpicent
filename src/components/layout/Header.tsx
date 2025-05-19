"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/donate", label: "Donate" },
    { href: "/campaigns", label: "Campaigns" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md py-4 z-50">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo & Site Name */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/helpicent1.png"
            alt="Helpicent Logo"
            width={50}
            height={50}
            className="w-12 h-12 transition-transform duration-300 hover:scale-110"
          />
          <span className="text-3xl font-bold text-blue-600 tracking-wide">
            Helpicent
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-lg font-medium transition duration-300 ${
                pathname === item.href
                  ? "text-blue-600 after:w-full"
                  : "text-gray-700 hover:text-blue-600"
              } after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full`}
            >
              {item.label}
            </Link>
          ))}
          {/* Login Button */}
          <Link
            href="/auth/login"
            className="ml-4 bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Login
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
          className="md:hidden focus:outline-none"
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="h-8 w-8 text-gray-700" />
          ) : (
            <Bars3Icon className="h-8 w-8 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-lg font-medium transition duration-300 ${
                    pathname === item.href ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {/* Login Button */}
              <Link
                href="/auth/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition duration-300 transform hover:scale-105"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
