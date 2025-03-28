"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function WellnessExperts() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const experts = [
    {
      name: "Emma Wilson",
      role: "Meditation Specialist",
      description:
        "Emma specializes in guided meditation techniques that help reduce stress and anxiety, with over 8 years of experience helping people find inner peace.",
      imagePath: "/images/meditation-specialist.jpeg",
    },
    {
      name: "James Chen",
      role: "Sleep Science Coach",
      description:
        "James is an expert in sleep science, helping thousands improve their sleep quality through mindfulness practices and sleep hygiene techniques.",
      imagePath: "/images/sleep-coach.jpeg",
    },
    {
      name: "Sarah Miller",
      role: "Mindfulness Instructor",
      description:
        "Sarah has dedicated her career to teaching mindfulness practices that help people manage stress and find balance in their daily lives.",
      imagePath: "/images/mindfulness-instructor.jpeg",
    },
    {
      name: "David Thompson",
      role: "Breathing Technique Expert",
      description:
        "David specializes in breathing exercises that promote relaxation, reduce anxiety, and help achieve a state of calm and focus.",
      imagePath: "/images/breathing-expert.jpeg",
    },
  ]

  const visibleExperts = () => {
    // For mobile: show 1, tablet: show 2, desktop: show 3
    const isMobile = typeof window !== "undefined" && window.innerWidth < 640
    const isTablet = typeof window !== "undefined" && window.innerWidth >= 640 && window.innerWidth < 1024

    if (isMobile) return experts.slice(currentIndex, currentIndex + 1)
    if (isTablet) return experts.slice(currentIndex, currentIndex + 2)
    return experts.slice(currentIndex, currentIndex + 3)
  }

  const nextSlide = () => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 640
    const isTablet = typeof window !== "undefined" && window.innerWidth >= 640 && window.innerWidth < 1024

    let maxIndex = experts.length - 3 // Desktop default
    if (isMobile) maxIndex = experts.length - 1
    if (isTablet) maxIndex = experts.length - 2

    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 640
    const isTablet = typeof window !== "undefined" && window.innerWidth >= 640 && window.innerWidth < 1024

    let maxIndex = experts.length - 3 // Desktop default
    if (isMobile) maxIndex = experts.length - 1
    if (isTablet) maxIndex = experts.length - 2

    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1))
  }

  return (
    <section id="experts" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Wellness Experts</h2>
            <p className="text-gray-700 max-w-2xl">
              We take pride in our exceptional team of wellness specialists, each bringing unique expertise in
              meditation, sleep science, and mindfulness practices to help you achieve balance and peace.
            </p>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-sky-100 hover:bg-sky-200 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 text-sky-600" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-sky-100 hover:bg-sky-200 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 text-sky-600" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleExperts().map((expert, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div className="h-64 relative">
                <Image src={expert.imagePath || "/placeholder.svg"} alt={expert.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{expert.name}</h3>
                <p className="text-sky-600 font-medium mb-3">{expert.role}</p>
                <p className="text-gray-600">{expert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

