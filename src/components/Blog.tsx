import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const blogs = [
  {
    id: 'ai-future',
    title: 'The Future of AI in Education',
    date: 'March 1, 2024',
    author: 'John Doe',
    excerpt: 'Exploring how artificial intelligence is transforming the educational landscape...',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1470&h=800',
    category: 'Technology'
  },
  {
    id: 'web3-revolution',
    title: 'Web3: The Next Internet Revolution',
    date: 'February 28, 2024',
    author: 'Jane Smith',
    excerpt: 'Understanding the decentralized future of the internet and its implications...',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1470&h=800',
    category: 'Blockchain'
  },
  {
    id: 'cybersecurity-trends',
    title: '2024 Cybersecurity Trends',
    date: 'February 25, 2024',
    author: 'Mike Johnson',
    excerpt: 'Key cybersecurity trends that will shape the digital landscape in 2024...',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1470&h=800',
    category: 'Security'
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Latest Insights</h2>
          <p className="mt-4 text-lg text-gray-400">Stay updated with our latest articles and research</p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <Link to={`/blog/${blog.id}`} className="block">
                <div className="relative h-64 overflow-hidden rounded-xl">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <span className="absolute top-4 right-4 bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                </div>
                <div className="relative mt-4">
                  <div className="flex items-center text-gray-400 text-sm mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {blog.date}
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="mt-2 text-gray-400 line-clamp-2">{blog.excerpt}</p>
                  <div className="mt-4 flex items-center text-blue-400 group-hover:text-blue-300">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;