import React from 'react';
import './Hero.css';

const Hero = () => {
  // 아래로 스크롤 핸들러
  const handleScrollToAbout = () => {
    const about = document.getElementById("about");
    if (about) {
      about.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      
      {/* 스크롤 다운 버튼 */}
      <button
        className="group flex flex-col items-center bg-white/10 rounded-full w-12 h-12 justify-center border-2 border-white/50 hover:bg-white/30 shadow-lg transition hover:scale-105 duration-200"
        aria-label="아래로 이동"
        onClick={handleScrollToAbout}
        tabIndex={0}
      >
        <svg
          className="w-6 h-6 text-white animate-bounce group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <p>아래로 이동</p>
      <span className="sr-only">아래로 이동</span>
    </div>
  );
};

export default Hero;

