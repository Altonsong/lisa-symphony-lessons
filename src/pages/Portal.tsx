
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ActionButton from "@/components/ActionButton";

/**
 * 客户门户页面组件 - 显示登录/注册表单（静态版本）
 * 未来将实现实际的用户认证和课程预约功能
 */
const Portal = () => {
  const { toast } = useToast();
  
  // 表单模式：登录或注册
  const [mode, setMode] = useState<"login" | "register">("login");
  
  // 表单数据
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phone: "",
  });
  
  // 加载状态
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 处理表单输入变化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 切换表单模式（登录/注册）
  const toggleMode = () => {
    setMode(mode === "login" ? "register" : "login");
    // 重置表单数据
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      phone: "",
    });
  };

  // 处理表单提交
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 模拟表单提交
    setTimeout(() => {
      setIsSubmitting(false);
      
      if (mode === "login") {
        toast({
          title: "登录提示",
          description: "这是一个静态演示。实际的登录功能将在后续开发中实现。",
        });
      } else {
        toast({
          title: "注册提示",
          description: "这是一个静态演示。实际的注册功能将在后续开发中实现。",
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
              {mode === "login" ? "客户登录" : "创建账户"}
            </h1>
            <p className="mt-4 text-gray-600">
              {mode === "login" 
                ? "登录您的账户以预约课程和管理您的学习进度。" 
                : "创建一个账户以开始您的音乐学习之旅。"}
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <form onSubmit={handleSubmit}>
              {/* 注册表单特有字段 */}
              {mode === "register" && (
                <>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        名字 *
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
                        姓氏 *
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
                      电话号码 *
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
              
              {/* 通用表单字段 */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  电子邮箱 *
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
                  密码 *
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
              
              {/* 注册表单确认密码字段 */}
              {mode === "register" && (
                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    确认密码 *
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
              
              {/* 登录表单忘记密码链接 */}
              {mode === "login" && (
                <div className="flex justify-end mb-4">
                  <button 
                    type="button" 
                    className="text-sm text-[#5D2E46] hover:underline"
                    onClick={() => toast({
                      title: "重置密码功能",
                      description: "此功能将在后续开发中实现。",
                    })}
                  >
                    忘记密码？
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
                    ? "处理中..." 
                    : mode === "login" 
                      ? "登录" 
                      : "创建账户"}
                </ActionButton>
              </div>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                {mode === "login" 
                  ? "没有账户？" 
                  : "已有账户？"}
                <button 
                  type="button"
                  onClick={toggleMode}
                  className="ml-1 text-[#5D2E46] hover:underline"
                >
                  {mode === "login" ? "注册" : "登录"}
                </button>
              </p>
            </div>
          </div>
          
          <div className="mt-8 bg-[#F7F3E3]/50 p-6 rounded-lg border border-[#F7F3E3]">
            <h2 className="text-xl font-bold mb-4 text-[#5D2E46]">客户门户功能</h2>
            <p className="text-gray-700 mb-4">
              这是一个静态演示。在完整版本中，客户门户将包含以下功能：
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>学生账户注册和管理</li>
              <li>课程预约和日程管理</li>
              <li>与Google日历集成</li>
              <li>查看和支付账单</li>
              <li>在线学习资源获取</li>
              <li>学习进度追踪</li>
              <li>与老师直接沟通</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portal;
