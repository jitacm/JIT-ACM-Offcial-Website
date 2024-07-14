import React from "react";
import TeamMember from "./TeamMember";

const teamMembers = [
  // Your team members data
  {
    name: "John Doe",
    role: "CEO",
    image:
      "images/aacm member/1.png",
    link: "https://www.linkedin.com/in/suraj-hemnani-b4623a251/",
  },
  {
    name: "Bhavesh Sukare ",
    role: "Chair",
    image:
      "images/aacm member/2.png",
    link: "https://www.linkedin.com/in/suraj-hemnani-b4623a251/",
  },
  {
    name: "Ayush Jagdhane ",
    role: "Vice Chair",
    image:
      "images/aacm member/ayush.jpg",
    link: "https://www.linkedin.com/in/suraj-hemnani-b4623a251/",
  },
  {
    name: "Rohan Nishad ",
    role: "Treasurer",
    image:
      "images/aacm member/rohan.jpg",
    link: "https://www.linkedin.com/in/suraj-hemnani-b4623a251/",
  },
  {
    name: "Anjali Ranglani",
    role: "Secretary",
    image:
      "images/aacm member/anjali.jpg",
    link: "https://www.linkedin.com/in/suraj-hemnani-b4623a251/",
  },
  {
    name: "Suraj Hemnani",
    role: "Webmaster",
    image:
      "images/aacm member/suraj.jpg",
    link: "https://www.linkedin.com/in/suraj-hemnani-b4623a251/",
  },
  {
    name: "Sanskruti Kokde",
    role: " Membership Chair",
    image:
      "images/aacm member/sanskruti.jpg",
    link: "https://www.linkedin.com/in/suraj-hemnani-b4623a251/",
  },
  {
    name: "Dhruv Thakur",
    role: "Event Manager ",
    image:
      "images/aacm member/dhruv.jpg",
    link: "https://www.linkedin.com/in/suraj-hemnani-b4623a251/",
  },
  {
    name: "Lukesh Kamwani",
    role: "Outreach Coordinator",
    image:
      "images/aacm member/lukesh.jpg",
    link: "https://www.linkedin.com/in/suraj-hemnani-b4623a251/",
  },
  {
    name: "Pranay Lohakare",
    role: "Junior Event Manager",
    image:
      "images/aacm member/pranay.jpg",
    link: "https://www.linkedin.com/in/suraj-hemnani-b4623a251/",
  },
  {
    name: "Piyush Dodke",
    role: "Technical Head",
    image:
      "images/aacm member/piyush.jpg",
    link: "https://www.linkedin.com/in/suraj-hemnani-b4623a251/",
  },
  {
    name: "Tina Wankhede",
    role: "Social Media Head",
    image:
      "images/aacm member/tina.jpg",
    link: "https://www.linkedin.com/in/suraj-hemnani-b4623a251/",
  },
  {
    name: "Tejaswini Punikar",
    role: "Junior Outreach Coordinator",
    image:
      "images/aacm member/tejaswini.jpg",
    link: "https://www.linkedin.com/in/suraj-hemnani-b4623a251/",
  },
  {
    name: "Walay Shelke",
    role: " Lead Designer",
    image:
      "images/aacm member/waley.jpg",
    link: "https://www.linkedin.com/in/suraj-hemnani-b4623a251/",
  },
  {
    name: "Shlok Wankhede",
    role: " Documentation Incharge",
    image:
      "images/aacm member/shlok.jpg",
    link: "https://www.linkedin.com/in/suraj-hemnani-b4623a251/",
  },
];

const TeamSection = () => {
  const firstRowMembers = teamMembers.slice(0, 3);
  const remainingMembers = teamMembers.slice(3);

  return (
    <section className="bg-inherit py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">Meet Our Team</h2>
        {/* First row with 3 members */}
        <div className="grid grid-cols-3 gap-8">
          {firstRowMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              link={member.link}
            />
          ))}
        </div>
        {/* Subsequent rows with 4 members each */}
        <div className="mt-8 grid grid-cols-4 gap-8">
          {remainingMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              link={member.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
