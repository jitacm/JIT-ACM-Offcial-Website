import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogs = {
  'ai-future': {
    title: 'The Future of AI in Education',
    date: 'March 1, 2024',
    author: 'Team ACM',
    readTime: '5 min read',
    content: `
      <p>Artificial Intelligence is revolutionizing the way we learn and teach. From personalized learning paths to automated grading systems, AI is making education more accessible and effective than ever before.</p>
      
      <h2>The Impact of AI on Learning</h2>
      <p>AI-powered educational tools can adapt to each student's learning style and pace, providing a truly personalized learning experience. This technology can identify areas where students struggle and offer targeted support.</p>
      
      <h2>Key Benefits</h2>
      <ul>
        <li>Personalized learning experiences</li>
        <li>Immediate feedback and assessment</li>
        <li>24/7 access to learning resources</li>
        <li>Automated administrative tasks</li>
      </ul>
      
      <h2>Looking Ahead</h2>
      <p>As AI technology continues to evolve, we can expect even more innovative applications in education. Virtual reality classrooms, AI tutors, and advanced analytics will become commonplace in educational institutions.</p>
    `,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1470&h=800'
  },
  'web3-revolution': {
    title: 'Web3: The Next Internet Revolution',
    date: 'February 28, 2024',
    author: 'Team ACM',
    readTime: '7 min read',
    content: `
      <p>Web3 represents the next evolution of the internet, promising a more decentralized and user-centric digital experience.</p>
      
      <h2>Understanding Web3</h2>
      <p>Web3 combines blockchain technology, cryptocurrency, and decentralized protocols to create a new internet paradigm where users have more control over their data and digital assets.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Decentralized infrastructure</li>
        <li>Token-based economics</li>
        <li>User-owned data</li>
        <li>Trustless interactions</li>
      </ul>
      
      <h2>The Future of Web3</h2>
      <p>As Web3 technologies mature, we'll see more applications in areas like finance, gaming, social media, and digital identity management.</p>
    `,
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1470&h=800'
  }
};

const BlogPage = () => {
  const { id } = useParams();
  const blog = blogs[id as keyof typeof blogs];

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold">Blog post not found</h1>
          <Link to="/" className="text-blue-600 hover:underline">Return home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 py-12"
      >
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>

        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          src={blog.image}
          alt={blog.title}
          className="w-full h-[400px] object-cover rounded-2xl mb-8"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{blog.title}</h1>
          
          <div className="flex items-center space-x-6 text-gray-600 mb-8">
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              {blog.author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              {blog.date}
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              {blog.readTime}
            </div>
          </div>

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BlogPage;