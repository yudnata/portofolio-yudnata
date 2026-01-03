import { MouseEvent } from 'react';
import HeroBg from '../assets/image/hero-section.webp';

const Hero: React.FC = () => {
  const scrollToSection = (
    e: MouseEvent<HTMLAnchorElement>,
    selector: string
  ): void => {
    e.preventDefault();
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative"
      style={{
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      aria-label="Hero section"
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(18, 18, 18, 0.85)' }}
        aria-hidden="true"
      />

      <div className="w-full max-w-3xl mx-auto text-center animate-on-scroll relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
          Yudhi Adinata
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4 font-medium" role="doc-subtitle">
          Web Developer
        </p>

        <p className="text-lg text-gray-400 mb-10 leading-relaxed">
          I'm a web developer based in Bali, Indonesia, focused on creating modern web applications
          that simplify complexity. My work turns challenging technical problems into clean,
          intuitive, and delightful digital experiences for users.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, '#projects')}
            className="px-8 py-4 bg-white text-black rounded-lg font-semibold transition-colors text-lg hover:bg-gray-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="px-8 py-4 border border-gray-600 hover:border-white text-white rounded-lg font-semibold transition-all text-lg"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
