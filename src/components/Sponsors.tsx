'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const sponsors = [
  {
    name: 'Hitchki',
    logo: '/sponsor/Hitchki.png'
  },
  {
    name: 'Kukreja Infra',
    logo: '/sponsor/Kukreja In.png'
  },
  {
    name: 'Micro World',
    logo: '/Sponsor/Micro World.png'
  },
  {
    name: 'ML Nagpur',
    logo: '/Sponsor/ML Nagpur.png'
  },
  {
    name: 'Nanik Group',
    logo: '/Sponsor/Nanik Group.png'
  },
  {
    name: 'Provincial Group',
    logo: '/Sponsor/Provincial Group.png'
  },
  {
    name: 'Silver System',
    logo: '/Sponsor/Silver System.png'
  },
  {
    name: 'THM Nagpur',
    logo: '/Sponsor/THM Nagpur.png'
  },
  {
    name: 'Urban Nature',
    logo: '/Sponsor/Urban Nature.png'
  },

];

const Sponsors = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Sponsors</h2>
          <p className="mt-4 text-lg text-gray-400">Proud to be supported by Them in our Past Events </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={1000}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="sponsor-slider"
        >
          {sponsors.map((sponsor, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center p-8 h-40 bg-white rounded-lg">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-full w-auto object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Sponsors;

