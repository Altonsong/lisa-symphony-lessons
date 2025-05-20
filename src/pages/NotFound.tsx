
import { Link } from "react-router-dom";
import ActionButton from "@/components/ActionButton";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

/**
 * 404 Page Component - Displayed when users access non-existent paths
 */
const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent path:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F3E3]/30 px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-[#5D2E46]">404</h1>
        <p className="text-2xl text-gray-700 mt-4 mb-8">Sorry, the page you're looking for doesn't exist</p>
        <Link to="/">
          <ActionButton variant="primary" size="lg">
            Return to Home
          </ActionButton>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
