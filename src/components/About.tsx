import { useLottie } from 'lottie-react';
import { useEffect, useState } from 'react';
import ProfilePhoto from '../assets/image/me.png';

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

const About: React.FC = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/dog.json')
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error('Error loading Lottie animation:', error));
  }, []);

  return (
    <section
      id="about"
      className="py-24 px-6 pt-24"
      aria-labelledby="about-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="animate-on-scroll">
          <p className="text-white font-medium text-sm mb-2 uppercase tracking-wider">About Me</p>
          <h2
            id="about-heading"
            className="text-4xl md:text-5xl font-bold mb-12 text-white"
          >
            A bit about myself
          </h2>
        </div>
        <div className="grid md:grid-cols-10 gap-8 items-center">
          <div
            className="md:col-span-4 animate-on-scroll"
            style={{ transitionDelay: '0.1s' }}
          >
            <div className="relative">
              <div
                className="w-full aspect-square rounded-2xl overflow-hidden"
                style={{ backgroundColor: '#1E1E1E' }}
              >
                <img
                  src={ProfilePhoto}
                  alt="Yudhi Adinata - Fullstack Developer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {animationData && (
                <div className="absolute -bottom-24 -right-16 w-48 h-48 md:w-64 md:h-64">
                  <LottieAnimation animationData={animationData} />
                </div>
              )}
            </div>
          </div>
          <article
            className="md:col-span-6 animate-on-scroll space-y-4"
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="text-gray-300 text-lg leading-relaxed bg-dark-card p-6 rounded-xl">
              <p>
                Hi my name is{' '}
                <strong className="text-white font-semibold">
                  Gede Yudhi Adinata Putra Kurniawan
                </strong>
                . I'm an Information Technology student at{' '}
                <strong className="text-white font-semibold">Udayana University</strong>, Bali with
                a current GPA of 3.77. I'm passionate about building modern, user-centered web
                applications that solve real problems.
              </p>
            </div>
            <div className="flex gap-4">
              <div
                className="flex-1 rounded-xl p-5"
                style={{ backgroundColor: '#1E1E1E' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-400 text-sm">Location</span>
                </div>
                <p className="text-white font-semibold">Denpasar, Bali</p>
              </div>

              <div
                className="flex-1 rounded-xl p-5"
                style={{ backgroundColor: '#1E1E1E' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                  <span className="text-gray-400 text-sm">Education</span>
                </div>
                <p className="text-white font-semibold">Udayana University</p>
              </div>
              <a
                href="/CV-yudnata.pdf"
                download
                className="flex-1 rounded-xl p-5 bg-white text-black transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:-translate-y-0.5"
                aria-label="Download CV of Yudhi Adinata"
              >
                <div className="flex items-center gap-2 mb-2">
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="text-gray-600 text-sm">Resume</span>
                </div>
                <p className="text-black font-semibold">Download CV</p>
              </a>
            </div>
            <div
              className="rounded-xl p-5"
              style={{ backgroundColor: '#1E1E1E' }}
            >
              <div className="flex items-center gap-2 mb-3">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                <span className="text-gray-400 text-sm">Values</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span
                  className="px-3 py-1 rounded-full text-white text-sm"
                  style={{ backgroundColor: '#2C2C2C' }}
                >
                  Clean Code
                </span>
                <span
                  className="px-3 py-1 rounded-full text-white text-sm"
                  style={{ backgroundColor: '#2C2C2C' }}
                >
                  User First
                </span>
                <span
                  className="px-3 py-1 rounded-full text-white text-sm"
                  style={{ backgroundColor: '#2C2C2C' }}
                >
                  Continuous Learning
                </span>
                <span
                  className="px-3 py-1 rounded-full text-white text-sm"
                  style={{ backgroundColor: '#2C2C2C' }}
                >
                  Team Player
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
