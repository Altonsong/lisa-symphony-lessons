
import { Link } from "react-router-dom";
import ActionButton from "@/components/ActionButton";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

/**
 * 404页面组件 - 当用户访问不存在的路径时显示
 */
const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404错误：用户尝试访问不存在的路径：",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F3E3]/30 px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-[#5D2E46]">404</h1>
        <p className="text-2xl text-gray-700 mt-4 mb-8">抱歉，您访问的页面不存在</p>
        <Link to="/">
          <ActionButton variant="primary" size="lg">
            返回首页
          </ActionButton>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
