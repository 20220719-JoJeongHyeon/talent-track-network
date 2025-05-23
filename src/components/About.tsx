
const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white">
              <div className="w-full h-full bg-gradient-to-br from-pink-200 to-blue-200 flex items-center justify-center">
                <div className="text-6xl">👩‍💻</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">
              김 유 림 <span className="text-lg font-normal text-gray-600">웹 개발자(FE)</span>
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              함께 일 하고 싶은 개발자,<br />
              사용자 관점에서 개발하는 프론트엔드 개발자
            </p>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Contact.</h4>
              <p className="text-gray-700">
                <span className="font-medium">Email.</span> icho0405@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
