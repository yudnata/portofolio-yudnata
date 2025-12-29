import HTML5Logo from '../assets/logo/HTML5.png';
import JavaScriptLogo from '../assets/logo/JavaScript.png';
import NodeLogo from '../assets/logo/Node.js.png';
import ExpressLogo from '../assets/logo/Express.png';
import TailwindLogo from '../assets/logo/Tailwind CSS.png';
import MySQLLogo from '../assets/logo/MySQL.png';
import PostgreSQLLogo from '../assets/logo/PostgresSQL.png';
import MongoDBLogo from '../assets/logo/MongoDB.png';
import PythonLogo from '../assets/logo/Python.png';
import GitLogo from '../assets/logo/Git.png';
import WordPressLogo from '../assets/logo/WordPress.png';
import FigmaLogo from '../assets/logo/Figma.png';
import PhotoshopLogo from '../assets/logo/AdobePhotoshop.png';
import IllustratorLogo from '../assets/logo/AdobeIllustrator.png';
import PremiereLogo from '../assets/logo/AdobePremierePro.png';
import CanvaLogo from '../assets/logo/Canva.png';

const devSkills = [
  { name: 'HTML5', logo: HTML5Logo },
  { name: 'JavaScript', logo: JavaScriptLogo },
  { name: 'WordPress', logo: WordPressLogo },
  { name: 'Node.js', logo: NodeLogo },
  { name: 'Express', logo: ExpressLogo },
  { name: 'Tailwind CSS', logo: TailwindLogo },
  { name: 'MySQL', logo: MySQLLogo },
  { name: 'PostgreSQL', logo: PostgreSQLLogo },
  { name: 'MongoDB', logo: MongoDBLogo },
  { name: 'Python', logo: PythonLogo },
  { name: 'Git', logo: GitLogo },
];

const designTools = [
  { name: 'Canva', logo: CanvaLogo },
  { name: 'Figma', logo: FigmaLogo },
  { name: 'Photoshop', logo: PhotoshopLogo },
  { name: 'Illustrator', logo: IllustratorLogo },
  { name: 'Premiere Pro', logo: PremiereLogo },
];

const Skills = () => {
  const devSkillsDouble = [...devSkills, ...devSkills];
  const designToolsDouble = [...designTools, ...designTools];

  return (
    <section
      id="skills"
      className="py-24 px-6 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <div className="animate-on-scroll text-center mb-16">
          <p className="text-white font-medium text-sm mb-2 uppercase tracking-wider">Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Technologies I Work With
          </h2>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            I'm always learning new tools and technologies. Here's what I'm familiar with.
          </p>
        </div>

        <div
          className="animate-on-scroll mb-12"
          style={{ transitionDelay: '0.1s' }}
        >
          <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-white"></span>
            Development
          </h3>
          <div className="relative">
            <div className="flex overflow-hidden">
              <div className="tech-carousel">
                {devSkillsDouble.map((skill, index) => (
                  <div
                    key={`${skill.name}-${index}`}
                    className="flex-shrink-0 px-5 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 hover:scale-105 cursor-default"
                    style={{ backgroundColor: '#1E1E1E', minWidth: 'max-content' }}
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <span className="text-white font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="animate-on-scroll mb-12"
          style={{ transitionDelay: '0.2s' }}
        >
          <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-white"></span>
            Design Tools
          </h3>
          <div className="relative">
            <div className="flex overflow-hidden">
              <div
                className="flex gap-4"
                style={{ animation: 'scroll-left 20s linear infinite reverse' }}
              >
                {designToolsDouble.map((tool, index) => (
                  <div
                    key={`${tool.name}-${index}`}
                    className="flex-shrink-0 px-5 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 hover:scale-105 cursor-default"
                    style={{ backgroundColor: '#1E1E1E', minWidth: 'max-content' }}
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <span className="text-white font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="animate-on-scroll"
          style={{ transitionDelay: '0.3s' }}
        >
          <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-white"></span>
            Languages
          </h3>
          <div className="flex flex-wrap gap-4">
            <div
              className="px-6 py-4 rounded-xl"
              style={{ backgroundColor: '#1E1E1E' }}
            >
              <p className="text-white font-semibold">Indonesian</p>
              <p className="text-gray-400 text-sm">Native Speaker</p>
            </div>
            <div
              className="px-6 py-4 rounded-xl"
              style={{ backgroundColor: '#1E1E1E' }}
            >
              <p className="text-white font-semibold">English</p>
              <p className="text-gray-400 text-sm">Professional Working</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
