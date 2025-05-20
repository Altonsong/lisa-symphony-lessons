
import { FormEvent, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ActionButton from "@/components/ActionButton";

/**
 * Contact Page Component - Displays contact information and service areas, provides a form for inquiries
 */
const Contact = () => {
  const { toast } = useToast();
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });
  
  // Form loading state
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Service area list
  const serviceAreas = [
    "Markham", 
    "Richmond Hill", 
    "Unionville", 
    "Stouffville", 
    "Aurora", 
    "Newmarket", 
    "North York"
  ];

  // Inquiry options
  const inquiryOptions = [
    "General Inquiry",
    "Schedule Trial Lesson",
    "Lesson Registration",
    "Pricing Inquiry",
    "Other"
  ];

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Form Submitted",
        description: "We've received your message. Lisa will contact you soon!",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col">
      {/* Contact Information */}
      <section className="py-12 md:py-20 bg-[#F7F3E3]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#5D2E46]">
              Contact Us
            </h1>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Whether you want to learn more about lessons, schedule a trial, or have other questions, feel free to contact Lisa.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold mb-4 text-[#5D2E46]">Send a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D2E46]"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D2E46]"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D2E46]"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Inquiry Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D2E46]"
                  >
                    {inquiryOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D2E46]"
                  ></textarea>
                </div>
                
                <div className="mt-6">
                  <ActionButton 
                    type="submit" 
                    variant="primary" 
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? "Submitting..." : "Send Message"}
                  </ActionButton>
                </div>
              </form>
            </div>
            
            {/* Contact Information and Service Areas */}
            <div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
                <h2 className="text-xl font-bold mb-4 text-[#5D2E46]">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-[#5D2E46] mb-1">Studio Address</h3>
                    <p className="text-gray-700">
                      123 Melody Avenue<br />
                      Markham, ON L3R 5X7
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#5D2E46] mb-1">Email</h3>
                    <p className="text-gray-700">lisa@symphonylessons.com</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#5D2E46] mb-1">Phone</h3>
                    <p className="text-gray-700">(905) 123-4567</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#5D2E46] mb-1">Teaching Hours</h3>
                    <p className="text-gray-700">
                      Monday to Friday: 10am - 8pm<br />
                      Saturday: 9am - 5pm<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold mb-4 text-[#5D2E46]">Service Areas</h2>
                <p className="text-gray-700 mb-4">
                  Lisa provides violin teaching services in the Greater Toronto Area, including these regions:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="bg-[#F7F3E3]/50 p-2 rounded-md text-center">
                      {area}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-gray-700">
                  If your area is not listed, please contact Lisa to discuss possible arrangements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Location (Placeholder) */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-[#5D2E46] text-center mb-8">
            Studio Location
          </h2>
          <div className="aspect-[16/9] bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-center px-4">
              Google Map Embed Here
              <br />
              <span className="text-sm text-gray-500">(Static version: Map will be added in a later phase)</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
