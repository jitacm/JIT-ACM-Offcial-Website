import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, Award } from 'lucide-react';

const EventDetails = () => {
  const { id } = useParams();
  
  // In a real app, fetch event details based on ID
  const event = {
    id: 'annual-hackathon-2024',
    title: 'Annual Hackathon',
    date: 'March 15-16, 2024',
    location: 'JIT Campus',
    time: '48 Hours',
    description: 'Join us for an exciting 48-hour coding marathon where innovation meets technology. Work with like-minded individuals, learn from industry experts, and build something amazing!',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1470&h=800',
    highlights: [
      '₹10,000 Prize Pool',
      'Industry Mentors',
      'Free Sticker & Accommodation',
      'Networking Opportunities',
    ],
    schedule: [
      { time: '9:00 AM', day: 'Day 1', activity: 'Registration & Team Formation' },
      { time: '10:00 AM', day: 'Day 1', activity: 'Opening Ceremony' },
      { time: '11:00 AM', day: 'Day 1', activity: 'Hacking Begins' },
      { time: '9:00 AM', day: 'Day 1', activity: 'Project Submission' },
      { time: '2:00 PM', day: 'Day 1', activity: 'Project Presentations' },
      { time: '6:00 PM', day: 'Day 1', activity: 'Prize Distribution' },
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative h-96">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="text-4xl font-bold text-white mb-4">{event.title}</h1>
              <div className="flex flex-wrap gap-6 text-white">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{event.time}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-4">About the Event</h2>
                <p className="text-gray-600 leading-relaxed">{event.description}</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Event Schedule</h2>
                <div className="space-y-4">
                  {event.schedule.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0">
                        <div className="w-16 text-center">
                          <div className="text-sm font-semibold text-gray-600">{item.day}</div>
                          <div className="text-sm text-gray-500">{item.time}</div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Event Highlights</h3>
                  <ul className="space-y-4">
                    {event.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center">
                        <Award className="h-5 w-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/event/${id}/register`}
                    className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200"
                  >
                    Register Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EventDetails;