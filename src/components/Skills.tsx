const Skills = () => {
  const skillCategories = [
    {
      title: "BackEnd",
      color: "text-green-700",
      skills: [
        { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Spring Boot", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "Spring Security", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" }
      ]
    },{
      title: "Database",
      color: "text-green-700",
      skills: [
        { name: "MariaDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Mybatis", image: "https://mybatis.org/images/mybatis-logo.png" },
        { name: "Jpa", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "AWS RDS", image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
      ]
    },
    {
      title: "Basic",
      color: "text-yellow-800",
      skills: [
        { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      ]
    },
    {
      title: "Tools",
      color: "text-slate-700",
      skills: [
        { name: "Notion", image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
        { name: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "WBS", image: "https://cdn-icons-png.flaticon.com/512/2091/2091947.png" },
        { name: "Confluence", image: "https://cdn.worldvectorlogo.com/logos/confluence-1.svg" },
        { name: "Jira", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" }
      ]
    },
    {
      title: "VCS",
      color: "text-gray-800",
      skills: [
        { name: "GitHub", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
      ]
    },
    {
      title: "Deployment",
      color: "text-green-800",
      skills: [
        { name: "AWS EC2", image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
        { name: "Travis CI", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/travis/travis-plain.svg" },
        { name: "CodeDeploy", image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Skills</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg">사용 경험이 있거나 중점적으로 활용한 기술입니다</p>
        </div>

        <div className="skills-card-wrapper transition-all duration-500 hover:shadow-2xl cursor-pointer">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer space-y-4">
                  <h3 className={`text-xl font-bold ${category.color}`}>
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex flex-col items-center group"
                      >
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="w-12 h-12 object-contain mb-2 group-hover:scale-110 transition-transform duration-200"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
