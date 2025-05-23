
const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* VERY dark background + (optional) overlay for max readability */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-green-950"
        style={{
          backgroundImage: `linear-gradient(rgba(14,36,20,0.88),rgba(8,21,20,0.96)), url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2367d79d' fill-opacity='0.18'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        {/* Decorative flowers */}
        <div className="absolute top-20 left-10 w-32 h-32 opacity-60">
          <div className="w-full h-full rounded-full bg-green-900 animate-pulse"></div>
        </div>
        <div className="absolute top-40 right-20 w-24 h-24 opacity-60">
          <div className="w-full h-full rounded-full bg-green-900 animate-pulse delay-1000"></div>
        </div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 opacity-80">
          <div className="w-full h-full rounded-full bg-green-800 animate-pulse delay-500"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen text-center px-4">
        <div>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
            It is Impossible to Imagine
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-2xl">
            What is Impossible.
          </h2>
          <p className="text-xl text-white/90 mb-8 drop-shadow-lg">
            웹 개발자 조정현의 포트폴리오입니다!
          </p>
          <div className="animate-bounce">
            <div className="w-8 h-8 mx-auto border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;

