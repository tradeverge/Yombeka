import { useState } from 'react';
import { MapPin, Calendar } from 'lucide-react';

interface ProjectsProps {
  onNavigate: (page: string, projectId?: number) => void;
}

export default function Projects({ onNavigate }: ProjectsProps) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Commercial', 'Infrastructure', 'Residential', 'Retail'];

  const projects = [
    {
      id: 1,
      title: 'Pearl Trade Center',
      category: 'Commercial',
      location: 'Kampala Central',
      year: '2023',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      desc: '15-story modern office complex with sustainable design features'
    },
    {
      id: 2,
      title: 'Kampala-Entebbe Highway',
      category: 'Infrastructure',
      location: 'Kampala - Entebbe',
      year: '2022',
      image: 'https://images.pexels.com/photos/1106476/pexels-photo-1106476.jpeg',
      desc: '45km highway with modern drainage and lighting systems'
    },
    {
      id: 3,
      title: 'Garden City Mall',
      category: 'Retail',
      location: 'Kampala',
      year: '2023',
      image: 'https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg',
      desc: 'Modern shopping complex with 100+ retail spaces'
    },
    {
      id: 4,
      title: 'Kololo Heights Residences',
      category: 'Residential',
      location: 'Kololo',
      year: '2023',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      desc: 'Luxury apartment complex with 80 units'
    },
    {
      id: 5,
      title: 'Nakawa Business Park',
      category: 'Commercial',
      location: 'Nakawa',
      year: '2022',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
      desc: 'Mixed-use development with offices and retail'
    },
    {
      id: 6,
      title: 'Mbarara Bridge',
      category: 'Infrastructure',
      location: 'Mbarara',
      year: '2021',
      image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg',
      desc: '250m cable-stayed bridge over the Rwizi River'
    },
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-16">
      <section className="relative h-96 bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
            alt="Projects"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Our Projects</h1>
            <p className="text-xl text-gray-300">Building Excellence Across Uganda</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  filter === cat
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onNavigate('project', project.id)}
                className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
                    {project.category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.desc}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.year}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Have a Project in Mind?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our expertise and dedication.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 rounded-lg font-bold transition-all transform hover:scale-105"
          >
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
}
