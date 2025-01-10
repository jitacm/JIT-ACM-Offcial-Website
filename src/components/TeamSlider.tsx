import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Github, Linkedin, Mail } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const teamMembers = [
  {
    name: "Meher Bhawnani",
    role: "Faculty Coordinator",
    image: "./images/meher2.jpg",
    github: "https://github.com/Amritakungwani",
    linkedin: "https://www.linkedin.com/in/amrita-kungwani-b6934443/",
    email: "m.bhawnani@jitnagpur.edu.in"
  },
  {
    name: "Bhavesh Sukare",
    role: "Chair",
    image: "./images/bhavesh2.jpg",
    github: "https://github.com/CLOUDyy003",
    linkedin: "https://www.linkedin.com/in/bhavesh-s-603a27241/",
    email: "jitcse.bhavesh@gmail.com"
  },
  {
    name: "Ayush Jagdhane",
    role: "Vice Chair",
    image: "./images/ayush.jpg",
    github: "https://github.com/animex007",
    linkedin: "https://www.linkedin.com/in/ayush-jagdhane-528092241/",
    email: "ayushjagdhane7@gmail.com"
  },
  {
    name: "Rohan Nishad",
    role: "Treasurer",
    image: "./images/rohan.jpg",
    github: "https://github.com/rohansnishad",
    linkedin: "https://www.linkedin.com/in/rohan-nishad-4a79a5234/",
    email: "rohannishad704@gmail.com"
  },
  {
    name: "Anajali Ranglani",
    role: "Secretary",
    image: "./images/anjali.jpg",
    github: "https://github.com/Anjali0903",
    linkedin: "https://www.linkedin.com/in/anjali-ranglani-187ab8255/",
    email: "anjali.amr09@gmail.com"
  },
  {
    name: "Suraj Hemnani",
    role: "Web Master",
    image: "./images/suraj.jpg",
    github: "https://github.com/Surajh09",
    linkedin: "https://www.linkedin.com/in/suraj-hemnani-b4623a251/",
    email: "mailto:example@email.com"
  },
  {
    name: "Sanskruti Kokde",
    role: "Membership Chair ",
    image: "./images/sanskruti2.jpg",
    github: "https://github.com/sanskruti-kokde",
    linkedin: "",
    email: "mailto:example@email.com"
  },
  {
    name: "Dhruv Thakur",
    role: "Event Manager",
    image: "./images/dhruv.jpg",
    github: "#",
    linkedin: "#",
    email: "mailto:example@email.com"
  },
  {
    name: "Lukesh Kamwani",
    role: "Outreach Coordinator",
    image: "./images/lukesh.jpg",
    github: "#",
    linkedin: "#",
    email: "mailto:example@email.com"
  },
  {
    name: "Pranay Lohakare",
    role: "Junior Event Manager",
    image: "./images/pranay.jpg",
    github: "#",
    linkedin: "#",
    email: "mailto:example@email.com"
  },
  {
    name: "Piyush Dodke",
    role: "Technical Head",
    image: "./images/piyush.jpg",
    github: "#",
    linkedin: "#",
    email: "mailto:example@email.com"
  },
  {
    name: "Tina Wankhede",
    role: "Social Media Head",
    image: "./images/tina.jpg",
    github: "#",
    linkedin: "#",
    email: "mailto:example@email.com"
  },
  {
    name: "Tejaswini paunikar",
    role: "Junior Outreach Coordinator",
    image: "./images/tejaswani.jpg",
    github: "#",
    linkedin: "#",
    email: "mailto:example@email.com"
  },
  {
    name: "Waley Shelke",
    role: "Lead Designer",
    image: "./images/waley.jpg",
    github: "#",
    linkedin: "#",
    email: "mailto:example@email.com"
  },
  {
    name: "Shlok Wankhede",
    role: "Documentation Incharge",
    image: "./images/shlok.jpg",
    github: "#",
    linkedin: "#",
    email: "mailto:example@email.com"
  },
];

const TeamSlider = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Meet Our Team</h2>
          <p className="mt-4 text-lg text-gray-600">The passionate individuals behind JIT ACM Chapter</p>
        </div>
        
        <div className="mt-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            initialSlide={0}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="py-8"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                    <div className="mt-4 flex justify-center space-x-4">
                      <a href={member.github} className="text-gray-600 hover:text-blue-600">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href={member.linkedin} className="text-gray-600 hover:text-blue-600">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href={member.email} className="text-gray-600 hover:text-blue-600">
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TeamSlider;