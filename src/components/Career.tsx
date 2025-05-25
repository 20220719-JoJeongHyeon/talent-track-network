const Career = () => {
  const careers = [
    {
      period: '2025년 4월 ~ 현재',
      company: '신한 투자증권 프로 디지털 아카데미',
      description: [
        'AWS CLOUD 교육 완료',
        '풀스택 과정 진행 중'
      ],
    },
    {
      period: '2024년 9월 ~ 12월',
      company: '의료 데이터 관리 기업 (인턴십)',
      description: [
        'Java Lifray dxp 7.2 framework 기반 서비스 개발 참여',
        'e-CRF 서비스의 QA 담당',
        '기존 고객사와의 데이터 정합성 체크(Python 활용)'
      ],
    }, {
      period: '2024년 6월 ~ 7월',
      company: 'UNLV 해외 교육 프로그램',
      description: [
        'UNLV 머신러닝 교육 참여'
      ],
    }, {
      period: '2024년 1월 ~ 6월',
      company: '프로젝트 몰입 과제 (팀 프로젝트)',
      description: [
        '협업을 촉진하는 웹 서비스'
      ],
    }
    
  ];

  return (
    <section id="career" className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Career</h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-200"></div>
          {careers.map((career, idx) => (
            <div key={idx} className="relative flex items-start mb-12">
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-green-400 rounded-full border-4 border-white shadow-lg"></div>
              {/* Content */}
              <div className="ml-16 bg-white rounded-2xl shadow-lg p-8 w-full career-card-wrapper transition-all duration-500 hover:shadow-2xl cursor-pointer">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-green-600 mb-2">{career.company}</h3>
                    <p className="text-gray-600 mb-2">{career.period}</p>
                  </div>
                </div>
                <ul className="text-gray-700 space-y-2">
                  {career.description.map((desc, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Career;

