import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import EventCard from './EventCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const upcomingEvents = [
  {
    id: 'coming-soon',
    title: 'Announcing Soon',
    date: '- 2025',
    location: 'JIT Campus',
    time: 'announcing soon',
    description: 'Cooming Soon',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1470&h=800',
  },
  {
    id: 'coming-soon-2',
    title: 'Announcing Soon',
    date: '- 2025',
    location: 'JIT Campus',
    time: 'announcing soon',
    description: 'Cooming Soon',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1470&h=800',
  },
  {
    id: 'coming-soon-3',
    title: 'Announcing Soon',
    date: '- 2025',
    location: 'JIT Campus',
    time: 'announcing soon',
    description: 'Cooming Soon',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1470&h=800',
  },
  
];

const pastEvents = [
  {
    id: 'Hackblitz-Season 1',
    title: 'Hackblitz- S1',
    date: 'March 15, 2024',
    location: 'JIT Campus',
    time: 'Completed',
    description: '7 hour coding marathon where innovation meets technology.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1470&h=800',
  },
  {
    id: 'Tech Symposium - 24',
    title: 'Tech Symposium - 24',
    date: 'March 16, 2024',
    location: 'JIT Campus',
    time: 'Completed',
    description: 'A Paper presentation expo where students showcase their research work.',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1470&h=800',
  },
  {
    id: '30Days devChallenge',
    title: '30 Days Dev Challenge',
    date: 'July 20, 2024',
    location: 'JIT Campus',
    time: 'Completed',
    description: 'An open source event using github, where student learn about open souce contribution.',
    image: '/eventP/mohammad-rahmani-7aIP3q4wCfY-unsplash.jpg',
  },
  {
    id: 'Github Masterclass',
    title: 'Github MasterClass',
    date: 'July 26, 2024',
    location: 'JIT Campus',
    time: 'Completed',
    description: 'Workshop on the Github and its basic features , and how to contribute on open source projects.',
    image: '/eventP/mohammad-rahmani-gA396xahf-Q-unsplash.jpg',
  },
  {
    id: 'Linux 101',
    title: 'Linux 101',
    date: 'October 22, 2024',
    location: 'JIT Campus',
    time: 'Completed',
    description: 'Workshop on the linux and its feature and it',
    image: '/eventP/gabriel-heinzer-xbEVM6oJ1Fs-unsplash.jpg',
  },
];

const Events = () => {
  const [showPastEvents, setShowPastEvents] = React.useState(false);

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {showPastEvents ? 'Past Events' : 'Upcoming Events'}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {showPastEvents ? 'Look back at our successful events' : 'Join us in our upcoming events and activities'}
          </p>
        </div>

        <div className="mt-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {(showPastEvents ? pastEvents : upcomingEvents).map((event) => (
              <SwiperSlide key={event.id}>
                <EventCard event={event} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => setShowPastEvents(!showPastEvents)}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all"
          >
            {showPastEvents ? 'View Upcoming Events' : 'View Past Events'}
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;