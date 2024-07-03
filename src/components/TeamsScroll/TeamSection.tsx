import React from "react";
import TeamMember from "./TeamMember";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    image:
      "https://images.unsplash.com/photo-1603415526960-fb3a72d51ca6?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1603415526960-fb3a72d51ca6?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Mike Johnson",
    role: "Lead Developer",
    image:
      "https://images.unsplash.com/photo-1603415526960-fb3a72d51ca6?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-inherit py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">Meet Our Team</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
