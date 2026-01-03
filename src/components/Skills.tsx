import { Skill } from '../types';
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

const devSkills: Skill[] = [
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

const designTools: Skill[] = [
  { name: 'Canva', logo: CanvaLogo },
  { name: 'Figma', logo: FigmaLogo },
  { name: 'Photoshop', logo: PhotoshopLogo },
  { name: 'Illustrator', logo: IllustratorLogo },
  { name: 'Premiere Pro', logo: PremiereLogo },
];

interface LanguageSkill {
  name: string;
  level: string;
}

const languages: LanguageSkill[] = [
  { name: 'Indonesian', level: 'Native Speaker' },
  { name: 'English', level: 'Professional Working' },
];

const Skills: React.FC = () => {
  const devSkillsDouble = [...devSkills, ...devSkills];
  const designToolsDouble = [...designTools, ...designTools];

  return (
    <section id="skills" className="py-24 px-6 overflow-hidden" aria-labelledby="skills-heading">
      <div className="max-w-5xl mx-auto">
        <div className="animate-on-scroll text-center mb-16">
          <p className="text-white font-medium text-sm mb-2 uppercase tracking-wider">Skills</p>
          <h2 id="skills-heading" className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Technologies I Work With
          </h2>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            I'm always learning new tools and technologies. Here's what I'm familiar with.
          </p>
        </div>

        <div className="animate-on-scroll mb-12" style={{ transitionDelay: '0.1s' }}>
          <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-white" aria-hidden="true" />
            Development
          </h3>
          <div className="relative">
            <ul className="flex overflow-hidden" aria-label="Development technologies">
              <div className="tech-carousel">
                {devSkillsDouble.map((skill, index) => (
                  <li
                    key={`${skill.name}-${index}`}
                    className="flex-shrink-0 px-5 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 hover:scale-105 cursor-default list-none"
                    style={{ backgroundColor: '#1E1E1E', minWidth: 'max-content' }}
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <img
                        src={skill.logo}
                        alt=""
                        className="w-6 h-6 object-contain"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-white font-medium">{skill.name}</span>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>

        <div className="animate-on-scroll mb-12" style={{ transitionDelay: '0.2s' }}>
          <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-white" aria-hidden="true" />
            Design Tools
          </h3>
          <div className="relative">
            <ul
              className="flex overflow-hidden"
              aria-label="Design tools"
            >
              <div
                className="flex gap-4"
                style={{ animation: 'scroll-left 20s linear infinite reverse' }}
              >
                {designToolsDouble.map((tool, index) => (
                  <li
                    key={`${tool.name}-${index}`}
                    className="flex-shrink-0 px-5 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 hover:scale-105 cursor-default list-none"
                    style={{ backgroundColor: '#1E1E1E', minWidth: 'max-content' }}
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <img
                        src={tool.logo}
                        alt=""
                        className="w-6 h-6 object-contain"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-white font-medium">{tool.name}</span>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>

        <div className="animate-on-scroll" style={{ transitionDelay: '0.3s' }}>
          <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-white" aria-hidden="true" />
            Languages
          </h3>
          <ul className="flex flex-wrap gap-4" aria-label="Language proficiencies">
            {languages.map((lang) => (
              <li
                key={lang.name}
                className="px-6 py-4 rounded-xl list-none"
                style={{ backgroundColor: '#1E1E1E' }}
              >
                <p className="text-white font-semibold">{lang.name}</p>
                <p className="text-gray-400 text-sm">{lang.level}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
