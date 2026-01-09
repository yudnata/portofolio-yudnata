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
import ReactLogo from '../assets/logo/React.png';
import PostmanLogo from '../assets/logo/postman.png';
import CSSLogo from '../assets/logo/css.png';
import TypeScriptLogo from '../assets/logo/TypeScript.png';
import DockerLogo from '../assets/logo/docker.png';

const frontendSkills: Skill[] = [
  { name: 'React', logo: ReactLogo },
  { name: 'TypeScript', logo: TypeScriptLogo },
  { name: 'JavaScript', logo: JavaScriptLogo },
  { name: 'HTML', logo: HTML5Logo },
  { name: 'CSS', logo: CSSLogo },
  { name: 'Tailwind', logo: TailwindLogo },
  { name: 'WordPress', logo: WordPressLogo },
];

const backendSkills: Skill[] = [
  { name: 'Node.js', logo: NodeLogo },
  { name: 'Express', logo: ExpressLogo },
  { name: 'Python', logo: PythonLogo },
  { name: 'MySQL', logo: MySQLLogo },
  { name: 'PostgreSQL', logo: PostgreSQLLogo },
  { name: 'MongoDB', logo: MongoDBLogo },
  { name: 'Postman', logo: PostmanLogo },
];

const devOpsSkills: Skill[] = [
  { name: 'Docker', logo: DockerLogo },
  { name: 'Git', logo: GitLogo },
];

const designSkills: Skill[] = [
  { name: 'Figma', logo: FigmaLogo },
  { name: 'Canva', logo: CanvaLogo },
  { name: 'Photoshop', logo: PhotoshopLogo },
  { name: 'Illustrator', logo: IllustratorLogo },
  { name: 'Premiere', logo: PremiereLogo },
];

interface LanguageSkill {
  name: string;
  level: string;
}

const languages: LanguageSkill[] = [
  { name: 'Indonesian', level: 'Native Speaker' },
  { name: 'English', level: 'Professional Working' },
];

const SkillCard = ({
  title,
  skills,
  className = '',
}: {
  title: string;
  skills: Skill[];
  className?: string;
}) => (
  <div
    className={`p-6 rounded-3xl bg-[#1E1E1E] hover:border-white/10 transition-all duration-300 group ${className}`}
  >
    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
      <span className="w-1 h-6 bg-white rounded-full"></span>
      {title}
    </h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#2C2C2C] border border-transparent group-hover:border-white/10 transition-all duration-300"
        >
          <img
            src={skill.logo}
            alt=""
            className="w-5 h-5 object-contain"
          />
          <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="animate-on-scroll mb-10 max-w-2xl">
          <h2
            id="skills-heading"
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Technologies I Work With
          </h2>
          <p className="text-gray-300 text-lg">
            A curated stack of tools and technologies I use to build scalable applications.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-on-scroll"
          style={{ transitionDelay: '0.1s' }}
        >
          {/* Frontend */}
          <SkillCard
            title="Frontend Development"
            skills={frontendSkills}
            className="md:col-span-1 md:row-span-2 h-full"
          />

          {/* Backend */}
          <SkillCard
            title="Backend Development"
            skills={backendSkills}
            className="md:col-span-2"
          />

          {/* DevOps & Design */}
          <SkillCard
            title="Design Tools"
            skills={designSkills}
            className="md:col-span-1"
          />
          <SkillCard
            title="DevOps"
            skills={devOpsSkills}
            className="md:col-span-1"
          />
        </div>

        {/* Languages */}
        <div
          className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 animate-on-scroll"
          style={{ transitionDelay: '0.2s' }}
        >
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="p-6 rounded-3xl bg-[#1E1E1E]  flex items-center justify-between hover:border-white/10 transition-all duration-300"
            >
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{lang.name}</h3>
                <p className="text-gray-400 text-sm">{lang.level}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#2C2C2C] flex items-center justify-center text-white font-bold">
                {lang.name.substring(0, 2).toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
