import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Pet Adoption Management System',
    description: 'A full-featured online store with pets and accessories, shopping cart, and test payment processing.',
    image: './11.jpg',
    tags: ['HTML','CSS','Django', 'Python', 'Postgre SQL'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Enterprise Resource Planning (ERP)',
    description: 'Developed an ERP website to manage student records and administrative tasks, enhancing overall workflow.',
    image: './12.jpg',
    tags: ['JSP', 'CSS', 'SpringBoot', 'Java' , 'MySQL'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Agriculture Management System',
    description: 'A full-featured online store with a product catalog, shopping cart, and direct transactions from farmers to customers.',
    image: './16.jpg',
    tags: ['JSP', 'CSS', 'EJB','Java','MySQL'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Weather Forecasting App',
    description: 'Implemented real-time weather and temperature updates with location-based forecasting.',
    image: 'https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg',
    tags: ['HTML','CSS','Flask','Python', 'API'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Course Management System',
    description: 'Personalized features for creating, organizing, and tracking courses, assignments, and student progress in real-time.',
    image: './13.jpg',
    tags: ['JSP', 'CSS', 'SpringBoot', 'Java' , 'MySQL'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
          <div className="flex space-x-4">
            <a 
              href={project.demoUrl} 
              className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Demo"
            >
              <Eye size={20} />
            </a>
            <a 
              href={project.githubUrl}
              className="p-3 bg-gray-800 hover:bg-gray-900 text-white rounded-full transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <a 
          href={project.demoUrl}
          className="inline-flex items-center text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured' 
      ? projects.filter(project => project.featured)
      : projects.filter(project => project.tags.includes(filter));
  
  const filterOptions = [
    { value: 'all', label: 'All Projects' },
    { value: 'featured', label: 'Featured' },
    { value: 'React', label: 'React' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'MongoDB', label: 'MongoDB' },
    { value: 'Firebase', label: 'Firebase' },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-500 dark:text-blue-400">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ProjectsSection;