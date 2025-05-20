
import { Link } from "react-router-dom";
import ActionButton from "@/components/ActionButton";
import { Check } from "lucide-react";

/**
 * 课程页面组件 - 展示教学方式和价格
 */
const Lessons = () => {
  // 课程类型数据
  const lessonTypes = [
    {
      type: "个人课程",
      description: "一对一专注指导，完全根据学生需求和进度量身定制",
      features: [
        "个性化教学计划",
        "灵活安排时间",
        "专注解决个人技术挑战",
        "适合所有年龄和水平",
      ],
      pricing: [
        { duration: "30分钟", price: "$40" },
        { duration: "45分钟", price: "$55" },
        { duration: "60分钟", price: "$70" },
      ],
      recommended: true
    },
    {
      type: "小组课程",
      description: "2-4名学生一起学习，培养合奏技巧和社交音乐体验",
      features: [
        "发展合奏和聆听技巧",
        "增强社交和合作学习",
        "提高表演信心",
        "适合初级到中级学生",
      ],
      pricing: [
        { duration: "60分钟", price: "$35/人" },
        { duration: "90分钟", price: "$50/人" },
      ],
      recommended: false
    },
    {
      type: "网上课程",
      description: "通过视频会议进行远程指导，适合无法亲自到场的学生",
      features: [
        "省去通勤时间",
        "灵活安排",
        "同样专业的指导",
        "适合繁忙学生或远距离学习",
      ],
      pricing: [
        { duration: "30分钟", price: "$35" },
        { duration: "45分钟", price: "$50" },
        { duration: "60分钟", price: "$65" },
      ],
      recommended: false
    },
  ];

  // 特色课程和项目数据
  const specialPrograms = [
    {
      name: "考试准备课程",
      description: "为皇家音乐学院考试、音乐比赛或学院面试提供专门准备",
      duration: "根据需求定制",
      price: "价格根据具体要求而定"
    },
    {
      name: "夏季强化营",
      description: "每年暑假期间为期一周的强化训练，包括每日课程、研讨会和小型音乐会",
      duration: "一周（每年夏季）",
      price: "$350/周"
    },
    {
      name: "初学者套餐",
      description: "为完全的初学者提供6周入门课程，包括基础知识和技能培养",
      duration: "6周（每周一次45分钟课程）",
      price: "$300（含教材）"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* 课程介绍 */}
      <section className="py-12 md:py-20 bg-[#F7F3E3]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#5D2E46]">
              小提琴课程
            </h1>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Lisa提供各种类型的小提琴课程，满足不同年龄、水平和目标的学生需求。
              所有课程都包括技术训练、音乐理论、演奏技巧和音乐欣赏。
            </p>
          </div>
          
          {/* 课程类型卡片 */}
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
                    推荐选择
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#5D2E46]">{lesson.type}</h3>
                  <p className="text-gray-600 mb-4">{lesson.description}</p>
                  
                  <h4 className="font-medium mb-2 text-[#5D2E46]">包含内容:</h4>
                  <ul className="mb-6">
                    {lesson.features.map((feature, i) => (
                      <li key={i} className="flex items-start mb-2">
                        <Check className="h-5 w-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h4 className="font-medium mb-2 text-[#5D2E46]">价格:</h4>
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
                      预约试听课
                    </ActionButton>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* 特色课程和项目 */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-[#5D2E46] text-center mb-8">
              特色课程与项目
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {specialPrograms.map((program, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-2 text-[#5D2E46]">{program.name}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">时长:</span>
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">价格:</span>
                    <span className="font-medium">{program.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 常见问题 */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-[#5D2E46] text-center mb-8">
            常见问题
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold mb-2 text-[#5D2E46]">需要自己的乐器吗？</h3>
              <p className="text-gray-700">
                是的，学生需要自己的小提琴进行练习。如果您还没有，Lisa可以推荐适合您水平和预算的租赁或购买选项。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold mb-2 text-[#5D2E46]">什么年龄可以开始学习小提琴？</h3>
              <p className="text-gray-700">
                Lisa接受5岁及以上的学生。对于年龄较小的孩子，她采用专门的儿童教学方法，使学习过程既有趣又有效。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold mb-2 text-[#5D2E46]">课程如何支付？</h3>
              <p className="text-gray-700">
                可以按月付费或购买课程套餐。接受电子转账、信用卡和支票付款。具体支付安排将在您注册时讨论。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold mb-2 text-[#5D2E46]">如何安排试听课？</h3>
              <p className="text-gray-700">
                您可以通过联系页面填写表单或直接联系Lisa安排30分钟的试听课。试听课收费$30，如果您决定注册课程，该费用将计入您的第一个月学费。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold mb-2 text-[#5D2E46]">学生表演机会有哪些？</h3>
              <p className="text-gray-700">
                Lisa每年组织两次学生音乐会（冬季和夏季），所有学生都有机会在支持性环境中展示他们的进步。还会有小型课堂表演和社区演出机会。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 行动召唤 */}
      <section className="py-12 md:py-16 bg-[#5D2E46]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#5D2E46]">
            准备好开始您的音乐之旅了吗？
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            联系Lisa安排试听课或了解更多关于课程的信息。无论您的音乐目标是什么，Lisa都将帮助您实现它们。
          </p>
          <div className="mt-8">
            <Link to="/contact">
              <ActionButton variant="primary" size="lg">
                联系Lisa
              </ActionButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lessons;
