import { Target, Eye, Users, Award, TrendingUp, Shield } from 'lucide-react';

export default function About() {
  const team = [
    { name: 'David Musoke', role: 'CEO & Founder', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' },
    { name: 'Grace Nakimera', role: 'Chief Engineer', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' },
    { name: 'Robert Ouma', role: 'Project Manager', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg' },
    { name: 'Susan Akiror', role: 'Head of Operations', image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg' },
  ];

  const values = [
    { icon: Shield, title: 'Safety First', desc: 'Zero-compromise approach to workplace safety' },
    { icon: Award, title: 'Quality Excellence', desc: 'Delivering superior craftsmanship' },
    { icon: Users, title: 'Client Focus', desc: 'Your vision, our mission' },
    { icon: TrendingUp, title: 'Innovation', desc: 'Modern solutions for construction' },
  ];

  return (
    <div className="pt-16">
      <section className="relative h-96 bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg"
            alt="About"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">About Yombeka</h1>
            <p className="text-xl text-gray-300">Building Uganda's Future Since 2009</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Who We Are</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Yombeka Construction Company is Uganda's premier construction firm, specializing in commercial, residential, and infrastructure development. Founded in 2009, we've grown from a small local contractor to one of East Africa's most trusted construction partners.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to excellence, innovation, and client satisfaction has earned us a reputation for delivering projects that exceed expectations. With a team of over 200 skilled professionals and state-of-the-art equipment, we're equipped to handle projects of any scale.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
                alt="Company"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-10 rounded-xl text-white">
              <Target className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-blue-100">
                To deliver innovative, sustainable, and high-quality construction solutions that transform communities and create lasting value for our clients, while maintaining the highest standards of safety and environmental responsibility.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-10 rounded-xl text-gray-900">
              <Eye className="w-12 h-12 text-blue-900 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-800">
                To be East Africa's most respected and innovative construction company, recognized for our commitment to excellence, sustainability, and positive impact on the communities we serve.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {values.map((value, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-10 h-10 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center">Meet Our Team</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {team.map((member, idx) => (
                <div key={idx} className="group">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '250+', label: 'Completed Projects' },
              { number: '180+', label: 'Happy Clients' },
              { number: '15+', label: 'Years Experience' },
              { number: '200+', label: 'Team Members' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
