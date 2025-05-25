import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [fade, setFade] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
  const [isSliding, setIsSliding] = useState(false);

  const projects = [
    {
      title: "PortfolioHub",
      period: "2024. 01. 02 ~ 2024. 06. 19",
      subtitle: "통합 포트폴리오 웹서비스",
      github: "https://github.com/20240218-Porthub/porthub",
      website: "#",
      techStack: {
        기술스택: "Java, Spring boot, Spring Security, Thymeleaf",
        DB: "MariaDB, MyBatis, AWS RDS", 
        "CI/CD": "AWS EC2, AWS S3, AWS codedeploy, TravisCI, Nginx",
        협업도구: "github, notion, WBS"
      },
      description: "각 분야 별로 흩어진 포트폴리오 및 작업물을 하나의 플랫폼으로 관리하고, 협업을 촉진하는 서비스 웹 서비스입니다.",
      requirements: "포트폴리오 관리, 멘토링 수익화 결제 시스템, 사용자 간 채팅 시스템, 관리자 시스템",
      team: "개발 3인",
      role: "팀장(BE, FE)",
      contributions: [
        "로그인 및 회원 가입: 암호화, 유효성 처리, 메일 인증, session 인증 방식, 이메일 및 유저 아이디 중복 방지",
        "포트폴리오 파트: 검색, 인기 유저 갱신, 조회 수 중복 방지, 페이징, 방문 기록, 좋아요 기능",
        "CI/CD: 무중단 배포 구축",
        "백오피스: 관리자 기능, 사용자 제재(로그인 차단), 저작권 신고",
        "사용자 페이지: 팔로우 및 팔로잉",
        "ERD 설계 및 문서화 작업(UML- 유스케이스, DB 테이블 명세서, 화면설계서)"
      ],
      refactoring: [
        "페이징에서 비효율적인 데이터를 불러오는 방식에서 필요한 데이터 셋 만큼 불러오도록 쿼리 튜닝",
        "인덱싱 추가 및 쿼리 튜닝: 검색 성능 16.5% 개선"
      ]
    },
    {
      title: "UNLV COLLEGE OF ENGINEERING",
      period: "2024. 06. 23 ~ 2024. 07. 20",
      subtitle: "팀프로젝트",
      github: "https://github.com/CISXO/overseas_project",
      techStack: {
        기술스택: "Python, Pandas, Slack"
      },
      description: "Uniprot의 대용량 아미노산 데이터의 아미노산 염기 서열과 EcNumber를 추출하여 ML(Logistic Regression, KNN, K-Mean, SVM)과 Neural Network 모델링을 하여 비교 분석",
      team: "5인",
      contributions: [
        "데이터 가공: 염기 서열과 EcNumber 추출하고 중복되는 염기서열 안에 EcNumber 추가",
        "데이터 전처리: 염기 서열 One-hot Encoding",
        "ML 알고리즘 구현: KNN, K-Mean"
      ]
    },
    {
      title: "EXP 팀",
      period: "2025. 02. 09 ~ 2025. 3. 1",
      subtitle: "뽀모도로 공부법 어플리케이션",
      github: "https://github.com/gauntletElice/backend",
      techStack: {
        기술스택: "Spring boot, Spring Security, JWT, Oauth2.0 Kakao, Swagger UI, Redis",
        DB: "PostgreSQL, queryDSL, Spring JPA",
        Server: "Elice Cloud, Elice AI"
      },
      description: "elice 기업에서 주관한 캠프로 AI를 활용한 pomodoro 시간 관리 어플리케이션을 구현",
      team: "PM 1인, BE 2인, FE 2인",
      role: "BE",
      contributions: [
        "로그인 API: Oauth 2.0 kakao Login",
        "JWT 토큰 인증 방식 (refresh token, access token)",
        "BE 개발: 멤버(설문), 포춘 쿠키, 로그인 API 개발",
        "ELICE AI API: Elice에서 제공하는 명령 프롬포트를 통해 행운의 포춘 쿠키를 추출하는 api 구현"
      ]
    }
  ];

  const nextProject = () => {
    setSlideDirection('right');
    setIsSliding(true);
    setTimeout(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
      setSlideDirection(null);
      setIsSliding(false);
    }, 400);
  };

  const prevProject = () => {
    setSlideDirection('left');
    setIsSliding(true);
    setTimeout(() => {
      setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
      setSlideDirection(null);
      setIsSliding(false);
    }, 400);
  };

  const project = projects[currentProject];

  return (
    <section id="projects" className="py-20 bg-black text-white relative overflow-hidden min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
        <div className="relative flex flex-col items-center">
          <div className="flex w-full justify-between items-center max-w-4xl mx-auto">
            <button
              onClick={prevProject}
              className="z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors flex-shrink-0 absolute left-0 top-1/2 -translate-y-1/2"
              style={{ minWidth: 40 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex-1 flex justify-center min-h-[700px] relative">
              <div
                className={`project-card-wrapper transition-transform duration-500 ${isHovered ? 'hovered' : ''}`}
                style={{
                  transform:
                    isSliding && slideDirection === 'right'
                      ? 'translateX(100%)'
                      : isSliding && slideDirection === 'left'
                      ? 'translateX(-100%)'
                      : 'translateX(0)',
                  opacity: isSliding ? 0.7 : 1,
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="bg-white text-gray-800 rounded-3xl p-8 mx-8 border-2 border-gray-200 project-card-inner">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-600 mb-2">{project.period}</p>
                        <p className="text-lg text-gray-700">{project.subtitle}</p>
                      </div>

                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          자세히 보기
                        </a>
                        {project.website && project.website !== "#" && (
                          <a
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2"
                          >
                            <ExternalLink className="w-4 h-4" />
                            웹사이트
                          </a>
                        )}
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold">주요 역할</h4>
                        <ul className="space-y-2">
                          {project.contributions.map((contribution, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-blue-500 mr-2 mt-1">•</span>
                              <span className="text-sm">{contribution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {project.refactoring && (
                        <div className="space-y-4">
                          <h4 className="text-xl font-semibold">리팩터링</h4>
                          <ul className="space-y-2">
                            {project.refactoring.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-green-500 mr-2 mt-1">•</span>
                                <span className="text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="space-y-2">
                        <p><strong>인원:</strong> {project.team}</p>
                        {project.role && <p><strong>역할:</strong> {project.role}</p>}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold">기술 스택</h4>
                        <div className="space-y-3">
                          {Object.entries(project.techStack).map(([key, value]) => (
                            <div key={key} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                              <span className="font-medium text-blue-600">{key}:</span>
                              <div className="flex flex-wrap gap-2 mt-1">
                                {value.split(', ').map((tech, index) => (
                                  <span
                                    key={index}
                                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="text-lg font-semibold mb-3">프로젝트 소개</h4>
                        <p className="text-gray-700 leading-relaxed">{project.description}</p>
                        {project.requirements && (
                          <div className="mt-4">
                            <span className="font-medium">요구사항: </span>
                            <span className="text-gray-700">{project.requirements}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={nextProject}
              className="z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors flex-shrink-0 absolute right-0 top-1/2 -translate-y-1/2"
              style={{ minWidth: 40 }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          {/* Project indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentProject ? 'bg-blue-500' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
