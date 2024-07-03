import React from "react";
import Image from "next/image";

const TeamMember = ({ name, role, image }) => {
  return (
    <div className="flex transform flex-col items-center p-4 transition-transform hover:scale-105">
      <Image
        className="h-32 w-32 rounded-full shadow-lg"
        src={image}
        alt={`${name}'s picture`}
        width={3000}
        height={3000}
      />
      <h3 className="mt-4 text-lg font-semibold">{name}</h3>
      <p className="text-gray-500">{role}</p>
    </div>
  );
};

export default TeamMember;
