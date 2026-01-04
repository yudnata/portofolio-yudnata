import { Project } from '../types';
import LeadGoImage from '../assets/project/LeadGo.png';
import LetMeCookImage from '../assets/project/LetMeCook.png';
import CoreTIImage from '../assets/project/CoreTI.png';
import CogikaImage from '../assets/project/cogika.png'

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
    image: CogikaImage, // Pastikan variable image ini sudah di-import
    link: 'https://github.com/yudnata/cogika',
  },
];

const Projects: React.FC = () => {
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
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          role="list"
          aria-label="Project list"
        >
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="animate-on-scroll project-card group flex flex-col rounded-2xl overflow-hidden hover:transform hover:scale-[1.05] transition-all duration-600"
              style={{
                backgroundColor: '#1E1E1E',
                transitionDelay: `${(index + 1) * 0.1}s`,
              }}
              role="listitem"
            >
              <figure
                className="h-64 md:h-80 overflow-hidden"
                style={{ backgroundColor: '#2C2C2C' }}
              >
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.appName} project`}
                  className="w-full h-full object-cover transition-transform duration-500"
                  loading="lazy"
                />
              </figure>

              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-400 text-sm mb-1">{project.appName}</p>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">{project.description}</p>

                <ul
                  className="flex flex-wrap gap-2 mb-4"
                  aria-label="Technologies used"
                >
                  {project.tags.slice(0, 10).map((tag) => (
                    <li
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full text-gray-300"
                      style={{ backgroundColor: '#2C2C2C' }}
                    >
                      {tag}
                    </li>
                  ))}
                  {project.tags.length > 10 && (
                    <li
                      className="px-2 py-1 text-xs rounded-full text-gray-400"
                      style={{ backgroundColor: '#2C2C2C' }}
                    >
                      +{project.tags.length - 10}
                    </li>
                  )}
                </ul>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 font-semibold text-white hover:gap-3 transition-all"
                  aria-label={`View ${project.appName} project on GitHub`}
                >
                  View Project
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
