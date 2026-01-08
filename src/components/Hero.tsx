import { MouseEvent, useEffect, useState } from 'react';
import { useLottie } from 'lottie-react';
import HeroBg from '../assets/image/hero-section.webp';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LottieAnimation: React.FC<{ animationData: any }> = ({ animationData }) => {
  const options = {
    animationData,
    loop: true,
  };
  const { View, setSpeed } = useLottie(options);

  useEffect(() => {
    setSpeed(0.5);
  }, [setSpeed]);

  return <div className="w-full h-full">{View}</div>;
};

const Hero: React.FC = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/Developer.json')
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error('Error loading Lottie animation:', error));
  }, []);

  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, selector: string): void => {
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

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-10 gap-8 items-center">
          <div
            className="hidden md:flex md:col-span-4 items-center justify-center animate-on-scroll"
            style={{ transitionDelay: '0.1s' }}
          >
            {animationData && (
              <div className="w-full max-w-md">
                <LottieAnimation animationData={animationData} />
              </div>
            )}
          </div>
          <div
            className="col-span-full md:col-span-6 text-center md:text-left animate-on-scroll"
            style={{ transitionDelay: '0.2s' }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Yudhi Adinata
            </h1>

            <p
              className="text-xl md:text-2xl text-gray-300 mb-4 font-medium"
              role="doc-subtitle"
            >
              Web Developer
            </p>

            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              I'm a web developer based in Bali, Indonesia, focused on creating modern web
              applications that simplify complexity. My work turns challenging technical problems
              into clean, intuitive, and delightful digital experiences for users.
            </p>

            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
