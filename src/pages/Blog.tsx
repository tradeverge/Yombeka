import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogProps {
  onNavigate: (page: string, blogId?: number) => void;
}

export default function Blog({ onNavigate }: BlogProps) {
  const posts = [
    {
      id: 1,
      title: 'Sustainable Construction Practices in Uganda',
      excerpt: 'Exploring eco-friendly building methods that are transforming the construction industry in East Africa.',
      author: 'David Musoke',
      date: 'Nov 15, 2024',
      category: 'Sustainability',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg',
    },
    {
      id: 2,
      title: 'Modern Office Building Design Trends',
      excerpt: 'How contemporary architecture is reshaping commercial spaces for better productivity and employee wellbeing.',
      author: 'Grace Nakimera',
      date: 'Nov 10, 2024',
      category: 'Design',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
    },
    {
      id: 3,
      title: 'Infrastructure Development in East Africa',
      excerpt: 'The role of modern construction in connecting communities and driving economic growth.',
      author: 'Robert Ouma',
      date: 'Nov 5, 2024',
      category: 'Infrastructure',
      image: 'https://images.pexels.com/photos/1106476/pexels-photo-1106476.jpeg',
    },
    {
      id: 4,
      title: 'Safety First: Construction Site Management',
      excerpt: 'Best practices and protocols for maintaining safety standards on construction sites.',
      author: 'Susan Akiror',
      date: 'Oct 28, 2024',
      category: 'Safety',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
    },
    {
      id: 5,
      title: 'The Future of Smart Buildings',
      excerpt: 'How IoT and automation are revolutionizing building management and energy efficiency.',
      author: 'David Musoke',
      date: 'Oct 20, 2024',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg',
    },
    {
      id: 6,
      title: 'Affordable Housing Solutions',
      excerpt: 'Innovative approaches to delivering quality housing at accessible price points.',
      author: 'Grace Nakimera',
      date: 'Oct 15, 2024',
      category: 'Housing',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
    },
  ];

  return (
    <div className="pt-16">
      <section className="relative h-96 bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg"
            alt="Blog"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-xl text-gray-300">Insights, Updates & Industry News</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                onClick={() => onNavigate('blogpost', post.id)}
                className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>

                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
