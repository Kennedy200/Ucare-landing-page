import Image from "next/image"

export default function AboutUs() {
  return (
    <section id="about" className="py-16 bg-sky-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Us</h2>

            <p className="text-gray-700">
              Welcome to Ucare, your sanctuary for mindfulness, relaxation, and better sleep. We are dedicated to
              helping you find balance in your busy life through guided meditation, sleep assistance, and mindfulness
              practices tailored to your unique needs.
            </p>

            <p className="text-gray-700">
              Explore our thoughtfully crafted collection of meditation sessions, sleep stories, and breathing exercises
              designed by wellness experts. From stress reduction techniques to deep sleep guidance, our content
              empowers you to nurture your mental wellbeing daily.
            </p>

            <p className="text-gray-700">
              Discover practical mindfulness techniques to enhance your mental clarity, improve sleep quality, and
              reduce anxiety. We believe that small moments of mindfulness can lead to significant improvements in your
              quality of life, and we're here to guide you on your journey to inner peace and better rest.
            </p>
          </div>

          <div className="md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              {/* Gradient overlay for blending effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-200/70 to-transparent z-10 mix-blend-overlay"></div>

              <Image
                src="/images/meditation.jpeg"
                alt="Person meditating in a peaceful setting"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

