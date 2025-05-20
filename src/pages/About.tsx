
import { Link } from "react-router-dom";
import ActionButton from "@/components/ActionButton";

/**
 * About Page Component - Displays the teacher's personal introduction and background
 */
const About = () => {
  // Education background
  const education = [
    {
      degree: "Bachelor of Music (Violin Performance)",
      institution: "Royal Academy of Music",
      year: "2010-2014"
    },
    {
      degree: "Master of Music (Violin Pedagogy)",
      institution: "University of Toronto Faculty of Music",
      year: "2014-2016"
    },
    {
      degree: "Suzuki Teaching Method Certification",
      institution: "Suzuki Association",
      year: "2016"
    }
  ];

  // Professional experience
  const experience = [
    {
      title: "Principal Violinist",
      organization: "Toronto Chamber Orchestra",
      period: "2016-2020"
    },
    {
      title: "Guest Musician",
      organization: "Canadian National Orchestra",
      period: "2018-Present"
    },
    {
      title: "Violin Instructor",
      organization: "Yorkville School of Music",
      period: "2016-2021"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Personal Introduction */}
      <section className="py-12 md:py-20 bg-[#F7F3E3]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:space-x-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="aspect-[4/5] bg-[#5D2E46]/10 rounded-lg relative overflow-hidden">
                {/* Can be replaced with the teacher's actual photo */}
                <div className="absolute inset-0 flex items-center justify-center text-[#5D2E46]">
                  {/* Photo placeholder */}
                  <p className="text-center px-4">Lisa's photo will be displayed here</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#5D2E46]">
                About Lisa
              </h1>
              <p className="mt-4 text-gray-700">
                Hello! I'm Lisa, a passionate violin teacher and performing artist with over 10 years of professional playing and teaching experience. I'm dedicated to enriching students' lives through music.
              </p>
              <p className="mt-4 text-gray-700">
                I earned my Bachelor of Music in Violin Performance from the Royal Academy of Music and completed my Master's in Music Education at the University of Toronto Faculty of Music. My teaching philosophy combines technical precision with musical expressiveness, helping each student find their unique musical voice.
              </p>
              <p className="mt-4 text-gray-700">
                As a performer, I've served as the principal violinist with the Toronto Chamber Orchestra and frequently collaborate with the Canadian National Orchestra. These professional experiences allow me to bring practical performance knowledge to my teaching and help students thrive in various musical settings.
              </p>
              <p className="mt-4 text-gray-700">
                I believe music education is about more than technique; it's about fostering confidence, creativity, and a lifelong passion for learning. Whether you're a beginner or an experienced player, I look forward to helping you achieve your musical goals!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education and Experience */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education background */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-[#5D2E46] mb-6">
                Education
              </h2>
              <div className="space-y-6">
                {education.map((item, index) => (
                  <div key={index} className="border-l-2 border-[#D4AF37] pl-4">
                    <h3 className="font-bold">{item.degree}</h3>
                    <p className="text-gray-700">{item.institution}</p>
                    <p className="text-sm text-gray-500">{item.year}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Professional experience */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-[#5D2E46] mb-6">
                Professional Experience
              </h2>
              <div className="space-y-6">
                {experience.map((item, index) => (
                  <div key={index} className="border-l-2 border-[#5D2E46] pl-4">
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-gray-700">{item.organization}</p>
                    <p className="text-sm text-gray-500">{item.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-12 md:py-16 bg-[#5D2E46]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#5D2E46] text-center mb-8">
            My Teaching Philosophy
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-[#5D2E46]">Personalized Learning</h3>
              <p className="text-gray-700">
                I believe each student is unique, with different learning styles, goals, and musical interests. My teaching approach adapts to each student's needs, ensuring they receive the learning experience that works best for them.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-[#5D2E46]">Balance of Technique and Expression</h3>
              <p className="text-gray-700">
                Mastering technical fundamentals is important, but equally important is developing musical expressivity and understanding of the works. My teaching focuses on both aspects, helping students become well-rounded musicians.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-[#5D2E46]">Fostering Lifelong Passion</h3>
              <p className="text-gray-700">
                My goal is not just to teach violin techniques but to cultivate a lasting love for music. By creating an enjoyable and inspiring learning environment, I help students build a lifelong connection with music.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#5D2E46]">
            Ready to Begin Your Musical Learning Journey?
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Whether you're looking for your first violin teacher or hoping to advance your existing skills, I look forward to meeting you and helping you achieve your musical goals.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <ActionButton variant="primary" size="lg">
                Contact Me
              </ActionButton>
            </Link>
            <Link to="/lessons">
              <ActionButton variant="outline" size="lg">
                Learn About Lessons
              </ActionButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
