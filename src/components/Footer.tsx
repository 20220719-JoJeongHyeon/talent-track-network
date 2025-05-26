
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">CISXO</h3>
          <p className="text-gray-400 mb-6">함께 일하고 싶은 개발자가 되겠습니다.</p>
          <p className="text-gray-400">
            © 2025 May's world. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;
