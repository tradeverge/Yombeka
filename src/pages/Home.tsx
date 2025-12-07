import { Building2, HardHat, Wrench, Users, Award, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HomeProps {
  onNavigate: (page: string, projectId?: number) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCounters(prev => ({
        projects: prev.projects < 250 ? prev.projects + 5 : 250,
        clients: prev.clients < 180 ? prev.clients + 3 : 180,
        years: prev.years < 15 ? prev.years + 1 : 15,
      }));
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const projects = [
    { id: 1, title: 'Pearl Trade Center', category: 'Commercial', image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg' },
    { id: 2, title: 'Kampala Highway', category: 'Infrastructure', image: 'https://images.pexels.com/photos/1106476/pexels-photo-1106476.jpeg' },
    { id: 3, title: 'Garden City Mall', category: 'Retail', image: 'https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg' },
  ];

  const testimonials = [
    { name: 'John Okello', position: 'CEO, Pearl Investments', text: 'Yombeka delivered our project on time and within budget. Outstanding quality!' },
    { name: 'Sarah Nakato', position: 'Director, KCCA', text: 'Professional, reliable, and committed to excellence. Highly recommended!' },
  ];

  return (
    <div className="pt-16">
      <section className="relative h-screen overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-gray-900/95 z-10"></div>
          <img
            src="https://images.pexels.com/photos/1083923/pexels-photo-1083923.jpeg"
            alt="Construction"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Building Uganda's Future
                  <span className="block text-yellow-400">With Excellence</span>
                </h1>
                <p className="text-xl mb-8 text-gray-300">
                  Premier construction solutions for commercial, residential, and infrastructure projects across East Africa.
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => onNavigate('projects')}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg font-bold transition-all transform hover:scale-105"
                  >
                    View Projects
                  </button>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-8 py-4 bg-yellow-400 text-gray-900 hover:bg-yellow-500 rounded-lg font-bold transition-all transform hover:scale-105"
                  >
                    Get Quote
                  </button>
                </div>
              </div>

              <div className="relative hidden md:block">
                <div className="relative w-full h-96 perspective-1000">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-yellow-400/20 rounded-xl transform rotate-6 animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-blue-700/30 to-yellow-500/30 rounded-xl transform -rotate-6 animate-pulse delay-150"></div>
                  <div className="relative bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-white/20">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-blue-600/50 p-6 rounded-lg transform hover:scale-105 transition-transform">
                        <Building2 className="w-12 h-12 mb-3 text-yellow-400" />
                        <div className="text-3xl font-bold">{counters.projects}+</div>
                        <div className="text-sm text-gray-300">Projects Done</div>
                      </div>
                      <div className="bg-yellow-400/50 p-6 rounded-lg transform hover:scale-105 transition-transform">
                        <Users className="w-12 h-12 mb-3 text-blue-900" />
                        <div className="text-3xl font-bold text-blue-900">{counters.clients}+</div>
                        <div className="text-sm text-blue-900">Happy Clients</div>
                      </div>
                      <div className="bg-yellow-400/50 p-6 rounded-lg transform hover:scale-105 transition-transform col-span-2">
                        <Award className="w-12 h-12 mb-3 text-blue-900 mx-auto" />
                        <div className="text-3xl font-bold text-center text-blue-900">{counters.years}+</div>
                        <div className="text-sm text-blue-900 text-center">Years Experience</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Building2, title: 'Commercial Building', desc: 'Modern office complexes and business centers' },
              { icon: HardHat, title: 'Infrastructure', desc: 'Roads, bridges, and public works projects' },
              { icon: Wrench, title: 'Renovation', desc: 'Complete restoration and modernization' },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-xl border-2 border-gray-200 hover:border-blue-600 transition-all hover:shadow-xl transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Building Excellence Since 2009
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Yombeka Construction Company is Uganda's trusted construction partner, delivering innovative solutions across commercial, residential, and infrastructure sectors. With over 15 years of experience, we've completed 250+ projects that stand as testaments to our commitment to quality and excellence.
              </p>
              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all"
              >
                Learn More About Us
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg"
                alt="Team"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold text-blue-900">15+</div>
                <div className="text-sm text-blue-900">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Featured Projects</h2>
            <p className="text-gray-600">Explore our portfolio of successful construction projects</p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {projects.map((project) => (
                  <div key={project.id} className="w-full flex-shrink-0 px-2">
                    <div
                      className="relative h-96 rounded-xl overflow-hidden cursor-pointer group"
                      onClick={() => onNavigate('project', project.id)}
                    >
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent flex items-end p-8">
                        <div className="text-white">
                          <div className="text-yellow-400 text-sm font-bold mb-2">{project.category}</div>
                          <h3 className="text-2xl font-bold">{project.title}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-blue-600" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1))}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-all"
            >
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose Yombeka</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: 'Quality Assurance', desc: 'ISO certified processes' },
              { icon: Users, title: 'Expert Team', desc: 'Skilled professionals' },
              { icon: TrendingUp, title: 'On-Time Delivery', desc: '98% completion rate' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-10 h-10 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Client Testimonials</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-xl">
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mr-4"></div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-blue-100">Let's build something amazing together</p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-yellow-400 text-gray-900 hover:bg-yellow-500 rounded-lg font-bold transition-all transform hover:scale-105"
          >
            Get Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
