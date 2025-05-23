
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "text-orange-500",
      skills: [
        { name: "Next.js", color: "bg-black text-white" },
        { name: "React", color: "bg-blue-400 text-white" },
        { name: "Vue", color: "bg-green-500 text-white" },
        { name: "Angular", color: "bg-red-500 text-white" },
        { name: "Apollo", color: "bg-purple-500 text-white" },
        { name: "GraphQL", color: "bg-pink-500 text-white" },
        { name: "React Query", color: "bg-red-400 text-white" },
        { name: "Redux", color: "bg-purple-600 text-white" },
        { name: "Recoil", color: "bg-blue-600 text-white" },
        { name: "Zustand", color: "bg-orange-500 text-white" },
        { name: "Styled-Components", color: "bg-pink-400 text-white" },
        { name: "Storybook", color: "bg-red-600 text-white" }
      ]
    },
    {
      title: "Basic",
      color: "text-orange-500",
      skills: [
        { name: "HTML", color: "bg-orange-500 text-white" },
        { name: "CSS", color: "bg-blue-500 text-white" },
        { name: "JavaScript", color: "bg-yellow-400 text-black" },
        { name: "TypeScript", color: "bg-blue-600 text-white" }
      ]
    },
    {
      title: "Tools",
      color: "text-orange-500",
      skills: [
        { name: "Notion", color: "bg-gray-800 text-white" },
        { name: "Figma", color: "bg-purple-500 text-white" },
        { name: "Zeplin", color: "bg-orange-400 text-white" },
        { name: "Source Tree", color: "bg-blue-500 text-white" }
      ]
    },
    {
      title: "VCS",
      color: "text-orange-500",
      skills: [
        { name: "Git", color: "bg-orange-600 text-white" },
        { name: "GitHub", color: "bg-gray-800 text-white" },
        { name: "GitLab", color: "bg-orange-500 text-white" }
      ]
    },
    {
      title: "Mobile App",
      color: "text-orange-500",
      skills: [
        { name: "React Native", color: "bg-blue-400 text-white" }
      ]
    },
    {
      title: "Deployment",
      color: "text-orange-500",
      skills: [
        { name: "Vercel", color: "bg-black text-white" },
        { name: "Netlify", color: "bg-teal-500 text-white" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Skills</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg">한계까지 배우고 사용 해봤던 기술입니다</p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
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
    </section>
  );
};

export default Skills;
