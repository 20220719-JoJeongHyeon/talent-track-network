
const Career = () => {
  const careers = [
    {
      company: "Thingsflow",
      period: "JAN 2023 - 현재",
      role: "웹프론트 📱 웹/뉴티브오 기능 개발 및 유지 보수",
      description: "HelloBot을 이용한 다양한 기업 서비스 개발",
      achievements: [
        "다양한 플랫폼에서 고객 응대 자동화 솔루션 개발",
        "React/Vue.js 기반 프론트엔드 개발 및 유지보수",
        "사용자 경험 개선을 위한 UI/UX 최적화"
      ]
    }
  ];

  return (
    <section id="career" className="py-20 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Career</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-teal-300"></div>

          {careers.map((career, index) => (
            <div key={index} className="relative flex items-start mb-12">
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-lg"></div>
              
              {/* Content */}
              <div className="ml-16 bg-white rounded-2xl shadow-lg p-8 w-full">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-teal-600 mb-2">{career.company}</h3>
                    <p className="text-gray-600 mb-2">{career.period}</p>
                    <p className="text-lg text-gray-800 font-medium">{career.role}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{career.description}</p>

                <div className="space-y-3">
                  {career.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-start">
                      <span className="text-teal-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
