import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';

interface BlogPostProps {
  blogId: number;
  onNavigate: (page: string) => void;
}

export default function BlogPost({ blogId, onNavigate }: BlogPostProps) {
  const post = {
    title: 'Sustainable Construction Practices in Uganda',
    author: 'David Musoke',
    date: 'November 15, 2024',
    category: 'Sustainability',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg',
    content: [
      {
        heading: 'Introduction',
        text: 'The construction industry in Uganda is experiencing a significant transformation as sustainable building practices become increasingly important. As environmental concerns grow and resources become more precious, construction companies are adopting eco-friendly methods that benefit both the environment and their bottom line.'
      },
      {
        heading: 'Why Sustainable Construction Matters',
        text: 'Sustainable construction goes beyond just environmental benefits. It encompasses economic advantages, social responsibility, and long-term value creation. Buildings constructed with sustainable practices consume less energy, reduce waste, and provide healthier spaces for occupants while significantly lowering operational costs over their lifetime.'
      },
      {
        heading: 'Key Sustainable Practices',
        text: 'At Yombeka Construction, we have implemented several sustainable practices including: use of locally sourced materials to reduce carbon footprint, integration of renewable energy systems like solar panels, implementation of water conservation systems, waste management and recycling programs, and energy-efficient building designs that maximize natural lighting and ventilation.'
      },
      {
        heading: 'Impact on the Industry',
        text: 'The adoption of sustainable construction practices is reshaping the industry in Uganda. Clients are increasingly requesting green building certifications, and we are seeing a growing appreciation for buildings that minimize environmental impact while providing superior comfort and lower operating costs.'
      },
      {
        heading: 'Looking Ahead',
        text: 'The future of construction in Uganda is undoubtedly green. As technology advances and awareness grows, we expect to see even more innovative sustainable solutions emerge. At Yombeka, we remain committed to leading this transformation and delivering projects that meet the highest environmental standards.'
      }
    ]
  };

  const relatedPosts = [
    {
      id: 2,
      title: 'Modern Office Building Design Trends',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
    },
    {
      id: 5,
      title: 'The Future of Smart Buildings',
      image: 'https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg',
    },
  ];

  return (
    <div className="pt-16">
      <section className="relative h-96 bg-gray-900">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-gray-900/90"></div>
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <button
              onClick={() => onNavigate('blog')}
              className="flex items-center text-white mb-6 hover:text-yellow-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </button>

            <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{post.title}</h1>

            <div className="flex items-center text-white space-x-6">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            {post.content.map((section, idx) => (
              <div key={idx} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
                <p className="text-gray-700 leading-relaxed">{section.text}</p>
              </div>
            ))}
          </article>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
              <Share2 className="w-5 h-5" />
              <span>Share this article</span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {relatedPosts.map((related) => (
              <div
                key={related.id}
                onClick={() => onNavigate('blogpost', related.id)}
                className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {related.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
