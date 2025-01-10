import React from 'react';
import { ArrowRight, Calendar, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EventCardProps {
  event: {
    id: string;
    title: string;
    date: string;
    location: string;
    time: string;
    description: string;
    image: string;
  };
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
        <div className="mt-4 space-y-2">
          <p className="flex items-center text-gray-600">
            <Calendar className="h-5 w-5 mr-2" />
            <span>{event.date}</span>
          </p>
          <p className="flex items-center text-gray-600">
            <MapPin className="h-5 w-5 mr-2" />
            <span>{event.location}</span>
          </p>
          <p className="flex items-center text-gray-600">
            <Clock className="h-5 w-5 mr-2" />
            <span>{event.time}</span>
          </p>
        </div>
        <p className="mt-4 text-gray-600 line-clamp-2">{event.description}</p>
        <Link 
          to={`/event/${event.id}`}
          className="mt-6 inline-flex items-center justify-center w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Register Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default EventCard;