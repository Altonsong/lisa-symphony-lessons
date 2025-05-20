
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ActionButton from "@/components/ActionButton";

/**
 * Client Portal Page Component - Displays login/registration forms (static version)
 * Will implement actual user authentication and appointment booking functionality in the future
 */
const Portal = () => {
  const { toast } = useToast();
  
  // Form mode: login or register
  const [mode, setMode] = useState<"login" | "register">("login");
  
  // Form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phone: "",
  });
  
  // Loading state
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Toggle form mode (login/register)
  const toggleMode = () => {
    setMode(mode === "login" ? "register" : "login");
    // Reset form data
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      phone: "",
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      
      if (mode === "login") {
        toast({
          title: "Login Note",
          description: "This is a static demonstration. Actual login functionality will be implemented in future development.",
        });
      } else {
        toast({
          title: "Registration Note",
          description: "This is a static demonstration. Actual registration functionality will be implemented in future development.",
        });
      }
    }, 1500);
  };

  return (
    <div className="flex flex-col py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#5D2E46]">
              {mode === "login" ? "Client Login" : "Create Account"}
            </h1>
            <p className="mt-4 text-gray-600">
              {mode === "login" 
                ? "Log in to your account to book lessons and manage your learning progress." 
                : "Create an account to begin your musical learning journey."}
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <form onSubmit={handleSubmit}>
              {/* Registration form specific fields */}
              {mode === "register" && (
                <>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D2E46]"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D2E46]"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D2E46]"
                    />
                  </div>
                </>
              )}
              
              {/* Common form fields */}
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
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password *
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D2E46]"
                />
              </div>
              
              {/* Registration form confirm password field */}
              {mode === "register" && (
                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D2E46]"
                  />
                </div>
              )}
              
              {/* Login form forgot password link */}
              {mode === "login" && (
                <div className="flex justify-end mb-4">
                  <button 
                    type="button" 
                    className="text-sm text-[#5D2E46] hover:underline"
                    onClick={() => toast({
                      title: "Reset Password Feature",
                      description: "This feature will be implemented in future development.",
                    })}
                  >
                    Forgot Password?
                  </button>
                </div>
              )}
              
              <div className="mt-6">
                <ActionButton 
                  type="submit" 
                  variant="primary" 
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting 
                    ? "Processing..." 
                    : mode === "login" 
                      ? "Log In" 
                      : "Create Account"}
                </ActionButton>
              </div>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                {mode === "login" 
                  ? "Don't have an account?" 
                  : "Already have an account?"}
                <button 
                  type="button"
                  onClick={toggleMode}
                  className="ml-1 text-[#5D2E46] hover:underline"
                >
                  {mode === "login" ? "Register" : "Log In"}
                </button>
              </p>
            </div>
          </div>
          
          <div className="mt-8 bg-[#F7F3E3]/50 p-6 rounded-lg border border-[#F7F3E3]">
            <h2 className="text-xl font-bold mb-4 text-[#5D2E46]">Client Portal Features</h2>
            <p className="text-gray-700 mb-4">
              This is a static demonstration. In the full version, the client portal will include these features:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Student account registration and management</li>
              <li>Lesson booking and schedule management</li>
              <li>Google Calendar integration</li>
              <li>Invoice viewing and payment</li>
              <li>Access to online learning resources</li>
              <li>Progress tracking</li>
              <li>Direct communication with the teacher</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portal;
