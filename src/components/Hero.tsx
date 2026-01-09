import { MouseEvent, useEffect, useState, useRef } from 'react';
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
    setSpeed(0.8);
  }, [setSpeed]);

  return <div className="w-full h-full">{View}</div>;
};

const Hero: React.FC = () => {
  const [animationData, setAnimationData] = useState(null);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullName = 'Yudhi Adinata';
  const typingComplete = useRef(false);

  useEffect(() => {
    fetch('/hello.json')
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error('Error loading Lottie animation:', error));
  }, []);

  useEffect(() => {
    if (typingComplete.current) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayText(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        typingComplete.current = true;
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
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
        <div className="grid grid-cols-1 md:grid-cols-10 gap-8 items-center">
          <div
            className="hidden md:flex md:col-span-4 items-center justify-center animate-on-scroll"
            style={{ transitionDelay: '0.1s' }}
          >
            {animationData && (
              <div className="w-full max-w-lg opacity-70">
                <LottieAnimation animationData={animationData} />
              </div>
            )}
          </div>
          <div
            className="col-span-full md:col-span-6 text-left animate-on-scroll mt-20"
            style={{ transitionDelay: '0.2s' }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              {displayText}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                |
              </span>
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

            <div className="flex flex-row items-start justify-start gap-4">
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
