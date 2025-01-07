import React from 'react';
import { Code2, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/your-org', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/company/your-org', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/your-org', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/your-org', label: 'Instagram' }
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Code2 className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold">JIT ACM</span>
            </div>
            <p className="mt-4 text-gray-400">
              Empowering students through technology, innovation, and collaboration. Join us in our journey to explore the vast world of computing.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#events" className="text-gray-400 hover:text-white transition-colors">Events</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white transition-colors">Team</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Newsletter</a></li>
              <li><a href="https://www.acm.org/membership/join" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Join ACM</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} JIT ACM Student Chapter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;