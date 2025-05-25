const Skills = () => {
  const skillCategories = [
    {
      title: "BackEnd",
      color: "text-green-700",
      skills: [
        { name: "Java", color: "bg-green-900 text-white" },
        { name: "Spring Boot", color: "bg-green-800 text-white" },
        { name: "Spring Security", color: "bg-emerald-700 text-white" },
        { name: "MariaDB", color: "bg-cyan-900 text-white" },
        { name: "MySQL", color: "bg-blue-900 text-white" },
        { name: "Mybatis", color: "bg-yellow-900 text-white" },
        { name: "Jpa", color: "bg-purple-900 text-white" },
      ]
    },
    {
      title: "Basic",
      color: "text-yellow-800",
      skills: [
        { name: "HTML", color: "bg-orange-500 text-white" },
        { name: "CSS", color: "bg-blue-500 text-white" },
        { name: "JavaScript", color: "bg-yellow-400 text-black" },
      ]
    },
    {
      title: "Tools",
      color: "text-slate-700",
      skills: [
        { name: "AWS RDS", color: "bg-green-700 text-white" },
        { name: "AWS EC2", color: "bg-green-900 text-white" },
        { name: "Notion", color: "bg-gray-700 text-white" },
        { name: "Figma", color: "bg-purple-800 text-white" },
        { name: "WBS", color: "bg-orange-900 text-white" },
        { name: "Confluence", color: "bg-blue-800 text-white" },
        { name: "Jira", color: "bg-blue-700 text-white" }
      ]
    },
    {
      title: "VCS",
      color: "text-gray-800",
      skills: [
        { name: "GitHub", color: "bg-gray-900 text-white" }
      ]
    },
    {
      title: "Deployment",
      color: "text-green-800",
      skills: [
        { name: "Travis CI", color: "bg-green-800 text-white" },
        { name: "CodeDeploy", color: "bg-slate-800 text-white" }
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
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${skill.color} hover:scale-105 transition-transform duration-200`}
                      >
                        {skill.name}
                      </span>
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
