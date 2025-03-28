"use client"

import Link from "next/link"
import { useState } from "react"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const [showAlert, setShowAlert] = useState(false)

  const handleSocialClick = (e) => {
    e.preventDefault()
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 3000)
  }

  return (
    <footer className="bg-sky-100 pt-16 pb-8 relative">
      {/* Coming Soon Alert */}
      {showAlert && (
        <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 bg-sky-500 text-white px-6 py-4 rounded-lg shadow-lg z-50 animate-in slide-in-from-top">
          <div className="flex items-center">
            <span className="text-lg font-semibold">WE ARE COMING SOON!</span>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div>
            <h2 className="text-2xl font-bold text-sky-600 mb-6">Ucare</h2>
            <p className="text-gray-700 mb-6">
              We are honored to be a part of your wellness journey and committed to delivering compassionate,
              personalized, and effective mindfulness and sleep solutions every step of the way.
            </p>
            <p className="text-gray-700">
              Trust us with your mental wellbeing, and let us work together to achieve the best possible outcomes for
              you and your loved ones.
            </p>
          </div>

          {/* Column 2: About Us */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">About Us</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-700 hover:text-sky-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-sky-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-sky-600 transition-colors">
                  Our Experts
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-sky-600 transition-colors">
                  Our Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-sky-600 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-700 hover:text-sky-600 transition-colors">
                  Meditation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-sky-600 transition-colors">
                  Sleep Improvement
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-sky-600 transition-colors">
                  Stress Management
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-sky-600 transition-colors">
                  Mindfulness Practices
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-sky-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-sky-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  1234 Wellness Way, Suite 500
                  <br />
                  San Francisco, CA 94107
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-sky-600 flex-shrink-0" />
                <a href="mailto:support@ucare.com" className="text-gray-700 hover:text-sky-600 transition-colors">
                  support@ucare.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-sky-600 flex-shrink-0" />
                <a href="tel:+14155550123" className="text-gray-700 hover:text-sky-600 transition-colors">
                  (415) 555-0123
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-sky-200 my-8"></div>

        {/* Bottom Row with Copyright and Social */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Ucare Inc. All rights reserved.
          </p>

          <div className="flex space-x-4">
            <a
              href="#"
              className="text-sky-600 hover:text-sky-800 transition-colors"
              onClick={handleSocialClick}
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5 hover:animate-wiggle" />
            </a>
            <a
              href="#"
              className="text-sky-600 hover:text-sky-800 transition-colors"
              onClick={handleSocialClick}
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5 hover:animate-wiggle" />
            </a>
            <a
              href="#"
              className="text-sky-600 hover:text-sky-800 transition-colors"
              onClick={handleSocialClick}
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 hover:animate-wiggle" />
            </a>
            <a
              href="#"
              className="text-sky-600 hover:text-sky-800 transition-colors"
              onClick={handleSocialClick}
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 hover:animate-wiggle" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

