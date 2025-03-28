"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Services from "../components/services"
import AboutUs from "../components/about-us"
import WhyChooseUs from "../components/why-choose-us"
import WellnessExperts from "../components/welness"
import Footer from "../components/footer"
import { Formik, Form, Field } from "formik"
import emailjs from "emailjs-com" // For sending emails
import CustomAlert from "../components/custom-alert"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [alertOpen, setAlertOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")

  // Fix hydration issues by only rendering after component is mounted
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false) // Close mobile menu on click
  }

  // Function to handle form submission using Email.js
  const sendForm = (values, actions) => {
    const templateParams = {
      email: values.email, // Capture email for template
      name: `${values.firstName} ${values.lastName}`, // Combine first and last name for greeting
    }

    emailjs.send("service_iterjn5", "template_47cggom", templateParams, "CVmt-MfsgibZV70wA").then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text)
        actions.setSubmitting(false)
        actions.resetForm()
        // Show custom alert instead of browser alert
        setAlertMessage("Your information has been successfully sent!")
        setAlertOpen(true)
      },
      (error) => {
        console.log("FAILED...", error)
        actions.setSubmitting(false)
        // Show error alert
        setAlertMessage("Something went wrong. Please try again later.")
        setAlertOpen(true)
      },
    )
  }

  // Return null during SSR to prevent hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <main className="relative min-h-screen bg-sky-100" id="home">
      {/* Custom Alert */}
      <CustomAlert isOpen={alertOpen} message={alertMessage} onClose={() => setAlertOpen(false)} />

      <div className="relative z-20">
        {/* Navigation - Fixed positioning for mobile */}
        <nav className="flex items-center justify-between px-4 sm:px-6 py-4 md:px-12 w-full sticky top-0 bg-sky-100/90 backdrop-blur-sm z-50">
          {/* Brand with Logo - Explicitly positioned left */}
          <Link href="/" className="flex items-center space-x-2 z-30">
            <Image src="/images/ucare-logo.png" alt="Ucare Logo" width={40} height={40} className="rounded-full" />
            <span className="text-sky-600 font-bold text-2xl">Ucare</span>
          </Link>

          {/* Desktop Navigation - Centered with flex-1 and justify-center */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-10">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-800 font-semibold py-2 px-4 relative group"
            >
              <span className="relative z-10">Home</span>
              <span className="absolute inset-0 bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-800 font-semibold py-2 px-4 relative group"
            >
              <span className="relative z-10">About Us</span>
              <span className="absolute inset-0 bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-800 font-semibold py-2 px-4 relative group"
            >
              <span className="relative z-10">Services</span>
              <span className="absolute inset-0 bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
            </button>
          </div>

          {/* Contact Us Button - More rounded with larger border-radius */}
          <button
            onClick={() => scrollToSection("footer")}
            className="hidden md:block bg-sky-400 hover:bg-sky-500 text-gray-900 px-6 py-2.5 rounded-full transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
          >
            Contact Us
          </button>

          {/* Mobile Menu Button - Explicitly positioned right */}
          <button
            className="md:hidden text-sky-600 p-2 focus:outline-none z-30"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <div className="bg-sky-400 rounded-full p-1">
                <X size={22} className="text-gray-900" />
              </div>
            ) : (
              <Menu size={24} />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white fixed top-0 left-0 right-0 bottom-0 z-20 animate-in slide-in-from-top duration-300 overflow-y-auto">
            <div className="flex flex-col p-6 pt-20 space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="bg-sky-400 text-gray-900 font-semibold py-3 px-4 rounded-full transition-all text-center text-lg border-2 border-sky-500 hover:bg-sky-500 w-full"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="bg-sky-400 text-gray-900 font-semibold py-3 px-4 rounded-full transition-all text-center text-lg border-2 border-sky-500 hover:bg-sky-500 w-full"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="bg-sky-400 text-gray-900 font-semibold py-3 px-4 rounded-full transition-all text-center text-lg border-2 border-sky-500 hover:bg-sky-500 w-full"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("footer")}
                className="bg-sky-400 text-gray-900 font-semibold py-3 px-4 rounded-full transition-all text-center text-lg border-2 border-sky-500 hover:bg-sky-500 w-full"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}

        {/* Hero Section - Improved mobile spacing */}
        <div className="flex flex-col md:flex-row px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-24 gap-8 mt-4">
          <div className="md:w-1/2 space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Promoting Wellness,
              <br />
              Comfort, and Care
            </h1>

            <p className="text-gray-700 font-medium text-base sm:text-lg max-w-lg">
              Welcome to Ucare – your partner in achieving peace of mind, balance, and optimal health. From mindfulness
              and stress relief to personalized wellness guidance, we are here to help you thrive. Take control of your
              well-being and experience the care that truly makes a difference.
            </p>

            <div>
              <button
                onClick={() => scrollToSection("services")}
                className="inline-block bg-sky-400 hover:bg-sky-500 text-gray-900 px-6 py-3 rounded-full transition-all duration-300 font-semibold shadow-md hover:shadow-lg border-2 border-sky-500"
              >
                Explore Our Services
              </button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg w-full max-w-md">
              <h2 className="text-sky-600 text-xl font-bold mb-4">Book Now</h2>

              <Formik
                initialValues={{ firstName: "", lastName: "", email: "", address: "", phone: "" }}
                onSubmit={sendForm}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-4">
                    <Field
                      name="firstName"
                      placeholder="First Name"
                      className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-400 transition-all"
                    />
                    <Field
                      name="lastName"
                      placeholder="Last Name"
                      className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-400 transition-all"
                    />
                    <Field
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-400 transition-all"
                    />
                    <Field
                      name="address"
                      placeholder="Address"
                      className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-400 transition-all"
                    />
                    <Field
                      name="phone"
                      placeholder="Phone No."
                      className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-400 transition-all"
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-sky-400 hover:bg-sky-500 text-gray-900 p-3 rounded-full transition-all duration-300 font-semibold shadow-md hover:shadow-lg border-2 border-sky-500"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        "Join the Wellness Journey"
                      )}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div id="services">
          <Services />
        </div>

        {/* About Us Section */}
        <div id="about">
          <AboutUs />
        </div>

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Wellness Experts Section */}
        <WellnessExperts />

        {/* Footer */}
        <div id="footer">
          <Footer />
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={() => scrollToSection("home")}
        className="fixed bottom-6 right-6 bg-sky-400 hover:bg-sky-500 text-gray-900 p-3 rounded-full shadow-lg z-40 transition-all duration-300 hover:scale-110"
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </main>
  )
}