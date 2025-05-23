
import React from "react";

const Hero = () => {
  // 아래로 스크롤 핸들러
  const handleScrollToAbout = () => {
    const about = document.getElementById("about");
    if (about) {
      about.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* 진하고 자연스러운 다크 그린 그라데이션 + 오버레이 */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #162920 65%, #092017 100%)",
        }}
      >
        {/* 자연스럽게 그라데이션 블러+덮개 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-green-900/95 to-green-950/95" />
        {/* 장식 요소(꽃모양, 둥근 블러 등) 간결하게 유지 */}
        <div className="absolute top-1/4 left-6 w-44 h-44 bg-green-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-16 right-14 w-32 h-32 bg-green-800/20 rounded-full blur-2xl" />
      </div>

      {/* 메인 컨텐츠 */}
      <div className="relative z-10 flex items-center justify-center min-h-screen text-center px-4">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-xl mb-6 tracking-tight animate-fade-in">
            It is Impossible to Imagine
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-white/90 drop-shadow-lg mb-8">
            What is Impossible.
          </h2>
          <p className="text-xl text-white/85 mb-10 drop-shadow">
            웹 백엔드 개발자 조정현의 포트폴리오입니다!
          </p>
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
          <span className="sr-only">아래로 이동</span>
        </div>
      </div>
    </section>
  );
};
export default Hero;

