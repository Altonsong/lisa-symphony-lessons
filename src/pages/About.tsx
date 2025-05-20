
import { Link } from "react-router-dom";
import ActionButton from "@/components/ActionButton";

/**
 * 关于页面组件 - 展示老师个人简介和背景
 */
const About = () => {
  // 教育背景
  const education = [
    {
      degree: "音乐学士（小提琴表演）",
      institution: "皇家音乐学院",
      year: "2010-2014"
    },
    {
      degree: "音乐硕士（小提琴教学）",
      institution: "多伦多大学音乐学院",
      year: "2014-2016"
    },
    {
      degree: "Suzuki教学法认证",
      institution: "Suzuki协会",
      year: "2016"
    }
  ];

  // 专业经验
  const experience = [
    {
      title: "首席小提琴手",
      organization: "多伦多室内乐团",
      period: "2016-2020"
    },
    {
      title: "客座音乐家",
      organization: "加拿大国家管弦乐团",
      period: "2018-至今"
    },
    {
      title: "小提琴教师",
      organization: "约克维尔音乐学校",
      period: "2016-2021"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* 个人介绍 */}
      <section className="py-12 md:py-20 bg-[#F7F3E3]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:space-x-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="aspect-[4/5] bg-[#5D2E46]/10 rounded-lg relative overflow-hidden">
                {/* 这里可以替换成真实的老师照片 */}
                <div className="absolute inset-0 flex items-center justify-center text-[#5D2E46]">
                  {/* 照片占位符 */}
                  <p className="text-center px-4">Lisa的照片将在此处显示</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#5D2E46]">
                关于Lisa
              </h1>
              <p className="mt-4 text-gray-700">
                您好！我是Lisa，一位充满热情的小提琴教师和表演艺术家。我拥有超过10年的专业演奏和教学经验，致力于通过音乐丰富学生的生活。
              </p>
              <p className="mt-4 text-gray-700">
                我在皇家音乐学院获得了小提琴表演的音乐学士学位，并在多伦多大学音乐学院完成了音乐教育硕士课程。我的教学理念是将技术精准性与音乐表现力相结合，帮助每位学生找到自己独特的音乐声音。
              </p>
              <p className="mt-4 text-gray-700">
                作为一名表演者，我曾在多伦多室内乐团担任首席小提琴手，并经常与加拿大国家管弦乐团合作。这些专业经验使我能够将表演的实际知识带入教学中，并帮助学生在各种音乐环境中茁壮成长。
              </p>
              <p className="mt-4 text-gray-700">
                我相信音乐教育不仅仅是关于技巧，还关乎培养自信、创造力和终身学习的热情。无论您是初学者还是有经验的演奏者，我都期待着帮助您实现音乐目标！
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 教育和经验 */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* 教育背景 */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-[#5D2E46] mb-6">
                教育背景
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
            
            {/* 专业经验 */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-[#5D2E46] mb-6">
                专业经验
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

      {/* 教学理念 */}
      <section className="py-12 md:py-16 bg-[#5D2E46]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#5D2E46] text-center mb-8">
            我的教学理念
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-[#5D2E46]">个性化学习</h3>
              <p className="text-gray-700">
                我相信每位学生都是独特的，拥有不同的学习方式、目标和音乐兴趣。我的教学方法适应每个学生的需求，确保他们获得最适合自己的学习体验。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-[#5D2E46]">技术与表现的平衡</h3>
              <p className="text-gray-700">
                掌握技术基础是重要的，但同样重要的是培养音乐表现力和对作品的理解。我的教学同时注重这两个方面，帮助学生成为全面的音乐家。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-[#5D2E46]">培养终身热情</h3>
              <p className="text-gray-700">
                我的目标不仅是教授小提琴技巧，还希望培养学生对音乐的持久热爱。通过创造愉快和鼓舞人心的学习环境，我帮助学生建立终身与音乐的联系。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 行动召唤 */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#5D2E46]">
            准备好开始您的音乐学习之旅了吗？
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            无论您是寻找自己的第一位小提琴老师，还是希望提升现有技能，我都期待着与您见面并帮助您实现音乐目标。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <ActionButton variant="primary" size="lg">
                联系我
              </ActionButton>
            </Link>
            <Link to="/lessons">
              <ActionButton variant="outline" size="lg">
                了解课程
              </ActionButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
