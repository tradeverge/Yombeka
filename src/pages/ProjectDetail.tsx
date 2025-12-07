import { MapPin, Calendar, DollarSign, Users, ArrowLeft } from 'lucide-react';

interface ProjectDetailProps {
  projectId: number;
  onNavigate: (page: string) => void;
}

export default function ProjectDetail({ projectId, onNavigate }: ProjectDetailProps) {
  const project = {
    title: 'Pearl Trade Center',
    category: 'Commercial',
    location: 'Kampala Central, Uganda',
    year: '2023',
    duration: '18 months',
    value: '$12.5 Million',
    client: 'Pearl Investments Ltd',
    desc: 'A landmark 15-story commercial building in the heart of Kampala, featuring modern sustainable design, state-of-the-art facilities, and energy-efficient systems. The project includes office spaces, retail areas, and underground parking for 200+ vehicles.',
    images: [
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
      'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg',
      'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg',
    ],
    features: [
      'LEED Gold Certified Design',
      'Solar Power Integration',
      'Smart Building Management System',
      'High-Speed Elevators',
      'Modern HVAC System',
      'Underground Parking',
    ],
    challenges: [
      'Complex foundation work in urban setting',
      'Integration of sustainable technologies',
      'Coordination with city infrastructure',
    ],
  };

  return (
    <div className="pt-16">
      <section className="relative h-screen bg-gray-900">
        <div className="absolute inset-0">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-gray-900/90"></div>
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <button
              onClick={() => onNavigate('projects')}
              className="flex items-center text-white mb-8 hover:text-yellow-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Projects
            </button>

            <div className="text-white max-w-3xl">
              <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-bold mb-4">
                {project.category}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">{project.title}</h1>
              <p className="text-xl text-gray-300 mb-8">{project.desc}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="flex items-center text-yellow-400 mb-2">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="font-bold">Location</span>
                  </div>
                  <p className="text-sm">{project.location}</p>
                </div>
                <div>
                  <div className="flex items-center text-yellow-400 mb-2">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span className="font-bold">Completed</span>
                  </div>
                  <p className="text-sm">{project.year}</p>
                </div>
                <div>
                  <div className="flex items-center text-yellow-400 mb-2">
                    <DollarSign className="w-5 h-5 mr-2" />
                    <span className="font-bold">Value</span>
                  </div>
                  <p className="text-sm">{project.value}</p>
                </div>
                <div>
                  <div className="flex items-center text-yellow-400 mb-2">
                    <Users className="w-5 h-5 mr-2" />
                    <span className="font-bold">Client</span>
                  </div>
                  <p className="text-sm">{project.client}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Project Overview</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The Pearl Trade Center represents a new standard in commercial construction in Uganda. This ambitious project combines modern architecture with sustainable building practices, creating a landmark structure that serves the needs of businesses while minimizing environmental impact.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team successfully delivered this complex project on schedule and within budget, overcoming numerous technical challenges through innovative engineering solutions and meticulous project management.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Key Features</h3>
              <div className="space-y-3">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Project Gallery</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.images.map((image, idx) => (
                <div key={idx} className="relative h-96 rounded-xl overflow-hidden group">
                  <img
                    src={image}
                    alt={`Project view ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Project Challenges & Solutions</h2>
            <div className="space-y-4">
              {project.challenges.map((challenge, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">{idx + 1}</span>
                  </div>
                  <p className="text-gray-700 pt-1">{challenge}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Interested in Similar Projects?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss how we can bring your construction vision to life with the same level of excellence.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-yellow-400 text-gray-900 hover:bg-yellow-500 rounded-lg font-bold transition-all transform hover:scale-105"
          >
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
}
