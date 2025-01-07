import React from 'react';
import { Users, Calendar, Award, BookOpen } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Active Members', value: '15+' },
  { icon: Calendar, label: 'Events per Year', value: '10+' },
  { icon: Award, label: 'Sponsers', value: '8+' },
  { icon: BookOpen, label: 'Workshops', value: '7+' },
];

const About = () => {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            About JIT ACM Student Chapter
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We are a community of students dedicated to exploring the world of computing as a recognized chapter of the ACM.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="h-10 w-10 text-blue-600 mx-auto" />
              <p className="mt-6 text-4xl font-bold text-gray-900">{stat.value}</p>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;