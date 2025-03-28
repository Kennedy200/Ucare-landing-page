import Image from "next/image";
import { Clock, Award, Heart, Users } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              {/* Geometric accent */}
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-sky-200/70 z-0 rounded-tr-[100px]"></div>

              <Image
                src="/images/instructor.jpeg"
                alt="Meditation instructor in a peaceful setting"
                width={600}
                height={600}
                className="w-full object-cover rounded-2xl relative z-10"
                style={{ maxHeight: "500px", height: "auto" }}  // This reduces and controls the height
              />
            </div>
          </div>

          <div className="md:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
              <p className="text-gray-700">
                With a steadfast commitment to your mental wellbeing, our team of experienced meditation instructors and
                sleep specialists ensures that you receive nothing short of transformative mindfulness experiences.
              </p>
            </div>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="bg-sky-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-sky-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">24/7 Guided Support</h3>
                  <p className="text-gray-600">
                    Our meditation and sleep content is available anytime, anywhere, helping you find peace whenever you
                    need it most.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="bg-sky-100 p-3 rounded-full">
                  <Award className="h-6 w-6 text-sky-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Expert-Led Sessions</h3>
                  <p className="text-gray-600">
                    All our meditation and mindfulness sessions are crafted by certified experts with years of
                    experience in mental wellness.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="bg-sky-100 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-sky-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Personalized Experience</h3>
                  <p className="text-gray-600">
                    Our app adapts to your needs, offering customized meditation and sleep programs based on your goals
                    and progress.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-4">
                <div className="bg-sky-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-sky-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Supportive Community</h3>
                  <p className="text-gray-600">
                    Join thousands of like-minded individuals on their wellness journey, sharing experiences and
                    supporting each other.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
