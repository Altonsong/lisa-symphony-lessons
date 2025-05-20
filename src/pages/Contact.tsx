
import { FormEvent, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ActionButton from "@/components/ActionButton";

/**
 * 联系页面组件 - 显示联系方式和服务区域，提供表单供用户咨询
 */
const Contact = () => {
  const { toast } = useToast();
  
  // 表单状态
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "一般咨询",
    message: "",
  });
  
  // 表单加载状态
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 服务区域列表
  const serviceAreas = [
    "Markham", 
    "Richmond Hill", 
    "Unionville", 
    "Stouffville", 
    "Aurora", 
    "Newmarket", 
    "North York"
  ];

  // 咨询选项
  const inquiryOptions = [
    "一般咨询",
    "预约试听课",
    "课程注册",
    "价格咨询",
    "其他"
  ];

  // 处理表单输入变化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 处理表单提交
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 模拟表单提交
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "表单已提交",
        description: "我们已收到您的消息，Lisa会尽快与您联系！",
      });
      
      // 重置表单
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "一般咨询",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col">
      {/* 联系信息 */}
      <section className="py-12 md:py-20 bg-[#F7F3E3]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#5D2E46]">
              联系我们
            </h1>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              无论您想了解更多关于课程的信息，预约试听课，还是有其他问题，请随时联系Lisa。
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* 联系表单 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold mb-4 text-[#5D2E46]">发送消息</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    您的姓名 *
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
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    电话号码
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
                    咨询主题 *
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
                    您的消息 *
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
                    {isSubmitting ? "提交中..." : "发送消息"}
                  </ActionButton>
                </div>
              </form>
            </div>
            
            {/* 联系信息和服务区域 */}
            <div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
                <h2 className="text-xl font-bold mb-4 text-[#5D2E46]">联系方式</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-[#5D2E46] mb-1">工作室地址</h3>
                    <p className="text-gray-700">
                      123 Melody Avenue<br />
                      Markham, ON L3R 5X7
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#5D2E46] mb-1">电子邮箱</h3>
                    <p className="text-gray-700">lisa@symphonylessons.com</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#5D2E46] mb-1">电话</h3>
                    <p className="text-gray-700">(905) 123-4567</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#5D2E46] mb-1">教学时间</h3>
                    <p className="text-gray-700">
                      周一至周五: 上午10点 - 晚上8点<br />
                      周六: 上午9点 - 下午5点<br />
                      周日: 休息
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold mb-4 text-[#5D2E46]">服务区域</h2>
                <p className="text-gray-700 mb-4">
                  Lisa为大多伦多地区提供小提琴教学服务，包括以下地区：
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="bg-[#F7F3E3]/50 p-2 rounded-md text-center">
                      {area}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-gray-700">
                  如果您所在区域不在列表中，请联系Lisa讨论可能的安排。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 地图位置（占位符） */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-[#5D2E46] text-center mb-8">
            工作室位置
          </h2>
          <div className="aspect-[16/9] bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-center px-4">
              在此处嵌入Google地图
              <br />
              <span className="text-sm text-gray-500">（静态版本：地图将在后续阶段添加）</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
