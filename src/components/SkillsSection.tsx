import React from 'react';
import { Code, Layout, Server, Database, Smartphone, Lightbulb } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: <Layout className="w-8 h-8 text-blue-500 dark:text-blue-400" />,
    skills: [
      { name: 'HTML', level: 92, category: 'Frontend' },
      { name: 'CSS', level: 90, category: 'Frontend' },
      { name: 'JavaScript', level: 70, category: 'Frontend' },
      { name: 'React', level: 60, category: 'Frontend' },
    ],
  },
  {
    name: 'Backend',
    icon: <Server className="w-8 h-8 text-blue-500 dark:text-blue-400" />,
    skills: [
      { name: 'Spring Boot', level: 88, category: 'Backend' },
      { name: 'Django', level: 85, category: 'Backend' },
      { name: 'Node.js', level: 60, category: 'Backend' },
      { name: 'Next.js', level: 60, category: 'Backend' },
    ],
  },
  {
    name: 'Database',
    icon: <Database className="w-8 h-8 text-blue-500 dark:text-blue-400" />,
    skills: [
      { name: 'MySQL', level: 85, category: 'Database' },
      { name: 'MongoDB', level: 80, category: 'Database' },
      { name: 'PostgreSQL', level: 75, category: 'Database' },
      
    ],
  },
  {
    name: 'Other',
    icon: <Lightbulb className="w-8 h-8 text-blue-500 dark:text-blue-400" />,
    skills: [
      { name: 'Data Structures', level: 70, category: 'Other' },
      { name: 'Git', level: 90, category: 'Other' },
      { name: 'UI/UX Design', level: 85, category: 'Other' },
      { name: 'AWS', level: 70, category: 'Other' },
    ],
  },
];

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
        <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%`, transition: 'width 1.5s ease-out' }}
        ></div>
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-500 dark:text-blue-400">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my technical abilities and expertise in various technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.name}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-3">
                  {category.name}
                </h3>
              </div>
              
              <div>
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
    My <span className="text-blue-500 dark:text-blue-400">Certifications</span>
  </h2>

  <br/>

  {/* Certification Images */}
  <div className="flex flex-wrap justify-center gap-6">
    <img src="src/components/3.png" alt="AWS CP Certificate" style={{ width: '17rem' }} className="rounded-lg shadow-lg" />
    <img src="src/components/4.png" alt="Redhat Certificate" style={{ width: '17rem' }} className="rounded-lg shadow-lg" />
    <img src="src/components/5.png" alt="Juniper Certificate" style={{ width: '17rem' }} className="rounded-lg shadow-lg" />
    <img src="src/components/6.png" alt="Frontend Certificate" style={{ width: '17rem' }} className="rounded-lg shadow-lg" />
  </div>
</div>

      </div>
    </section>
  );
};

export default SkillsSection;