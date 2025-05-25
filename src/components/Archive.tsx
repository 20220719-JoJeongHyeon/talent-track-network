import React from 'react';
import './Archive.css';
import { Github } from 'lucide-react';

const Archive = () => {
  const archiveItems = [
    {
      title: "GitHub",
      icon: <Github className="w-12 h-12" />,
      link: "github.com/cisxo",
      description: [
        "프로젝트의 소스 코드가 있습니다.",
        "코딩 연습을 위해 작성한 코드가 있습니다."
      ]
    },
    {
      title: "Velog",
      icon: <div className="w-12 h-12 bg-emerald-500 rounded text-white flex items-center justify-center font-bold text-xl">V</div>,
      link: "velog.io/@cisxo",
      description: [
        "공부한 것을 정리한 목적의 블로그입니다.",
        "개발하며 겪은 이야기를 공유합니다.",
        "자신 공유을 위해 작성하기도 합니다."
      ]
    }
  ];

  const handleItemClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="archive" className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Archive</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {archiveItems.map((item, index) => (
            <div key={index} className="archive-item border border-gray-200 rounded-2xl bg-white shadow-lg p-8 hover:shadow-xl cursor-pointer" onClick={() => handleItemClick(`https://${item.link}`)}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 text-gray-700">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <a 
                  href={`https://${item.link}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition-colors mb-6 font-medium"
                >
                  {item.link}
                </a>
                <ul className="space-y-2 text-gray-600">
                  {item.description.map((desc, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-pink-500 mr-2">•</span>
                      {desc}
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

export default Archive;
