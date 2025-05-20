
import { Link } from "react-router-dom";
import ActionButton from "@/components/ActionButton";
import { Check } from "lucide-react";

/**
 * Home Component - Main page of the website
 * Includes hero section, featured content, course overview, and student testimonials
 */
const Home = () => {
  // Lesson features list
  const lessonFeatures = [
    "Personalized teaching plans for different learning styles",
    "Professional technique training, from beginners to advanced levels",
    "Regular student concerts to showcase progress",
    "Comprehensive music theory and performance techniques",
    "Flexible lesson scheduling to meet diverse needs",
  ];

  // Student testimonial data
  const testimonials = [
    {
      name: "Sarah Chen",
      review: "Lisa not only taught me how to play, but she also helped me find a love for music. Her teaching method is highly effective, and I've seen significant progress in a short time.",
      role: "Adult student, learning for 2 years"
    },
    {
      name: "Michael Wang",
      review: "My 7-year-old daughter has been learning with Lisa for over a year. Lisa is patient, friendly, and really understands how to engage children. My daughter now looks forward to her weekly violin lessons.",
      role: "Parent"
    },
    {
      name: "Emily Zhang",
      review: "As a high school student, I prepared for my music academy audition under Lisa's guidance. Her expertise and encouragement gave me great confidence, and I was ultimately accepted to my dream school!",
      role: "High school student, learning for 3 years"
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#5D2E46]/90 to-[#5D2E46] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center md:text-left md:max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif">
              Explore the Wonderful World of Violin
            </h1>
            <p className="mt-4 text-lg md:text-xl opacity-90">
              Unlock your musical potential with Lisa's professional guidance and embark on a journey filled with artistry and passion in violin learning.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/contact">
                <ActionButton variant="secondary" size="lg">
                  Schedule a Trial Lesson
                </ActionButton>
              </Link>
              <Link to="/lessons">
                <ActionButton variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white/20">
                  Explore Lessons
                </ActionButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Teaching */}
      <section className="py-12 md:py-20 bg-[#F7F3E3]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#5D2E46]">
              Why Choose Lisa's Violin Lessons
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Whether you're a beginner or an experienced player looking to enhance your skills, Lisa provides tailored professional guidance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-[#5D2E46]">Lesson Features</h3>
              <ul className="space-y-3">
                {lessonFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-[#5D2E46]">Who Can Learn</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-[#5D2E46]">Children (5-12 years)</h4>
                  <p className="text-gray-600">Fun methods to develop basic skills and music appreciation.</p>
                </div>
                <div>
                  <h4 className="font-medium text-[#5D2E46]">Teens (13-18 years)</h4>
                  <p className="text-gray-600">Enhanced techniques, deeper musical understanding, preparation for professional development or performance.</p>
                </div>
                <div>
                  <h4 className="font-medium text-[#5D2E46]">Adults (all levels)</h4>
                  <p className="text-gray-600">Flexible, professional guidance for beginners or those returning to the instrument.</p>
                </div>
                <div>
                  <h4 className="font-medium text-[#5D2E46]">Advanced Students</h4>
                  <p className="text-gray-600">In-depth guidance for music academy preparation, competitions, or professional development.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Student Testimonials */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#5D2E46]">
              Student Voices
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Hear what our students and parents say about Lisa's violin teaching.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-[#5D2E46] flex items-center justify-center text-white font-medium">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.review}"</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/contact">
              <ActionButton variant="primary">
                Contact Us to Schedule a Trial Lesson
              </ActionButton>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-[#5D2E46] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold">
            Ready to Start Your Musical Journey?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto">
            Whether you're a beginner or an experienced player, Lisa will help you achieve your musical goals.
          </p>
          <div className="mt-8">
            <Link to="/portal">
              <ActionButton variant="secondary" size="lg">
                Join Now
              </ActionButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
