import { Project } from '../types';
import LeadGoImage from '../assets/project/LeadGo.png';
import LetMeCookImage from '../assets/project/LetMeCook.png';
import CoreTIImage from '../assets/project/CoreTI.png';

const projects: Project[] = [
  {
    id: 1,
    title: 'Predictive Lead Scoring Portal',
    appName: 'LeadGo',
    description:
      'A full-stack CRM microservices solution that predicts customer conversion probability using machine learning. Features Role-Based Access Control (RBAC) for Admin and Sales workflows, real-time analytics dashboard, and comprehensive lead management.',
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
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll">
          <p className="text-white font-medium text-sm mb-2 uppercase tracking-wider">Portfolio</p>
          <h2 id="projects-heading" className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl">
            Here are some projects I've worked on. Each one taught me something new and pushed my
            skills further.
          </p>
        </div>

        <div className="space-y-6" role="list" aria-label="Project list">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="animate-on-scroll project-card group grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden"
              style={{
                backgroundColor: '#1E1E1E',
                transitionDelay: `${(index + 1) * 0.1}s`,
              }}
              role="listitem"
            >
              <figure
                className={`h-72 md:h-80 overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}
                style={{ backgroundColor: '#2C2C2C' }}
              >
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.appName} project`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </figure>

              <div
                className={`p-8 flex flex-col justify-center ${
                  index % 2 === 1 ? 'md:order-1' : ''
                }`}
              >
                <p className="text-gray-400 text-sm mb-1">{project.appName}</p>
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                <ul className="flex flex-wrap gap-2 mb-6" aria-label="Technologies used">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full text-gray-300"
                      style={{ backgroundColor: '#2C2C2C' }}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-white hover:gap-3 transition-all"
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
