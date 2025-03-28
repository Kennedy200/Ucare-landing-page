"use client"

import Link from "next/link"
import { Moon, Brain, Sparkles } from "lucide-react"
import { useState } from "react"

export default function Services() {
  const [activeTooltip, setActiveTooltip] = useState(null)

  const showTooltip = (id) => {
    setActiveTooltip(id)
  }

  const hideTooltip = () => {
    setActiveTooltip(null)
  }

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Wellness Services</h2>
            <p className="text-gray-600 max-w-2xl">
              The #1 app for sleep, meditation and relaxation. We help you sleep well, stress less and live mindfully
              through our tailored experiences.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link
              href="/contact"
              className="inline-block bg-sky-400 md:bg-white text-gray-900 md:text-sky-600 hover:bg-sky-500 md:hover:bg-sky-400 hover:text-gray-900 px-6 py-3 rounded-full transition-all duration-300 font-semibold shadow-md hover:shadow-lg border-2 border-sky-500"
            >
              Start Your Journey
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 - Sleep */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <div className="bg-sky-100 hover:bg-green-100 p-4 rounded-full mb-6 transition-colors duration-300 group">
              <Moon className="h-8 w-8 text-sky-500 group-hover:text-green-500 transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Better Sleep</h3>
            <p className="text-gray-600 mb-6">
              Fall asleep faster and wake up refreshed with our scientifically-backed sleep stories, sounds, and
              meditations designed for deeper rest.
            </p>
            <div className="relative mt-auto">
              <Link
                href="#"
                className="text-sky-600 font-medium hover:text-sky-700 transition-colors"
                onMouseEnter={() => showTooltip("sleep")}
                onMouseLeave={hideTooltip}
                onClick={(e) => e.preventDefault()}
              >
                Learn More
              </Link>
              {activeTooltip === "sleep" && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-40 bg-sky-500 text-white text-sm rounded-lg py-2 px-3 shadow-lg z-10">
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 bg-sky-500"></div>
                  Coming Soon!!!
                </div>
              )}
            </div>
          </div>

          {/* Service Card 2 - Meditation */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <div className="bg-sky-100 hover:bg-green-100 p-4 rounded-full mb-6 transition-colors duration-300 group">
              <Brain className="h-8 w-8 text-sky-500 group-hover:text-green-500 transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Guided Meditation</h3>
            <p className="text-gray-600 mb-6">
              Reduce stress and anxiety with our guided meditations led by expert instructors, helping you find calm and
              clarity in your daily life.
            </p>
            <div className="relative mt-auto">
              <Link
                href="#"
                className="text-sky-600 font-medium hover:text-sky-700 transition-colors"
                onMouseEnter={() => showTooltip("meditation")}
                onMouseLeave={hideTooltip}
                onClick={(e) => e.preventDefault()}
              >
                Learn More
              </Link>
              {activeTooltip === "meditation" && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-40 bg-sky-500 text-white text-sm rounded-lg py-2 px-3 shadow-lg z-10">
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 bg-sky-500"></div>
                  Coming Soon!!!
                </div>
              )}
            </div>
          </div>

          {/* Service Card 3 - Mindfulness */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <div className="bg-sky-100 hover:bg-green-100 p-4 rounded-full mb-6 transition-colors duration-300 group">
              <Sparkles className="h-8 w-8 text-sky-500 group-hover:text-green-500 transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Mindful Living</h3>
            <p className="text-gray-600 mb-6">
              Develop mindfulness habits that transform your daily routine with our breathing exercises, focus
              techniques, and relaxation practices.
            </p>
            <div className="relative mt-auto">
              <Link
                href="#"
                className="text-sky-600 font-medium hover:text-sky-700 transition-colors"
                onMouseEnter={() => showTooltip("mindfulness")}
                onMouseLeave={hideTooltip}
                onClick={(e) => e.preventDefault()}
              >
                Learn More
              </Link>
              {activeTooltip === "mindfulness" && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-40 bg-sky-500 text-white text-sm rounded-lg py-2 px-3 shadow-lg z-10">
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 bg-sky-500"></div>
                  Coming Soon!!!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}