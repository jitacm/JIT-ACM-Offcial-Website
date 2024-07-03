import React from "react";
import Link from "next/link";

const TeamMember = ({ name, role, image, link }) => {
  return (
    <div className="mx-4 my-8 transform overflow-hidden rounded-xl bg-gray-400/20 shadow-lg shadow-gray-400 backdrop-blur transition duration-300 ease-in-out hover:scale-105">
      <Link href={link}>
        <img
          className="h-56 w-full object-cover object-center"
          src={image}
          alt={name}
        />
        <div className="p-4">
          <h3 className="mb-2 text-lg font-bold">{name}</h3>
          <p className="mb-2 text-gray-200">{role}</p>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            imperdiet bibendum.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default TeamMember;
