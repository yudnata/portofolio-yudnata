import { useState, useRef, useCallback } from 'react';
import { Project } from '../types';
import LeadGoImage from '../assets/project/LeadGo.png';
import LetMeCookImage from '../assets/project/LetMeCook.png';
import CoreTIImage from '../assets/project/CoreTI.png';
import CogikaImage from '../assets/project/cogika.png';
import Earth3dImage from '../assets/project/Earth3d.png';
import SentimentImage from '../assets/project/Sentiment.png';

const projects: Project[] = [
  {
    id: 1,
    title: 'Predictive Lead Scoring Portal',
    appName: 'LeadGo',
    description:
      'A full-stack CRM microservices solution that predicts customer conversion probability using machine learning. Features Role-Based Access Control (RBAC) for Admin and Sales workflows, real-time analytics dashboard, and lead management.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Tailwind CSS', 'CRUD'],
    image: LeadGoImage,
    link: 'https://github.com/yudnata/predictive-lead-scoring-portal',
  },
  {
    id: 2,
    title: 'Recipe App',
    appName: 'LetMeCook',
    description:
      'A native Android application built with Kotlin following Clean MVVM Architecture. Features beautiful Material Design UI with ViewPager2 for onboarding, Lottie animations, and offline-first data persistence.',
    tags: ['Kotlin', 'Android', 'MVVM', 'Firebase', 'Cloudinary'],
    image: LetMeCookImage,
    link: 'https://github.com/yudnata/LetMeCook',
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    appName: 'CoreTI',
    description:
      'Complete fullstack e-commerce solution with a powerful Admin Dashboard (CMS) for real-time inventory tracking, order processing, and customer inquiry management. Built with PHP and MySQL.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'CRUD'],
    image: CoreTIImage,
    link: 'https://github.com/yudnata/CoreTI',
  },
  {
    id: 4,
    title: 'Real-time Chat Application',
    appName: 'Cogika',
    description:
      'A modern, responsive messaging platform utilizing WebSocket for instant communication. Features include real-time private and group chats, friend request system, and a seamless adaptive layout for both desktop and mobile devices.',
    tags: ['React', 'TypeScript', 'Node.js', 'Socket.IO', 'PostgreSQL', 'Tailwind CSS'],
    image: CogikaImage,
    link: 'https://github.com/yudnata/cogika',
  },
  {
    id: 5,
    title: 'Interactive 3D Earth Visualization',
    appName: 'Earth3D',
    description:
      'An immersive technology course project featuring interactive 3D visualization of planet Earth. Built with React, Three.js, and React Three Fiber for smooth WebGL rendering and intuitive user interactions.',
    tags: ['React', 'Three.js', 'React Three Fiber', 'WebGL', '3D', 'JavaScript'],
    image: Earth3dImage,
    link: 'https://github.com/yudnata/imersif-globe-3d',
  },
  {
    id: 6,
    title: 'Sentiment Analysis Website',
    appName: 'SentimentAPP',
    description:
      'A web-based sentiment analysis implementation using React and Flask with Naive Bayes method from scikit-learn. Classifies Indonesian public opinions about products into positive or negative sentiments.',
    tags: ['React', 'Flask', 'Python', 'scikit-learn', 'NLP', 'Machine Learning'],
    image: SentimentImage,
    link: 'https://github.com/yudnata/sentiment-analysis-app',
  },
];

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openPopup = useCallback((project: Project) => {
    if (window.innerWidth < 768) return;

    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);

    hoverTimeoutRef.current = setTimeout(() => {
      setActiveProject(project);
      setTimeout(() => setIsAnimating(true), 20);
    }, 1000);
  }, []);

  const openPopupInstant = useCallback((project: Project) => {
    if (window.innerWidth < 768) return;
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveProject(project);
    setTimeout(() => setIsAnimating(true), 20);
  }, []);

  const cancelOpen = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  }, []);

  const closePopup = useCallback(() => {
    setIsAnimating(false);
    setTimeout(() => setActiveProject(null), 250);
  }, []);

  return (
    <section
      id="projects"
      className="py-24 px-6"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="animate-on-scroll">
          <p className="text-white font-medium text-sm mb-2 uppercase tracking-wider">Portfolio</p>
          <h2
            id="projects-heading"
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl">
            Here are some projects I've worked on. Each one taught me something new and pushed my
            skills further.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"
          role="list"
          aria-label="Project list"
        >
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="animate-on-scroll project-card group flex flex-col rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
              style={{ backgroundColor: '#1E1E1E', transitionDelay: `${(index + 1) * 0.1}s` }}
              role="listitem"
              onMouseEnter={() => openPopup(project)}
              onMouseLeave={cancelOpen}
              onClick={() => openPopupInstant(project)}
            >
              <figure
                className="h-48 md:h-52 overflow-hidden"
                style={{ backgroundColor: '#2C2C2C' }}
              >
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.appName}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </figure>

              <div className="p-5 flex flex-col flex-grow">
                <p className="text-gray-400 text-sm mb-1">{project.appName}</p>
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <li
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full text-gray-300"
                      style={{ backgroundColor: '#2C2C2C' }}
                    >
                      {tag}
                    </li>
                  ))}
                  {project.tags.length > 4 && (
                    <li
                      className="px-2 py-1 text-xs rounded-full text-gray-400"
                      style={{ backgroundColor: '#2C2C2C' }}
                    >
                      +{project.tags.length - 4}
                    </li>
                  )}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
      {activeProject && (
        <div
          className="hidden md:flex fixed inset-0 z-50 items-center justify-center cursor-pointer"
          onClick={closePopup}
          style={{
            backgroundColor: isAnimating ? 'rgba(0, 0, 0, 0.75)' : 'rgba(0, 0, 0, 0)',
            backdropFilter: isAnimating ? 'blur(8px)' : 'blur(0px)',
            transition: 'all 0.25s ease-out',
          }}
        >
          <div
            className="w-[520px] max-w-[90vw] rounded-2xl overflow-hidden shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#1E1E1E',
              opacity: isAnimating ? 1 : 0,
              transform: isAnimating ? 'scale(1)' : 'scale(0.9)',
              transition: 'all 0.25s ease-out',
            }}
          >
            <figure
              className="h-56 overflow-hidden"
              style={{ backgroundColor: '#2C2C2C' }}
            >
              <img
                src={activeProject.image}
                alt={`Screenshot of ${activeProject.appName}`}
                className="w-full h-full object-cover"
              />
            </figure>

            <div className="p-6">
              <p className="text-gray-400 text-sm mb-1">{activeProject.appName}</p>
              <h3 className="text-xl font-bold text-white mb-3">{activeProject.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                {activeProject.description}
              </p>

              <ul className="flex flex-wrap gap-2 mb-5">
                {activeProject.tags.map((tag) => (
                  <li
                    key={tag}
                    className="px-2.5 py-1 text-xs rounded-full text-gray-300"
                    style={{ backgroundColor: '#2C2C2C' }}
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <a
                href={activeProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors"
              >
                View Project
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
