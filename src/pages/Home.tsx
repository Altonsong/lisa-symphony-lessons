
import { Link } from "react-router-dom";
import ActionButton from "@/components/ActionButton";
import { Check } from "lucide-react";

/**
 * 首页组件 - 网站的主页面
 * 包含英雄区块、特色内容、课程概览和学生评价
 */
const Home = () => {
  // 课程特点列表
  const lessonFeatures = [
    "个性化教学计划，适应不同学习风格",
    "专业技巧培训，从初学者到高级水平",
    "定期学生音乐会，展示学习成果",
    "丰富的音乐理论与表演技巧",
    "灵活的课程安排，满足多样化需求",
  ];

  // 学生评价数据
  const testimonials = [
    {
      name: "Sarah Chen",
      review: "Lisa老师不仅教会了我演奏技巧，还帮助我找到了对音乐的热爱。她的教学方法非常有效，我在短时间内就看到了明显的进步。",
      role: "成人学生，学习2年"
    },
    {
      name: "Michael Wang",
      review: "我7岁的女儿在Lisa老师那里学习已经一年多了。Lisa有耐心、友善，非常了解如何激发孩子的学习兴趣。我女儿现在非常期待每周的小提琴课。",
      role: "家长"
    },
    {
      name: "Emily Zhang",
      review: "作为一名高中生，我在Lisa老师的指导下准备了音乐学院的面试。她的专业知识和鼓励给了我很大的信心，最终我成功被理想的学校录取了！",
      role: "高中学生，学习3年"
    },
  ];

  return (
    <div className="flex flex-col">
      {/* 英雄区块 */}
      <section className="bg-gradient-to-r from-[#5D2E46]/90 to-[#5D2E46] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center md:text-left md:max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif">
              探索小提琴的美妙世界
            </h1>
            <p className="mt-4 text-lg md:text-xl opacity-90">
              通过Lisa的专业引导，释放您的音乐潜能，开启一段充满艺术和热情的小提琴学习之旅。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/contact">
                <ActionButton variant="secondary" size="lg">
                  预约试听课
                </ActionButton>
              </Link>
              <Link to="/lessons">
                <ActionButton variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white/20">
                  了解课程
                </ActionButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 关于教学 */}
      <section className="py-12 md:py-20 bg-[#F7F3E3]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#5D2E46]">
              为什么选择Lisa的小提琴课程
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              无论您是初学者还是寻求提升技巧的有经验演奏者，Lisa都会提供量身定制的专业指导。
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-[#5D2E46]">课程特点</h3>
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
              <h3 className="text-xl font-bold mb-4 text-[#5D2E46]">教学对象</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-[#5D2E46]">儿童学生 (5-12岁)</h4>
                  <p className="text-gray-600">通过趣味方式培养基础技能和音乐欣赏能力。</p>
                </div>
                <div>
                  <h4 className="font-medium text-[#5D2E46]">青少年学生 (13-18岁)</h4>
                  <p className="text-gray-600">提升技巧、深入理解音乐，为专业发展或表演做准备。</p>
                </div>
                <div>
                  <h4 className="font-medium text-[#5D2E46]">成人学生 (所有水平)</h4>
                  <p className="text-gray-600">为初学者或重拾乐器的成人提供灵活、专业的指导。</p>
                </div>
                <div>
                  <h4 className="font-medium text-[#5D2E46]">高级学生</h4>
                  <p className="text-gray-600">为音乐学院准备、比赛或专业发展提供深度指导。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 学生评价 */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#5D2E46]">
              学生的声音
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              听听我们的学生和家长对Lisa小提琴教学的评价。
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
                联系我们安排试听课
              </ActionButton>
            </Link>
          </div>
        </div>
      </section>
      
      {/* 行动召唤 */}
      <section className="bg-[#5D2E46] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold">
            准备好开始您的音乐之旅了吗？
          </h2>
          <p className="mt-4 max-w-2xl mx-auto">
            无论您是初学者还是有经验的演奏者，Lisa都会帮助您实现音乐目标。
          </p>
          <div className="mt-8">
            <Link to="/portal">
              <ActionButton variant="secondary" size="lg">
                现在加入
              </ActionButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
