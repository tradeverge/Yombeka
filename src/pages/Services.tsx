import { Building2, HardHat, Home, Wrench, Briefcase, FileCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Commercial Construction',
      desc: 'Office buildings, shopping malls, hotels, and business complexes built to the highest standards.',
      features: ['Office Buildings', 'Shopping Centers', 'Hotels & Resorts', 'Business Parks'],
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg'
    },
    {
      icon: HardHat,
      title: 'Infrastructure Development',
      desc: 'Roads, bridges, highways, and public infrastructure projects that connect communities.',
      features: ['Road Construction', 'Bridge Building', 'Drainage Systems', 'Public Works'],
      image: 'https://images.pexels.com/photos/1106476/pexels-photo-1106476.jpeg'
    },
    {
      icon: Home,
      title: 'Residential Projects',
      desc: 'Quality homes, apartments, and housing estates designed for modern living.',
      features: ['Single Family Homes', 'Apartment Complexes', 'Housing Estates', 'Luxury Villas'],
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg'
    },
    {
      icon: Wrench,
      title: 'Renovation & Remodeling',
      desc: 'Complete restoration, modernization, and transformation of existing structures.',
      features: ['Interior Renovation', 'Facade Restoration', 'Space Optimization', 'Modern Upgrades'],
      image: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg'
    },
    {
      icon: Briefcase,
      title: 'Project Management',
      desc: 'End-to-end project coordination ensuring timely delivery and budget compliance.',
      features: ['Project Planning', 'Cost Management', 'Quality Control', 'Timeline Coordination'],
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg'
    },
    {
      icon: FileCheck,
      title: 'Construction Consulting',
      desc: 'Expert advisory services for construction planning, feasibility, and optimization.',
      features: ['Feasibility Studies', 'Design Review', 'Cost Estimation', 'Technical Advisory'],
      image: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg'
    },
  ];

  return (
    <div className="pt-16">
      <section className="relative h-96 bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
            alt="Services"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-gray-300">Comprehensive Construction Solutions</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From concept to completion, we provide comprehensive construction services tailored to meet your specific needs and exceed your expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-blue-900" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>

                  <div className="space-y-2">
                    {service.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button className="mt-6 w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Every project is unique. Let's discuss your specific requirements and create a tailored solution that meets your goals.
            </p>
            <button className="px-8 py-4 bg-yellow-400 text-gray-900 hover:bg-yellow-500 rounded-lg font-bold transition-all transform hover:scale-105">
              Request Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
