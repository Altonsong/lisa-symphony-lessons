
import { Link } from "react-router-dom";
import ActionButton from "@/components/ActionButton";
import { Check } from "lucide-react";

/**
 * Lessons Page Component - Displays teaching methods and pricing
 */
const Lessons = () => {
  // Lesson types data
  const lessonTypes = [
    {
      type: "Private Lessons",
      description: "One-on-one focused guidance, completely tailored to the student's needs and progress",
      features: [
        "Personalized teaching plan",
        "Flexible scheduling",
        "Focused attention on individual technical challenges",
        "Suitable for all ages and levels",
      ],
      pricing: [
        { duration: "30 minutes", price: "$40" },
        { duration: "45 minutes", price: "$55" },
        { duration: "60 minutes", price: "$70" },
      ],
      recommended: true
    },
    {
      type: "Group Lessons",
      description: "2-4 students learning together, developing ensemble skills and social musical experience",
      features: [
        "Develop ensemble and listening skills",
        "Enhanced social and collaborative learning",
        "Improved performance confidence",
        "Suitable for beginner to intermediate students",
      ],
      pricing: [
        { duration: "60 minutes", price: "$35/person" },
        { duration: "90 minutes", price: "$50/person" },
      ],
      recommended: false
    },
    {
      type: "Online Lessons",
      description: "Remote instruction via video conference, ideal for students who cannot attend in person",
      features: [
        "Eliminates commute time",
        "Flexible scheduling",
        "Same professional guidance",
        "Great for busy students or distance learning",
      ],
      pricing: [
        { duration: "30 minutes", price: "$35" },
        { duration: "45 minutes", price: "$50" },
        { duration: "60 minutes", price: "$65" },
      ],
      recommended: false
    },
  ];

  // Special programs data
  const specialPrograms = [
    {
      name: "Exam Preparation Course",
      description: "Specialized preparation for Royal Conservatory exams, music competitions, or academy auditions",
      duration: "Customized based on needs",
      price: "Pricing varies based on specific requirements"
    },
    {
      name: "Summer Intensive Camp",
      description: "One-week intensive training during summer vacation, including daily lessons, workshops, and a mini-concert",
      duration: "One week (during summer)",
      price: "$350/week"
    },
    {
      name: "Beginner Package",
      description: "6-week introductory course for complete beginners, covering fundamentals and skill development",
      duration: "6 weeks (one 45-minute lesson per week)",
      price: "$300 (materials included)"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Lessons Introduction */}
      <section className="py-12 md:py-20 bg-[#F7F3E3]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#5D2E46]">
              Violin Lessons
            </h1>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Lisa offers various types of violin lessons to meet the needs of students of different ages, levels, and goals.
              All lessons include technical training, music theory, performance techniques, and music appreciation.
            </p>
          </div>
          
          {/* Lesson type cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {lessonTypes.map((lesson, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-sm border overflow-hidden ${
                  lesson.recommended ? "border-[#D4AF37]" : "border-gray-100"
                }`}
              >
                {lesson.recommended && (
                  <div className="bg-[#D4AF37] text-white text-center py-1 text-sm font-medium">
                    Recommended
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#5D2E46]">{lesson.type}</h3>
                  <p className="text-gray-600 mb-4">{lesson.description}</p>
                  
                  <h4 className="font-medium mb-2 text-[#5D2E46]">Includes:</h4>
                  <ul className="mb-6">
                    {lesson.features.map((feature, i) => (
                      <li key={i} className="flex items-start mb-2">
                        <Check className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h4 className="font-medium mb-2 text-[#5D2E46]">Pricing:</h4>
                  <ul className="mb-6">
                    {lesson.pricing.map((price, i) => (
                      <li key={i} className="flex justify-between mb-1">
                        <span className="text-gray-700">{price.duration}</span>
                        <span className="font-medium">{price.price}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact" className="block text-center">
                    <ActionButton 
                      variant={lesson.recommended ? "secondary" : "primary"} 
                      className="w-full"
                    >
                      Schedule a Trial Lesson
                    </ActionButton>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Special courses and programs */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-[#5D2E46] text-center mb-8">
              Special Courses & Programs
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {specialPrograms.map((program, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-2 text-[#5D2E46]">{program.name}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Duration:</span>
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Price:</span>
                    <span className="font-medium">{program.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-[#5D2E46] text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold mb-2 text-[#5D2E46]">Do I need my own instrument?</h3>
              <p className="text-gray-700">
                Yes, students need their own violin for practice. If you don't have one yet, Lisa can recommend rental or purchase options suitable for your level and budget.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold mb-2 text-[#5D2E46]">At what age can I start learning violin?</h3>
              <p className="text-gray-700">
                Lisa accepts students aged 5 and above. For younger children, she uses specialized child teaching methods that make the learning process both fun and effective.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold mb-2 text-[#5D2E46]">How do I pay for lessons?</h3>
              <p className="text-gray-700">
                Payments can be made monthly or by purchasing lesson packages. Electronic transfers, credit cards, and checks are accepted. Specific payment arrangements will be discussed when you register.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold mb-2 text-[#5D2E46]">How do I schedule a trial lesson?</h3>
              <p className="text-gray-700">
                You can schedule a 30-minute trial lesson by filling out the form on the contact page or contacting Lisa directly. Trial lessons cost $30, which will be applied to your first month's tuition if you decide to enroll in lessons.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold mb-2 text-[#5D2E46]">What performance opportunities are available for students?</h3>
              <p className="text-gray-700">
                Lisa organizes two student recitals per year (winter and summer) where all students have the opportunity to showcase their progress in a supportive environment. There are also smaller in-class performances and community performance opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-[#5D2E46]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#5D2E46]">
            Ready to Begin Your Musical Journey?
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Contact Lisa to schedule a trial lesson or learn more about the programs. Whatever your musical goals are, Lisa will help you achieve them.
          </p>
          <div className="mt-8">
            <Link to="/contact">
              <ActionButton variant="primary" size="lg">
                Contact Lisa
              </ActionButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lessons;
